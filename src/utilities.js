const getData = async(url) => {
  const response = await fetch(url, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
      Authorization: localStorage.token
    }
  });
  const data = await response.json();

  return data;
}

export { getData }
