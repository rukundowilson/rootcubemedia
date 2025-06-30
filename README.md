# RootCubeMedia 🎥📣

**RootCubeMedia** is a web platform that helps artists and content creators promote short videos (≤ 30 seconds) to real users. Viewers are paid small incentives to watch and engage with promoted videos, creating a win-win system for both creators and audiences.

---

## 🌍 Features

### 👤 For Artists / Promoters
- Pay to promote short videos (YouTube, Vimeo, or any embeddable link).
- Analytics: views, engagement stats.
- Set video categories, target audience.
- Pay per campaign using mobile money or bank API integration.

### 👀 For Viewers
- Watch short promoted videos (30s or less).
- Earn small rewards per view.
- Withdraw balance after reaching **300000 RWF** (monthly cap).
- Monthly reset if 300000 RWF not achieved.

---

## 💻 Tech Stack

| Layer        | Technology               |
|-------------|---------------------------|
| Backend API | **Node.js (JavaScript)** + Express |
| Frontend    | **Next.js (TypeScript/TSX)** |
| Database    | **MySQL** (Relational DB) |
| Deployment  | **Docker** (Containerized services) |

---

## 📁 Folder Structure

```bash
rootcubemedia/
│
├── client/                # Next.js frontend
│   ├── pages/
│   ├── components/
│   └── styles/
│
├── server/                # Node.js + Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── config/
│
├── docker/                # Docker configuration
│   └── docker-compose.yml
│
├── .env                   # Environment variables
├── README.md              # You are here
└── package.json
