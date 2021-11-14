let mobileItem = $(".menu-mobile-item");
mobileItem.each((index, value) => {
  this.click(() => {
    mobileItem.eq(index).addClass("active");
  });

  //   item.siblings().removeClass('active');
});
