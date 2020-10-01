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


//click event to save to local storage goes here


