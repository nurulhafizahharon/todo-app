import { apiClient } from "./ApiClient";

// function retrieveHelloWorldBean() {
//   return axios.get("http://localhost:8080/hello-world-bean");
// }

// export default retrieveHelloWorldBean;

// const apiClient = axios.create({
//   baseURL: "http://localhost:8080",
// });

export const retrieveHelloWorldBean = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldPathVariable = (username) =>
  apiClient.get(
    `/hello-world/path-variable/${username}`
    // , {
    //   headers: {
    //     Authorization: token,
    //   },
    // }
  );

// export const executeBasicAuthenticationService = (token) =>
//   apiClient.get(`/basicauth`, {
//     headers: {
//       Authorization: token,
//     },
//   });
