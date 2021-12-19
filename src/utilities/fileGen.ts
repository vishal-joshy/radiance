const fileGen = (content: string, contentType = "text/plain") => {
  const result = new Blob([content], { type: contentType });
  console.log(result);
  return result;
};

export { fileGen };
