
// if (datefield.type!="date"){ //if browser doesn't support input type="date", initialize date picker widget:
//     jQuery(function($){ //on document.ready
//         $('#datepic').datepicker();
//     })
// }

$(document).ready(function(){
    console.log($("input").val());
    $("input[type=date]").change(function(){
        $("input[type=date]").addClass("addedDate");
    })
    $("input[type=date]").click(function(){
        $(".date_picker_label").remove();
    })
    // console.log($('input').val());
    // $("input").change(function(){
    //     if ($("input").val() == ""){
            
    //     };
    // });
})



