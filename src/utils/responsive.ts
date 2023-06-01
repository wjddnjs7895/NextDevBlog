export const WIDTH = screen.availWidth;
export const HEIGHT = screen.availHeight;
export const FIGMA_FRAME_WIDTH = 1280;
export const FIGMA_FRAME_HEIGHT = 832;

export function getPixelToPixel(size: number) {
  const scale = WIDTH / FIGMA_FRAME_WIDTH;
  const newSize = size * scale;

  const result = newSize.toFixed(2);
  return result + "px";
}

export function getPixelToNumber(size: string) {
  size.replace("px", "");
  return parseInt(size);
}

export const getWidthPixel = (width: number) => {
  const result = ((width / FIGMA_FRAME_WIDTH) * WIDTH).toFixed(2);
  return result + "px";
};

export const getHeightPixel = (height: number) => {
  const result = ((height / FIGMA_FRAME_HEIGHT) * HEIGHT).toFixed(2);
  return result + "px";
};
