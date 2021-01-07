
    //加入购物车
     //    商品Id	商品名称	单价	数量	小计	操作

        //  1 购物车页面一打开就要展示该用户的购物车商品列表

//1，获取信息
		var th = document.querySelector("#th");
		var tb = document.querySelector("#tb");
		var tf = document.querySelector("#tf");
		var res = document.querySelector("#sum")
		//2，给四个商品加红边框，方便选择时能清楚的看到你选择的时那个商品
		var liArr = document.querySelectorAll("li");
		var n = 0;
		for(var i = 0; i < liArr.length; i++) {
			liArr[i].index = i
			liArr[i].onclick = function() {
				liArr[n].style.border = '1px solid #fff';
				this.style.border = '2px solid #f00';
				n = this.index;
			}
		}
		
		if(localStorage.newArr){
			var newArr = localStorage.newArr;
			var arr = JSON.parse(newArr);
		}else{
			var arr = []
		}
		show(arr)

		

		//2，给加入购物车添加点击事件
		//var arr = []; //存obj
		var add = document.querySelectorAll(".btn");
		for(var i = 0; i < add.length; i++) {
			add[i].onclick = function() {
				var fu = this.parentNode; //获取父元素，通过父元素去设置子元素
				var img = fu.querySelector('img').src; //获取img
				var txt = fu.querySelector('.recommend-name').innerHTML; //获取信息内容
                var money = fu.querySelector('.recommend-price').innerHTML; // 获取总钱数
				var id = fu.getAttribute('data-id'); //获取10个内容

				var obj = {
					id: id,
					img: img,   
					txt: txt,
                    money: money,
					num: 1
				};
				//4，判断数组里有没有数组，没有就添加，有就判断添加的内容是否相同，如果相同就让数量++；
				if(arr.length == 0) {
					arr.push(obj)
				} else {
					var arr1 = []; //存arr里的id
					for(var i = 0; i < arr.length; i++) {
						arr1.push(arr[i].id)
						if(arr[i].id == obj.id) {
							arr[i].num++
						}
					}

					if(arr1.indexOf(obj.id) < 0) {
						arr.push(obj)
					}
				}
				//7,存储
				var newArr = JSON.stringify(arr);
				localStorage.newArr = newArr;
				show(arr)
			}

		}

		//3，渲染
		function show(arr) {
			//判断数组李有没有内容，没有内容让table隐藏，否则取反
			if(arr.length == 0) {
				// th.style.display = 'none';
				// tb.style.display = 'none';
				// tf.style.display = 'none';
			} else {
        //5,总价
				var sum = 0;
				//因为循环的时候多循环了一边自身，所以在循环前先让内容清空，循环出来的内容才是没循环一次加一条内容
				tb.innerHTML = ''; 
				for(var i = 0; i < arr.length; i++) {
					tb.innerHTML += '<tr>' +
                        '<td>' +'<input type="checkbox" class="checked">'+'</td>'
                        '<td>'+'<img src=' + arr[i].img + '/>'+'</td>'+
                        '<td>'+'<div class="recommend-name">' + arr[i].txt + '</div>'+'</td>'+
                        '<td>' + arr[i].money + '</td>' +
                        '<td>' +'<div>'+'<button class="les" type="button" onclick="jia('+arr[i].id+',0)">'+'-</button>'+
                        '<input type="text" value=1>'+
                        '<button class="add" type="button" onclick="jia('+arr[i].id+',1)">'+'+</button>'+'</div>'+'</td>' +
                        '</td>' +
                        '<td>'+'</td>'+
						'<td class="deletemsg" onclick = "del(' + arr[i].id + ')">删除</a></td>' +
						'</tr>';
					sum += arr[i].num* arr[i].money;

				}
				res.innerHTML = sum;

				th.style.display = 'table-header-group';
				tb.style.display = 'table-row-group';
				tf.style.display = 'table-footer-group';
			
			}

		}
        // 2 用户点击+或者-可以修改当前商品的数量
        var num=0;
	function jia(id,num){
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].id == id) {
				if (num==1) {
					arr[i].num++;
				}else{
					if (arr[i].num>1) {
						arr[i].num--;
					}
				}
				
			}
		}
		show(arr)
			
	}
        // 3 用户点击删除可以删除当前商品,删除完成后要重新渲染
		function del(id){
		for (var i = 0; i < arr.length; i++) {
			if(arr[i].id == id){
				arr.splice(i,1)
			}
		}
		var newArr = JSON.stringify(arr);
		localStorage.newArr = newArr;
		show(arr)
	}


    //购物车
    // let value=cookie.get('username');
    // if(value!==false){
    //     $('.right').empty().html(
    //         `
    //         <a href="./index.html"><img src="https://s02.mifile.cn/assets/static/image/logo-footer.png" alt=""></a>
    //         <span>我的购物车</span>
    //         `
    //     )
    //     $('.left').empty().html(
    //         `
    //         <a href="#">${value}</a>|
    //         <a href="#">我的订单</a>
    //         `
    //     )
    // }else if(value ==false){
    //     // console.log("1111")
    //     alert("请您先进行用户登录")
    //     setTimeout(function(){
    //         location.href="./index.html";
    //     },3000)
       
    // }
