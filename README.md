# Atompoint Frontend Template

This project is a template for building web applications at Atompoint using Next.js and Tailwind CSS. It is designed to provide a standard starting point with best practices, predefined configurations, and common features that are needed in modern web development.

## Features

- Next.js for server-side rendering and static site generation.
- Tailwind CSS for a utility-first approach to styling.
- Pre-configured ESLint and Prettier for code formatting and linting.

## Getting Started

### Prerequisites

- Node.js (v20.10.0 or higher)
- npm (comes with Node.js)
- Git

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/atompoint/atompoint-frontend.git
cd atompoint-frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser to view the app.

## Folder Structure

- `src/`: Contains the source code of the application.
  - `app/`: Contains the global layout and page-specific components.
  - `components/`: Reusable UI components.
  - `styles/`: Global styles and Tailwind CSS configurations.
  - `hooks/`: Custom React hooks.
  - `utils/`: Utility functions.
- `public/`: Static assets like images and `favicon.ico`.
- `.next/`: The output of the Next.js build process (auto-generated).

## Coding Standards

We enforce coding standards using ESLint and Prettier. Ensure your code complies with the rules defined in `.eslintrc.json`.

## Component Architecture

We utilize a modular architecture for components, promoting reusability and separation of concerns.

## Styling with Tailwind CSS

Customize Tailwind CSS in `tailwind.config.js` and apply styles using utility classes in JSX.

## Deployment

Deploy the application to Firebase Hosting by running:

```bash
npm run build
firebase deploy
```

Make sure you have the Firebase CLI installed and configured.

## Contributing

We welcome contributions to the Atompoint Frontend Template. Please read our contribution guidelines before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with 💙 by Atompoint