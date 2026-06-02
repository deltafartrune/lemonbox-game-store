# 🍋 Lemonbox Game Store

A modern, full-stack game distribution platform similar to Xbox Store, Steam, and PlayStation Store.

## Features

- 🎮 **Game Catalog**: Browse thousands of games with detailed information
- 👤 **User Accounts**: Register, login, and manage your profile
- 🛒 **Shopping Cart**: Add games to cart and checkout
- 💳 **Payment Processing**: Secure payment integration with Stripe
- 📥 **Library Management**: Track purchased games and download keys
- ⭐ **Reviews & Ratings**: Rate and review games
- 🔖 **Wishlist**: Save games for later purchase
- 👥 **Social Features**: Follow friends and see their activity
- 🎯 **Admin Dashboard**: Manage games, users, and sales
- 🔐 **Authentication**: JWT-based secure authentication
- 📊 **Analytics**: Track store metrics and game performance

## Tech Stack

### Frontend
- React 18 with TypeScript
- Next.js 14 for SSR and routing
- Tailwind CSS for styling
- Redux Toolkit for state management
- Axios for API requests
- Stripe.js for payments

### Backend
- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- Multer for file uploads
- Stripe API for payments
- Winston for logging

### DevOps
- Docker for containerization
- Docker Compose for orchestration

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 5.0+
- Docker & Docker Compose (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deltafartrune/lemonbox-game-store.git
cd lemonbox-game-store
```

2. Setup environment variables:
```bash
cp .env.example .env.local
```

3. Install dependencies:
```bash
cd frontend && npm install
cd ../backend && npm install
```

4. Start development servers:
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

5. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Docker Setup

```bash
docker-compose up
```

## Project Structure

```
lemonbox-game-store/
├── frontend/              # Next.js frontend application
├── backend/               # Express.js backend API
├── docker-compose.yml
├── .env.example
└── README.md
```

## License

MIT
