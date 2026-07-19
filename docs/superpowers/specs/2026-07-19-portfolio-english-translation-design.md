# Portfolio English Translation Design

## Context

The portfolio is a Vue/Vite single page app with Vue Router. It currently presents Traditional Chinese content across the home, skills, projects, and project detail pages. Most portfolio content already lives in `src/data`, while some interface labels and the long self-introduction are hard-coded in Vue components.

The requested change is to add English translation support so English-speaking visitors can read the portfolio without changing the existing route structure.

## Goals

- Add a `中文 / EN` language switcher in the navigation.
- Keep the current routes unchanged: `/`, `/skills`, `/projects`, and `/projects/:id`.
- Default to Traditional Chinese.
- Remember the visitor's language choice with `localStorage`.
- Translate portfolio content and fixed interface labels that affect the browsing experience.
- Keep the implementation lightweight and aligned with the current data-module style.

## Non-Goals

- Do not add `/en` routes.
- Do not add a full i18n library unless the existing code shape makes the lightweight approach impractical.
- Do not redesign the portfolio layout beyond the small language switcher UI.
- Do not translate developer comments or project documentation as part of this feature.

## Recommended Approach

Use a small local i18n layer built from Vue's Composition API and plain JavaScript data modules.

The app will expose a current language state, a `setLanguage` function, and translated UI labels. Content modules such as profile, projects, and certifications will provide language-specific strings while preserving stable fields such as ids, years, URLs, logos, and tags where appropriate.

This avoids adding a dependency for a small portfolio while still giving every page access to the same language state.

## Architecture

### Language State

Create a small module under `src/i18n` or `src/composables` that:

- Stores supported languages: `zh-TW` and `en`.
- Reads the initial language from `localStorage`, falling back to `zh-TW`.
- Exposes `currentLanguage`, `isEnglish`, `setLanguage`, and UI label access.
- Writes changes back to `localStorage`.

### UI Labels

Create a `messages` object for fixed labels, including:

- Navigation: Home, Skills, Projects, language switch aria label.
- Home actions: Projects, Skills.
- Profile: About Me, Contact me, Motto, expand/collapse intro.
- Skills page: title, description, certifications section.
- Projects page: title and view project button.
- Project detail: back link, visit site button, year, role, technologies, feature highlights, result.
- Not found text.

### Portfolio Data

Refactor content data into language-aware exports:

- `profile` should include translated `name`, `title`, `motto`, `intro`, `fullIntro`, `highlights`, and photo alt text.
- `projects` should include translated `title`, `summary`, `description`, `features`, and `result`. Stable fields such as `id`, `year`, `demoUrl`, and most technical tags stay shared.
- `certifications` should include translated `title`, `description`, and Chinese-specific tool labels where helpful.
- `skills` can remain mostly unchanged because the skill names are already English or technical terms.

Views should consume computed translated data based on `currentLanguage`.

## Component Changes

### `NavBar.vue`

Add a compact language switcher aligned with the current navigation. It should:

- Show `中文` and `EN`.
- Use buttons with clear active state.
- Preserve mobile layout without crowding the three navigation links.
- Use translated navigation labels.

### `ProfileCard.vue`

Remove the hard-coded long Chinese self-introduction from the template and read it from the profile prop. Translate:

- Button labels.
- Contact/profile labels.
- Photo alt text.
- Motto label.
- Expand/collapse text.

### `ProjectsView.vue` and `ProjectCard.vue`

Use translated projects and translated button labels. Keep project card behavior unchanged.

### `ProjectDetailView.vue` and `ProjectDetail.vue`

Use translated project detail labels and not-found messages. The detail page still finds projects by the stable `id`.

### `SkillsView.vue`

Use translated headings and certification data. Skill cards can continue receiving the same shape of data.

## Data Flow

1. App loads and initializes language from `localStorage`.
2. `NavBar` renders translated navigation labels and switcher state.
3. Views use computed values to select translated data and labels.
4. User switches language.
5. Language state updates, saves to `localStorage`, and Vue re-renders all translated content.

## Error Handling

- If `localStorage` has an unsupported language, fall back to `zh-TW`.
- If a project id is not found, show the translated not-found state.
- If a translated field is missing during development, prefer a visible fallback from Traditional Chinese content rather than an empty string.

## Accessibility

- The language switcher must use real buttons.
- The active language should be visible and conveyed with `aria-pressed`.
- The switcher should have an accessible label.
- Existing mobile touch target sizing should be preserved.

## Testing And Verification

- Run `npm run build`.
- Manually verify the home, skills, projects, and project detail pages in both languages.
- Confirm language choice persists after reload.
- Confirm mobile navigation still fits at small widths.
- Confirm project detail lookup still works by id.

## Open Decisions

The user selected same-route switching with persistence. English route aliases are intentionally excluded from this implementation.
