let mobileItem = $(".menu-mobile-item");

mobileItem.each((index) => {
  mobileItem.eq(index).on("click", () => {
    mobileItem.removeClass("active");
    mobileItem.eq(index).addClass("active");
  });
});

mobileItem.click(() => {
    $(".pop-up").toggleClass("show");
  });

mobileItem.last().click(() => {
  $(".pop-up").toggleClass("show");
});


