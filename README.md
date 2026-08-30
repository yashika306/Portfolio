# 🍱 Modern Bento Grid Portfolio

A responsive, high-performance developer portfolio built for **Yashika Duthuluru (AI/ML & Backend Software Engineer)**. The application features a modern Bento Grid design styled entirely with **Tailwind CSS**, smooth micro-animations, theme toggling, and integrated interaction tracking via **Google Analytics 4**.

Live website: 👉 **[yashika306.github.io/Portfolio](https://yashika306.github.io/Portfolio)**

---

## ✨ Features

- **Bento Grid Layout**: A highly structured grid system that organizes information (Hero, Skills, Experience, Education, Projects, Contact) into clean, modular blocks.
- **Glassmorphism Design**: Frosted panels featuring border highlights, hover scaling, and ambient pulsing background glow elements.
- **Dark & Light Mode Switcher**: Toggles theme values globally across the layout by updating document class lists.
- **Micro-Animations**: Staggered card entry animations and transitions powered by `framer-motion`.
- **Google Analytics 4 Integration**: Lightweight custom tracking that logs pageviews, outbound social links clicks, resume downloads, modal link clicks, and contact form submissions.
- **EmailJS Form integration**: Sends emails from the Contact section straight to the mailbox with validation and completion indicators.

---

## 🛠️ Built With

- **Framework**: [React](https://react.dev/)
- **Style System**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Analytics**: [React GA4](https://github.com/sjmc11/react-ga4)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yashika306/Portfolio.git
   cd Portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📊 Analytics Configuration

Google Analytics tracks events automatically. If no ID is configured, the tracker logs event actions to the console in **simulation mode** for debugging.

To activate production tracking, create a `.env` file at the root of the project:

```env
REACT_APP_GA_MEASUREMENT_ID=G-YOUR_MEASUREMENT_ID
```
*(Replace `G-YOUR_MEASUREMENT_ID` with your Google Analytics 4 Measurement ID).*

---

## 📦 Deployment

The portfolio is set up to deploy straight to GitHub Pages using the `gh-pages` package.

To build and deploy the live version in one step, run:
```bash
npm run deploy
```
This automatically compiles the codebase, minifies assets, optimizes Tailwind CSS, and pushes to the deployment branch.
