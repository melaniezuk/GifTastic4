$(document).ready(function(){
    console.log("document is loaded")

   /* <script type="text/javascript">*/
   
  var body = ["Head", "Eyes", "Chest", "Mouth", "Nose", "Arms", "Hands", "Fingers", "Heart", "Lungs", "Stomach", "Liver", "Belly Button", "Legs", "Bones", "Arteries", "Vessels", "Knees", "Feet", "Ankles"];

 

  function buttonDisplay (){
      // $('body').on('click', '.bodyGif', function(){
       $(".partsDiv").empty();

          var buttonVal = $(this).text();
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonVal + "&api_key=dc6zaTOxFJmzC&limit=10";
       
          $.ajax({
              url: queryURL,
              method: "GET"
          })

          .then(function(response){
             var results = response.data;
             
   
              // response.data is an array of 10 GIFs
              // we want to loop through this array and for each item in the array, create an <img src="sourceurl">

              //loop through response.data array
              for (var i=0; i < response.data.length; i++){


               var gifImage = $("<div class='partsDiv'>");


                  // var gifImage = $("<img>");    
                 var rating = $("<h5>").text("Rating: " + results[i].rating).addClass('rating');
                  //give each image a src attribute, equal to the url property of the item we are currently looping on
                  gifImage = $('<img>').attr('src', response.data[i].images.fixed_height.url);


                  $('#gif-view').append(gifImage);
                  //append to gif div
              }  


              //renderButtons();
          });
          }
     
      // buttonDisplay();

       function renderButtons() {
         // (this is necessary otherwise you will have repeat buttons)
        $(".partsDiv").empty();
        for (var i = 0; i < body.length; i++){
            var a = $("<button>");
            a.addClass ("bodyGif");
            a.attr ("data-name", body [i]);
            a.text(body[i]);
            $("#buttons-view").append(a);
            }
   }

  $("#add-body").on("click", function(event) {       //This function handles events where one button is clicked
      event.preventDefault();        // event.preventDefault() prevents the form from trying to submit itself.// We're using a form so that the user can hit enter instead of clicking the button if they want
      var bodies = $("#gif-input").val().trim();      // This line will grab the text from the input box
      body.push(bodies);         // The movie from the textbox is then added to our array
      renderButtons();         // calling renderButtons which handles the processing of our movie array
  });
  
  $(document).on("click", ".bodyGif", buttonDisplay);
   
   //renderButtons();        
    
