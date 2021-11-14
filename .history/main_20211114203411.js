let mobileItem = $(".menu-mobile-item");

mobileItem.each((index) => {
  $.eq(index).on("click", () => {
    mobileItem.eq(index).addClass("active");
  });
});

// $(e.target).addClass("active");

//   item.siblings().removeClass('active');
