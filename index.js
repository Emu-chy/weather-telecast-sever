const express = require("express");
const app = express();
const PORT = 5000;
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/weather", (req, res) => {
  // console.log(req.body.countryValue);
  const name = req.body.countryValues;
  console.log(name);
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${name}`;
  fetch(url, {
    headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "b1eee911ffmshebdc545b53a9696p12fba3jsnc06300bcf729",
    },
  })
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
