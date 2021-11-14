let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
    mobileItem.siblings().removeClass('active')
});
