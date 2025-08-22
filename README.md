# 🪑 FurniSpace (Next.js + MongoDB)

A modern furniture e-commerce web application built with **Next.js 15 (App Router)**, **MongoDB**, and **TailwindCSS/DaisyUI**.  
It allows users to browse products, view details, and authenticated users can add new products from a protected dashboard.

---

## 🚀 Features

- Browse all available products from the database
- View individual product details
- Authentication (NextAuth.js)
- Protected **Route** for managing products
- Add products dynamically (stored in MongoDB)

---

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/MughniRayhan/FurniSpace
cd furni-space
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a .env.local file in the root with the following:

MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_mongodb_db_name
NEXTAUTH_SECRET=your_random_generated_secret

### 4. Run the development server

```bash
npm run dev
```

| Route                    | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| `/`                      | Home page (intro, highlights, navigation)             |
| `/products`              | Displays all products from `test_products` collection |
| `/products/[id]`         | Dynamic product details page                          |
| `/login`                 | Login page (NextAuth.js)                              |
| `/register`              | register page (NextAuth.js)                           |
| `/dashboard/add-product` | Protected form to add new products                    |
| `/api/products`          | API endpoint to add products (POST)                   |

📌 Tech Stack

Frontend: Next.js 15, React, TailwindCSS, DaisyUI
Backend: Next.js API routes, MongoDB
Auth: NextAuth.js
Database: MongoDB Atlas
