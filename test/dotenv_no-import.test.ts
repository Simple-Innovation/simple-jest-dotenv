it("Has access to process.env", () => {
  expect(process.env.TEST_VALUE).toBeUndefined();
});
