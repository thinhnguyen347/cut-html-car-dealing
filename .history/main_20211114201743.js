let mobileItem = $(".menu-mobile-item");

mobileItem.eq(1).addClass("active")
mobileItem.each((e) => {
    console.log(e.target)

    $(e.target).addClass("active");
  

  //   item.siblings().removeClass('active');
});
