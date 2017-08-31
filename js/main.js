/**
 * Created by asus-pc on 2017/5/28.
 */
 function success(text){
    document.getElementById("text-city").style.display="none";
    document.getElementById("info").style.display="block";
    var app = new Vue({
    el: '#info-more',
    data: {
        temp:text.result.sk.temp,
        wd:text.result.sk.wind_direction,
        ws:text.result.sk.wind_strength,
        humidity:text.result.sk.humidity,
        time:text.result.sk.time,
        city:text.result.today.city,
        temper:text.result.today.temperature,
        wea:text.result.today.weather,
        di:text.result.today.dressing_index,
        da:text.result.today.dressing_advice,
        uv:text.result.today.uv_index,
        ci:text.result.today.comfort_index,
        wi:text.result.today.wash_index,
        ti:text.result.today.travel_index,
        ei:text.result.today.exercise_index,
        di:text.result.today.drying_index
    }
})
    console.log(text);
 }
 function createData(){
    var jsonp = document.createElement("script");
    head = document.getElementsByTagName("head")[0];
    jsonp.src = "http://v.juhe.cn/weather/index?callback=success&key=fd64177e9efe6ade8fd18bbca28a3213&cityname="+document.getElementById("cityname").value;
    head.appendChild(jsonp);
 }
