

$(document).ready(function(){
    // $("input[type=date]").append('<label class="date_picker_label">Select date <span class="mls icon-icn_calendar2"></span></label>');
    $("input[type=date]").click(function(){
        $(this).addClass("addedDate");
    })
    $("input[type=date]").click(function(){
        $(this).next($(".date_picker_label")).css("visibility", "hidden");
        $(this).next($(".date_picker_label")).children().css( "visibility", "visible" );
    })
})



