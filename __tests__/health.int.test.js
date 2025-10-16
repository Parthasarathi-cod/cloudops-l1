const request = require("supertest");
const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";

describe("Integration: /health", () => {
  it("returns 200 and {status:'ok'}", async () => {
    const res = await request(baseUrl).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
  });
});
