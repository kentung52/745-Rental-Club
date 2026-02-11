


;(function ($) {

	'use strict';


  
 // SCROLL TO TOP
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.backtop').addClass('reveal');
		$('.line-float').addClass('reveal');
    } else {
        $('.backtop').removeClass('reveal');
		$('.line-float').removeClass('reveal');
    }
});
 
	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:6,
		        slidesToScroll: 6,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow:4,
		        slidesToScroll: 4
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		vertical:true,
		verticalSwiping:true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap-2').slick({
		slidesToShow: 2,  //顯示數量
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:2,
		        slidesToScroll:2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap-3').slick({
		slidesToShow: 1,    //顯示數量
		slidesToScroll: 1,  //滑動數量
		infinite: true,
		dots: true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:1,
		        slidesToScroll:1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});


	// var map;

	// function initialize() {
	// 	var mapOptions = {
	// 		zoom: 13,
	// 		center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
	// 		// styles: style_array_here
	// 	};
	// 	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	// }

	// var google_map_canvas = $('#map-canvas');

	// if (google_map_canvas.length) {
	// 	google.maps.event.addDomListener(window, 'load', initialize);
	// }

	// Counter

	$('.counter-stat span').counterUp({
	      delay: 10,
	      time: 1000
	  });

		
 // Shuffle js filter and masonry
  // Shuffle js filter and masonry
  var Shuffle = window.Shuffle;
  var jQuery = window.jQuery;

  var shuffleEl = document.querySelector('.shuffle-wrapper');
  if (shuffleEl && Shuffle) {
    var myShuffle = new Shuffle(shuffleEl, {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

})(jQuery);


//index scroll
function scrollToSection() {
	// 滾動到目標區塊
	location.href = '#consignment';

	// 取得目標區塊元素
	const targetSection = document.getElementById('consignment');
	
	// 加入閃爍效果
	targetSection.classList.add('flash-effect');
	
	// 在動畫結束後移除閃爍效果
	targetSection.addEventListener('animationend', function() {
		targetSection.classList.remove('flash-effect');
	}, { once: true }); // 確保只執行一次
}



function scrollToPost(postId) {
  const target = document.getElementById(postId);
  if (!target) return;

  const offset = window.matchMedia('(min-width: 992px)').matches ? 20 : 110;
  const y = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({ top: y, behavior: 'smooth' });

  // 閃爍（可重播）
  target.classList.remove('flash-effect');
  void target.offsetWidth;
  target.classList.add('flash-effect');
  target.addEventListener('animationend', function () {
    target.classList.remove('flash-effect');
  }, { once: true });
}


function normalizeTocTitle(raw) {
  if (!raw) return '';
  // 去掉多餘空白、換行
  let t = raw.replace(/\s+/g, ' ').trim();
  // 避免目錄太長（你可自行調整 26）
  const limit = 26;
  if (t.length > limit) t = t.slice(0, limit) + '…';
  return t;
}

function bindTocLinks(toc) {
  const links = toc.querySelectorAll('a');
  links.forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId =
        a.getAttribute('data-target') ||
        (a.getAttribute('href') || '').replace('#', '');

      if (!targetId) return;

      e.preventDefault();
      scrollToPost(targetId);
      history.replaceState(null, '', `#${targetId}`);
    });
  });
}

function buildNewsToc() {
  const toc = document.getElementById('news-toc');
  const postsRoot = document.getElementById('news-posts');
  if (!toc || !postsRoot) return;

  // 你已經手打目錄：不重建，只綁定點擊行為
  if (toc.children.length > 0) {
    bindTocLinks(toc);
    return;
  }

  // 沒手打才自動生成
  const posts = postsRoot.querySelectorAll('.news-post[id]');
  if (!posts.length) return;

  toc.innerHTML = '';

  posts.forEach(post => {
    const h2 = post.querySelector('h2');
    const title = normalizeTocTitle(h2 ? h2.textContent : post.id);

    const li = document.createElement('li');
    li.className = 'mb-2';

    const a = document.createElement('a');
    a.href = `#${post.id}`;
    a.textContent = title;

    li.appendChild(a);
    toc.appendChild(li);
  });

  bindTocLinks(toc);
}

document.addEventListener('DOMContentLoaded', buildNewsToc);



(function () {
  const fab = document.getElementById('tocFab');
  const drawer = document.getElementById('tocDrawer');
  const backdrop = document.getElementById('tocBackdrop');
  const closeBtn = document.getElementById('tocClose');

  if (!fab || !drawer || !backdrop || !closeBtn) return;

  function openDrawer() {
    drawer.hidden = false;
    backdrop.hidden = false;
    requestAnimationFrame(() => drawer.classList.add('open'));
    fab.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
    }, 220);
  }

  fab.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // 點 TOC 後：平滑捲動 + 自動收起抽屜
  document.addEventListener('click', function (e) {
	const a = e.target.closest('a.toc-link');
	if (!a) return;

	// 只處理「手機抽屜」裡的 toc-link，桌機 sidebar 不要進來
	if (!a.closest('.news-toc-mobile')) return;

	const hash = a.getAttribute('href');
	if (!hash || !hash.startsWith('#')) return;

	e.preventDefault();

	const targetId = hash.slice(1);
	scrollToPost(targetId);

	if (!drawer.hidden) closeDrawer();
});


  // ESC 關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.hidden) closeDrawer();
  });
})();







// 二手車交易平台篩選器與搜尋功能
// 最小 JS：切 Tab + 依目前 Tab 篩選/排序 + 計數 + 空狀態

