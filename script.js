console.log(moment());
console.log(moment().format());
// initial time set so it shows when first loaded 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//global vars 
var currentHour = moment().format('HH');
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

// OLD CODE that I could not figure out -> maybe do able but ran out of time
//so I hard coded rows in HTML
//makes the colors and rows but I dont know how to get values out of them
// function makeTimeRows(){
//     for(var i = 0; i<arrayOfTime.length; i++){
//         var newRow = $("<div>").addClass("row time-block");
//         var newP = $("<p>").addClass("hour col-2");
//         newP.text(arrayOfTime[i].time);
//         var newTextarea = $("<textarea>").addClass("col-9");
//         var button = $("<button>").addClass("saveBtn col-1");
//         if(currentHour==arrayOfTime[i].hour){
//             newTextarea.addClass("present")
//         }
//         else if(currentHour<arrayOfTime[i].hour){
//             newTextarea.addClass("future");
//         }
//         else{
//             newTextarea.addClass("past");
//         }
//         newRow.append(newP, newTextarea, button);
//         //console.log(newRow);
//         $(".container").append(newRow);
//     }
// }
// makeTimeRows();

function reLoad(i){
    console.log(i);
    if(localStorage.getItem("t-"+i)!==null){
        $("#t-"+i).val(localStorage.getItem("t-"+i));
    }
}

function checkPastPresentFurture(){
    for(var i = 0; i<arrayOfTime.length; i++){
        if(currentHour==arrayOfTime[i].hour){
            $("#t-"+arrayOfTime[i].hour).addClass("present")
        }
        else if(currentHour<arrayOfTime[i].hour){
            $("#t-"+arrayOfTime[i].hour).addClass("future");
        }
        else{
            $("#t-"+arrayOfTime[i].hour).addClass("past");
            //console.log($("#t-"+arrayOfTime[i].hour));
        }
        reLoad(arrayOfTime[i].hour);
    }
}

//on click of button saves to local storage
$(".saveBtn").on("click", function() {
    var id = this.id;
    tId = id.replace('b', 't')
    var comment = $.trim($("#"+tId).val());
    if(comment != ""){
        localStorage.setItem(tId, comment);
    }
    else{
        localStorage.removeItem(tId);
    }  
});

let updateTime = function () {
    //updates time on page every sec
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

//calls update time every sec/1000 ms
setInterval(updateTime, 1000);
//updates colors if passes the time
checkPastPresentFurture();
