import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iphone 6s's scale
const scalew = SCREEN_WIDTH / 375;
const scaleh = SCREEN_HEIGHT / 667;

console.log(" ----------------------------------------", "\n", "Width: ", SCREEN_WIDTH, "\n", "Height: ", SCREEN_HEIGHT, "\n", "----------------------------------------");

export function sizeH(size) {
  const newSize = size * scaleh;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function sizeW(size) {
  const newSize = size * scalew;
  //console.log(Math.round(PixelRatio.roundToNearestPixel(newSize)));
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}