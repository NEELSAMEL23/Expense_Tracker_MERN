<h1 align="center">💰 Expense Tracker (MERN Stack)</h1>

<p align="center">
A full-stack <b>Expense Tracker</b> built with <b>MongoDB, Express.js, React, and Node.js</b>.<br>
Track incomes & expenses, view charts, and download reports — all in a responsive, user-friendly interface.
</p>

<p align="center">
  <a href="https://expense-tracker-mern-ttwh.vercel.app"><img src="https://img.shields.io/badge/Frontend-Live%20Demo-blue?style=for-the-badge&logo=react" alt="Live Demo"></a>
  <a href="https://expense-tracker-mern-ttwh.onrender.com"><img src="https://img.shields.io/badge/Backend-Live%20API-green?style=for-the-badge&logo=node.js" alt="Live API"></a>
</p>

---

## 🚀 Features

### **Frontend**
- 🔐 **User Authentication** — Register, Login, and Logout.
- 💵 **Income Management** — Add, View, Delete, and Download income data.
- 💳 **Expense Management** — Add, View, Delete, and Download expense data.
- 📊 **Dashboard Overview** — Charts and summaries of financial data.
- 📜 **Recent Transactions** — Quick view of latest income & expenses.
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop.
- 🛡 **Protected Routes** — Accessible only to logged-in users.

### **Backend**
- 🗄 **REST API** with Express.js.
- 🛢 **MongoDB** for persistent data storage.
- 🔑 **JWT Authentication** & **bcryptjs** password hashing.
- 📥 **CSV Download** — Export income & expense data.
- ⚠ **Error Handling Middleware**.

---

## 🛠 Tech Stack

| **Frontend** | **Backend** |
|--------------|-------------|
| React ^19.1.0 | Node.js |
| React Router DOM ^7.8.0 | Express.js |
| Tailwind CSS ^4.1.11 (+ @tailwindcss/vite) | MongoDB + Mongoose |
| Axios ^1.11.0 | JWT Authentication |
| Recharts ^3.1.2 | bcryptjs |
| React Icons ^5.5.0 | dotenv |
| Lucide React ^0.536.0 | cors |
| Emoji Picker React ^4.13.2 |  |

---

## 📂 Folder Structure

```plaintext
EXPENSE_TRACKER_MERN/
│
├── backend/
│   ├── config/              # Database connection
│   ├── controllers/         # Route handlers (auth, income, expense, dashboard)
│   ├── middleware/          # Auth & error handling
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── utils/               # Helper functions (file download, etc.)
│   ├── .env                 # Environment variables
│   ├── server.js            # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Navbar, Footer, Sidebar
│   │   ├── context/         # Auth, Income, Expense, Dashboard contexts
│   │   ├── layouts/         # Layout wrapper
│   │   ├── Pages/           # Auth, Dashboard, Income, Expense pages
│   │   ├── Services/        # API calls
│   │   ├── utils/           # Protected routes
│   │   ├── App.jsx          # Root component
│
└── README.md
