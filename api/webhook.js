module.exports = (req, res) => {
  if (req.method === "GET") {
    return res.status(200).json({ message: "✅ Webhook is alive!" });
  }

  if (req.method === "POST") {
    return res.status(200).json({ message: "POST request received", body: req.body });
  }

  return res.status(405).json({ error: "Method not allowed" });
};
