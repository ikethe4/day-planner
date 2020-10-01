//State of page:
//container with 24 diff to erent input boxes (one for each hour in the day)
//boxes should have button at the end to allow saving input to local storage
//boxes should change color based on the time of day (past/present/future)
//header should display the current day
var today = $("#currentDay");

//boxes can be hard coded


//current date in the header goes here
function todaysDate(){
    today.text(moment().format("dddd, MMMM Do"));
}
todaysDate();


//color coding the hours goes here
function changeColor(){
   var currentHour = moment().hours();
//    console.log(currentHour); 
   $(".time-block").each(function(){
       var calendarHour = parseInt($(this).attr("id"));
       console.log(calendarHour);

       if (calendarHour < currentHour){
           $(this).addClass("past");
       }
       else if (calendarHour === currentHour){
           $(this).removeClass("past");
           $(this).addClass("present");
       }
       else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
       }
   })
}
changeColor();

//click event to save to local storage goes here
$(".saveBtn").on("click", function(){
    console.log("item saved!");
    //value of text box
    var value = $(this).siblings(".description").val();
    console.log(value);

    //time in which to save it
    var time = $(this).parent().attr("id");
    console.log(time)

    //local storage
    localStorage.setItem(time, value);

})

$("#9 .description").val(localStorage.getItem("9"));

$("#10 .description").val(localStorage.getItem("10"));

$("#11 .description").val(localStorage.getItem("11"));

$("#12 .description").val(localStorage.getItem("12"));

$("#13 .description").val(localStorage.getItem("13"));

$("#14 .description").val(localStorage.getItem("14"));

$("#15 .description").val(localStorage.getItem("15"));

$("#16 .description").val(localStorage.getItem("16"));

$("#17 .description").val(localStorage.getItem("17"));