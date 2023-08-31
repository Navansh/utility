import axios from 'axios';

export async function updateProfile(params) {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/update-user`, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
