# 🌐 GlobalConnect — Multilingual Full Stack Blogging Platform

GlobalConnect is a modern blog platform where users can write, search, and react to stories in multiple languages. Built with a powerful MERN stack plus Firebase for authentication, it’s fully responsive and packed with features like custom display names, emoji reactions, password resets, and more.

---

## 🎯 Aim

To give users from diverse regions a space to share ideas, showcase writing, and connect across languages — while helping developers master full stack architecture, authentication, and modern UI design.

---

💡 Features
📝 Post stories in multiple languages

🎭 Choose your own public display name

🔥 Emoji reactions on each blog

🔎 Search by title or author

🔐 Login / Signup / Password Reset

🌑 Dark mode friendly design

🚫 Handles network and form errors with clean UI

---

## 🛠️ Technologies Used

| Layer        | Stack                              |
|--------------|-------------------------------------|
| Frontend     | React + Tailwind CSS + Axios        |
| Backend      | Node.js + Express (v4)              |
| Database     | MongoDB + Mongoose                  |
| Auth         | Firebase Auth                       |
| UI Feedback  | React Toastify                      |
| Deployment   | Vercel / Render (suggested)         |

---

## 📁 Folder Structure

globalconnect/ 
├── client/ # React frontend │ 
      ├── pages/ 
            # LoginPage, SignupPage, ForgotPassword, etc. │ 
      ├── components/ 
            # BlogForm, BlogList, etc. │ 
      ├── utils/ # Firebase config │ 
            └── App.jsx # Main router and routes 
├── server/ # Express backend │ 
      ├── routes/ 
            # blogRoutes.js │ 
      ├── models/ 
            # Blog.js schema │ 
            └── server.js # Express app entry ├── README.md
---

---

## ⚙️ Installation

> 🧑‍💻 Recommended: Node.js ≥ v16, MongoDB running locally or via Atlas.

### 🔧 1. Clone the Repo

```bash
git clone https://github.com/your-username/globalconnect.git
cd globalconnect

🌐 2. Set Up the Backend
cd server
npm install

This will install the backend dependencies including:
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.3",
    "cors": "^2.8.5",
    "dotenv": "^16.1.4"
  }
}

Create .env in server/ with:
node server.js

If successful, you should see:
✅ Server running on port 5050
✅ MongoDB connected

----
🖥️ 3. Set Up the Frontend

cd ../client
npm install

This installs dependencies including:
{
  "dependencies": {
    "axios": "^1.6.7",
    "firebase": "^10.8.0",
    "react-toastify": "^9.2.2",
    "react-router-dom": "^6.17.0",
    "tailwindcss": "^3.4.1"
  }
}
---
🔐 4. Set Up Firebase
Go to Firebase Console:

Create a project

Enable Email/Password authentication

Add your Firebase config to client/utils/firebase.js:
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  // rest of config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// put your own values in firbaseConfig

---
🚀 5. Run the React App
npm start
Your frontend runs at: http://localhost:3000

Make sure MongoDB is running and backend is active on http://localhost:5050.
---
👩‍🏫 For Beginners
Want to start contributing? You can:

Build a "My Posts" dashboard

Add markdown support

Implement live previews

Expand language selection

----
📄 License
MIT © Anjeeta Rawat Created with ❤️ in 2025
