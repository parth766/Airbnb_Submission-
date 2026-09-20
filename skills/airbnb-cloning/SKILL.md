---
name: airbnb-cloning
description: Best practices and design patterns for building pixel-perfect Airbnb clones and gallery overlays.
---

# Airbnb Cloning Skill Blueprint

## Key Design Patterns
1. **Hero Gallery**:
   - 5-photo grid layout (1 main hero image taking 50% width on left, 4 smaller images in 2x2 grid on right).
   - Floating "Show all photos" trigger button at bottom right.
2. **Photo Tour Modal**:
   - Fullscreen overlay (`fixed inset-0 z-50 bg-white`).
   - Sticky header with back button and action links.
   - Horizontal tab bar for category quick scrolling (`Living room`, `Kitchen`, `Bedroom`, etc.).
   - Room details subtext and category image stack.
3. **Lightbox Modal**:
   - Dark backdrop (`bg-black/95`).
   - Counter display (`X / Total`).
   - Left (`<`) and Right (`>`) navigation arrows.
   - Keyboard event handlers for `ArrowLeft`, `ArrowRight`, `Escape`.
