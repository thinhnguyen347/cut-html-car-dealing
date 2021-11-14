let mobileItem = $(".menu-mobile-item");
mobileItem.click((e) => {
  $(this).click(() => {
    $(this).addClass("active");
  });

  //   item.siblings().removeClass('active');
});
