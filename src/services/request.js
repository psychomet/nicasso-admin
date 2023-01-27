import axios from "axios"
import { medusaUrl } from "./config"
console.log('window.location.origin',window.location.origin);
const client = axios.create({ baseURL: window.location.origin + '/api' })

export default function medusaRequest(method, path = "", payload = {}) {
  const options = {
    method,
    withCredentials: true,
    url: path,
    data: payload,
    json: true,
  }
  return client(options)
}
