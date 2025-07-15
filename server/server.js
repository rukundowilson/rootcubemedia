import express, { json } from "express";
import db from "./src/config/db.js";
import router from "./src/routers/user.js";

const app = express();
const port = 8082;

app.use(json());
app.use("/auth", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

async function startServer() {
  try {
    console.log("🔌 Testing DB connection...");
    const [rows] = await db.query("SELECT 1+1 AS solution");

    if (rows[0].solution === 2) {
      console.log("✅ DB connection OK");
    }

    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB:", err);
  }
}

startServer();
