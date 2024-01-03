import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then((results) => {
      const [photoData, userData] = results;
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}
