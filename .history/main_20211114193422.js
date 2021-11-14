let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
  let item = $(e.target).closest('menu-mobile-item');
  console.log(item);
  // item.siblings().removeClass('active');
  // item.addClass('active');
});
