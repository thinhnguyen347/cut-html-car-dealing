let mobileItem = $(".menu-mobile-item");
mobileItem.each((index, value) => {
  $(this).click(() => {
    $(this).addClass("active");
  });

  //   item.siblings().removeClass('active');
});
