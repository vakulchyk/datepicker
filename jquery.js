
// if (datefield.type!="date"){ //if browser doesn't support input type="date", initialize date picker widget:
//     jQuery(function($){ //on document.ready
//         $('#datepic').datepicker();
//     })
// }



$(document).ready(function(){
    $("input[type=date]").click(function(){
        $("input[type=date]").addClass("addedDate");
    })   
})

$(document).ready(function(){
    $("input[type=date]").click(function(){
        $(".date_picker_label").remove();
    })
})

