let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
    let item = e.target
    mobileItem.siblings().removeClass('active')
});
