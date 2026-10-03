from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'public' / 'logo2.jpeg'
TARGET = ROOT / 'public' / 'logo2.png'


def linear_alpha(min_rgb: int) -> int:
    """Soft transparent cutoff for near-white pixels.

    245+ -> fully transparent
    205- -> fully opaque
    205..245 -> linear ramp to keep edge pixels smooth
    """
    if min_rgb >= 245:
        return 0
    if min_rgb <= 205:
        return 255
    return int(round(255 * (245 - min_rgb) / (245 - 205)))


def unpremultiply_against_white(r: int, g: int, b: int, alpha: int) -> tuple[int, int, int]:
    """Remove white contribution from semitransparent edge pixels."""
    if alpha <= 0:
        return 255, 255, 255
    if alpha >= 255:
        return r, g, b

    alpha_norm = alpha / 255.0
    white_weight = 1.0 - alpha_norm
    out = []
    for channel in (r, g, b):
        value = (channel - 255.0 * white_weight) / alpha_norm
        out.append(int(round(max(0, min(255, value)))))
    return out[0], out[1], out[2]


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(f'Missing source image: {SOURCE}')

    with Image.open(SOURCE) as img:
        rgba = img.convert('RGBA')
        width, height = rgba.size
        pixels = rgba.load()

        for y in range(height):
            for x in range(width):
                r, g, b, _ = pixels[x, y]
                min_rgb = min(r, g, b)
                if min_rgb >= 245:
                    pixels[x, y] = (255, 255, 255, 0)
                    continue
                if min_rgb <= 205:
                    continue

                alpha = linear_alpha(min_rgb)
                rr, gg, bb = unpremultiply_against_white(r, g, b, alpha)
                pixels[x, y] = (rr, gg, bb, alpha)

        bbox = rgba.getbbox()
        if bbox is None:
            raise ValueError('No visible pixels found in source image.')

        left, top, right, bottom = bbox
        pad = 8
        crop_box = (
            max(0, left - pad),
            max(0, top - pad),
            min(width, right + pad + 1),
            min(height, bottom + pad + 1),
        )
        rgba = rgba.crop(crop_box)
        rgba.save(TARGET, format='PNG')

    print(f'Created transparent PNG: {TARGET}')
    print(f'Image size: {rgba.size}')


if __name__ == '__main__':
    main()
