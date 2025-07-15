import signup from "../service/auth.js";

export default async function signUp(req, res) {
  const user = req.body;
  console.log("📥 New signup request:", user);

  try {
    const result = await signup(user);

    if (result.success) {
      return res.status(201).json({
        message: `✅ New user created with ID ${result.userId}`,
        data: result,
      });
    } else {
      return res.status(500).json({
        message: "❌ Failed to create user",
        error: result.error,
      });
    }
  } catch (err) {
    console.error("❌ Signup controller error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
