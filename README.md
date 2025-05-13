
# DianeStack 🚀

**DianeStack** is a Dockerized personal profile app built with **React**. It demonstrates:

- Frontend development using React.
- UI/UX design with custom CSS.
- Docker containerization.
- Static asset management and routing with React Router.

---

## 🌟 Features

- Beautiful landing page introducing “Diane” as a Cloud Security & DevOps Engineer.
- Navigation to login and register pages.
- Stylish UI with custom CSS.
- Fully containerized with Docker.

---

## 📂 Project Folder Structure

```
DianeStack/
├── Dockerfile
├── .dockerignore
├── package.json
├── public/
│   ├── index.html
│   └── diane.jpg
├── src/
│   ├── index.js
│   ├── App.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── HomePage.css
│   ├── Form.css
└── README.md
```

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
```

Creates a ready-to-use React app scaffold.

### 2. Install React Router DOM

```bash
npm install react-router-dom
```

Enables routing within the app for `/login` and `/register`.

### 3. Create & Style Components

- **HomePage.js**  
  Introduces Diane and links to login/register pages.

- **LoginPage.js & RegisterPage.js**  
  Simple forms styled in `Form.css`.

- **HomePage.css**  
  Modern UI styling with gradients, shadows, and hover effects.

- **Form.css**  
  Consistent styling for login and register pages.

### 4. App Routing – `App.js`

```javascript
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

export default App;
```

Handles client-side routing between pages.

### 5. Static Assets

Place the profile image at: `/public/diane.jpg`

Use it in components like:

```jsx
<img src="/diane.jpg" alt="Diane" />
```

---

## 🐳 Dockerization

### Dockerfile

```dockerfile
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
```

- 🔹 Multi-stage build: Optimized image size  
- 🔹 Uses `serve` to host the built React app  
- 🔹 Production-ready deployment (simple and lightweight)

### .dockerignore

```
node_modules
build
.dockerignore
Dockerfile
```

Prevents unnecessary files from bloating the container.

---

## 🧪 Running the App

### Locally without Docker

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

### With Docker

```bash
docker build -t dianestack .
docker run -p 3000:3000 dianestack
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ✅ What This Project Demonstrates

| Skill                         | Demonstrated By                             |
|------------------------------|---------------------------------------------|
| React Fundamentals           | Routing, Components, Props                  |
| UI/UX Design                 | Custom CSS, Responsive Layout               |
| Docker                       | Multi-stage Builds, Optimized Image         |
| Software Engineering Practices | Modular Code Structure, Containerization  |
| Deployment Readiness         | Production Hosting with Serve               |

---

## 📸 Screenshots



---

## 📦 Future Enhancements

- Add form validation
- Connect forms to a backend API
- Include real authentication
- Deploy using cloud platforms (e.g., Azure App Service, GCP Cloud Run)

---

## 🙌 Author

**Diane Ihezue**  
Cloud Security & DevOps Engineer  
🔗 [DianeStack GitHub](https://github.com/Dianes-Git)
