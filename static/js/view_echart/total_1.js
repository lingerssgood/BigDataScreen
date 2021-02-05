$(function total(){
    $("clearfix").toggle()
       $.ajax({
            type:"GET",
            url:"get_total",
            dataType:"json",
            success:function (data){
            console.log(data);
            document.getElementById("year_value").innerHTML=data.year_value;
            document.getElementById("history_value").innerHTML=data.history_value;
                },
                complete:function(){
                 $("#loadp").hide();
                 $("#loadw").hide();
                 $("clearfix").toggle();
                }
       });
 });