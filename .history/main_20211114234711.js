let mobileItem = $(".menu-mobile-item");

mobileItem.each((index) => {
  mobileItem.eq(index).on("click", () => {
    mobileItem.removeClass("active");
    mobileItem.eq(index).addClass("active");
  });
});

if (mobileItem.last().hasClass("active")) {
  console.log("active");
  $(".pop-up").toggleClass("show");
}
