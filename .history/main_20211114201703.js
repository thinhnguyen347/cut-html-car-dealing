let mobileItem = $(".menu-mobile-item");

mobileItem.eq(1)
mobileItem.click((e) => {
    console.log(e.target)

    $(e.target).addClass("active");
  

  //   item.siblings().removeClass('active');
});
