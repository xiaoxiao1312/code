
    //加入购物车
     //    商品Id	商品名称	单价	数量	小计	操作

        //  1 购物车页面一打开就要展示该用户的购物车商品列表
         function getCart(){
            var list = localStorage.getItem('cart')||"[]"; //字符串
            return JSON.parse(list);
        }
        function setCart(arr){
            localStorage.setItem('cart',JSON.stringify(arr))
        }
        showList()
        function showList(){
            var productList = getCart();
            // $('tbody').empty();
            $.each(productList,function(index,product){
                if(productList.length<1){
                    $('tbody').hide();
                    $('h2').show();
                    return;
                }
                console.log(productList)
                $('table').show();
                $('h2').hide();
                $('.shopcart>#tb').append(
                            `<tr>
                            <td><input type="checkbox" class="checked"></td>
                            <td><img style="width: 80px;height: 80px;" src="${product.product_img}" alt="">${product.product_name}</td>
                            <td>${product.product_price}</td>
                            <td><div><a class="les">-</a><input type="text" value="1"><a class="add">+</a></div></td>
                            <td><i class="small">${product.product_num}</i>个</td>
                            <td>&nbsp;</td>
                            <td class="deletemsg">x</td>
                        </tr>`)
            })
        }
   
// //1，获取信息
// 		var th = document.querySelector("#th");
// 		var tb = document.querySelector("#tb");
// 		var tf = document.querySelector("#tf");
// 		var res = document.querySelector("#sum")
// 		//2，给四个商品加红边框，方便选择时能清楚的看到你选择的时那个商品
// 		var liArr = document.querySelectorAll("li");
// 		var n = 0;
// 		for(var i = 0; i < liArr.length; i++) {
// 			liArr[i].index = i
// 			liArr[i].onclick = function() {
// 				liArr[n].style.border = '1px solid #fff';
// 				this.style.border = '2px solid #f00';
// 				n = this.index;
// 			}
// 		}
		
// 		if(localStorage.newArr){
// 			var newArr = localStorage.newArr;
// 			var arr = JSON.parse(newArr);
// 		}else{
// 			var arr = []
// 		}
// 		show(arr)

		

// 		//2，给加入购物车添加点击事件
// 		//var arr = []; //存obj
// 		var add = document.querySelectorAll(".btn");
// 		for(var i = 0; i < add.length; i++) {
// 			add[i].onclick = function() {
// 				var fu = this.parentNode; //获取父元素，通过父元素去设置子元素
// 				var img = fu.querySelector('img').src; //获取img
// 				var txt = fu.querySelector('.recommend-name').innerHTML; //获取信息内容
//                 var money = fu.querySelector('.recommend-price').innerHTML; // 获取总钱数
// 				var id = fu.getAttribute('data-id'); //获取10个内容

// 				var obj = {
// 					id: id,
// 					img: img,   
// 					txt: txt,
//                     money: money,
// 					num: 1
// 				};
// 				//4，判断数组里有没有数组，没有就添加，有就判断添加的内容是否相同，如果相同就让数量++；
// 				if(arr.length == 0) {
// 					arr.push(obj)
// 				} else {
// 					var arr1 = []; //存arr里的id
// 					for(var i = 0; i < arr.length; i++) {
// 						arr1.push(arr[i].id)
// 						if(arr[i].id == obj.id) {
// 							arr[i].num++
// 						}
// 					}

// 					if(arr1.indexOf(obj.id) < 0) {
// 						arr.push(obj)
// 					}
// 				}
// 				//7,存储
// 				var newArr = JSON.stringify(arr);
// 				localStorage.newArr = newArr;
// 				show(arr)
// 			}

// 		}

// 		//3，渲染
// 		function show(arr) {
// 			//判断数组李有没有内容，没有内容让table隐藏，否则取反
// 			if(arr.length == 0) {
// 				// th.style.display = 'none';
// 				// tb.style.display = 'none';
// 				// tf.style.display = 'none';
// 			} else {
//         //5,总价
// 				var sum = 0;
// 				//因为循环的时候多循环了一边自身，所以在循环前先让内容清空，循环出来的内容才是没循环一次加一条内容
// 				tb.innerHTML = ''; 
// 				for(var i = 0; i < arr.length; i++) {
// 					tb.innerHTML += '<tr>' +
//                         '<td>' +'<input type="checkbox" class="checked">'+'</td>'
//                         '<td>'+'<img src=' + arr[i].img + '/>'+'</td>'+
//                         '<td>'+'<div class="recommend-name">' + arr[i].txt + '</div>'+'</td>'+
//                         '<td>' + arr[i].money + '</td>' +
//                         '<td>' +'<div>'+'<button class="les" type="button" onclick="jia('+arr[i].id+',0)">'+'-</button>'+
//                         '<input type="text" value=1>'+
//                         '<button class="add" type="button" onclick="jia('+arr[i].id+',1)">'+'+</button>'+'</div>'+'</td>' +
//                         '</td>' +
//                         '<td>'+'</td>'+
// 						'<td class="deletemsg" onclick = "del(' + arr[i].id + ')">删除</a></td>' +
// 						'</tr>';
// 					sum += arr[i].num* arr[i].money;

// 				}
// 				res.innerHTML = sum;

// 				th.style.display = 'table-header-group';
// 				tb.style.display = 'table-row-group';
// 				tf.style.display = 'table-footer-group';
			
// 			}

// 		}
//         // 2 用户点击+或者-可以修改当前商品的数量
//         var num=0;
// 	function jia(id,num){
// 		for (var i = 0; i < arr.length; i++) {
// 			if (arr[i].id == id) {
// 				if (num==1) {
// 					arr[i].num++;
// 				}else{
// 					if (arr[i].num>1) {
// 						arr[i].num--;
// 					}
// 				}
				
// 			}
// 		}
// 		show(arr)
			
// 	}
//         // 3 用户点击删除可以删除当前商品,删除完成后要重新渲染
// 		function del(id){
// 		for (var i = 0; i < arr.length; i++) {
// 			if(arr[i].id == id){
// 				arr.splice(i,1)
// 			}
// 		}
// 		var newArr = JSON.stringify(arr);
// 		localStorage.newArr = newArr;
// 		show(arr)
// 	}