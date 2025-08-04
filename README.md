# 🌍 NGO Registration Backend API

A Node.js + Express backend for managing NGO registrations, authentication, and related operations. Built with MongoDB and deployed on Render.

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

NGO REGISTRATION/
├── config/              
├── controllers/          
├── middleware/                
├── models/           
├── routes/                
├── .env                    
├── .gitignore
├── package-lock.json
├── package.json
├── server.js
└── README.md

---


---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- Bcrypt (password hashing)
- Dotenv
- CORS, Helmet, Morgan

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

Build Command: npm install

Start Command: npm start

Environment: Add MONGO_URI, JWT_SECRET, NODE_ENV

Deploy and test!

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
