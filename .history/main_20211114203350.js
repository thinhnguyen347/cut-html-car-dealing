let mobileItem = $(".menu-mobile-item");

mobileItem.each((index) => {
  mobileItem.eq(index).on("click", () => {
    $(this).eq(index).addClass("active");
  });
});

// $(e.target).addClass("active");

//   item.siblings().removeClass('active');
