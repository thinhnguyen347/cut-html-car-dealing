let mobileItem = $(".menu-mobile-item");
mobileItem.each(() => {
  $(this).click(() => {
    $(this).addClass("active");
  });

  //   item.siblings().removeClass('active');
});
