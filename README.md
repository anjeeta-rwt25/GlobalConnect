# 🌍 GlobalConnect

> A full-stack web application that enables users to **connect, share blogs, and translate content across multiple languages**.  
Built with **Node.js + Express (backend)** and **React + TailwindCSS (frontend)**, with Firebase authentication support.

---

# 📂 Project Structure

📦 GlobalConnect
│
├─ 📁 server                 (Backend server - Node.js + Express + MongoDB)
│  ├─ 📁 models
│  │  └─ Blog.js             # Blog schema/model
│  ├─ 📁 routes
│  │  └─ blogRoutes.js       # Blog API endpoints
│  ├─ 📁 services
│  │  └─ translate.js        # Translation service logic
│  ├─ server.js              # Express server entry point
│  ├─ .env                   # Environment variables
│  └─ package.json           # Backend dependencies & scripts
│
├─ 📁 client                 (Frontend - React + TailwindCSS + Firebase)
│  ├─ 📁 src
│  │  ├─ 📁 components
│  │  │  ├─ Navbar.jsx       # Top navigation bar
│  │  │  └─ LanguageSelector.jsx # Language switcher
│  │  ├─ 📁 pages
│  │  │  ├─ Home.jsx         # Home page
│  │  │  ├─ Login.jsx        # Login page
│  │  │  ├─ Signup.jsx       # Signup/registration page
│  │  │  ├─ ForgotPassword.jsx # Reset password page
│  │  │  ├─ BlogForm.jsx     # Create blog page
│  │  │  └─ BlogList.jsx     # Blog listing page
│  │  ├─ 📁 utils
│  │  │  ├─ firebase.js      # Firebase authentication config
│  │  │  └─ translator.js    # Translation helper
│  │  ├─ App.js              # Root React component
│  │  ├─ index.js            # React entry point
│  │  ├─ App.css             # Component styles
│  │  └─ index.css           # Global styles
│  ├─ tailwind.config.js     # Tailwind CSS configuration
│  ├─ postcss.config.js      # PostCSS configuration
│  └─ package.json           # Frontend dependencies & scripts
│
├─ 📁 build                  (Production-ready frontend build - auto-generated)
│  ├─ index.html             # Compiled frontend entry point
│  ├─ favicon.ico            # Favicon
│  ├─ manifest.json          # PWA manifest
│  ├─ robots.txt             # SEO/robots rules
│  ├─ globalconnect.png      # App logo
│  └─ 📁 static              # Minified JS & CSS bundles
│
└─ README.md                 # Project documentation


---

## ✨ Features

- 🔐 **Authentication** with Firebase (Login, Signup, Forgot Password)  
- 📝 **Blog System** (create, view, list blogs)  
- 🌐 **Language Translation** support using external API  
- 🎨 **Modern UI** with TailwindCSS  
- 📱 **Responsive Design** for mobile & desktop  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/anjeeta-rwt25/GlobalConnect.git
cd GlobalConnect

Backend Setup (Server)
cd server
npm install


Create a .env file inside server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
TRANSLATE_API_KEY=your_translation_api_key


Run the backend:

npm start

3️⃣ Frontend Setup (Client)
cd client
npm install
npm start

4️⃣ Build Frontend for Production
npm run build

🔑 Environment Variables

Backend (server/.env)

PORT → Server port (default: 5000)
MONGO_URI → MongoDB connection string
TRANSLATE_API_KEY → API key for translation service

**Frontend (client/src/utils/firebase.js)

Firebase project credentials:

apiKey
authDomain
projectId
storageBucket
messagingSenderId
appId

🛠️ Tech Stack

Frontend: ⚛️ React, 🎨 TailwindCSS, 🔥 Firebase, ⚙️ PostCSS

Backend: 🟢 Node.js, 🚀 Express.js, 🍃 MongoDB, 🌐 Translation API

Other: 🔑 JWT/Auth, 🌍 REST APIs, ⚡ CRA build


📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Developed with ❤️ by Anjeeta Rawat
