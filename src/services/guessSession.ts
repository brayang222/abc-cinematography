import axios from "axios";

export const guessSession = async () => {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/authentication/guest_session/new",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + key,
    },
  };

  axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};
