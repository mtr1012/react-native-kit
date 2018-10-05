/**
 * App Theme - Fonts
 */
import { Platform } from 'react-native';

function lineHeight(fontSize) {
  const multiplier = (fontSize > 20) ? 0.1 : 0.33;
  return parseInt(fontSize + (fontSize * multiplier), 10);
}

const base = {
  size: 14,
  lineHeight: lineHeight(14),

};

const black = {
  size: 14,
  lineHeight: lineHeight(14),

};

const book = {
  size: 14,
  lineHeight: lineHeight(14),

};

const heavy = {
  size: 14,
  lineHeight: lineHeight(14),

};

const light = {
  size: 14,
  lineHeight: lineHeight(14),

};

const medium = {
  size: 14,
  lineHeight: lineHeight(14),
};

export default {
  base: { ...base },
  black: { ...black },
  book: { ...book },
  heavy: { ...heavy },
  light: { ...light },
  medium: { ...medium },
  h1: { ...black, size: base.size * 1.75, lineHeight: lineHeight(base.size * 2) },
  h2: { ...black, size: base.size * 1.5, lineHeight: lineHeight(base.size * 1.75) },
  h3: { ...heavy, size: base.size * 1.25, lineHeight: lineHeight(base.size * 1.5) },
  h4: { ...base, size: base.size * 1.1, lineHeight: lineHeight(base.size * 1.25) },
  h5: { ...base },
  lineHeight: (fontSize) => lineHeight(fontSize),
}