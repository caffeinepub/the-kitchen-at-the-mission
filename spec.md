# The Kitchen at The Mission

## Current State
Full restaurant website with Hero, About, Menu Highlights, Hours & Location, Amenities, Reservation, and Footer sections.

## Requested Changes (Diff)

### Add
- A "Gallery" section between AmenitiesSection and ReservationSection
- Use all 14 uploaded user photos as gallery images (menus and ambience shots)
- Section title: "Gallery" with eyebrow label "Photos"
- Masonry-style or grid layout with lightbox/modal on click
- Add "Gallery" link to desktop and mobile nav

### Modify
- Nav links to include "Gallery" anchor
- Footer quick links to include "Gallery"

### Remove
- Nothing

## Implementation Plan
1. Add GallerySection component with 14 uploaded images in a responsive grid
2. Add lightbox modal for full-size image view on click
3. Insert GallerySection into AppContent between AmenitiesSection and ReservationSection
4. Add Gallery nav link in Header (desktop and mobile)
5. Add Gallery link in Footer quick links
