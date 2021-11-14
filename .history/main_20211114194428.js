let mobileItem = $(".menu-mobile-item");
mobileItem.each((index, value) => {
  e.click(() => {
    mobileItem.eq(index).addClass("active");
  });

  //   item.siblings().removeClass('active');
});
