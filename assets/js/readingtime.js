
// Returns estimated reading time for each article in index, based on 200wpm

function readingTime (bodyString) {
  var words = $.trim(bodyString).split(" ").length;
  var mins = Math.floor(words/200);
  if (mins < 1){mins = 1;};
  return  "<h1>" + mins + "</h1>" + "<div> min read</div>";
}

function populateReadingTime () {
  $(".content-string").each(function(){
    var time = readingTime($(this).text());
    $(this).parent().html(time);
  });
}

$(populateReadingTime);
