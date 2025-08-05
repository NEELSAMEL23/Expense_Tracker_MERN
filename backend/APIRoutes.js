// ==========================
// Sample API Routes with Sample Data (Expense Tracker Backend)
// ==========================

// 1️⃣ Register User
// POST /api/auth/register
// Content-Type: multipart/form-data
// Body:
// {
//   name: "Neel Samel",
//   email: "neel@example.com",
//   password: "123456",
//   avatar: (image file)
// }

// 2️⃣ Login User
// POST /api/auth/login
// Body:
// {
//   "email": "neel@example.com",
//   "password": "123456"``
// }
// Response:
// {
//   _id: "66b0b83b1234567890abcd12",
//   name: "Neel Samel",
//   email: "neel@example.com",
//   avatar: "https://res.cloudinary.com/neelsamel/...",
//   token: "eyJhbGciOiJI..."
// }

// 3️⃣ Get Profile (Requires Token)
// GET /api/auth/profile
// Headers: Authorization: Bearer <token>

// 4️⃣ Add Income
// POST /api/income/add
// Headers: Authorization: Bearer <token>
// Body:
// {
//   "icon": "💰",
//   "source": "Salary",
//   "amount": "50000",
//   "date": "2025-08-05"
// }

// 5️⃣ Get All Incomes
// GET /api/income/
// Headers: Authorization: Bearer <token>

//  6️⃣ Download Income Excel
// GET /api/income/download  ------------- "Send" button and choose:👉 Send and Download
// Headers: Authorization: Bearer <token>
// Response: Downloadable .xlsx file

// 7️⃣ Add Expense
// POST /api/expense/add
// Headers: Authorization: Bearer <token>
// Body:
// {
//   icon: "🍕",
//   category: "Food",
//   amount: 250,
//   date: "2025-08-05"
// }

// 8️⃣ Get All Expenses
// GET /api/expense/download
// Headers: Authorization: Bearer <token>

// 9️⃣ Delete Income
// DELETE /api/income/66b0c92e1234567890abcd45
// Headers: Authorization: Bearer <token>

// 11️⃣ Delete Expense
// DELETE /api/expense/66b0c9351234567890abcd99
// Headers: Authorization: Bearer <token>

// 🔟 Download Expense Excel
// GET /api/expense/download
// Headers: Authorization: Bearer <token>
// Response: Downloadable .xlsx file

// 12️⃣ Dashboard Summary
// GET /api/dashboard/
// Headers: Authorization: Bearer <token>
// Response:
// {
//   totalIncome: 50000,
//   totalExpense: 250,
//   balance: 49750
// }