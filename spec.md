# The Kitchen at The Mission

## Current State
Menu section has 3 placeholder dish cards with no real pricing.

## Requested Changes (Diff)

### Add
- Real menu items and prices in a tabbed browser (Breakfast, Lunch, Dinner, Drinks)
- Prices shown on signature dish cards

### Modify
- DISHES array: real dishes with actual prices from uploaded menus
- MenuSection: add tabbed menu section with real items/prices

### Remove
- Nothing

## Implementation Plan
1. Update DISHES with real data (Tomahawk $148, Cioppino $58, Pizza from $18)
2. Add MENU_DATA with categorized items per tab
3. Add tab switcher + scrollable item list with right-aligned gold prices
4. Maintain dark aesthetic
