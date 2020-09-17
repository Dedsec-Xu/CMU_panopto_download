javascript:(
	function(){

		var tablep = document.getElementsByClassName("detail-title"); 
		var urls = [];
		for (var i=0; i<tablep.length; i++){
			if (Object.prototype.toString.call(tablep[i]) === "[object HTMLAnchorElement]")
			{ 
				var url = tablep[i].getAttribute("href");
				if(url != null){
					url = url.replace(/Pages\/Viewer\.aspx\?id\=/,"Podcast/Social/");
					urls.push(url + ".mp4");
					console.log(url);
				}				
			}
		}
		console.log(urls);
        var output = "";
            for (var i=0; i<urls.length; i++){
                output = output + urls[i];
                output = output + "\n";
            }
            window.alert("Copied to clipboard");
            window.copy(output);
	}
)();