# Grouped tasks app: React + TypeScript + Vite

This is a project built with React + TypeScript + Vite.
It uses ESLint and Prettier rules and vitest + testing-library + msw for testing.

## Description

This app is a demo of a grouped tasks component. It displays a list of grouped tasks, that we can check and uncheck depending if we did or not the tasks. It also displays the progress percentage based on the tasks that are completed and the value of the completed tasks.

It has two pages:

- Home page: shows a warm welcome message.
- Grouped tasks demo page: shows a list of tasks grouped by their status.

The tasks are fetched from a API that returns a list of tasks grouped by their status.

We consider that the group names are unique.

## Tech stack

- React
- CSS Modules
- TypeScript
- Vite
- React Router
- React Intl for translations
- Zustand for global state
- ESLint
- Prettier
- Vitest
- Testing Library
- MSW

## Usage

To install dependencies, run:

```
npm install
```

To start the app, run:

```
npm run dev
```

To create a production build, run:

```
npm run build
```

To preview the production build, run:

```
npm run preview
```

To run tests, run:

```
npm run test
```

To sort translation keys, run:

```
npm run sort-translations
```
