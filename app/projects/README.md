# Projects Page

Modern, elegant projects showcase with dark theme, glassmorphism, and neon accents.

## Features

### 1. Featured Card Swap (Top Section)
- **Autoplay**: Swaps every 4 seconds
- **Pause on hover**: User can pause to read
- **Keyboard navigation**: Arrow keys (←/→)
- **Drag interactions**: Swipe on mobile
- **Accessibility**: ARIA labels and focus rings

### 2. Project Stats
- Total Projects count
- Users Reached
- Awards won

### 3. Filters & Search
- Filter tabs: All, AI/ML, Web Apps, Open Source, Research
- Search by title, stack, or tags
- Animated underline for active filter

### 4. Projects Grid
- Responsive: 1 col (mobile), 2 cols (tablet), 3 cols (desktop)
- Each card shows:
  - Cover image (16:9 ratio)
  - Title & description
  - Tech stack badges
  - Metadata (year, role, metrics)
  - Action buttons (Live, Repo, Case Study)
- Hover effects:
  - Scale 1.02
  - Gradient border glow
  - Quick info overlay

### 5. Project Details Modal
- Full case study view
- Problem → Solution → Contributions
- Tech stack
- Performance metrics
- Links to live demo and repository

## Styling

- **Background**: Dark grid (#0a0a0a)
- **Cards**: Glassmorphism with rounded-2xl
- **Accents**: Purple, Cyan, Pink gradients
- **Typography**: 
  - UI: Inter (system font)
  - Metrics/Chips: JetBrains Mono
- **Shadows**: Soft glows with accent colors

## Data Structure

See `app/types/project.ts` for TypeScript interfaces.
Edit `app/data/projects.ts` to add/modify projects.

## Performance

- Uses `next/image` for optimized images
- Lazy loading for grid items
- Priority loading for first featured slide
- Staggered animations with Framer Motion

## Accessibility

- Alt text for all images
- ARIA labels for buttons
- Keyboard navigation support
- Focus rings on interactive elements
- Semantic HTML structure
