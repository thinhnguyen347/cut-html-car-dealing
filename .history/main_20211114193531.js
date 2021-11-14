let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
  let item = $(e.target).closest('menu-mobile-item');
  
  item.siblings().removeClass('active');
  item.addClass('active');
});
