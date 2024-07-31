import { sendRequest } from '~/helpers/api';

export function getInitData (context) {
  const url = '/api/user/getinitdata';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method).then((response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(new Error(response?.error));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}
