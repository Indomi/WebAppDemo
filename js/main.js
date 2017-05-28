/**
 * Created by asus-pc on 2017/5/28.
 */
function getData(){
    $.ajax({
        type:"GET",
        url:"http://v.juhe.cn/weather/index",
        dataType:"jsonp",
        async:"true",
        data:{
            "cityname":document.getElementById("cityname").value,
            "key":"fd64177e9efe6ade8fd18bbca28a3213"
        },
        success:function(data){
            $("#text-city").hide();
            $("#info").show();
            $("#return-button").show();
            console.log(data.result.today);
            console.log(Object.keys(data.result.today));
            var temp = 0;
            var obj = data.result.today;
            for(var i in data.result.today){
                $("#info-more").children("p").eq(temp).append(obj[i]);
                temp++;
            }
        },
        error:function () {
            console.log("不成功");
        }
    });
}