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

app.get("/api/images", (req, res) => {
  console.log("📥 [IMAGES] Solicitud recibida");
  // Demo: 3 imágenes de paisajes de internet (Unsplash, uso gratuito)
  res.json({
    ok: true,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80", alt: "Paisaje de montaña" },
      { id: 2, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80", alt: "Bosque verde" },
      { id: 3, url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80", alt: "Playa al atardecer" }
    ]
  });
});

// app.listen(3000, () => console.log("API escuchando en puerto 3000"));
app.listen(3000, "0.0.0.0", () => {
  console.log("API escuchando en puerto 3000");
});

