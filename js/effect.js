TweenMax.from("#self", 1, {
  opacity: 0,
  rotation: 360,
  scale: 0,
  left: -1040,
  ease: Back.easeOut
});
TweenMax.to("#self", 1, {
  borderRadius: "50%",
  delay: 0.9
});
TweenMax.from("#self-text", 1, {
  opacity: 0,
  delay: 1.2
});

// slide effect
$(window).scroll(function() {
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

// Pie chart effect and function

function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}

function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice " + sliceID + "'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;
  $("." + sliceID).css({
    "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
  });
  $("." + sliceID + " span").css({
    "transform": "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
    "background-color": color
  });
}

function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s" + dataCount + "-" + sliceCount;
  var maxSize = 179;
  if (sliceSize <= maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
  }
}

function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement + " span").each(function() {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for (var i = 0; i < listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "tomato",
    "cornflowerblue",
    "yellow",
    "forestgreen",
    "purple",
  ];
  for (var i = 0; i < listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
    offset += size;
  }
}
createPie(".pieID.legend", ".pieID.pie");


// Treehouse script and plugin for badges

// When Document is ready, build treehouse Badge Widget
$(document).ready(function() {

  // Replace the value for var 'e' with your Treehouse Username
  var e = "elvinramirez",

    // Treehouse Json
    t = "https://teamtreehouse.com/" + e + ".json",

    // Badges JQuery Identifier
    n = $("#badges"),

    // Badges Array
    r = [],

    // Badges Count
    i = 0;

  // Json Parse Treehouse User Badges Info
  $.getJSON(t, function(e) {

    // User Json Parse Select Badges Info
    var t = e.badges;

    // Construct Each badge's HTML
    $.each(t, function(e, t) {
      r += '<li><a href="' + t.url + '" target="_blank"><img src="' + t.icon_url + '" alt="' + t.name + '" title="' + t.name + '"/></a></li>';
      i++
    });

    // Append Badge to #badges
    n.append(r);

    // Header Badges count generator
    $("#treehouse-count").append('Total (' + i + ') badges earned at Treehouse!');
  });
});

$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Ramirez1900.json',
    dataType: 'jsonp',
    success: function(data) {
      CodeSchool(data.courses.completed)
    }
  });

  function CodeSchool(courses) {

    var $badges = $('#badges2');

    courses.forEach(function(course) {

      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

});
