const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/login", (req, res) => {
  // Demo: login fijo
  console.log("📥 [LOGIN] Petición recibida:");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  const { user, pass } = req.body;
  if (user === "admin" && pass === "1234") {
    console.log("✅ Login exitoso:", { user });
    return res.json({ ok: true, token: "fake-token-123" });
  }
  console.log("❌ Credenciales inválidas:", { user, pass });
  return res.status(401).json({ ok: false, message: "Credenciales inválidas" });
});

app.get("/api/dashboard", (req, res) => {
  // Demo: datos ficticios
  res.json({
    ok: true,
    stats: {
      users: 42,
      sales: 1234,
      uptime: "99.9%"
    }
  });
});

// app.listen(3000, () => console.log("API escuchando en puerto 3000"));
app.listen(3000, "0.0.0.0", () => {
  console.log("API escuchando en puerto 3000");
});

