---
name: Aetheric Desktop
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bcc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#86929a'
  outline-variant: '#3d484f'
  surface-tint: '#75d1ff'
  primary: '#92d9ff'
  on-primary: '#003548'
  primary-container: '#00c2ff'
  on-primary-container: '#004c66'
  inverse-primary: '#006688'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffbed5'
  on-tertiary: '#640039'
  tertiary-container: '#ff93bf'
  on-tertiary-container: '#8b0052'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c2e8ff'
  primary-fixed-dim: '#75d1ff'
  on-primary-fixed: '#001e2b'
  on-primary-fixed-variant: '#004d67'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container_max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built for high-end digital practitioners, mirroring the sophisticated environment of a futuristic MacOS interface. The brand personality is technical yet ethereal, combining the precision of an operating system with the creative fluidity of a professional portfolio.

The visual style is rooted in **Glassmorphism**. It relies on high-fidelity depth, where content lives on translucent layers that interact with the vibrant, shifting light of the background. Every interaction should feel tactile and responsive, evoking a sense of "digital physicalness" through blurred backgrounds, subtle specular highlights, and organic motion.

## Colors

The palette is centered on a deep, immersive dark mode. The foundational "neutral" is a midnight navy, providing a canvas for high-energy accents.

- **Primary & Secondary:** A neon Cyan and Electric Violet, used for active states and focal points.
- **Vibrant Gradients:** Core backgrounds should utilize mesh gradients mixing the primary, secondary, and tertiary tones to create a sense of light sources behind the glass surfaces.
- **Glass Logic:** Surface colors are not solid. They are semi-transparent tints that inherit the background's character through a heavy backdrop filter (blur).

## Typography

The typography system prioritizes legibility and a systematic "OS" feel. **Inter** is the workhorse, providing a clean, neutral sans-serif look that disappears into the UI to let the work shine.

For technical metadata and small labels, **Space Grotesk** is introduced to provide a subtle futuristic edge and geometric rhythm. Headline weights should be semi-bold or bold with tight letter-spacing to mimic the high-density aesthetic of modern desktop interfaces.

## Layout & Spacing

This design system employs a **Fixed Grid** approach for the main content area to maintain the "windowed" feel of a desktop application. 

- **The Canvas:** The background is an edge-to-edge gradient.
- **The Container:** Content is housed in a 12-column grid centered within the viewport.
- **Rhythm:** Spacing follows a strict 4px/8px baseline. Use wide margins (`xl`) between major sections to emphasize the lightness of the floating glass panels. Inner-panel padding should be generous (`md`) to avoid a cluttered "web" look.

## Elevation & Depth

Depth is the defining characteristic of this system. It is achieved through optical physics rather than traditional shadows:

1.  **Backdrop Blur:** All primary containers must have a `backdrop-filter: blur(20px)`.
2.  **Inner Glow:** Instead of drop shadows, use a 1px solid or semi-transparent top border (White, 20% opacity) to simulate a light source catching the edge of the glass.
3.  **Stacked Layers:** Use z-index to stack elements. Higher elements should have slightly less blur and a higher transparency (appearing closer to the eye).
4.  **Shadows:** When used, shadows should be extremely large, diffused, and tinted with the secondary color (Violet), representing light passing through colored glass.

## Shapes

The shape language is inspired by the modern "Squircle." Elements use a consistent 0.5rem base radius (`rounded-md`), scaling up to 1.5rem (`rounded-xl`) for main application windows or card containers. 

Avoid sharp corners entirely; even inputs and buttons should feel soft and approachable. The roundedness helps soften the technical nature of the dark UI and reinforces the "high-fidelity" tactile feeling.

## Components

### Glass Panels (Cards)
The primary vessel for content. Features a semi-transparent fill, a 1px border that is slightly lighter than the background, and a heavy backdrop blur. No heavy shadows unless the card is "hovered" or "active."

### Buttons
Buttons should feel like physical glass keys.
- **Primary:** A vibrant gradient fill (Cyan to Violet) with white text.
- **Secondary:** An "Outline" style glass button with a thin border and a subtle hover fill.
- **Interaction:** On click, buttons should physically "sink" (scale 0.98) and increase in brightness.

### Inputs & Search
Designed to look like the MacOS Spotlight bar. Long, pill-shaped or medium-rounded containers with a slightly darker semi-transparent fill and an icon prefix.

### Navigation (The Dock)
A floating navigation bar at the bottom or top of the viewport. It uses a more intense backdrop blur than standard cards and features a "magnification" effect on hover, mimicking the MacOS dock.

### Chips & Tags
Small, highly rounded pills using `Space Grotesk`. Use these for "Tech Stack" or "Project Year" labels. They should have a subtle glow effect rather than a solid background.