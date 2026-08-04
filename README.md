<h1 align="center">🛒 Grocery Delivery App</h1>

<p align="center">
A Full-Stack Grocery Delivery Platform built with React, Express, Prisma and PostgreSQL.
</p>

<p align="center">
  <a href="https://grocery-delivery-delta-ten.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit-success?style=for-the-badge">
  </a>

  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge">
  </a>
</p>

**Version:** 1.0.0  
**Author:** Ajitesh Dakua

A full-stack grocery delivery application built with a React + TypeScript + Vite frontend and an Express + Prisma + PostgreSQL backend. The app includes customer shopping, cart and checkout flows, address management, order tracking, delivery partner workflows, and admin panels for managing products and orders.

## Live Demo

- Frontend: https://grocery-delivery-delta-ten.vercel.app/
- Backend API: https://grocery-delivery-server-wine-theta.vercel.app/

## Project Structure

```text
Grocery Delivery App/
  client/   # React frontend
  server/   # Express backend, Prisma, integrations
```

## Architecture

```mermaid
flowchart LR
  User[Customer / Admin / Delivery Partner] --> UI[Frontend: React + Vite]
  UI --> API[Backend: Express API]
  API --> DB[(PostgreSQL + Prisma)]
  API --> Cloudinary[Cloudinary]
  API --> Stripe[Stripe]
  API --> Mail[Nodemailer / SMTP]
  API --> Inngest[Inngest Jobs]
  Stripe --> API
```

The frontend calls the backend through `VITE_BASE_URL`. The backend reads and writes data through Prisma, then connects to third-party services for media uploads, payments, email notifications, and background tasks.

## 📸 Screenshots

Explore the key interfaces of the Grocery Delivery App.

| Homepage | Admin Dashboard |
|----------|-----------------|
| <img src="client/src/assets/home_page_demo.png" alt="Homepage" width="100%"> | <img src="client/src/assets/admin_dashboard.png" alt="Admin Dashboard" width="100%"> |

| Delivery Partner Portal |
|-------------------------|
|<img src="client/src/assets/Delivery_partner_Portal.png" alt="Delivery Partner Portal" width="100%"> |

### Homepage
The landing page showcases featured products, categories, navigation, and promotional banners for customers.

### Admin Dashboard
The admin dashboard enables administrators to manage products, orders, customers, delivery partners, and view business analytics.

### Delivery Partner Portal
The delivery partner portal allows partners to view assigned deliveries, update delivery status, and manage live delivery tracking.

## 🖥️ Client

The frontend application is located in `client/` and is built with:

<p align="left">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Hot_Toast-FF6B6B?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white" />
</p>

---

## ⚙️ Server

The backend application is located in `server/` and is built with:

<p align="left">
  <img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Nodemailer-30B980?style=for-the-badge&logo=maildotru&logoColor=white" />
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" />
  <img src="https://img.shields.io/badge/Inngest-000000?style=for-the-badge" />
</p>

# 🔗 API Endpoints

The backend exposes RESTful APIs for authentication, product management, order processing, delivery tracking, and administrative operations.

---

<details>
<summary><strong>🔐 Authentication</strong></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate a user |

</details>

---

<details>
<summary><strong>🛍️ Products</strong></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Retrieve all products |
| `GET` | `/api/products/:id` | Retrieve a product by ID |
| `GET` | `/api/products/flash-deals` | Retrieve flash deal products |
| `POST` | `/api/products` | Create a new product *(Admin only)* |
| `PUT` | `/api/products/:id` | Update a product *(Admin only)* |
| `DELETE` | `/api/products/:id` | Delete a product *(Admin only)* |

</details>

---

<details>
<summary><strong>📍 Addresses</strong></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/addresses` | Retrieve saved addresses |
| `POST` | `/api/addresses` | Add a new address |
| `PUT` | `/api/addresses/:id` | Update an existing address |
| `DELETE` | `/api/addresses/:id` | Delete an address |

</details>

---

<details>
<summary><strong>📦 Orders</strong></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/orders` | Create a new order |
| `GET` | `/api/orders` | Retrieve the logged-in user's orders |
| `GET` | `/api/orders/:id` | Retrieve order details |
| `GET` | `/api/orders/:id/location` | Get live delivery location |
| `GET` | `/api/orders/all` | Retrieve all orders *(Admin only)* |
| `PUT` | `/api/orders/:id/status` | Update order status *(Admin only)* |

</details>

---

