declare global {
    interface Window {
        ym: any,
    }
}

function metrika () {
  window.ym = window.ym || function () {
    (window.ym.a = window.ym.a || []).push(arguments);
  };
  if (!window.ym.l) {
    window.ym.l = (new Date()).getTime();
  }
  return window.ym;
}

export function yandexMetrika (target: string) {
  metrika()(820572, 'reachGoal', target);
}

export function yandexMetrikaHitRoute (to, from) {
  metrika()(820572, 'hit', to.fullPath, from ? { referer: from.fullPath } : {});
}
