// Colors
export const COLORS = {
  cream: '#EFE3C2',
  lime: '#85A947',
  primary: '#00782b',
  background: {
    light: '#EEEEEE',
    dark: '#123524'
  },
  foreground: {
    light: '#171717',
    dark: '#EEEEEE'
  }
} as const;

// Spacing
export const SPACING = {
  logoHeight: {
    base: 32, // h-16
    md: 40,   // h-20
    lg: 46   // h-36
  },
  textSize: {
    title: 'text-4xl',
    subtitle: 'text-2xl'
  },
  positioning: {
    nameOffset: {
      top: '10rem',
      right: '1rem'
    }
  }
} as const;

// Typography
export const TYPOGRAPHY = {
  fontFamilies: {
    youngSerif: 'font-young-serif-regular',
    notable: 'font-notable',
    optima: 'font-optima',
    limelight: 'font-limelight'
  }
} as const;

// Animation delays
export const ANIMATIONS = {
  slideInDelay: '0.6s'
} as const;

// Existing constant
export const BALL_LABEL = 'ball';
