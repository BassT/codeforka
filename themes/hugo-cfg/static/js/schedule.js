// try to read schedule from json

$(document).ready(function(e) {
  // load only on page with schedule selector
  if ($("#schedule").length) {
      //$.getJSON("/schedule/schedule.json", function(result){
      $.ajaxSetup({ cache: false });
      $.getJSON("https://raw.githubusercontent.com/CodeforKarlsruhe/labSchedule/master/karlsruhe.json", function(result){
        if (0 == result.length) 
            console.log("No schedule data")
        else {
            console.log("Length " + result.length)
            var sc = "<ul>";
            $.each(result, function(i, field){
                sc += "<li>";
                sc += field.date + ": " + field.title;
                sc += "</li>";
            });
            sc += "</ul>";
            $("#schedule").append(sc);
        }
      });
  } else
    console.log("No schedule id")
});

