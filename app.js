"use strict";
$(document).ready(function () {




    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `  http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={API key}   `
            async function myweather (){
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feels").html(data.main.feels_like)
                $("#myWeather").val("")
                console.log(data)
            }
            myweather()
        }
    })

    $("#btn").click(function (e) {
        e.preventDefault()
        let url = ` http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={API key}  `
        async function myweather() {
            let responce = await fetch(url)
            let data = await responce.json()
            $("#city").html(data.name)
            $("#temp").html(data.main.temp)
            $("#feels").html(data.main.feels_like)
            $("#myWeather").val("")
            console.log(data)
        }
        myweather()
        
    })







});