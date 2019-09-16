$(document).ready(function () {

  $('#toc ul li').addClass('nav-item');
  $('#toc ul a').addClass('nav-link');
  $('#toc ul a').first().addClass("active");


  $('#detail-page').scrollspy({ target: '#toc' });

  // //Toggle ToC children
  // $('#toc .sectlevel1 li').click((e) => {
  //   // target click comes as <a> inside <li>, hence the parentNode
  //   $(e.target.parentNode).toggleClass('expanded');
  // });

  //To enable fixed scrolling
  // $(window).scroll(function () {
  //   let sidebar;
  //   if ($('#toc').innerHeight()) {
  //     sidebar = $('#toc');
  //   } else {
  //     sidebar = $('#listings-category');
  //   }
    
  //   let sidebarTop = $('.navbar-default').innerHeight();
  //   let contentHeight = $('.guides-section-white').innerHeight();
  //   let sidebarHeight = sidebar.height();
  //   let sidebarBottomPos = contentHeight - sidebarHeight
  //   let trigger = $(window).scrollTop() - sidebarTop;

  //   if (trigger >= sidebarTop) {
  //     sidebar.addClass('fixed');
  //   } else {
  //     sidebar.removeClass('fixed');
  //   }

  //   if (trigger >= sidebarBottomPos) {
  //     sidebar.addClass('bottom');
  //   } else {
  //     sidebar.removeClass('bottom');
  //   }
  // });
});
