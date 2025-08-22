# SnackRush 🍔🍕🌭

A simple fast-food web application built with **Next.js 15** using the **App Router**. SnackRush allows users to browse products, view details, and manage products after authentication using **NextAuth.js**.

---

## Live Demo

[SnackRush Live](https://snack-rush.vercel.app/)

## Repository

[GitHub Repository](https://github.com/jeshankhan26/SnackRush.git)

---

## Project Description

SnackRush is a fast-food application where users can:

- View a landing page with product highlights
- Explore detailed information about each product
- Log in using social (Google) or credential-based authentication
- Access a protected dashboard to add new products after logging in

This project demonstrates **Next.js 15 features**, **NextAuth.js authentication**, and **protected routes** for a full-stack experience.

---

## Core Features

### 1. Landing Page (`/`)
- Contains: Navbar, Hero section, Product Highlights, Footer
- Navigation links to **Login** and **Products**
- Publicly accessible (no login required)

### 2. Login Page (`/login`)
- Implemented with **NextAuth.js**
- Supports social login (Google) or credentials
- Redirects users to `/products` after successful login

### 3. Product List Page (`/products`)
- Publicly accessible
- Fetches products from a mock backend or file
- Each product shows:
  - Name
  - Description
  - Price
  - Details button

### 4. Product Details Page (`/products/[id]`)
- Displays full details of a single product
- Publicly accessible

### 5. Protected Page: Add Product (`/dashboard/add-product`)
- Only accessible when logged in
- Form to add a new product and save it to the database
- Redirects unauthenticated users to `/login`

---

## Optional Enhancements
- Loading spinner when submitting forms
- Toast notifications on successful product addition
- Light/Dark theme toggle

---

## Technologies Used
- **Next.js 15** (App Router)
- **NextAuth.js** (Authentication)
- **Route Handlers (`/api`)** for backend
- Optional: Express.js server for fetching/creating product data

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/jeshankhan26/SnackRush.git
