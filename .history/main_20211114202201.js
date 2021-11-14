let mobileItem = $(".menu-mobile-item");

mobileItem.each((index) => {
    $(this).on('click',(e)=>{
        console.log(index)
    })

    // $(e.target).addClass("active");
  

  //   item.siblings().removeClass('active');
});
