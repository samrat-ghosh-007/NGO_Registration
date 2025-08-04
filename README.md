# 🌍 NGO Registration Backend API

A Node.js + Express backend for managing NGO registrations, authentication, and related operations. Built with MongoDB and deployed on Render.

---

## 🌐 Live Demo

The backend is deployed and running on Render:

🔗 [https://ngo-registration.onrender.com](https://ngo-registration.onrender.com)

Use tools like **Postman** to test the API endpoints.

---

## 🚀 Features

- NGO registration and login
- JWT-based authentication
- MongoDB (via Mongoose)
- Secure password hashing
- RESTful API architecture
- Environment-based configuration
- Ready for deployment (Render or Docker)

---

## 📁 Folder Structure

```bash
NGO-REGISTRATION/
├── config/ # Database and environment setup
├── controllers/ # Request handling logic
├── middleware/ # Authentication 
├── models/ # Mongoose schemas for NGO and others
├── routes/ # All API route definitions
├── .env # Environment variables (not committed)
├── .gitignore # Ignored files/folders (e.g., node_modules)
├── package-lock.json # Locked dependency versions
├── package.json # Project metadata and dependencies
├── server.js # Entry point of the app
└── README.md # This file
```

---


## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- Bcrypt (password hashing)
- Dotenv
- CORS

---

## 🔐 Environment Variables

Create a `.env` file in the root with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

---

## 📦 Installation & Setup

```bash
git clone https://github.com/your-username/ngo-registration-backend.git
cd ngo-registration-backend
npm install
npm run dev            # Start in development mode
```

---


## 🧪 API Endpoints

| Method | Endpoint                                     | Description                                 |
|--------|----------------------------------------------|---------------------------------------------|
| POST   | `/api/register`                              | Register to NGO                             |
| POST   | `/api/login`                                 | NGO login (get JWT token)                   |
| GET    | `/api/users`                                 | Get NGO member detail (auth and admins only)|

---

## 🚀 Deployment

🟣 On Render:

Push code to GitHub

Create a new Web Service on Render

Set:

Build Command: `npm install`

Start Command: `npm start`

Environment: `Add MONGO_URI, JWT_SECRET, NODE_ENV`

Deploy and test!

---

## 🧪 API Testing with Postman

This project includes a Postman collection for testing the NGO Registration API.

### 🔗 Collection Overview

The collection contains the following requests:
- ✅ **Registering User** – `POST /api/register`
- 🔐 **Login User** – `POST /api/login`
- 👤 **Get All Users (Admin Only)** – `GET /api/users` (requires JWT token)

### 📁 How to Use

1. Open Postman.
2. Click on `Import` and upload the file: NGO_API.postman_collection.json
3. Set an environment variable for the JWT token:
- Go to `Environment > Add`:
  ```text
  Variable: jwt_token
  Initial Value: <paste your token here>
  ```
4. For the `GET /api/users` request, make sure to:
- Use this header:
  ```http
  Authorization: Bearer {{jwt_token}}
  ```

---



## 📄 License

MIT License

---

## 🙌 Acknowledgements

Express.js

MongoDB Atlas

Render

---

This project is submitted as part of a technical internship task.  
Developed by **Samrat Ghosh**.
