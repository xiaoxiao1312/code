$(function () {
    getData();
    $(".bar_right li:nth-child(1) h3").html(
      `
      ${cookie.get("name")}
      `
    )
    $(".signr").html(
      `
          ${cookie.get("name")}
          `
    );
    $(".info_right > div:nth-child(4) span").html(
      `
          ${cookie.get("price")}元
          `
    );
    $(".price_msg").html(
      `
          <div><span> ${cookie.get("name")}</span> <i>${cookie.get(
        "price"
      )}元</i></div>
          <strong>总计：${cookie.get("price")}元</strong>
          `
    );
    
    function getRandid() {
      return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    }
    $(".gcart>div:nth-child(1)>button:nth-child(1)").click(async function () {
      // console.log('1111')
      let data = await $.ajax({
        url: "../interface/add.php",
        type: "get",
        data: {
          id: getRandid(),
          name: cookie.get("name"),
          price: cookie.get("price"),
          img: cookie.get("src"),
        },
        dataType: "json",
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(XMLHttpRequest, textStatus, errorThrown);
        },
      });
      console.log(data);
      if (data.code === 1) {
        alert("商品添加成功");
      } else {
        alert("商品添加失败");
      }
      // console.log(data)
    });
  });