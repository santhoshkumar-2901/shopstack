# 🛍️ ShopStack

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue?logo=postgresql)
![License](https://img.shields.io/badge/License-MIT-yellow)

A modern full-stack product management application built with the **PERN Stack (PostgreSQL, Express.js, React, Node.js)**. ShopStack provides a clean and responsive interface for managing products with complete CRUD functionality.

---

## 🚀 Features

- ✨ Create new products
- 📦 View all products
- ✏️ Update product details
- 🗑️ Delete products
- 🎨 Responsive and modern UI
- 🌙 Dark/Light theme support
- 🔔 Toast notifications
- ⚡ Fast state management with Zustand
- 🗄️ PostgreSQL database
- 🌱 Database seeding

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Zustand
- React Router
- Axios
- Tailwind CSS
- DaisyUI
- Lucide React
- React Hot Toast

### Backend
- Node.js
- Express.js
- PostgreSQL
- Neon Database

---

## 📁 Project Structure

```text
ShopStack/
│
├── backend/
├── frontend/
├── screenshots/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/santhoshkumar-2901/shopstack.git
cd shopstack
```

### Install backend dependencies

```bash
cd backend
npm install
```

### Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=3000

DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```

---

## ▶️ Running the Project

Open two terminal windows.

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

---

## 🌱 Seed the Database

```bash
cd backend
node seeds/products.js
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

---

## 📸 Screenshots

### Home Page

![Home Page](./screenshots/Home.png)

### Product Page

![Home Page With Products](./screenshots/Home-Page-With-Products.png)

### Add Product Modal

![Add Product Modal](./screenshots/Add-Product-Modal.png)

### Edit Product

![Edit Product](./screenshots/Edit-Product.png)

### Delete Product Modal

![Delete Product Modal](./screenshots/Delete-Product-Modal.png)

---

## 🚀 Future Improvements

- User authentication
- Product search
- Product categories
- Pagination
- Image uploads
- Dashboard analytics
- Docker support
- Unit and integration testing
- CI/CD pipeline

---

## 🤝 Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Santhosh Kumar**

GitHub: https://github.com/santhoshkumar-2901
