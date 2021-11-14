let mobileItem = $(".menu-mobile-item");

mobileItem.each((index) => {
  mobileItem.eq(index).on("click", () => {
    mobileItem.removeClass("active");
    mobileItem.eq(index).addClass("active");
  });
});

mobileItem.eq(2).on("click", () => {
  $('model')
});

mobileItem.click(() => {
    $(".pop-up").removeClass("show");
  });

mobileItem.last().click(() => {
  $(".pop-up").toggleClass("show");
});

$('.pop-up > p').click(() => {
    $(".pop-up").removeClass("show");
  });


