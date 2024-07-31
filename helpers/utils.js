// разделяет массив на разные части
export function chunkArray(array, parts = 3) {
  let chunkedArray = [];
  for (let i = 0; i < array.length; i += parts) {
    chunkedArray.push(array.slice(i, i + parts));
  }
  return chunkedArray;
}

export function getCookie (name) {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' + name.replace(
        /([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1',
      ) + '=([^;]*)',
    ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie (name, value, options = {}) {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

export function deleteCookie (name) {
  setCookie(name, '', {
    'max-age': -1,
  });
}

export function serializeData (obj) {
  const keys = Object.keys(obj);
  const formData = new FormData();
  keys.forEach((k) => {
    if (Array.isArray(obj[k])) {
      obj[k].forEach((val) => {
        formData.append(`${k}[]`, val);
      });
    } else {
      formData.append(k, obj[k]);
    }
  });
  return formData;
}

export function debug () {
  if (window.DEBUG) {
    console.warn(arguments);
  }
}

// для плавно выпадающих блоков
export function childNodesHeight (parent) {
  const childElements = Array.prototype.slice.call(parent.childNodes);
  let innerHeight = 0;

  if (childElements.length > 0) {
    childElements.forEach((elem) => {
      innerHeight += elem.offsetHeight || 0;
    });
  }

  return innerHeight;
}

export function rfc822Validate (email) {
  return /^([^\x00-\x20\x22\x28\x29\x2C\x2E\x3A-\x3C\x3E\x40\x5B-\x5D\x7F-\xFF]+|\x22([^\x0D\x22\x5C\x80-\xFF]|\x5C[\x00-\x7F])*\x22)(\x2E([^\x00-\x20\x22\x28\x29\x2C\x2E\x3A-\x3C\x3E\x40\x5B-\x5D\x7F-\xFF]+|\x22([^\x0D\x22\x5C\x80-\xFF]|\x5C[\x00-\x7F])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2C\x2E\x3A-\x3C\x3E\x40\x5B-\x5D\x7F-\xFF]+|\x5B([^\x0D\x5B-\x5D\x80-\xFF]|\x5C[\x00-\x7F])*\x5D)(\x2E([^\x00-\x20\x22\x28\x29\x2C\x2E\x3A-\x3C\x3E\x40\x5B-\x5D\x7F-\xFF]+|\x5B([^\x0D\x5B-\x5D\x80-\xFF]|\x5C[\x00-\x7F])*\x5D))*(\.\w{2,})+$/.test(email);
}

export function sendToMyTarget (id, goal, value) {
  const _tmr = window._tmr || (window._tmr = []);
  _tmr.push({
    id,
    type: 'reachGoal',
    goal,
    value,
  });
}

export const phoneRegEx = /(\+7|8|7)?[-\s]?\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})$/;

export const phoneValidation = value => phoneRegEx.test(value);

export const normalizePhone = phone => phone.replace(/[^+\d]/g, '');

export function changeCurrentUrl (path) {
  history.replaceState(
    {},
    null,
    path[0] === '/' ? path : '/' + path
  );
}

export function objectToString (object) {
  let i = 0;

  return function (key, value) {
    if (i !== 0 && typeof (object) === 'object' && typeof (value) === 'object' && object == value) { return '[Circular]'; }

    if (i >= 29) { return '[Unknown]'; }

    ++i;

    return value;
  };
}

export function cloneFast (obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function stripHtml (html) {
  return html.replace(/<(.|\n)*?>/g, '');
}

export function scrollToElementHelper (element, offset = 0, parent = window) {
  parent?.scrollTo({
    top: element.offsetTop - offset,
    behavior: 'smooth'
  });
}

export function throttle (callee, timeout) {
  let timer = null;

  return (...args) => {
    if (timer) { return; }

    timer = setTimeout(() => {
      callee(...args);

      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

export function isUrlAbsolute (url) {
  return (url?.indexOf('://') > 0 || url?.indexOf('//') === 0);
}

export function divideAmount(sum) {
  return String(sum).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
}

export function getDomainName(hostName) {
  return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
}

// получаем координаты элемента в контексте документа
export function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

export function numWord(value, words) {
  value = Math.abs(value) % 100;
  const num = value % 10;
  if(value > 10 && value < 20) return words[2];
  if(num > 1 && num < 5) return words[1];
  if(num === 1) return words[0];
  return words[2];
}
