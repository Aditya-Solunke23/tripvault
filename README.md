# 🗺️ TripVault

TripVault is a full-stack travel memory journal developed as part of the CodGen Virtual Internship Program.

The Week 1 implementation focuses on project setup and secure user authentication.

## 🚀 Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token
- CORS
- dotenv

## ✨ Week 1 Features

- User registration
- Secure password hashing using bcrypt
- User login
- JWT authentication
- Protected `/api/auth/me` route
- Protected dashboard
- Logout
- MongoDB Atlas integration
- React Router navigation
- Frontend-backend communication using Axios

## 📁 Project Structure

```text
tripvault/
│
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── api.js
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── index.js
│
└── README.md