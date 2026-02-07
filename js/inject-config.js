
document.addEventListener('DOMContentLoaded', () => {
  const S = window.SITE || {};
  const bind = (sel, fn) => document.querySelectorAll(sel).forEach(fn);

  // 文字
  bind('[phone-text]', el => el.textContent = S.PHONE_TEXT || '');
  bind('[address-text]', el => el.textContent = S.ADDRESS || '');
  bind('[weekday-text]', el => el.textContent = S.WEEKDAY_HR || '');
  bind('[weekend-text]', el => el.textContent = S.WEEKEND_HR || '');

  // href
  bind('[phone-href]', el => el.setAttribute('href', S.PHONE_URI || '#'));
  bind('[fb-href]', el => el.setAttribute('href', S.FB_URL || '#'));
  bind('[line-href]', el => el.setAttribute('href', S.LINE_URL || '#'));
  bind('[ig-href]', el => el.setAttribute('href', S.IG_URL || '#'));
  bind('[map-href]', el => el.setAttribute('href', S.MAP_URL || '#'));
  bind('[msg-href]', el => el.setAttribute('href', S.MSG_URL || '#'));
  // 也可用「保底選取」自動覆蓋舊值（如果你不想逐頁加 data-*）
  //   const topTel = document.querySelector('.top-right-bar a[href^="tel:"], .footer a[href^="tel:"]');
  //   if (topTel && S.PHONE_URI) {
  //     topTel.setAttribute('href', S.PHONE_URI);
  //     const t = topTel.querySelector('.h4, span');
  //     if (t && S.PHONE_TEXT) t.textContent = S.PHONE_TEXT;
  //   }


  // ---- 轉換：統一掛載（關鍵）----
  // 你目前用的 conversion label（所有點擊同一個）
  const SEND_TO_DEFAULT = 'AW-11215196984/bM_HCPLUhvQYELim6eMp';

  function reportConversionAndGo(e, url, sendTo = SEND_TO_DEFAULT) {
    console.log('[conv] click', url);
    // 沒有 gtag 就直接放行
    if (typeof window.gtag !== 'function') return true;
    console.warn('[conv] gtag not found');

    // 避免 href="#" 之類
    if (!url || url === '#') {
      console.warn('[conv] invalid url');
      return true;
    }

    e.preventDefault();
    console.log('[conv] preventDefault');

    let navigated = false;
    const go = () => {
      if (navigated) return;
      navigated = true;
      console.log('[conv] navigate', url);
      window.location.href = url;
    };

    console.log('[conv] send conversion', sendTo);
    window.gtag('event', 'conversion', {
    send_to: sendTo,
    event_callback: () => {
      console.log('[conv] event_callback fired');
      go();
    }
  });

    // 保底：避免 callback 因阻擋/延遲不觸發
    setTimeout(go, 800);
    console.log('[conv] timeout fallback');

    return false;
  }

  function bindConv(sel, sendTo) {
    bind(sel, el => {
      el.addEventListener('click', (e) => {
        reportConversionAndGo(e, el.href, sendTo);
      });
    });
  }

  // 目前先全部走同一個 send_to
  bindConv('[phone-href]', SEND_TO_DEFAULT);
  bindConv('[line-href]', SEND_TO_DEFAULT);
  bindConv('[msg-href]', SEND_TO_DEFAULT);
  bindConv('[fb-href]', SEND_TO_DEFAULT);
  bindConv('[ig-href]', SEND_TO_DEFAULT);
  bindConv('[map-href]', SEND_TO_DEFAULT);

  // 你這頁「線上預約系統」是寫死 href 的按鈕，也可以用 class 掛
  bindConv('a[href^="https://745motorental.simplybook.asia/"]', SEND_TO_DEFAULT);
});
