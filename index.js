$(document).ready(function(){
    $("#btn").click(function(){
        let pretraga=$("#termin").val();
        if(pretraga==""){
            $("#div1").html("Niste uneli termin pretrage!");
            return false;
        }
        $.post("ajax/ajaxIndex.php",{termin:pretraga},function(response){
            //$("#div1").html(response);
            let odogovor=JSON.parse(response);
            if(odogovor.length==0){
                $("#div1").html("Nema rezultata pretrage");
                return false;
            }

            let ispis="";
            for(i=0;i<odogovor.length;i++){
                ispis+=odogovor[i].id + ": " + odogovor[i].ime + " " + odogovor[i].prezime + " " + odogovor[i].status + "<br>";
            }
            $("#div1").html(ispis);
        });
    });
});