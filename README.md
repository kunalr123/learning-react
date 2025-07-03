# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- JSX - confusion in full form javascript XML / javascript syntax extention  -->

<!-- Usestate -->
useState is a React Hook used to add state (data) to functional components.
It allows components to remember data between renders and update the UI automatically when the data changes.

➜ Why We Use It:
In React, functional components by default don’t remember values.
To store and manage changing values like:
@User input
@Button clicks
@UI toggles
We use useState.

<!-- useActionState -->

useActionState Hook (Advanced, React 19+)
Introduced in React 19 for managing async actions easily, especially in forms.

➜ Definition:
useActionState is a hook that helps manage asynchronous actions and their state inside components.
It is especially helpful for form submissions, server actions, and cases where you need to track pending/loading states.

➜ Why We Use It:
To simplify async state management in React apps.
To automatically handle loading states in actions like form submissions.
Common in React Server Components.
const [data, Action, Pending] = useActionState(actionFunction, initialState);

data	Current state value (updated after action runs)
Action	Function to trigger the action (used in forms)
Pending	Boolean that tracks if action is running

