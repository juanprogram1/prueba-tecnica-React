import axios from "axios";

export const fetchCryptoData = async () => {
  const response = await axios.get("http://localhost:5000/cryptos");
  return response.data.data;
};
