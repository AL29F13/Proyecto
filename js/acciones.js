// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btnmenu').on ('tap',function() {
		navigador.vobrate(2000);
	
	$('.ui-btn-icon-bottom').on('tap', function (){
		flash ($(this));
		audio.play($(this).attr('id'));
	});
	$('#rocky').on('tap', function (){
		flash ($(this));
		audio.play($(this).attr('id'));
	});
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('btnmenu', 'audio/C.mp3', function(){}, function(msg){alert ("Error " + msg);});
	
}); 
});

});
