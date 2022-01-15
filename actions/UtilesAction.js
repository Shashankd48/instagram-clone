import axios from "axios";

export function getRandomUsers(resultCount) {
   let request = axios.get(`https://randomuser.me/api/?results=${resultCount}`);
   return request
      .then((result) => {
         return result.data;
      })
      .catch((error) => {
         return error.response.data;
      });
}
