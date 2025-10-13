
document.addEventListener('DOMContentLoaded', () => {
  const S = window.SITE || {};
  const bind = (sel, fn) => document.querySelectorAll(sel).forEach(fn);

  // 文字
  bind('[phone-text]',  el => el.textContent = S.PHONE_TEXT || '');
  bind('[address-text]',el => el.textContent = S.ADDRESS    || '');

  // href
  bind('[phone-href]',  el => el.setAttribute('href', S.PHONE_URI || '#'));
  bind('[fb-href]',     el => el.setAttribute('href', S.FB_URL    || '#'));
  bind('[line-href]',   el => el.setAttribute('href', S.LINE_URL  || '#'));
  bind('[ig-href]',     el => el.setAttribute('href', S.IG_URL    || '#'));
  bind('[map-href]',    el => el.setAttribute('href', S.MAP_URL   || '#'));
  bind('[msg-href]',    el => el.setAttribute('href', S.MSG_URL   || '#'));    
  // 也可用「保底選取」自動覆蓋舊值（如果你不想逐頁加 data-*）
//   const topTel = document.querySelector('.top-right-bar a[href^="tel:"], .footer a[href^="tel:"]');
//   if (topTel && S.PHONE_URI) {
//     topTel.setAttribute('href', S.PHONE_URI);
//     const t = topTel.querySelector('.h4, span');
//     if (t && S.PHONE_TEXT) t.textContent = S.PHONE_TEXT;
//   }
});
