$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var description = $("input#description").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $(".name").text(nameInput);
    $(".description").text(description);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $("#appointment").show();

    event.preventDefault();
  });
});
