
$(function(){
	var playItem = 1,
		title=$('.jp-interface .jp-title'),
		jPlayer=$("#jplayer"),
		myPlayList = [
			{name:"Srikakulam Gunta Dj Dillu",mp3:"audio/Srikakulam Gunta.mp3",ogg:"audio/Srikakulam Gunta.ogg"},
			{name:"Welcome to Dj Dillu",mp3:"audio/untitled.mp3",ogg:"audio/untitled.ogg"},
			{name:"Train Lo Potunna chinni Dj Dillu ",mp3:"audio/Train Lo Potunna Sinni Dj Preview.mp3",ogg:"audio/Train Lo Potunna Sinni Dj Preview.ogg"}
			
		],		
		jPlay=function(idx){
			if(typeof idx==typeof 0)
				jPlayer.jPlayer("setMedia",myPlayList[idx]).jPlayer('play')
			if(typeof idx==typeof '')
				jPlayer.jPlayer("setMedia",myPlayList[playItem=idx=='next'?(++playItem<myPlayList.length?playItem:0):(--playItem>=0?playItem:myPlayList.length-1)]).jPlayer('play')					
			title.text(myPlayList[playItem].name)
			Cufon.refresh()
		}

	jPlayer.jPlayer({
		ready: function() {
			jPlay(playItem)
		},
		ended:function(){
			jPlay('next')
		}
	})

	$(".jp-prev,.jp-next")
		.click( function() { 
			jPlay($(this).is('.jp-next')?'next':'prev')
			return false;
		})
	
});
