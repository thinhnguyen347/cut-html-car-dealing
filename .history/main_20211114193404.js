let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
  let item = $(e.target).close();
  console.log(item);
  // item.siblings().removeClass('active');
  // item.addClass('active');
});
