
// Returns estimated reading time for each article in index, based on 200wpm

function readingTime (bodyString) {
  console.log(bodyString);
  words = $.trim(bodyString).split(" ").length;
  console.log(words);
  mins = Math.floor(words/200);
  if (mins < 1){mins = 1;};
  return  "<h1>" + mins + "</h1>" + "<div> min read</div>";
}

function populateReadingTime () {
  console.log("populateReadingTime has been called")
  $(".content-string").each(function(){
    time = readingTime($(this).text());
    $(this).parent().append(time);
  });
}

$(populateReadingTime);
