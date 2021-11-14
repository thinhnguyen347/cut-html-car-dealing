let mobileItem = $(".menu-mobile-item");
mobileItem.on("click", (e) => {
    let item = e.target
    item.siblings().removeClass('active');
    
});
