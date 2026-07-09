# 🛍️ ShopStack
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://shopstack-885w.onrender.com)
[![Source Code](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/santhoshkumar-2901/shopstack)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-yellow)

A modern full-stack **Product Management System** built with the **PERN Stack (PostgreSQL, Express.js, React, Node.js)**. ShopStack allows users to manage products through a clean, responsive interface with complete CRUD functionality and persistent PostgreSQL storage.

## 🔗 Live Demo

🌐 **Live Website:** https://shopstack-885w.onrender.com

---

## ✨ Features

- ✅ Create products
- ✅ View all products
- ✅ Edit product details
- ✅ Delete products
- ✅ Responsive UI
- ✅ Dark & Light mode
- ✅ Toast notifications
- ✅ Zustand state management
- ✅ RESTful API
- ✅ PostgreSQL (Neon Database)
- ✅ Error handling
- ✅ Database seeding

---

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- Zustand
- Axios
- React Router
- Tailwind CSS
- DaisyUI
- Lucide React
- React Hot Toast

### Backend

- Node.js
- Express.js
- PostgreSQL
- Neon Database

### Deployment

- Platform: Render
- Database: Neon PostgreSQL

---

## 📂 Folder Structure

```text
ShopStack/
│
├── backend/
├── frontend/
├── screenshots/
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/santhoshkumar-2901/shopstack.git
cd shopstack
```

### Install Backend

```bash
cd backend
npm install
```

### Install Frontend

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3000

DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```

---

## ▶️ Run Locally

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

---

## 🌱 Seed Database

```bash
cd backend
node seeds/products.js
```

---

## 📡 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Fetch all products |
| GET | `/api/products/:id` | Fetch single product |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

---

## 📸 Screenshots

### Home

![Home](./screenshots/Home.png)

### Product List

![Products](./screenshots/Home-Page-With-Products.png)

### Add Product

![Add Product](./screenshots/Add-Product-Modal.png)

### Edit Product

![Edit Product](./screenshots/Edit-Product.png)

### Delete Product

![Delete Product](./screenshots/Delete-Product-Modal.png)

---

## 🚀 Future Enhancements

- User Authentication (JWT)
- Product Search
- Product Categories
- Image Uploads
- Pagination
- Dashboard Analytics
- Docker Support
- Unit & Integration Testing
- CI/CD Pipeline

---

## 👨‍💻 Author

**Santhosh Kumar**

GitHub: https://github.com/santhoshkumar-2901

LinkedIn: https://linkedin.com/in/s-santhosh-kumar-dev

Portfolio: https://portfolio-six-ashy-33.vercel.app

---

## 📄 License

Licensed under the MIT License.
