# Customer Support — Ticket System

A React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. This project follows a specific Figma design and includes features like status management, responsiveness, and stylish notifications.

## 📌 Features

- **Dynamic Ticket Display:** Shows 10-15 customer tickets from a JSON file.
- **Task Management:** Move tickets to the "In-Progress" section and mark them as "Resolved".
- **Real-time Statistics:** Banner updates automatically with In-Progress and Resolved counts.
- **Toast Notifications:** Integrated `React-Toastify` for stylish alerts.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop views.

## 🛠️ Technology Stack

- **Framework:** React.js
- **Styling:** Tailwind CSS & DaisyUI
- **Icons/Notifications:** React-Toastify
- **Data Source:** JSON

## 📝 Assignment Questions & Answers

### 1. What is JSX, and why is it used?
JSX stands for JavaScript XML. It allows us to write HTML-like code directly inside JavaScript. It is used in React to make UI development easier and more readable by combining logic and structure in one place.

### 2. What is the difference between State and Props?
- **State:** Managed within the component, can be changed (mutable), and triggers a re-render when updated.
- **Props:** Passed from parent to child component, read-only (immutable), and used to share data between components.

### 3. What is the useState hook, and how does it work?
`useState` is a React Hook that lets you add state to functional components. It returns an array with two values: the current state value and a function to update it.

### 4. How can you share state between components in React?
State can be shared by "Lifting State Up" to the nearest common ancestor, or by using the Context API or state management libraries like Redux for larger applications.

### 5. How is event handling done in React?
React events are named using camelCase (e.g., `onClick` instead of `onclick`). In JSX, you pass a function as the event handler rather than a string.

## 🚀 Submission Details

- **Live Link:** https://github.com/tarikulhazra/Customer-Support-Ticket-System

- **GitHub Repository:** https://storied-unicorn-a3a119.netlify.app/