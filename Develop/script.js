// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplay = $('#currentDay')
var saveBtn = $('.saveBtn')
var userDescription;
var dateNow;
var timeNow;
var rightNow;

$(function () {   //self invoking function

  //date header
  var dateNow = dayjs().format('MMM DD, YYYY');
  timeDisplay.text(dateNow);

  //saving to local storage
  $(saveBtn).on("click", function(){
    var inputText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(inputText, time);
  })


/*
  var hourData = "";
  var hourName = "1200am";

  var generatingNewBlock = $(`
    <div id="hour-9" class="row time-block ${timeClass}">
      <div class="col-2 col-md-1 hour text-center py-3">${hourName}</div>
      <textarea class="col-8 col-md-10 description" rows="3"> 
      ${hourData}
      </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
  `);
  //append back into main calendar itself
  document.body.appendChild("container-lg")
*/

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(".time-block").each(function(){
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime === rightNow){
      $(this).removeClass("future");
      $(this).addClass("present");
      $(this).removeClass("past");
    }else if (blockTime < rightNow){
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  })
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
  
});


