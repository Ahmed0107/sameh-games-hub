import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "621245536f854fdfbb5cb8613453208e",
  },
});
