javascript:(function()
{
	if(window.location.href.indexOf("panopto.com") < 1) 
	{ 
		alert("No video"); 
		exit(); 
	}
	var metas = document.getElementsByTagName('meta'); 
	for (var i=0; i<metas.length; i++) 
	if (metas[i].getAttribute("name") == "twitter:player:stream") 
	{ 
		alert("The video adress is: " + metas[i].getAttribute("content").split('?')[0]);
	} 
}
)();