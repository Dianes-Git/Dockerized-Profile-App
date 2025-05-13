
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

### ✅ 1. **Create Your Project Folder**

```bash
mkdir dianestack
cd dianestack
```

### ✅ 2. **Initialize a React App**

```bash
npx create-react-app .
```

- This will create folders like `src`, `public`, `package.json`, etc.

### ✅ 3. **Folder Structure After Creation**

```
profile-app/
 ├── public/
 ├── src/
 ├── package.json
 ├── README.md
 └── etc...
```

### ✅ 4. **Add Your Picture**

- Copy your `diane.jpg` into the `public` folder.

```bash
cp /Users/diane/Desktop/diane.jpg public/diane.jpg
```

### ✅ 5. **Update App Files**

You’ll now modify files in the `src` folder.

---

## 📂 **Create Pages Folder**

```bash
mkdir src/pages
```

### ✅ 6. **Create HomePage Component**

```bash
vi src/pages/HomePage.js
```

Press `i` to enter insert mode and paste this:

```jsx
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <div className="profile-card">
        <h1>Hello, I'm Nwachukwu Uchechi Modesta</h1>
        <h2>Cloud Security & DevOps Engineer</h2>
        <img src="/modesta.jpg" alt="Modesta" className="profile-pic" />
        <p>Welcome to my personal profile app deployed with Docker!</p>
        <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
```

Press `Esc`, then type `:wq` to save & exit.

---

### ✅ 7. **Create Login Page**

```bash
vi src/pages/LoginPage.js
```

Paste this:

```jsx
import React from 'react';
import './Form.css';

const LoginPage = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
```

Save with `:wq`.

---

### ✅ 8. **Create Register Page**

```bash
vi src/pages/RegisterPage.js
```

Paste this:

```jsx
import React from 'react';
import './Form.css';

const RegisterPage = () => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
```

Save with `:wq`.

---

## ✅ 9. **Update App.js for Routing**

```bash
vi src/App.js
```

Paste this: (replace content with this)

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

Save with `:wq`.

---

## ✅ 10. **Install React Router**

```bash
npm install react-router-dom
```

---

## ✅ 11. **Create CSS Files**

### HomePage.css

```bash
vi src/pages/HomePage.css
```

Paste this:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

/* rest omitted for brevity */
```

### Form.css

```bash
vi src/pages/Form.css
```

Paste this:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* rest omitted for brevity */
```

---

## ✅ 12. **Test Locally**

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000/)

---

## ✅ 13. **Create Dockerfile**

```bash
vi Dockerfile
```

Paste this:

```
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

---

## ✅ 14. **Create .dockerignore**

```bash
vi .dockerignore
```

Paste this:

```
node_modules
build
.dockerignore
Dockerfile
.git
.gitignore
npm-debug.log
```

---

## ✅ 15. **Build Docker Image**

```bash
docker build -t modesta/profile-app .
```

---

## ✅ 16. **Run the App in Docker**

```bash
docker run -dp 3000:3000 modesta/profile-app
```

Visit: [http://localhost:3000](http://localhost:3000/)

---

## ✅ 17. **Push to Docker Hub (Optional)**

If you want:
```bash
docker tag modesta/profile-app:latest yourusername/profile-app:latest
docker push yourusername/profile-app:latest
```


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
