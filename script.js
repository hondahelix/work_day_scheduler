$(document).ready(function () {
    console.log(moment());
    console.log(moment().format());
    // initial time set so it shows when first loaded 
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
    
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
        //updates time on page every sec
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }
    //updateTime();
    //calls update time every sec/1000 ms
    setInterval(updateTime, 1000);
});