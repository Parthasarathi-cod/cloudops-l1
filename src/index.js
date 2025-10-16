const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

// Start the HTTP server only when run directly (not when imported by tests)
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // for testing with supertest
