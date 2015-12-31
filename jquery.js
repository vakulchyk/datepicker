$(document).ready(function(){
    // insert requiered elements for date picker
    $('<label class="date_picker_label">Select date <span class="mls icon-icn_calendar2"></span></label>').insertAfter($("input[type=date]"));
    $("input[type=date]").click(function(){
        $(this).addClass("addedDate");
    })
    // modifing view of date picker onclick
    $("input[type=date]").click(function(){
        $(this).next($(".date_picker_label")).css("visibility", "hidden");
        $(this).next($(".date_picker_label")).children().css( "visibility", "visible" );
    })
})



