let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", () => {
  let item = e.target.addClass('active');
  
//   item.siblings().removeClass('active');
  item.addClass('active');
});
