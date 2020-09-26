console.log(moment());
console.log(moment().format());
// initial time set so it shows when first loaded 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//global vars 
//var currentHour = moment().format('HH');
console.log(currentHour);
var currentHour = "12";
var arrayOfTime = [
    {hour: "09",
    time:"9 am"},

    {hour: "10",
    time:"10 am"},

    {hour: "11",
    time:"11 am"}, 

    {hour: "12",
    time:"12 pm"},

    {hour:"13",
    time: "1 pm"},

    {hour: "14",
    time: "2 pm"},

    {hour:"15",
    time:"3 pm"},

    {hour: "16", 
    time: "4 pm"},

    {hour:"17",
    time: "5 pm"}
];
//console.log(currentHour);
//need to have 9am-5pm time blocks 
function makeTimeRows(){
    for(var i = 0; i<arrayOfTime.length; i++){
        var newRow = $("<div>").addClass("row time-block");
        var newP = $("<p>").addClass("hour col-2");
        newP.text(arrayOfTime[i].time);
        var newTextarea = $("<textarea>").addClass("col-9");
        var button = $("<button>").addClass("saveBtn col-1");
        if(currentHour==arrayOfTime[i].hour){
            newTextarea.addClass("present")
        }
        else if(currentHour<arrayOfTime[i].hour){
            newTextarea.addClass("future");
        }
        else{
            newTextarea.addClass("past");
        }
        newRow.append(newP, newTextarea, button);
        $(".container").append(newRow);
    }
}
makeTimeRows();
// function checkPastPresentFurture(){

// }
let updateTime = function () {
    //updates time on page every sec
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}
//updateTime();
//calls update time every sec/1000 ms
setInterval(updateTime, 1000);
//console.log(currentHour);