<details>
<summary><strong>👨‍💼 Admin</strong></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/admin/stats` | Retrieve dashboard statistics |
| `GET` | `/api/admin/delivery-partners` | Retrieve all delivery partners |
| `POST` | `/api/admin/delivery-partners` | Create a delivery partner |
| `PUT` | `/api/admin/delivery-partners/:id` | Update delivery partner details |
| `PUT` | `/api/admin/order/:id/assign` | Assign a delivery partner to an order |

</details>

---

<details>
<summary><strong>🚚 Delivery Partner</strong></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/delivery/login` | Delivery partner login |
| `GET` | `/api/delivery/my-deliveries` | Retrieve assigned deliveries |
| `GET` | `/api/delivery/my-deliveries/:id` | Retrieve delivery details |
| `PUT` | `/api/delivery/my-deliveries/:id/complete` | Mark delivery as completed |
| `PUT` | `/api/delivery/my-deliveries/:id/cancel` | Cancel a delivery |
| `PUT` | `/api/delivery/my-deliveries/:id/status` | Update delivery status |
| `PUT` | `/api/delivery/my-deliveries/:id/location` | Update live delivery location |

</details>

---

<details>
<summary><strong>☁️ Upload & Webhooks</strong></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/upload` | Upload images to Cloudinary |
| `POST` | `/api/stripe` | Handle Stripe webhooks |

</details>

---

<details>
<summary><strong>⚡ Inngest</strong></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/inngest` | Process background jobs and events |

</details>

# 👥 User Roles

The system supports three user roles, each with different permissions and responsibilities.

| Role | Responsibilities |
|------|------------------|
| 🛒 **Customer** | Browse products, manage addresses, add items to cart, place orders, make payments, and track deliveries in real time. |
| 👨‍💼 **Admin** | Manage products, orders, customers, delivery partners, dashboard analytics, and system operations. |
| 🚚 **Delivery Partner** | View assigned deliveries, update delivery status, share live location, and complete deliveries. |

# ✨ Project Features

The application is organized into multiple functional modules.

---

<details>
<summary><strong>🔐 Authentication Module</strong></summary>

- User Registration & Login
- JWT Authentication
- Role-Based Access Control (RBAC)
- Protected Frontend & Backend Routes
- Secure Session Management

</details>

---

<details>
<summary><strong>🛍️ Product Catalog Module</strong></summary>

- Browse Product Catalog
- Product Details
- Flash Deals
- Search & Filter Products
- Responsive Shopping Experience

</details>

---

<details>
<summary><strong>🛒 Cart & Checkout Module</strong></summary>

- Add & Remove Cart Items
- Update Item Quantity
- Address Selection
- Checkout Summary
- Stripe Payment Integration

</details>

---

<details>
<summary><strong>📦 Orders & Tracking Module</strong></summary>

- Place Orders
- Order History
- Order Details
- Live Delivery Tracking
- OTP-Based Delivery Verification
- Delivery Progress Updates

</details>

---

<details>
<summary><strong>👨‍💼 Admin Module</strong></summary>

- Dashboard & Analytics
- Product Management
- Order Management
- Delivery Partner Assignment
- User Management
- Inventory Control

</details>

---

<details>
<summary><strong>🚚 Delivery Partner Module</strong></summary>

- Secure Delivery Login
- Assigned Deliveries
- Live Location Updates
- Delivery Status Updates
- Order Completion & Cancellation

</details>

---

<details>
<summary><strong>☁️ Integrations Module</strong></summary>

- Cloudinary Image Upload
- Stripe Payment Gateway
- Nodemailer Email Notifications
- Inngest Background Jobs
- Prisma ORM & PostgreSQL Database

</details>

## Main Features

- User authentication and protected routes
- Product browsing and search
- Cart management
- Checkout and payment flow
- Address CRUD and delivery selection
- Order history and live order tracking
- Delivery partner dashboard and OTP flow
- Admin dashboard for products, orders, and delivery partners
- Image upload and cloud storage support

## Important Files and Folders

### Client files

- `client/src/main.tsx` - application entry point
- `client/src/App.tsx` - top-level app routing and layout
- `client/src/config/api.ts` - API client configuration
- `client/src/context/` - auth and cart state management
- `client/src/components/` - reusable UI components
- `client/src/pages/` - application pages and role-based dashboards
- `client/src/types/` - shared TypeScript types

### Server files

- `server/server.ts` - Express server entry point
- `server/prisma/schema.prisma` - database schema
- `server/seed.ts` - seed script
- `server/config/` - Cloudinary, Nodemailer, and Prisma setup
- `server/controllers/` - request handlers
- `server/middleware/` - auth and role protection
- `server/Routes/` - API route definitions
- `server/inngest/` - background event workflows

## Prerequisites

