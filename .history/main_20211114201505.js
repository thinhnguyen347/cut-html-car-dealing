let mobileItem = $(".menu-mobile-item");

console.log(mobileItem)
mobileItem.click((e) => {

    $(e.target).addClass("active");
  

  //   item.siblings().removeClass('active');
});
