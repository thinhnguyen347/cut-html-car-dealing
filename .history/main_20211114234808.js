let mobileItem = $(".menu-mobile-item");

mobileItem.each((index) => {
  mobileItem.eq(index).on("click", () => {
    mobileItem.removeClass("active");
    mobileItem.eq(index).addClass("active");
  });
});

mobileItem.last(). {
  console.log("active");
//   $(".pop-up").toggleClass("show");
}
