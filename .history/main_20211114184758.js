let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
    let item
    mobileItem.siblings().removeClass('active')
});
