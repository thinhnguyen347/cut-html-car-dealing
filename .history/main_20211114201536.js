let mobileItem = $(".menu-mobile-item");

console.log(mobileItem)
mobileItem.click((e) => {
    console.log(mobileItem)

    $(e.target).addClass("active");
  

  //   item.siblings().removeClass('active');
});
