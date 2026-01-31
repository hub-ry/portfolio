## Project Card Hover Dropdown & Detail Pages

### Features Added
✅ **Tech Stack Dropdown**: Hover over project cards to see the technologies used  
✅ **Clickable Projects**: Click any project card to view its detail page  
✅ **Back Navigation**: Click "Back" button to return to projects list  

### How It Works

The implementation uses React state to track which project is selected:
- When no project is selected, show the projects grid
- When a project is clicked, show that project's detail page
- No routing library needed - just simple state management

### File Structure
```
src/
├── App.tsx                          # Main app with state management
├── components/
│   ├── ProjectCard.tsx              # Individual project card (with hover dropdown)
│   ├── ProjectDetail.tsx            # Project detail page
│   └── Projects.tsx                 # Projects grid list
└── data/
    └── projects.ts                  # Project data with tech stacks
```

### Customization Guide

#### 1. **Add/Edit Tech Stack for a Project**
Location: `src/data/projects.ts`
```typescript
{
  title: "Your Project Name",
  techStack: ["React", "TypeScript", "Firebase"],  // ← Add/edit here
  // ... other fields
}
```

#### 2. **Customize Hover Dropdown Colors**
Location: `src/components/ProjectCard.tsx` (around line 31)

Current colors:
- `bg-black/95` = dropdown background (dark gray/black)
- `text-gray-300` = "Tech Stack" label color
- `bg-zinc-700` = tech tag background (darker gray)

Example: Change background to blue
```tsx
<div className="absolute bottom-0 left-0 right-0 bg-blue-900/95 text-white p-4 ...">
```

#### 3. **Customize Project Detail Page Styling**
Location: `src/components/ProjectDetail.tsx`

Key classes to modify:
- `bg-zinc-800` = card/section backgrounds
- `bg-zinc-700` = tech tag backgrounds
- `rounded-xl` = how rounded corners are (try `rounded-lg` for less rounded)

#### 4. **Add Project Description**
Location: `src/components/ProjectDetail.tsx` (around line 45)
```tsx
<p className="text-gray-300 leading-relaxed">
  Your project description here
</p>
```

#### 5. **Change Card Image Height**
Location: `src/components/ProjectCard.tsx`
Current: `h-48` (192px)
Try: `h-56` (224px) for taller, or `h-40` (160px) for shorter

### Color Reference (Tailwind)
- `zinc-700` = light gray
- `zinc-800` = medium gray  
- `zinc-900` = dark gray (background)
- `gray-300` = light text
- `gray-400` = medium text

Change `zinc-` to `slate-`, `gray-`, or `stone-` for different color families.

### Testing
Dev server: `npm run build`
Build for production: `npm run build`
