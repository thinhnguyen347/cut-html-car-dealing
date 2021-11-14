let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
    let item = (e.target)
    console.log(item.closet('div'))
    // item.siblings().removeClass('active');
    // item.addClass('active');
});
