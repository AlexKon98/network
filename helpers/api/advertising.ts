// Получить список всех реклам
import axios from 'axios';

export function getAdvertisingList (link: string, location: any = null) {
  return new Promise((resolve, reject) => {
    axios.post('/api/advertising/getlist', {
      link,
      location,
    })
      .then((response) => {
        if (response.data.success) {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            resolve({});
          }
        } else {
          const errorMessage = response.data.error || 'Что-то пошло не так';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function updateAdvertising (link: string, location: any = null, advertisingId: number, statusId: number, comment: string) {
  return new Promise((resolve, reject) => {
    axios.post('/api/advertising/update', {
      link,
      advertisingId,
      statusId,
      comment,
      location,

    })
      .then((response) => {
        if (response.data.success) {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            resolve({});
          }
        } else {
          const errorMessage = response.data.error || 'Что-то пошло не так';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function updateAllAdvertising (link: string, location: any = null, statusId: number, comment: string) {
  return new Promise((resolve, reject) => {
    axios.post('/api/advertising/updateall', {
      link,
      statusId,
      comment,
      location,
    })
      .then((response) => {
        if (response.data.success) {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            resolve({});
          }
        } else {
          const errorMessage = response.data.error || 'Что-то пошло не так';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}
