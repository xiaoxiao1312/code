slider1()
function slider1(){
    $.ajax({
        url:"../js/slider1.json",
        dataType:"json",
        success:function(res){
        //     $('.category-item>.children').empty();
        //     $.each(res,function(index,messagelist){
        //     $('.category-item>.children').append(`
        //     <li>
        //     <a href="#" class="link clearfix">
        //         <img src="${messagelist.img}" width="40px" height="40px" class="thumb">
        //         <span class="text">${messagelist.text}</span>
        //     </a>
        // </li>
        //     `)
        //     })
            
            $('.index_category>#J_categoryList>li>.children>.children').empty();
            $.each(res,function(index,messagelist){
            $('.index_category>#J_categoryList>li>.children>.children').append(`
            <li>
            <a href="#" class="link clearfix">
                <img src="${messagelist.img}" width="40px" height="40px" class="thumb">
                <span class="text">${messagelist.text}</span>
            </a>
        </li>
            `)
           
        })
    }
})
}
