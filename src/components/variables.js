/* Font sizes */
const perfectFourth = 1.333;
const augmentedFourth = 1.414;
const perfectFifth = 1.500;
const minFontSize = '1rem'; /* 16px */
const preferredFontSize = 'calc((#{strip-unit($min-font-size)} / #{strip-unit(100vw)}) * 100  * 1vw)';
const maxFontSize = '0.78125vw'; /* (16px / 2048 * 100) */

const h1 = 6;
const h2 = 5;
const h3 = 4;
const h4 = 3;
const h5 = 2;
const h6 = 1;
const small = 0.5;

// Fonts
export const fonts = {
  'stack': {
    'slabSerif': '"Roboto Slab", serif',
    'sansSerif': '"Lato", sans-serif',
    'serif': '"Prata", serif',
    'icons': 'Font Awesome 5 Free',
  },
  'sizes': {
    'h1': `clamp(${Math.pow(perfectFourth, h1) + 'rem'}, ${Math.pow(augmentedFourth, h1)  + 'vw'}, ${Math.pow(perfectFifth, h1) + 'rem'})`,
    'h2': `clamp(${Math.pow(perfectFourth, h2) + 'rem'}, ${Math.pow(augmentedFourth, h2)  + 'vw'}, ${Math.pow(perfectFifth, h2) + 'rem'})`,
    'h3': `clamp(${Math.pow(perfectFourth, h3) + 'rem'}, ${Math.pow(augmentedFourth, h3)  + 'vw'}, ${Math.pow(perfectFifth, h3) + 'rem'})`,
    'h4': `clamp(${Math.pow(perfectFourth, h4) + 'rem'}, ${Math.pow(augmentedFourth, h4)  + 'vw'}, ${Math.pow(perfectFifth, h4) + 'rem'})`,
    'h5': `clamp(${Math.pow(perfectFourth, h5) + 'rem'}, ${Math.pow(augmentedFourth, h5)  + 'vw'}, ${Math.pow(perfectFifth, h5) + 'rem'})`,
    'h6': `clamp(${Math.pow(perfectFourth, h6) + 'rem'}, ${Math.pow(augmentedFourth, h6)  + 'vw'}, ${Math.pow(perfectFifth, h6) + 'rem'})`,
    'small': `clamp(${Math.pow(perfectFourth, small) + 'rem'}, ${Math.pow(augmentedFourth, small) + 'vw'}, ${Math.pow(perfectFifth, small) + 'rem'})`,
  },
}

// Colors
export const colors = {
  'color': {
    'white': {
      'w_2': 'rgba(255, 255, 255, 0.2)',
      'w_5': 'rgba(255, 255, 255, 0.05)',
      'w_10': 'rgba(255, 255, 255, 0.1)',
      'w_20': 'rgba(255, 255, 255, 0.2)',
      'w_30': 'rgba(255, 255, 255, 0.3)',
      'w_100': 'rgba(255, 255, 255, 1)',
    },
    'black': {
      'b_2': 'rgba(0, 0, 0, 0.2)',
      'b_5': 'rgba(0, 0, 0, 0.05)',
      'b_10': 'rgba(0, 0, 0, 0.1)',
      'b_30': 'rgba(0, 0, 0, 0.3)',
      'b_80': 'rgba(0, 0, 0, 0.8)',
      'b_100': 'rgba(0, 0, 0, 1)',
    },
    'red': 'rgba(255,0,0,1)',
    'orange': 'rgba(255,59,0,1)',
    'green': 'rgba(1,213,0,1)',
    'turquoise': 'rgba(32,231,212,1)',
  },
  'gradient': {
    'session': 'linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,64,0,1) 100%);',
    'break': 'linear-gradient(0deg, rgba(1,213,0,1) 0%, rgba(32,231,212,1) 100%);',
  }
}

// Measurements
export const sizes = {
  'gapWidth': '1rem', // 16 px
  'hairlineWidth': '0.0625rem', // 1 px
  'borderWidth': '0.125rem', // 2 px
  'buttonBorderRadius': '0.3125rem', // 5 px
  'column_width': '4.236rem', // h3 height (67.776px)
}
