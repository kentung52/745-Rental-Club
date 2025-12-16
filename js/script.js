


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
