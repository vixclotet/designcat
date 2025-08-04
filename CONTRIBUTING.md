# Contributing to DesignCat

First off, thank you for considering contributing to DesignCat! It's people like you that make DesignCat such a great resource for the community. We welcome any form of contribution, from reporting bugs and submitting feature requests to adding new designs and improving documentation.

This document provides guidelines for contributing to the project. Please read it carefully to ensure a smooth and effective collaboration process.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Submitting New Resources](#submitting-new-resources)
  - [Your First Code Contribution](#your-first-code-contribution)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [Code Style](#code-style)

## Code of Conduct

This project and everyone participating in it is governed by the [DesignCat Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior. (Note: A formal Code of Conduct file will be added soon).

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/your-username/designcat/issues). If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample or an executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

If you have an idea for a new feature or an improvement to an existing one, please open an issue on GitHub. Provide a clear and detailed explanation of the feature, why it's needed, and how it should work.

### Submitting New Resources

We are always looking for new, high-quality UI patterns, gradients, and animations! To submit a new resource, please follow these steps:

1.  **Fork the repository** and create a new branch.
2.  **Add your CSS**: For new patterns or animations, add the corresponding CSS to the `app/globals.css` file. Please use a unique and descriptive class name, prefixed with `dc-` (for DesignCat) to avoid conflicts. For example: `.dc-your-pattern-name`.
3.  **Add the resource data**: Open `lib/data.ts` and add a new object to the `resources` array. Follow the existing structure:
    ```typescript
    {
      id: 101, // Choose a unique ID
      name: 'Your Awesome Pattern',
      type: 'pattern', // or 'gradient', 'animation', 'effect'
      category: 'geometric', // or 'decorative', etc.
      css: 'bg-[--pattern-your-awesome-pattern]', // The Tailwind utility class for your pattern
      code: {
        html: `<div class="your-pattern-class"></div>`,
        css: `.your-pattern-class {\n  /* Your CSS rules here */\n}`
      },
      isFavorite: false,
    }
    ```
4.  **Submit a Pull Request** with your changes.

### Your First Code Contribution

Unsure where to begin contributing to DesignCat? You can start by looking through `good first issue` and `help wanted` issues:
- **Good first issues** - issues which should only require a few lines of code, and a test or two.
- **Help wanted** - issues which should be a bit more involved than `good first issues`.

## Development Setup

Ready to contribute code? Here’s how to set up DesignCat for local development.

1.  **Fork** the `designcat` repository on GitHub.
2.  **Clone** your fork locally:
    ```bash
    git clone https://github.com/your-username/designcat.git
    ```
3.  **Navigate** to the project directory:
    ```bash
    cd designcat
    ```
4.  **Install dependencies** using npm:
    ```bash
    npm install
    ```
5.  **Run the development server**:
    ```bash
    npm run dev
    ```
6.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Pull Request Process

1.  Create a new branch for your feature or bug fix: `git checkout -b feature/your-amazing-feature`.
2.  Make your changes and commit them with a descriptive message.
3.  Push your branch to your fork on GitHub: `git push origin feature/your-amazing-feature`.
4.  Open a pull request to the `main` branch of the original `designcat` repository.
5.  In your PR description, clearly explain the changes you've made and link to any relevant issues.
6.  We will review your PR, provide feedback, and merge it once it's ready.

## Style Guides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move file to..." not "Moves file to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

### Code Style

We use [Prettier](https://prettier.io/) to maintain a consistent code style. Please run it before committing your changes:

```bash
npm run format
```

Thank you again for your interest in contributing to DesignCat!
