let mobileItem = $(".menu-mobile-item");
mobileItem.("click", (e, index) => {
  let item = e.target.addClass('active');
  
//   item.siblings().removeClass('active');
  item.addClass('active');
});
