function changeColor(id) {
	// body...
	document.getElementById(id).style.backgroundColor="#EFEFEF";
}
function resetColor(id){
	document.getElementById(id).style.backgroundColor="#FFFFFF";
}

function checkall(){
	var checkall =document.getElementById("checkall");
	if (checkall.checked==true){
		for (var i=1;i<5;i++){
			var checkone=document.getElementByName('i');
			checkone.checked=true;
		}

	}
}
$("#regi").dialog({
		 autoOpen:false,
	     modal:true,
      hide: {
        effect: "puff",
        duration: 1000
      }

});
$("#register").click(function(){
	$("#regi").dialog("open");
});