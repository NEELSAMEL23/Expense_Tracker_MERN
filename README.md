# 💰 Expense Tracker (MERN Stack)

<p align="center">
  A full-stack <b>Expense Tracker</b> built with <b>MongoDB, Express.js, React, and Node.js</b>.<br>
  Track income & expenses, view dashboard stats, and export Excel reports — with JWT authentication and Cloudinary avatar uploads.
</p>

<p align="center">
  <a href="https://expense-tracker-mern-jet.vercel.app/" target="_blank">🌐 Live Frontend</a> |
  <a href="https://expense-tracker-mern-ttwh.onrender.com" target="_blank">⚙ Backend API</a>
</p>

---

## 🚀 Features

### **Frontend**

* 🔐 **User Authentication** — Register, Login, Logout
* 🖼 **Avatar Upload** on Registration (Cloudinary)
* 💵 **Income Management** — Add, View, Delete, Export to Excel
* 💳 **Expense Management** — Add, View, Delete, Export to Excel
* 📊 **Dashboard Overview** — Total income, total expense, balance, recent transactions
* 📜 **Recent Transactions** — Merged income & expenses sorted by date
* 📱 **Responsive UI** with Tailwind CSS
* 🛡 **Protected Routes** with JWT

### **Backend**

* 🗄 REST API with **Express.js**
* 🛢 **MongoDB + Mongoose** for database
* 🔑 **JWT Authentication** + bcrypt password hashing
* 🖼 **Cloudinary** image uploads for avatars
* 📥 **Excel Export** for income & expenses (ExcelJS)
* ⚠ **Centralized Error Handling** with middleware
* 📂 **Multer & express-fileupload** for handling files

---

## 🛠 Tech Stack

| **Frontend**                               | **Backend**                |
| ------------------------------------------ | -------------------------- |
| React ^19.1.0                              | Node.js                    |
| React Router DOM ^7.8.0                    | Express.js ^5.1.0          |
| Tailwind CSS ^4.1.11 (+ @tailwindcss/vite) | MongoDB + Mongoose ^8.17.1 |
| Axios ^1.11.0                              | JWT (jsonwebtoken ^9.0.2)  |
| Recharts ^3.1.2                            | bcryptjs ^3.0.2            |
| React Icons ^5.5.0                         | dotenv ^17.2.1             |
| Lucide React ^0.536.0                      | cors ^2.8.5                |
| Emoji Picker React ^4.13.2                 | cookie-parser ^1.4.7       |
|                                            | multer ^2.0.2              |
|                                            | express-fileupload ^1.5.2  |
|                                            | exceljs ^4.4.0             |
|                                            | cloudinary ^2.7.0          |

---

## 📂 Folder Structure

```
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── income.controller.js
│   │   ├── expense.controller.js
│   │   └── dashboard.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── income.model.js
│   │   └── expense.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── income.routes.js
│   │   ├── expense.routes.js
│   │   └── dashboard.routes.js
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Navbar, Footer, Sidebar
│   │   ├── context/         # Auth, Income, Expense, Dashboard contexts
│   │   ├── layouts/         # Layout wrapper
│   │   ├── Pages/           # Auth, Dashboard, Income, Expense pages
│   │   ├── Services/        # API calls
│   │   ├── utils/           # Protected routes
│   │   ├── App.jsx          # Root component
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 📦 Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

2️⃣ **Install dependencies**

```bash
# Backend
tcd backend
npm install

# Frontend
cd ../frontend
npm install
```

3️⃣ **Run the application**

```bash
# Backend
node server.js

# Frontend
npm run dev
```

---

## 📡 API Endpoints

### Auth

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |
| POST   | `/api/auth/logout`   | Logout user         |

### Income

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/income`        | Add income              |
| GET    | `/api/income`        | Get all incomes         |
| DELETE | `/api/income/:id`    | Delete income           |
| GET    | `/api/income/export` | Export incomes to Excel |

### Expense

| Method | Endpoint              | Description              |
| ------ | --------------------- | ------------------------ |
| POST   | `/api/expense`        | Add expense              |
| GET    | `/api/expense`        | Get all expenses         |
| DELETE | `/api/expense/:id`    | Delete expense           |
| GET    | `/api/expense/export` | Export expenses to Excel |

### Dashboard

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/api/dashboard` | Get dashboard data |
