let mobileItem = $(".menu-mobile-item");
mobileItem.ea("click", (e, index) => {
  let item = e.target.addClass('active');
  
//   item.siblings().removeClass('active');
  item.addClass('active');
});
