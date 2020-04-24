//key: M4nyhqK9KvGiYq40iFgFreF4SnqxrY1j

var app = {
     description : [],
     titles : [],




     initialize: function() {
          app.getData();
     },
     makeHTML: function() {
          var theHTML = '';
          theHTML += "<h3>Top 10 NYT Best Sellers -- Descriptions</h3>"
          for(var i = 0; i < app.description.length; i++) {
               theHTML += "<div class='title'>";
               theHTML += "<p> " + app.description[i] + "</p>";
               theHTML += "</div>";
          }
          theHTML += "<button name='titleButton' onclick='app.showTitles()'>View Titles</button>";
          $(".wrapper").html(theHTML);
     },
     showTitles: function() {
          var theHTML = '';
          theHTML += "<h3>Top 10 NYT Best Sellers -- Titles</h3>"
          for(var i = 0; i < app.titles.length; i++) {
               theHTML += "<div class='title'>";
               theHTML += "<p> " + app.titles[i] + "</p>";
               theHTML += "</div>";
          }
          theHTML += "<button name='descButton' onclick='app.makeHTML()'>View Descriptions</button>";
          $(".wrapper").html(theHTML);
     },
     getData: function(){
          var myKey = "M4nyhqK9KvGiYq40iFgFreF4SnqxrY1j";
          var url_Part1 = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=";
          const requestURL = url_Part1 +  myKey;
          console.log(requestURL);

          $.ajax({
               url: requestURL,
               type: 'get',
               dataType: 'json',
               error: function(err){
                    console.log("something is wrong.");
                    console.log(err);
               },

          success: function(data){
               //app.books = data.results[0].summary;
               console.log(data.results.books[0].title);
               console.log(data.results.books[0].description);


               for(i = 0; i < 11; i++){
                    app.description[i] = data.results.books[i].description;
                    app.titles[i] = data.results.books[i].title;
               }

               app.makeHTML();

               //let summ2 = $(".author").get(1);
               /*
               $(".author").text("Author: " + data.results[0].book_author);
               $(".title").text("Title: " + data.results[0].book_title);
               $(".summary").text("Summary: " + data.results[0].summary);
               $(summ2).text("Summary: " + data.results[1].summary);*/


               //document.getElementById("summary").innerText = data.results[0].summary;
          }
          });
     }
};
app.initialize();
