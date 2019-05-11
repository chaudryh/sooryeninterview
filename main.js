// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// 2. Remove each item when we click on the closing X

$(document).on('click', '.glyphicon-remove-circle', function () {
    $(this).parents('.panel').get(0).remove();
});

// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

var $template = $(".template");

var num = 2;
$(".add").on("click", function () {
    var $newPanel = $template.clone();
    $newPanel.find(".collapse").removeClass("item");
    $newPanel.find(".accordion-toggle").attr("href", "#" + (++num))
        .text("Title #" + hash);
    $newPanel.find(".panel-collapse").attr("id", num);
    $("#accordion").append($newPanel.fadeIn());
});


//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page