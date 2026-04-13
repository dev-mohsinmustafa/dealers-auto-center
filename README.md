# Dealers Auto Center - Full Stack Assessment

This repository contains the completed Front-End Developer task for Dealers Auto Center. It is built as a complete Full-Stack application to demonstrate an understanding of robust, clean architecture, both on the client and server side.

## 🏗 Architecture Overview

The codebase is organized into a monorepo containing two independent services:

### 1. `backend/` (Node.js & Express)
A mock API designed with an industry-standard layered architecture focusing on the absolute separation of concerns:
- **Controllers**: Strictly handle incoming requests and outgoing responses. No business logic exists here.
- **Services**: Orchestrate the business logic, mapping data, and executing operations (e.g., sorting/filtering logic).
- **Repositories**: Function as the data-access layer.
- **Middleware & Validations**: Independent payload schemas using Joi, ensuring requests are validated prior to hitting the controllers.
- **Utilities**: Centralized response wrappers, message constants, and HTTP status code dictionaries to keep the codebase perfectly DRY.

### 2. `frontend/` (React & Vite)
A highly responsive, premium UI built reflecting the requested deliverables:
- **Task 1 (Mini Dashboard)**: A cleanly styled grid view fetching data from the backend mock API. Features include a debounced text search, dropdown sorting functionalities, and comprehensive loading/error state handling.
- **Task 2 (User Input Flow)**: A robust registration form equipped with intricate inline validation, controlled inputs, and real-time mapping of backend error payloads.
- **State Management**: Built primarily with React Hooks (`useState`, `useEffect`, `useCallback`) and the **Context API** to avoid prop-drilling.
- **Styling**: Configured flawlessly using **Vanilla CSS Variables** and modular scoped classes (No external libraries like Tailwind or Bootstrap were utilized, demonstrating core CSS competency).

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Running the Backend Server
Navigate to the `backend` directory from the project root:
```bash
cd backend
npm install
npm start
```
*The backend server will instantiate on `http://localhost:5000`.*

### Running the Frontend Application
In a new terminal window, navigate to the `frontend` directory:
```bash
cd frontend
npm install
npm run dev
```
*The frontend application will spin up locally on `http://localhost:5173` (or the first available port provided by Vite).*

## ✨ Features Implemented
- Completely separated logic layers (Controllers/Routes/Services/Repositories).
- Centralized custom error handling and standardized JSON response formatting.
- Smooth CSS animations, box-shadowing, and backdrop filters for a premium modern aesthetic.
- Axios wrapper for HTTP requests with encapsulated logic.
- Debounced React hooks to prevent API spamming during user input.
