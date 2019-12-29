'use strict';

/* global objectFitImages */

const header = $('header');
const headerMenuBtn = $('#js-headerSpMenuBtn');
const pagetop = $('#js-pagetop');

// breakpoint
const mqS = 'only screen and (max-width: 767px)';
const mqM = 'only screen and (max-width: 1024px)';
const mqL = 'only screen and (max-width: 1224px)';


/* ===========================================================================
  グローバルメニュー
============================================================================= */
headerMenuBtn.on('click', function() {
	$(this).toggleClass('is-active');
	$('.headerNav').slideToggle(400);
});


/* ===========================================================================
  pagetopボタン
============================================================================= */
pagetop.hide();
$(window).on('scroll' ,function() {
	if ($(this).scrollTop() > 100) {
		pagetop.fadeIn();
	} else {
		pagetop.fadeOut();
	}
});

// クリックでページトップへ戻る
pagetop.on('click', function() {
	$('body,html').animate({
		scrollTop: 0
	}, 500);
});


/* ===========================================================================
  アコーディオン
============================================================================= */
$(".js-blockToggle_title").click(function () {
	$(this).next(".js-blockToggle_detail").slideToggle("fast");
	$(this).toggleClass("is-open");
});


/* ===========================================================================
  sp時のみ電話リンク追加
============================================================================= */
const ua = navigator.userAgent;
if((ua.indexOf('iPhone') > 0 && ua.indexOf('iPod')) === -1 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile')) > 0 || ua.indexOf('Windows Phone') > 0) {
	$('.js-tel').each(function() {
		const str = $(this).text();
		$(this).html($('<a class="link-tel">').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
	});
}


/* ===========================================================================
  タブメニュー
============================================================================= */
for (let i=1; i<=3; i++) { //max3tab
	const tabid01_01 = '#js-tabBtnList_btn_0'+ i,tabid01_02 = '#js-tabBtnList_item_0'+ i;
	$(tabid01_01).children().on('click', function() {
		const index = $(this).index();
		$(tabid01_01).children().removeClass('is-active');
		$(tabid01_02).children().removeClass('is-active').eq(index).addClass('is-active');
		$(this).addClass('is-active');
	});

	const tabid02_01 = '#js-tabBtnList_btn02_0'+ i,tabid02_02 = '#js-tabBtnList_item02_0'+ i;
		$(tabid02_01).children().on('click', function() {
		const index = $(this).index();
		$(tabid02_01).children().removeClass('is-active');
		$(tabid02_02).children().removeClass('is-active').eq(index).addClass('is-active');
		$(this).addClass('is-active');
	});
}


/* ===========================================================================
  アンカーリンク
============================================================================= */
$(window).on('load', function(e) {
	$('a[href^="#"]').on('click', function() {
		const href= $(this).attr('href');
		const target = $(href === '#' || href === '' ? 'html' : href);
		const position = target.offset().top;
		$('body, html').animate({scrollTop:position}, 550, 'swing');
	});
	
	
	
	/* =================================================================
	  spのみヘッダー固定の場合は以下を使用
	=================================================================== */
	/*
	// ページ内リンク
	$('a[href^="#"]').on('click', function() {
		const href= $(this).attr('href');
		const target = $(href === '#' || href === '' ? 'html' : href);
		const headerHeight = window.matchMedia(mqS).matches ? header.outerHeight() : 0;
		const position = target.offset().top - headerHeight;
		$('body, html').animate({scrollTop:position}, 550, 'swing');
	});
	
	// 別ページからのアンカーリンク
	const hash = location.hash;
	if(hash) {
		e.preventDefault();
		const headerHeight = window.matchMedia(mqS).matches ? header.outerHeight() : 0;
		const position = $(hash).offset().top - headerHeight;
		$('html, body').scrollTop(position);
	} */
	
	
	
	
	/* =================================================================
	  全サイズヘッダー固定の場合は以下を使用
	=================================================================== */
	/*
	// ページ内リンク
	$('a[href^="#"]').on('click', function() {
		const href= $(this).attr('href');
		const target = $(href === '#' || href === '' ? 'html' : href);
		const position = target.offset().top - header.outerHeight();
		$('body, html').animate({scrollTop:position}, 550, 'swing');
	});
	
	// 別ページからのアンカーリンク
	const hash = location.hash;
	if(hash) {
		e.preventDefault();
		const position = $(hash).offset().top - header.outerHeight();
		const ua = window.navigator.userAgent.toLowerCase();
		const isIE = (ua.indexOf('msie') > 0 || ua.indexOf('trident') > 0 || ua.indexOf('edge') > 0);
		// IE,Edgeの場合
		if (isIE) {
			setTimeout(function(){
				$('html, body').scrollTop(position);
			},100);
			
		//IE以外
		} else {
			$('html, body').scrollTop(position);
		}
	} */
});


/* ===========================================================================
  objectFitImages
============================================================================= */
objectFitImages();