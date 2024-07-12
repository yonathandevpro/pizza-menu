# Fast React Pizza Co.

Welcome to the Fast React Pizza Co. project! This is a React.js application designed to showcase a dynamic pizza menu.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview

Fast React Pizza Co. is a simple web application that displays a menu of various pizzas. It includes features such as opening hours, order buttons, and dynamic rendering based on the availability of pizzas.

## Features

- **Dynamic Menu:** Displays a list of pizzas with their details and images.
- **Opening Hours:** Footer dynamically shows whether the store is open based on the current time.
- **Order Button:** Provides an order button when the store is open.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yonathandevpro/pizza-menu.git
   cd pizza-menu
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm run dev
   ```

4. **Build the application for production:**

   ```bash
   npm run build
   ```

5. **Preview the built application:**

   ```bash
   npm run preview
   ```

## Usage

To use the application, simply open the provided URL from the development server. You will see the menu with various pizzas. If the current time is within the opening hours (12:00 to 22:00), you will see the order button. Otherwise, it will display a message about the opening hours.

## Folder Structure

pizza-menu/
├── public/
│ ├── favicon.png
│ └── pizzas/
│ ├── focaccia.jpg
│ ├── margherita.jpg
│ ├── spinaci.jpg
│ ├── funghi.jpg
│ ├── salamino.jpg
│ └── prosciutto.jpg
├── src/
│ ├── components/
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Menu.jsx
│ │ ├── Pizza.jsx
│ │ └── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
└── vite.config.js

## Dependencies

- **React:** ^18.3.1
- **React DOM:** ^18.3.1
- **Vite:** ^5.3.1
- **ESLint:** ^8.57.0
- **ESLint Plugins:**
  - **react:** ^7.34.2
  - **react-hooks:** ^4.6.2
  - **react-refresh:** ^0.4.7
- **@types/react:** ^18.3.3
- **@types/react-dom:** ^18.3.0
- **@vitejs/plugin-react:** ^4.3.1

## Contributing

We welcome contributions to enhance the project. Here are a few guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

Happy coding!
