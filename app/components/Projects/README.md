# Projects Components

## Features

### Show More Functionality
- Initially displays 9 projects
- "Show More" button loads 9 more projects at a time
- Button disappears when all projects are shown
- Smooth animations with Framer Motion

### ProjectsGrid Component
- Responsive grid layout (1/2/3 columns)
- Pagination with `visibleCount` state
- Animated project cards with stagger effect
- Show More button with gradient styling

## Usage

```tsx
<ProjectsGrid projects={filteredProjects} />
```

The component automatically handles:
- Initial 9 projects display
- Show More button visibility
- Loading more projects in batches of 9
- Empty state when no projects match filters

## Data Structure

Projects data is located in `app/data/projects.ts`:
- `featuredProjects`: Array of featured items for carousel
- `allProjects`: Complete list of all projects

All cover images use Unsplash URLs for reliable loading.
