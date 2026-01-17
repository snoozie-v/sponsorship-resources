# CLAUDE.md - AI Assistant Guide for Sponsorship Resources

## Project Overview

This is a **Sponsorship Resources** web application built with React and Vite. The application provides structured guidance and prompts for the 12-step recovery program, specifically focusing on helping users work through each step with detailed subsections, descriptions, and prompts.

**Purpose**: Interactive resource platform for sponsorship and step-work in recovery programs.

## Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.11.0
- **Styling**: Tailwind CSS 4.1.18 (with Vite plugin)
- **Language**: JavaScript (JSX)
- **Linter**: ESLint 9.39.1
- **Deployment**: Vercel (configured with SPA rewrites)

## Project Structure

```
sponsorship-resources/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── LandingPage.jsx       # Step selection grid (1-12)
│   │   ├── StepOverview.jsx      # Subsection selection for a step
│   │   ├── StepSubsection.jsx    # Individual subsection with prompts
│   │   └── StepResources.jsx     # Alternative resources view (legacy)
│   ├── resources/
│   │   └── steps.js              # Central data source for all steps
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point with React 19 & BrowserRouter
│   └── index.css         # Tailwind imports
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint flat config
├── vercel.json           # Vercel SPA rewrites
├── package.json          # Dependencies and scripts
└── .gitignore            # Git ignore patterns
```

## Application Architecture

### Routing Structure

The application uses React Router with three main routes:

1. **`/`** - LandingPage
   - Grid of 12 buttons (Step 1-12)
   - Entry point for step selection

2. **`/step/:stepNumber`** - StepOverview
   - Displays subsections for the selected step
   - Example: `/step/1` shows "Powerlessness" and "Unmanageability"
   - Links to subsection detail pages

3. **`/step/:stepNumber/:subsection`** - StepSubsection
   - Shows detailed prompts and descriptions
   - Example: `/step/1/powerlessness`
   - Displays title, description, and numbered prompts

### Data Model (src/resources/steps.js:1)

Central data structure exported as `stepsResources`:

```javascript
{
  step: Number,              // Step number (1-12)
  title: String,             // Full step text
  instructions: String,      // Writing instructions for the user
  subsections: {             // Object containing subsections
    [key]: {
      label: String,         // Display name (e.g., "Powerlessness")
      description: String,   // Explanation of the concept
      prompts: Array<String> // List of reflection prompts
    }
  }
}
```

**Current State**: Only Step 1 is fully populated with subsections. Steps 2-12 have title only.

## Component Details

### LandingPage.jsx (src/components/LandingPage.jsx:1)

- **Purpose**: Main step selection interface
- **Layout**: Grid of 12 buttons (2 cols mobile, 3 cols tablet, 4 cols desktop)
- **Navigation**: Uses `useNavigate()` to route to `/step/:stepNumber`
- **Styling**: Blue buttons with hover effects

### StepOverview.jsx (src/components/StepOverview.jsx:1)

- **Purpose**: Displays subsections for a selected step
- **Data Access**: Finds step data from `stepsResources` array
- **Validation**: Redirects to home if step has no subsections
- **Layout**: Large centered buttons for each subsection
- **Navigation**: Links to `/step/:stepNumber/:subsection`

### StepSubsection.jsx (src/components/StepSubsection.jsx:1)

- **Purpose**: Detailed view of a single subsection
- **Content Structure**:
  - Step title (h2)
  - Subsection label (h3)
  - Description (gray background box)
  - Numbered prompts list
- **Error Handling**: Shows "Section not found" for invalid routes
- **Navigation**: Back links to step overview and all steps

### StepResources.jsx (src/components/StepResources.jsx:1)

- **Status**: Legacy component, not currently used in routes
- **Purpose**: Alternative flat layout for step resources
- **Keep**: May be useful for future enhancements

## Development Workflows

### Starting Development

```bash
npm run dev          # Start dev server (Vite HMR on port 5173)
```

### Building for Production

```bash
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
```

### Linting

```bash
npm run lint         # Run ESLint on all files
```

## Code Conventions & Best Practices

### Import Statements

- React Router hooks (`useNavigate`, `useParams`, `Link`) must be imported at top
- Component imports use relative paths
- Data imports from `../resources/steps`

### Component Structure

- **Function Components**: All components use function syntax
- **Hooks Order**: Import hooks, then use `useParams()` and `useNavigate()` early
- **Early Returns**: Handle error cases with early returns (not found, redirects)
- **Export**: Default exports at bottom

### Styling Conventions

- **Tailwind Utility Classes**: All styling via Tailwind
- **Responsive Design**: Mobile-first with `md:` and `lg:` breakpoints
- **Color Scheme**:
  - Primary: `bg-blue-500`, `hover:bg-blue-600`
  - Text: `text-gray-700`, `text-blue-900`
  - Backgrounds: `bg-gray-50`, `bg-gray-100`
- **Spacing**: Consistent use of padding/margin scales (p-4, p-6, mb-8, etc.)

### Data Access Patterns

```javascript
// Standard pattern for accessing step data
const { stepNumber } = useParams();
const step = parseInt(stepNumber, 10);
const data = stepsResources.find((s) => s.step === step);
```

