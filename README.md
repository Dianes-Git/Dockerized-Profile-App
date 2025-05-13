
# DianeStack 🚀

**DianeStack** is a Dockerized personal profile app built with **React**. This project serves as a practical demonstration of:
- Frontend development using React.
- UI/UX design with custom CSS.
- Docker containerization.
- Static asset management and routing with React Router.

---

## 🌟 Features

- A beautiful landing page introducing “Diane” as a Cloud Security & DevOps Engineer.
- Navigation options to login and register pages.
- Stylish UI with CSS enhancements.
- Fully containerized with Docker.

---

## 🛠️ Technologies Used

- React.js (via Create React App)
- React Router DOM
- Custom CSS (no UI libraries)
- Docker

---

## 🧩 Step-by-Step Project Setup

### 1. Initialize React App

```bash
npx create-react-app .
This creates a ready-to-use React app scaffold.

### 2. Install React Router DOM
bash
Copy
Edit
npm install react-router-dom
Enables routing within the app for /login and /register.

### 3. Create & Style Components
HomePage.js
Introduces the developer (Diane) and links to login/register routes.

LoginPage.js & RegisterPage.js
Simple forms styled in Form.css.

HomePage.css
Modern UI style with gradients, shadows, and hover effects.

Form.css
Consistent styling for login and register pages.

### 4. App Routing – App.js
javascript
Copy
Edit
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
Handles client-side routing between pages.

### 5. Static Assets
Include a profile image in /public/diane.jpg.

React will serve this via <img src="/diane.jpg" />.

## 🐳 Dockerization
Dockerfile
dockerfile
Copy
Edit
# Step 1: Base image
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve build with a simple static server
FROM node:18-alpine

RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
🔹 Multi-stage build: Optimized image size
🔹 Uses serve to host the built static React app
🔹 Production-ready deployment without NGINX (intentionally simple)

.dockerignore
dockerignore
Copy
Edit
node_modules
build
.dockerignore
Dockerfile
Ensures unused files don't bloat the container.

### 🧪 Running the App
Locally without Docker:
bash
Copy
Edit
npm start
Runs on http://localhost:3000

### With Docker:
bash
Copy
Edit
docker build -t dianestack .
docker run -p 3000:3000 dianestack
Access at http://localhost:3000

### ✅ What This Project Demonstrates
Skill	Demonstrated By
React Fundamentals	Routing, Components, Props
UI/UX Design	Custom CSS, responsive layout
Docker	Multi-stage builds, optimized image
Software Engineering Best Practices	Modular code structure, containerization
Deployment-Readiness	Production-ready static hosting via serve

### 📸 Screenshots
View	Description
HomePage	Welcomes users, shows Diane’s profile, with Login/Register buttons
Login	Simple styled login form
Register	Simple styled register form
Docker Run	Shows app running in container at port 3000

### 📂 Future Enhancements
🔹 Add form validation
🔹 Connect forms to a backend API
🔹 Include real authentication
🔹 Deploy using cloud platforms (e.g., Azure App Service, GCP Cloud Run)

### 🙌 Author
**Diane Ihezue** Cloud Security & DevOps Engineer | [DianeStack](https://github.com/Dianes-Git)



