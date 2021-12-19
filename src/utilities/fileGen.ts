const fileGen = () => {
  const src = "this is a test data";
  const testBlob = new Blob([src], { type: "text/plain" });
  console.log(testBlob);
};

export { fileGen };
