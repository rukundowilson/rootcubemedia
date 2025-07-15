import db from "../config/db.js";

async function signup(user) {
  const { name, email, picture, google_id } = user;

  try {
    const sql = `
      INSERT INTO users (name, email, picture, google_id)
      VALUES (?, ?, ?, ?)
    `;
    const values = [name, email, picture, google_id];

    const [result] = await db.query(sql, values);

    return {
      success: true,
      message: "User registered successfully",
      userId: result.insertId,
    };
  } catch (err) {
    console.error("❌ Signup error:", err);
    return {
      success: false,
      message: "Signup failed",
      error: err,
    };
  }
}

export default signup;
