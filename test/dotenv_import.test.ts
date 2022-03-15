import "dotenv/config"; // Needed to import the contents of .env

it("Has access to process.env", () => {
  expect(process.env.TEST_VALUE).toBe("value");
});
