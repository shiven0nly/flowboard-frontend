---
name: Executive Suite
colors:
  surface: '#001428'
  surface-dim: '#001428'
  surface-bright: '#213b56'
  surface-container-lowest: '#000f20'
  surface-container-low: '#001d36'
  surface-container: '#02213b'
  surface-container-high: '#0f2b46'
  surface-container-highest: '#1c3651'
  on-surface: '#d1e4ff'
  on-surface-variant: '#c4c6cc'
  inverse-surface: '#d1e4ff'
  inverse-on-surface: '#17324d'
  outline: '#8e9196'
  outline-variant: '#44474c'
  surface-tint: '#bac8dc'
  primary: '#bac8dc'
  on-primary: '#243141'
  primary-container: '#0d1b2a'
  on-primary-container: '#768497'
  inverse-primary: '#525f71'
  secondary: '#c6c7c3'
  on-secondary: '#2f312e'
  secondary-container: '#4a4c49'
  on-secondary-container: '#bbbcb8'
  tertiary: '#e0c1a0'
  on-tertiary: '#402d15'
  tertiary-container: '#271703'
  on-tertiary-container: '#997e60'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e4f9'
  primary-fixed-dim: '#bac8dc'
  on-primary-fixed: '#0f1c2c'
  on-primary-fixed-variant: '#3a4859'
  secondary-fixed: '#e2e3df'
  secondary-fixed-dim: '#c6c7c3'
  on-secondary-fixed: '#1a1c1a'
  on-secondary-fixed-variant: '#454745'
  tertiary-fixed: '#feddba'
  tertiary-fixed-dim: '#e0c1a0'
  on-tertiary-fixed: '#281804'
  on-tertiary-fixed-variant: '#584329'
  background: '#001428'
  on-background: '#d1e4ff'
  surface-variant: '#1c3651'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system is engineered for high-stakes productivity, evoking the atmosphere of a private members' club or a premium study. It targets executives and high-level professionals who value stability, tradition, and uncompromising quality. 

The aesthetic is **Modern Skeuomorphic**, blending the clarity of digital interfaces with the tactile prestige of physical materials. It utilizes a sophisticated interplay of deep matte surfaces, brushed metallic accents, and soft-lit depths. The UI should feel substantial, authoritative, and permanent, moving away from the "disposable" feel of flat design in favor of something that feels curated and enduring.

## Colors
The palette is built on a foundation of **Deep Royal Navy**, serving as the primary background and structural color to establish a sense of gravitas. 

- **Primary (Deep Royal Navy):** Used for the "canvas" and large container surfaces. 
- **Secondary (Warm Champagne):** Used for primary text and high-contrast foreground elements, providing a softer, more luxurious alternative to pure white.
- **Accent (Metallic Gold):** Reserved for primary calls to action, active states, and critical status indicators.
- **Neutral (Slate Blue):** Used for borders, disabled states, and secondary icons to provide subtle definition against the navy background without introducing harsh contrast.

## Typography
The system utilizes **Hanken Grotesk** to bridge the gap between classic editorial precision and modern digital legibility. 

Typography is treated with a hierarchy that favors clarity and space. Headlines use slightly tighter letter-spacing and heavier weights to command attention, while body text is given generous line height to ensure long-form tasks and notes are readable. Labels utilize uppercase styling and wider tracking to evoke the feel of stamped metal plates or formal stationery.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy for desktop to maintain a sense of controlled, architectural structure. Content should be centered within a maximum width container to prevent overly long line lengths.

The spacing rhythm is strictly based on an 8px base unit. 
- **Desktop:** 12-column grid with 24px gutters. 
- **Mobile:** 4-column fluid grid with 16px margins.
- **Rhythm:** Use large vertical paddings (48px+) between major sections to emphasize the prestigious, "un-crowded" nature of the interface.

## Elevation & Depth
Depth is achieved through **Skeuomorphic Realism** rather than traditional flat shadows. 

1.  **Inward Depth (Wells):** Input fields and secondary containers use inner shadows to appear recessed into the Navy surface, suggesting they are carved out of a solid material.
2.  **Outward Depth (Raised):** Cards and primary buttons use subtle gradients (Navy to slightly lighter Navy) and dual-layer shadows. The top layer is a sharp 1px highlight (Gold at 10% opacity) on the top edge to simulate a light source catching a metallic or polished rim.
3.  **Backdrop:** Use heavy background blurs (32px+) behind overlays to maintain the sense of a continuous, deep environment.

## Shapes
The shape language is disciplined and professional. We use **Rounded (8px)** corners for all standard components like buttons, inputs, and cards. This provides enough softness to be modern while remaining sharp enough to feel architectural and serious. 

Avoid full pill-shapes or extreme rounds, as they detract from the "executive" authority of the system.

## Components
- **Buttons:** Primary buttons feature a subtle Gold-to-Dark-Gold linear gradient with a 1px solid Gold border. Secondary buttons use a transparent fill with a Warm Champagne border.
- **Cards:** Task cards utilize a slightly lighter Navy fill than the background (#1B263B) to create a tiered surface. They feature a 0.5px Gold stroke on the top edge only.
- **Input Fields:** Recessed "well" style with a dark inner shadow. Focused states use a glowing Gold outer stroke (4px spread, 20% opacity).
- **Chips/Badges:** Small, high-contrast elements. Status "High Priority" chips use Gold text on a Navy background with a Gold border. 
- **Lists:** Items are separated by 1px "Champagne" lines at 10% opacity. Interactive list items should have a "lift" effect on hover, increasing the outer shadow spread.
- **Progress Bars:** Use a Deep Navy track with a Metallic Gold fill. The fill should have a subtle "brushed" texture effect or a vertical highlight to simulate a physical bar.