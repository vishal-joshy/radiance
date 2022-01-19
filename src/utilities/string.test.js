import { separateSlash, createKeyPair, getStringValue } from "./string";

describe("string utility functions", () => {
  it("should separate slash from string", () => {
    const routeString = "/routepath";
    expect(separateSlash(routeString)).toBe("routepath");
  });
  it("should create key pair", () => {
    expect(createKeyPair("animal", "dog")).toStrictEqual({ animal: "dog" });
  });
  it("should create string from json and callback function", () => {
    const testData = {
      animal: "dog",
      color: "red",
    };
    const callback = (key) => `${key}=${testData[key]}`;
    expect(getStringValue(testData, callback)).toStrictEqual("animal=dog\ncolor=red");
  });
});
