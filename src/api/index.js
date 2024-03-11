import axios from "axios"
import { PRODUCT_URL } from "../constants"

const fakeApi = () => {
  return axios.create({
    baseURL: PRODUCT_URL
  })
}

export default fakeApi;
