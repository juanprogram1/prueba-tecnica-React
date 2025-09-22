import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/cryptos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY!,
        },
        params: {
          start: "1",
          limit: "10",
          convert: "USD",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
