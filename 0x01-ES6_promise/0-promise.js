export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("API response data");
      } else {
        reject("Error fetching data from the API");
      }
    }, 1000);
  });
}
