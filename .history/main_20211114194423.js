let mobileItem = $(".menu-mobile-item");
mobileItem.each((index) => {
  e.click(() => {
    mobileItem.eq(index).addClass("active");
  });

  //   item.siblings().removeClass('active');
});
