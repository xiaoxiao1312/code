
$(function(){
    async function creatBase(){
        let data=await $.ajax({
            url:"../interface/create_database.php",
        })
    }
    creatBase();
    //轮播图左侧边栏,显示
    $('.asider li').mouseenter(function(){
        let liindex=$(this).index()+1;
        // console.log(liindex);
        let getData=async function(){
            let data=await $.ajax({
                url:"../js/nav.json",
            })
            // console.log(data.one)
            create_li(data)
        }
        let create_li=function(data){
            // console.log(data)
            $.each(data,function(index,item){
                // console.log(index)
                // console.log(item)       
               
                //    console.log(item.length)
               if(liindex==index){
                $.each(item,function(index,item){
                    // console.log(index)
                    // console.log(item)
                    $(`<li>
                    <img src="${item.url}"><span>${item.phone}</span>
                    </li>`).css({
                    'position':'relative',
                    'width':250,
                    'height':70,
                    'line-height':'70px',
                    // 'display':'flex',
                    // 'align-content':'center',
                    // 'flex':1,
                   
                }).appendTo($('.ul_li'));
                })
               }
              
               
            })
        }
        getData();
        $(`<ul class="ul_li"></ul>
        `).css({
            'opacity': '1',
            'width':991,
            'background': '#ffffff',
            'display':'flex',
            'flex-direction': 'column',
            'flex-wrap':'wrap',
            'padding':'15',
            'justify-content':' space-evenly',
            'border': '1px solid #e0e0e0',
            'box-shadow': '0 8px 16px rgba(0,0,0,.18)',
            'box-sizing': 'border-box'
        }).appendTo($(this))
        }) .mouseleave(function(){
             $(".ul_li").remove()
        })
    })