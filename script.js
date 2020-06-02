var currentDay = document.querySelector("#currentDay")
var setAppointment = document.getElementById("setAppointment")

$(document).ready(function() {
// Current Date + time
var m = moment();
var dateTime = m.format("dddd, MMM Do YYYY")
console.log(dateTime);
$("#currentDay").append(dateTime);
// Color coding to indicate whether it is past, present, or future
var currentHour = moment().hour();
console.log(currentHour);

var time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < time.length; i++) {
    console.log(time[i]);
    // if less than time displayed use correct css classes
    if(currentHour < time[i]) {
        $("#" + time[i])
        .removeClass("present")
        .addClass("future");
    // if greater than time displayed use correct css classes
    } else if (currentHour > time[i]) {
        $("#" + time[i])
        .removeClass("present")
        .addClass("past");
    }
}

});

// Local storage
$(".saveBtn").on("click", function () {
    var textValue = $(this).siblings(".description").val();
    var timeKey = $(this).parent().attr("id");
    localStorage.setItem(timeKey, textValue);
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));