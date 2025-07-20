describe("Loader", () => {
  it("loader should not call fetch when mocked", async () => {
    jest.mock("./fetch", () => ({
      fetchData: jest.fn().mockRejectedValue("sad linus"),
    }));

    jest.isolateModulesAsync(async () => {
      const loaderModule = await import("./loader");
      const data = await loaderModule.loader();
      expect(data).toBeNull();
    });
  });

  it("loader should return data when fetch is successful", async () => {
    const mockData = [{ id: 1, title: "Test Post" }];
    jest.mock("./fetch", () => ({
      fetchData: jest.fn().mockResolvedValue(mockData),
    }));

    const loaderModule = await import("./loader");
    const data = await loaderModule.loader();
    expect(data).toEqual(mockData);
  });
});