(function () {
  const tabs = document.querySelectorAll('.car-tab');
  const panels = document.querySelectorAll('.car-panel');

  const q = document.getElementById('carSearch');
  const selBrand = document.getElementById('carBrand');
  const selTier = document.getElementById('carTier');
  const selType = document.getElementById('carType');
  const selMileage = document.getElementById('carMileage');
  const selSort = document.getElementById('carSort');

  function getActiveTab() {
    const active = document.querySelector('.car-tab.is-active');
    return active ? active.getAttribute('data-tab') : 'available';
  }

  function withinMileage(mileage, rule) {
    if (rule === 'all') return true;
    const m = parseInt(mileage, 10);
    if (!Number.isFinite(m)) return false;

    if (rule === '0-5000') return m >= 0 && m <= 5000;
    if (rule === '5000-20000') return m > 5000 && m <= 20000;
    if (rule === '20000+') return m > 20000;
    return true;
  }

  function parseDateKey(s) {
    // 期望 YYYY-MM-DD，解析失敗就回 0
    if (!s) return 0;
    const t = Date.parse(s);
    return Number.isFinite(t) ? t : 0;
  }

  function applyFilterAndSort() {
    const active = getActiveTab();
    const grid = document.getElementById('grid-' + active);
    if (!grid) return;

    const keyword = (q.value || '').trim().toLowerCase();
    const brand = selBrand ? selBrand.value : 'all';
    const tier = selTier ? selTier.value : 'all';
    const type = selType ? selType.value : 'all';
    const mileageRule = selMileage ? selMileage.value : 'all';
    const sortRule = selSort ? selSort.value : 'listed_desc';

    const items = Array.from(grid.querySelectorAll('.car-item'));

    // Filter
    let visible = 0;
    items.forEach(item => {
      const itemBrand = item.getAttribute('data-brand') || '';
      const itemTier = item.getAttribute('data-tier') || '';
      const itemType = item.getAttribute('data-type') || '';
      const itemMileage = item.getAttribute('data-mileage') || '';
      const keys = (item.getAttribute('data-keywords') || '').toLowerCase();

      const okKeyword = !keyword || keys.includes(keyword);
      const okBrand = (brand === 'all') || (itemBrand === brand);
      const okTier = (tier === 'all') || (itemTier === tier);
      const okType = (type === 'all') || (itemType === type);
      const okMileage = withinMileage(itemMileage, mileageRule);

      const show = okKeyword && okBrand && okTier && okType && okMileage;
      item.hidden = !show;
      if (show) visible++;
    });

    // Sort (only for available/sold)
    if (active !== 'wanted') {
      const shown = items.filter(x => !x.hidden);

      shown.sort((a, b) => {
        const aListed = parseDateKey(a.getAttribute('data-listed'));
        const bListed = parseDateKey(b.getAttribute('data-listed'));

        const aPrice = parseInt(a.getAttribute('data-price') || '0', 10);
        const bPrice = parseInt(b.getAttribute('data-price') || '0', 10);

        const aMileage = parseInt(a.getAttribute('data-mileage') || '0', 10);
        const bMileage = parseInt(b.getAttribute('data-mileage') || '0', 10);

        if (sortRule === 'price_asc') return aPrice - bPrice;
        if (sortRule === 'price_desc') return bPrice - aPrice;
        if (sortRule === 'mileage_asc') return aMileage - bMileage;

        // 預設：最新上架（listed_desc）
        return bListed - aListed;
      });

      shown.forEach(el => grid.appendChild(el));
    }

    // Empty state
    const empty = grid.querySelector('[data-empty="' + active + '"]');
    if (empty) empty.hidden = visible !== 0;

    // Update counts
    updateCounts();
  }

  function updateCounts() {
    const counts = { available: 0, sold: 0, wanted: 0 };

    document.querySelectorAll('.car-item').forEach(item => {
      const s = item.getAttribute('data-status');
      if (counts[s] !== undefined) counts[s]++;
    });

    document.querySelectorAll('[data-count]').forEach(el => {
      const key = el.getAttribute('data-count');
      el.textContent = counts[key] || 0;
    });
  }

  function switchTab(tabName) {
    tabs.forEach(t => {
      const on = t.getAttribute('data-tab') === tabName;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });

    panels.forEach(p => {
      const on = p.getAttribute('data-panel') === tabName;
      p.classList.toggle('is-active', on);
    });

    applyFilterAndSort();
  }

  // Events
  tabs.forEach(t => t.addEventListener('click', () => switchTab(t.getAttribute('data-tab'))));
  [q, selBrand, selTier, selType, selMileage, selSort].forEach(el => {
    if (!el) return;
    el.addEventListener('input', applyFilterAndSort);
    el.addEventListener('change', applyFilterAndSort);
  });

  // Init
  updateCounts();
  switchTab('available');
})();



(function(){
  const nav = document.getElementById('navbarmain');
  const btn = document.querySelector('.navbar-toggler');
  if(!nav || !btn) return;

  // 建立 backdrop
  const bd = document.createElement('div');
  bd.className = 'mnav-backdrop';
  document.body.appendChild(bd);

  function openState(isOpen){
    document.body.classList.toggle('mnav-open', isOpen);
    bd.classList.toggle('show', isOpen);
  }

  // 監聽 collapse 狀態（Bootstrap 4 事件）
  $(nav).on('shown.bs.collapse', function(){ openState(true); });
  $(nav).on('hidden.bs.collapse', function(){ openState(false); });

  // 點 backdrop 關閉
  bd.addEventListener('click', function(){
    $(nav).collapse('hide');
  });
})();