# 🧪 MIT Canteen Website - Playwright Test Suite

This repository contains automated UI tests for the [MIT Canteen](https://mit-canteen.netlify.app/index.html) web application, written using [Microsoft Playwright](https://playwright.dev/).

## 📌 Project Overview

The purpose of this test suite is to:
- ✅ Validate that the login form is accessible and functional.
- ✅ Ensure UI elements like email and password inputs are visible and responsive.
- ✅ Simulate a user login flow and validate expected behavior.

## 🚀 Tech Stack

- 🎭 [Playwright](https://playwright.dev/) — End-to-end testing framework
- 🖥 Node.js — Runtime for executing Playwright scripts
- 💻 VS Code or any modern code editor

## 📁 Folder Structure

my-playwright-project/
├── tests/
│ └── canteen-login.spec.js # Main test script
├── playwright.config.js # Optional Playwright config
├── package.json # Project dependencies
└── README.md # You're here!


## 📦 Installation

```bash
# Initialize Node project
npm init -y

# Install Playwright
npm install -D playwright

# Install Playwright browsers (only once)
npx playwright install

🧪 Running Tests
npx playwright test --headed

📃 License
This project is licensed under the MIT License.