### Routing Patterns

```javascript
// Programmatic navigation
navigate(`/step/${step}`);

// Declarative links
<Link to={`/step/${step}/${key}`}>...</Link>
```

## ESLint Configuration (eslint.config.js:1)

- **Flat Config Format**: Uses ESLint 9.x flat config
- **Extends**:
  - `@eslint/js` recommended
  - React Hooks recommended
  - React Refresh (Vite)
- **Custom Rules**:
  - `no-unused-vars`: Allows uppercase variables (constants)
- **Target**: Browser environment, ES2020+

## Deployment (Vercel)

### Configuration (vercel.json:1)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures all routes are handled by the React Router client-side routing (SPA mode).

### Deployment Commands

```bash
# Vercel will automatically run:
npm run build
```

## Common AI Assistant Tasks

### Adding a New Step's Content

1. Edit `src/resources/steps.js`
2. Locate the step object (e.g., `step: 2`)
3. Add subsections following Step 1's pattern:

```javascript
{
  step: 2,
  title: "Step 2: ...",
  instructions: "Write about...",
  subsections: {
    keyName: {
      label: "Display Name",
      description: "Explanation...",
      prompts: [
        "Prompt 1...",
        "Prompt 2..."
      ]
    }
  }
}
```

### Adding a New Component

1. Create file in `src/components/ComponentName.jsx`
2. Follow function component pattern:

```javascript
import { useParams, Link } from 'react-router-dom';

function ComponentName() {
  // Component logic
  return (
    <div className="max-w-4xl mx-auto">
      {/* JSX content */}
    </div>
  );
}

export default ComponentName;
```

3. Import and use in `App.jsx` if adding a route

### Adding a New Route

1. Import component in `src/App.jsx:1`
2. Add `<Route>` inside `<Routes>`:

```javascript
<Route path="/new-path" element={<NewComponent />} />
```

### Modifying Styles

- **Prefer**: Tailwind utility classes
- **Avoid**: Inline styles or separate CSS files
- **Reference**: Use existing components for color/spacing consistency
- **Responsive**: Always consider mobile-first breakpoints

### Data Structure Changes

- **Location**: `src/resources/steps.js`
- **Pattern**: Maintain consistent object structure across all steps
- **Validation**: Ensure components handle missing data gracefully
- **Testing**: Check error boundaries in StepOverview and StepSubsection

## Key Files Reference

| File | Line | Purpose |
|------|------|---------|
| `src/App.jsx:1` | Full file | Main routing configuration |
| `src/main.jsx:1` | Full file | React 19 entry point with BrowserRouter |
| `src/resources/steps.js:1` | Full file | Central data source |
| `src/components/LandingPage.jsx:1` | Full file | Step selection grid |
| `src/components/StepOverview.jsx:1` | Full file | Subsection selection |
| `src/components/StepSubsection.jsx:1` | Full file | Prompt display |
| `vite.config.js:1` | Full file | Vite + React + Tailwind config |
| `vercel.json:1` | Full file | SPA rewrites for deployment |

## Important Notes for AI Assistants

### What NOT to Change

- **React 19 Syntax**: Don't downgrade to React 18 patterns
- **Vite Config**: Tailwind plugin is required, don't remove
- **BrowserRouter**: Must wrap `<App />` in main.jsx
- **Data Structure**: Keep `stepsResources` array structure consistent
- **Vercel Config**: Rewrites are essential for client-side routing

### Common Pitfalls

1. **Missing Imports**: Always import `useNavigate`, `useParams`, `Link` when needed
2. **Route Parameters**: Remember to parse `stepNumber` with `parseInt()`
3. **Data Validation**: Check for missing subsections before rendering
4. **Tailwind Imports**: Don't remove `@import "tailwindcss"` from index.css
5. **File Extensions**: Use `.jsx` for React components, not `.js`

### Testing Checklist

When making changes, verify:
- [ ] Landing page displays 12 step buttons
- [ ] Clicking a step navigates to step overview
- [ ] Step overview shows subsections (for Step 1)
- [ ] Steps 2-12 redirect to home (no subsections yet)
- [ ] Subsection page displays prompts correctly
- [ ] Back navigation works at all levels
- [ ] Mobile responsive layout works
- [ ] ESLint shows no errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)

## Future Expansion Opportunities

Based on the current code structure:

1. **Complete Steps 2-12**: Add subsections and prompts
2. **Additional Fields**: The data model supports:
   - `quotes`: Big Book quotes
   - `bigBookPages`: Page references
   - Custom fields per step
3. **User Progress Tracking**: LocalStorage or backend integration
4. **Print/Export**: Generate PDF or printable worksheets
5. **Search**: Find prompts across all steps
6. **Notes**: Allow users to save reflections

## Version History

- **Current State** (Jan 2026):
  - React 19.2.0
  - Vite 7.2.4
  - Tailwind CSS 4.1.18
  - Step 1 fully implemented with 2 subsections
  - Steps 2-12 placeholders
  - Deployed on Vercel

---

**Last Updated**: 2026-01-17 (Generated by Claude AI Assistant)
