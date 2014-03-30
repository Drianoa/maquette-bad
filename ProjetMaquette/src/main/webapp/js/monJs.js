$( document ).ready(function() {

$( "#maRecherche" ).keyup(function() {
	$( "#r_2" ).remove();
	$( "#r_3" ).remove();
	$( "#r_4" ).remove();
	$( "#r_5" ).remove();
	$( "#r_6" ).remove();
	$( "#maPagination" ).remove();
	$( "#mesResultats").html("<span class='badge'>1 résultat</span>");
});


var val = location.href.substring(1).split('#');
	if(val[1] == "ok" && typeof(val)!='undefined'){
		$("#notif").addClass("notif");
		$("#notif").html("<div class='notif'>Nouvel adhérent créé.</div>").fadeOut(6000);
	}else if(val[1] == "mod"){
		$("#notif").addClass("notif");
		$("#notif").html("<div class='notif'>Adhérent modifié.</div>").fadeOut(6000);
	}else if(val[1] == "sup"){
		$("#notif").addClass("notif");
		$("#notif").html("<div class='notif'>Adhérent Supprimé.</div>").fadeOut(6000);
	}
	
 $("body").tooltip({ selector: '[data-toggle=tooltip]' });
 
 	$("#confirmer").click(function(){
		$("#r_1").remove();
	});	
});