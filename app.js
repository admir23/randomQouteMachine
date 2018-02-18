$(document).ready(function() {

  var quote = "";
  var author = "";
  getQoute();
    function getQoute() {
     var url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
     $.getJSON(url, function(data){
        quote = data.quoteText;
        author = data.quoteAuthor;
        $("#text").html("" + data.quoteText)
        $(".qouter").html("-" + data.quoteAuthor)
     });
   }

   $("#qt").on("click", function (){
     getQoute();
   });

   $("#tweet").on("click", function(){
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + '- '+ author));
      
   });
});