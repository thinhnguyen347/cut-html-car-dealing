let mobileItem = $(".menu-mobile-item");

mobileItem.each((index) => {
    $(this).on(()=>{
        console.log(index)
    })

    // $(e.target).addClass("active");
  

  //   item.siblings().removeClass('active');
});
