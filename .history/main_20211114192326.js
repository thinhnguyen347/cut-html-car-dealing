let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
    let item = $(e.target).closet('div')
    console.log(item)
    // item.siblings().removeClass('active');
    // item.addClass('active');
});
