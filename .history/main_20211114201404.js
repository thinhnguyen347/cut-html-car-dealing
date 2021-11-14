let mobileItem = $(".menu-mobile-item");
mobileItem.click(() => {
  $(this).click(() => {
    $(this).addClass("active");
  });

  //   item.siblings().removeClass('active');
});