//     showData();
//     async function showData(){
//         let data=await $.ajax({
//             url:'../location/showlist.php',
//             dataType:'json'
//         })
//         let allprice=0;
//         // console.log(data.data.length)
//         if(data.code==1){
//             $('.shopcart table tbody').empty()
//             $.each(data.data,function(index,item){
//                 allprice+=Number(item.product_price);
//                 $(`
//                 <tr>
//                 <td><input type="checkbox" class="checked" checked></td>
//                 <td>${item.product_id}</td>
//                 <td><img src="${item.product_img}" alt="">${item.product_name}</td>
//                 <td><i>${item.product_price}</i>元</td>
//                 <td><div><a class="les">-</a><input type="text"  value="${item.product_num}"><a class="add">+</a></div></td>
//                 <td><i class="small">${item.product_price}</i>元</td>
//                 <td class="deletemsg"><a>x</a></td>
//             </tr>
//                 `).appendTo( $('.shopcart table tbody'))
//             })
//             $('tbody tr td:nth-child(5) div input').on('input propertychange',function(){
//                console.log("1111")
//                if($(this).val()>0){
//                 $(this).val();
//                }else{
//                 $(this).val(1);
//                }
//             })
           
//         }else{
//             $('.shopcart').empty().html(
//                 `
//                 <div class="shopcartbox">
//                 <img src="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png" alt="">
//                 <div>
//                     <h3>你的购物车还是空的!</h3>
//                     <button>马上去购物</button>
//                 </div>
//             </div>
//                 `
//             )
//         }
//         $('.shopcartbox div:nth-child(2) button:nth-child(2)').click(function(){
//             location.href="./index.html"
//         })
//         $('.deletemsg').click(function(){
//              let shopid=$(this).siblings().eq(1).text();
//             if(confirm("你确定将此商品移除购物车？")){
             
//                 $(this).parent().remove();
//                 let rshop=async function(){
//                     let data=await $.ajax({
//                         url:"../location/removeshop.php",
//                         data:{
//                             "shopid":`${shopid}`
//                         },
//                         dataType:'json',
                        
//                     })
//                     console.log(data);
//                 }
//                 rshop()
//                 location.reload();
//             }else{
//                 console.log('111')
//             }
//         })
//         $('.checkall').click(function(){
//             if($('.checkall').prop('checked')){
//                 $('.checked').prop('checked',true)
//                 $('tbody tr td:nth-child(6) i').addClass('small')
               
//             }else{
//                 $('.checked').prop('checked',false)
//                 // console.log($('tbody tr td:nth-child(5) i'))
//                 $('tbody tr td:nth-child(6) i').removeClass('small')
//             }
//             $('.allprice div:nth-child(2) i').html(
//                 `
//                 ${getPrice()}
//                 `
//             )
//             $('.allprice span:nth-child(1)').html(
//                 `
//                 共 <i>${data.data.length}</i> 件商品，已选择<i>${getNum()}</i>件
//                 `
//             )   
            
