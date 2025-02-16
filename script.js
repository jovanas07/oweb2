$(document).ready(function() {
     $(".btn").click(function(event) {
      event.preventDefault(); 
      window.location.href = "doma.html";
    });
  });

  $("#goBackButton").click(function() {
    window.history.back(); 
  });


$(document).ready(function(){
    $(".btnnn").click(function(event){
        event.preventDefault(); 
        let name = $(".review input[placeholder='name']").val();
        let email = $(".review input[placeholder='email']").val();
        let message = $(".review textarea").val();

        if(name === "" || email === "" || message === ""){
            alert("Please fill in all fields before submitting!");
        } else {
            alert("Your message has been sent successfully!");
        }
    });
});
$(document).ready(function(){
    $(".review h3, .reserve h3").click(function(){
        $('html, body').animate({
            scrollTop: $(this).closest(".review-section").offset().top
        }, 1000);
    });
});
$(document).ready(function(){
    $("#scrollToFeedback").click(function(){
        $('html, body').animate({
            scrollTop: $(".review-section:first").offset().top
        }, 1000);
    });

    $("#scrollToReservation").click(function(){
        $('html, body').animate({
            scrollTop: $(".review-section:last").offset().top
        }, 1000);
    });
});
$(document).ready(function () {
    $(".reserve-btn").click(function (event) {
      event.preventDefault(); 

      var name = $(".reserve input[placeholder='name']").val().trim();
      var email = $(".reserve input[placeholder='email']").val().trim();
      var time = $(".reserve input[placeholder='time']").val().trim();

      if (name === "" || email === "" || time === "") {
        alert("Please fill in all fields!");
      } else {
        alert("Your reservation has been made!");
        $(".reserve input[type='text'], .reserve input[type='time']").val("");
        $(".reserve select").prop("selectedIndex", 0); 
      }
    });
  });
  $(document).ready(function () {
    var liked = false; 

    $("#likeBtn").click(function () {
      var likeCount = parseInt($("#likeCount").text());

      if (!liked) {
        likeCount++; 
        $("#likeBtn").text("👎 Unlike"); 
      } else {
        likeCount--; 
        $("#likeBtn").text("👍 Like"); 
      }

      liked = !liked; 
      $("#likeCount").text(likeCount);
    });
  });
  $(document).ready(function () {
    $(".back-link").click(function () {
      window.history.back(); 
    });
  });

  $(document).ready(function () {
    $("#submitComment").click(function () {
      var comment = $("#comment").val().trim(); 

      if (comment === "") {
        alert("Please enter a comment before submitting!"); 
      } else {
        var commentBox = $("<div class='comment-box'></div>").text(comment);
        $("#commentsContainer").append(commentBox); 
        $("#comment").val(""); 
      }
    });
  });