- Node.js 18 or newer
- npm
- A PostgreSQL database or compatible database URL
- Stripe account credentials
- Cloudinary account credentials
- SMTP credentials for transactional email

# 🔐 Environment Variables

Before running the project, create the required environment files for both the frontend and backend.

---

## 🖥️ Client Environment (`client/.env`)

Create a `.env` file inside the `client/` directory and configure the following variables.

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_BASE_URL` | Backend API base URL | `http://localhost:3000/api` |
| `VITE_CURRENCY_SYMBOL` | Currency symbol displayed in the UI | `₹` |

### Example

```env
VITE_BASE_URL=http://localhost:3000/api
VITE_CURRENCY_SYMBOL=₹
```

---

## ⚙️ Server Environment (`server/.env`)

Create a `.env` file inside the `server/` directory and configure the following variables.

| Variable | Description | Required |
|----------|-------------|:--------:|
| `DATABASE_URL` | PostgreSQL database connection string | ✅ |
| `JWT_SECRET` | Secret key for JWT authentication | ✅ |
| `CLIENT_URL` | Frontend application URL | ✅ |
| `ADMIN_EMAILS` | Comma-separated administrator email addresses | ✅ |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | ✅ |
| `CLOUDINARY_API_KEY` | Cloudinary API key | ✅ |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | ✅ |
| `SMTP_USER` | SMTP email username | ✅ |
| `SMTP_PASS` | SMTP email password or app password | ✅ |
| `SENDER_EMAIL` | Email address used to send notifications | ✅ |
| `STRIPE_SECRET_KEY` | Stripe secret API key | ✅ |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | ✅ |
| `PORT` | Backend server port | Optional |

### Example

```env
DATABASE_URL=postgresql://username:password@localhost:5432/grocery_db
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
ADMIN_EMAILS=admin@example.com
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SMTP_USER=your_email@example.com
SMTP_PASS=your_app_password
SENDER_EMAIL=your_email@example.com
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
PORT=3000
```

---

> **⚠️ Security Notice**
>
> - Never commit `.env` files to version control.
> - Keep all API keys, secrets, and credentials private.
> - Add `.env` to your `.gitignore` file before pushing the project to GitHub.

## Install Dependencies

Install dependencies separately for both apps.

### Client

```bash
cd client
npm install
```

### Server

```bash
cd server
npm install
```

> The server `postinstall` script runs `prisma generate` automatically.

# 🚀 Getting Started

Follow the steps below to run the project locally.

---

## 1️⃣ Start the Backend Server

Open a terminal and navigate to the `server` directory.

```bash
cd server
npm run server
```

> Alternatively, you can start the server using:

```bash
cd server
npm start
```

---

## 2️⃣ Start the Frontend Application

Open a **new terminal** and navigate to the `client` directory.

```bash
cd client
npm run dev
```

---

## 🌐 Local Development URLs

After both servers are running successfully, you can access the application using the following URLs:

| Service | URL |
|---------|-----|
| 🖥️ Frontend | http://localhost:5173 |
| ⚙️ Backend API | http://localhost:3000 |
| 🔗 API Base URL | http://localhost:3000/api |

---

## ✅ Verify the Setup

If everything is configured correctly:

- ✅ Frontend is running on **http://localhost:5173**
- ✅ Backend API is running on **http://localhost:3000**
- ✅ Database connection is established
- ✅ API requests from the frontend are working successfully

> **Note:** Ensure that both the frontend and backend are running simultaneously before using the application.

## Build Process

### Client build

```bash
cd client
npm run build
```

### Server build

```bash
cd server
npm run build
```

## Database and Seed Process

If you need to prepare sample data, run the seed script from the server folder.

```bash
cd server
npm run seed
```

### Prisma migration commands

Use these commands from the `server/` folder when the Prisma schema changes:

```bash
npx prisma migrate dev --name init
npx prisma migrate deploy
npx prisma migrate reset
npx prisma generate
```

If the Prisma schema changes, make sure the client is regenerated by reinstalling dependencies or running the Prisma generate step used by `postinstall`.

## Notes

- Update `VITE_BASE_URL` if your backend runs on a different host or port.
- Keep `CLIENT_URL` aligned with the frontend URL so email links and redirects work correctly.
- Store all secret values only in environment files and never commit them to source control.

## Future Enhancements

- Add wishlist and saved items support
- Introduce product recommendations based on order history
- Add order scheduling and preferred delivery slots
- Improve analytics dashboards with charts and export options
- Add push notifications for order status updates
- Expand payment options and wallet support

## License

This project is licensed under the MIT License.

Copyright (c) 2026 Ajitesh Dakua

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
