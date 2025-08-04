<div align="center">
  <a href="https://designcat.vercel.app/">
    <img src="/public/placeholder-logo.svg" alt="DesignCat Logo" width="120" height="120">
  </a>
  <h1>DesignCat</h1>
  <p><strong>Making your design work extremely easy.</strong></p>
  <p>
    A curated collection of 100+ modern, copy-paste UI/UX patterns and animations, built with Tailwind CSS for developers, designers, and founders.
  </p>
  <br>
  <p>
    <a href="https://vercel.com?utm_source=designcat&utm_campaign=oss">
      <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" height="32">
    </a>
  </p>
  <br>
  <p>
    <img src="https://img.shields.io/github/stars/vixclotet/designcat?style=social" alt="GitHub stars" />
    <img src="https://img.shields.io/github/forks/vixclotet/designcat?style=social" alt="GitHub forks" />
  </p>
</div>

---

## ✨ About DesignCat

DesignCat is an open-source resource hub designed to accelerate your web development workflow. It provides a rich library of ready-to-use, modern CSS patterns and animations that you can directly copy and paste into your Next.js and React projects. Whether you're building a hero section, a background, or a unique decorative element, DesignCat has a snippet for you.

**Visit the live site: [designcat.vercel.app](https://designcat.vercel.app/)**

## 🚀 Built with v0 - Vercel's AI

This project was brought to life using **[v0](https://v0.dev)**, Vercel's generative AI platform for building user interfaces. From the initial prototype to the iterative addition of complex features like live previews, search, and animations, v0 was used to generate and refine the React components and Tailwind CSS styles. This approach allowed for rapid development and a focus on creating a high-quality user experience.

## 🌟 Key Features

- **Ready-to-Use Snippets**: Copy and paste clean, production-ready code directly into your projects.
- **Live Preview**: Instantly apply any pattern or animation to the page background to see it in action.
- **Modern & Responsive**: All patterns are built with Tailwind CSS and are fully responsive.
- **Zero Dependencies**: The core patterns are pure CSS, ensuring they are lightweight and easy to integrate.
- **Categorized Library**: Easily browse patterns organized into categories like Gradients, Geometric, Animations, and more.
- **Favorites**: Save your most-used patterns to your personal collection using local storage.
- **Search & Filter**: Quickly find the perfect pattern with a powerful search and category filters.
- **Smooth Transitions**: The grid animates smoothly when filtering and searching, powered by Framer Motion.

## 💻 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Generation**: [v0](https://v0.dev)
- **Deployment & Hosting**: [Vercel](https://vercel.com/)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or newer)
- A package manager: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vixclotet/designcat.git
    cd designcat
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install, pnpm install, bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📖 How to Use

1.  **Browse**: Navigate through the extensive collection of patterns and animations.
2.  **Filter**: Use the category buttons or the search bar to narrow down your options.
3.  **Preview**: Click on any card to apply a live preview of the design to the page background.
4.  **Copy**: Click the "Copy" button on a card to copy the CSS/Tailwind-compatible code snippet to your clipboard.
5.  **Paste**: Paste the snippet into your project's stylesheet or component.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Add a New Pattern

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feat/add-new-pattern-name`
3.  Navigate to `lib/data.ts` and add your new pattern object to the `resources` array. Follow the existing structure precisely.
4.  Test your pattern locally to ensure it's responsive and performs well.
5.  Commit your changes: `git commit -m "feat: Add new geometric grid pattern"`
6.  Push to the branch: `git push origin feat/add-new-pattern-name`
7.  Open a Pull Request.

### Contribution Guidelines

- **Uniqueness**: Please ensure your pattern is not a duplicate of an existing one.
- **Quality**: Patterns should be visually appealing and of high quality.
- **Performance**: Optimize for rendering performance where possible.
- **Responsiveness**: Test your patterns across different screen sizes.
- **Naming**: Use a descriptive `id` (kebab-case) and `name` for your pattern.

## 📜 License

This project is open-source and distributed under the [MIT License](LICENSE). See the `LICENSE` file for more information.

## 🙏 Acknowledgments

- Built with the power of **Next.js**, **Tailwind CSS**, and **v0**.
- Inspired by the incredible work of the web design and open-source communities.

---

<div align="center">
  <p>If you like this project, consider giving it a ⭐️ on GitHub and sharing it with others!</p>
  <p>Built by <a href="https://github.com/vixclotet">@vixclotet</a></p>
</div>
> _**Happy coding!**_
