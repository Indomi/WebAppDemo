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
            document.getElementById("text-city").style.display="none";
            document.getElementById("info").style.display="block";
            $("#return-button").show();
            console.log(data.result.today);
            var temp = 0;
            var obj = data.result.today;
            for(var i in data.result.today){
                $("#info-more").children().eq(temp).append(obj[i]);
                temp++;
            }
        },
        error:function () {
            console.log("不成功");
        }
    });
}
function returnFind() {
    $("#text-city").show();
    $("#info").hide();
}