//         })
//         $('.checked').click(function(){
//             // console.log( $('.checked'))
//             $('.checkall').prop('checked',true)
//             $.each($('.checked'),function(index,item){
//                 if(!$(item).prop('checked')){
//                     $('.checkall').prop('checked',false)
//                     $(item).parent().siblings().eq(4).children().removeClass('small')
//                 }else{
//                     $(item).parent().siblings().eq(4).children().addClass('small')
//                 }

//             })
//             $('.allprice div:nth-child(2) i').html(
//                 `
//                 ${getPrice()}
//                 `
//             )
//             $('.allprice span:nth-child(1)').html(
//                 `
//                 共 <i>${data.data.length}</i> 件商品，已选择<i>${getNum()}</i>件
//                 `
//             )   
           
//         })
       
//         // console.log(data.data.length)
//         // console.log(allprice)
//         $('.allprice').html(
            
//             `
//             <span>共 <i>${data.data.length}</i> 件商品，已选择<i>${data.data.length}</i>件</span>
//             <div>
//                 <strong>合计:<i> ${allprice}</i>元</strong><button>去结算</button>
//             </div>
           
//             `
//         )   
//         $('.allprice div:nth-child(2)>button').click(function(){
//             // console.log("1111")
//             $('.canve').css({
//                 display:'block',
//             })
//             $('.apply').css({
//                 display:'block',
//             })
//         })
//     }
//     $('tbody').on('click','.les',function(){
//         // console.log(this)
//         // console.log($(this))
//         // console.log("111")
//         if($(this).siblings().eq(0).val()<=1){
//             alert("请重新输入购买数量")
//             $(this).siblings().eq(0).val(1)
//             return
//         }
//         let num=parseInt($(this).siblings().eq(0).val());
//         num-=1;
//         // console.log(num)
//         $(this).siblings().eq(0).val(num)
//         // $(this).siblings().eq(0).val()=num;
//         // console.log($(this).parent().parent().siblings().eq(2).children().html())

//         $(this).parent().parent().siblings().eq(4).children().html(
//             `
//         ${$(this).parent().parent().siblings().eq(3).children().html()*num}
//             `
//         )
//         $('.allprice div:nth-child(2) i').html(
//             `
//             ${getPrice()}
//             `
//         )
       
//     })
//     $('tbody').on('click','.add',function(){
//         // console.log(this)
//         // console.log("111")
//         let num=parseInt($(this).siblings().eq(1).val());
//         num+=1;
//         // console.log(num)
//         $(this).siblings().eq(1).val(num)
//         // $(this).siblings().eq(0).val()=num;
//         // console.log($(this).parent().parent().siblings().eq(2).children().html())
//         $(this).parent().parent().siblings().eq(4).children().html(
//             `
//             ${$(this).parent().parent().siblings().eq(3).children().html()*num}
//             `
//         )
//     //    console.log( getPrice())
//             // console.log($('.small'))
//        /*  $('.allprice div:nth-child(2) i').html(
//             `
//             `
//         ) */
//         $('.allprice div:nth-child(2) i').html(
//             `
//             ${getPrice()}
//             `
//         )
//     })
//     function getPrice(){
//        let price=0;
//        $.each( $('.small'),function(index,item){
//             // console.log(index)
//             price+=Number($(item).html())
            
//             // console.log($(item).html())
//        })
//        return price;

//     }
//     function getNum(){
//        let shopNum=0;
//         $.each( $('.small'),function(index,item){
//              // console.log(index)
//             //  price+=Number($(item).html())
             
//              // console.log($(item).html())
//             shopNum+=1;
//         })
//        return shopNum
 
//      }
   
//      $('.apply .top button').click(function(){
//          console.log( $(this).parent().parent())
//          $(this).parent().parent().css({
//              display:'none',
//          })
//          $('.canve').css({
//             display:'none',
//         })
       
//      })
    
// })