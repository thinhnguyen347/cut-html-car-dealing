let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", () => {
  let item = e.target.add('menu-mobile-item');
  
//   item.siblings().removeClass('active');
  item.addClass('active');
});
