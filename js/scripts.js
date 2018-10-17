$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var myShout = $("input#shout1").val();
      $("h1").text(myShout +"!");
      event.preventDefault();
    });
});
