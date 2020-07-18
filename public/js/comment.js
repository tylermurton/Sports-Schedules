/* global moment */

// When user clicks add-btn
$("#submit-comment").on("click", function(event) {
    event.preventDefault();
  
    // Make a newComment object
    var newComment = {
      author: $("#user").val().trim(),
      body: $("#comment-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newComment);
  
    // Send an AJAX POST-request with jQuery
    $.post("/scores", newComment)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("comment");
  
        row.append("<p>" + newComment.author + " commented: </p>");
        row.append("<p>" + newComment.body + "</p>");
        row.append("<p>At " + moment(newComment.created_at).format("h:mma on dddd") + "</p>");
  
        $("#comment-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#user").val("");
    $("#comment-box").val("");

  });
  
  // When the page loads, grab all of our comments
  $.get("/scores", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("comment");
  
        row.append("<p>" + data[i].author + " commented: </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "<hr>" + "</p>");
  
        $("#comment-area").prepend(row);
  
      }
  
    }
  
  });