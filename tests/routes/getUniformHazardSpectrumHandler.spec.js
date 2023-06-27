const app = require("../../src/app");
const request = require("supertest");

describe("Route GET '/hazardspectrum' status codes", () => {
  test("If location and 'tr' are ok should be 200", async () => {
    const res = await request(app)
      .get("/psp/hazardspectrum?location=8800&tr=100")
      .send();
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
  });

  test("If there's not location or 'tr' should be 400", async () => {
    const res = await request(app).get("/psp/hazardspectrum").send();
    expect(res.status).toBe(400);
    expect(res.body).toBeInstanceOf(Object);
  });

  test("If location or tr are not in DB should be 404", async () => {
    const res = await request(app)
      .get("/psp/hazardspectrum?location=0&tr=10009")
      .send();
    expect(res.status).toBe(404);
    expect(res.body).toBeInstanceOf(Object);
  });
});

describe("Route GET '/hazardspectrum' responses", () => {
  test("Response property for hazardspectrum: test 1", async () => {
    const res = await request(app)
      .get("/psp/hazardspectrum?location=8800&tr=100")
      .send();
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty("data");
  });

  test("Response property for hazardspectrum: test 2", async () => {
    const res1 = await request(app)
      .get("/psp/hazardspectrum?location=9715&tr=1000")
      .send();

    expect(res1.body).toHaveProperty("status", "success");
    expect(res1.body).toHaveProperty("data");
  });

  test("Response property for hazardspectrum: test 3", async () => {
    const res2 = await request(app)
      .get("/psp/hazardspectrum?location=8545&tr=50")
      .send();

    expect(res2.body).toHaveProperty("status", "success");
    expect(res2.body).toHaveProperty("data");
  });

  test("Bad request response: without data query", async () => {
    const res = await request(app).get("/psp/hazardspectrum").send();

    expect(res.body).toHaveProperty("message");
  });

  test("Bad request response: error message response", async () => {
    const res = await request(app)
      .get("/psp/hazardspectrum?location=0&tr=99999")
      .send();

    expect(res.body).toHaveProperty("message");
  });
});