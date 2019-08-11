function handleQuery(searchQuery) {
    var url = location.origin + "/matador-citater/search.html?query=" + searchQuery;

    window.open(url, "_self")
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

function loadSearchResults(searchQuery) {
	var formattedSubtitles = [];
	
    fetch('matador.json')
        .then(response => response.json())
        .then(jsonResponse => {
            var subtitles = jsonResponse;
            for (var subtitle of subtitles) {
                formattedSubtitles.push({
                    start: subtitle[0],
                    stop: subtitle[1],
                    text: subtitle[2],
                    episode: subtitle[3]
                });
            }
            var options = {
                shouldSort: true,
                minMatchCharLength: 2,
                keys: [
                    "text"
                ]
            };
		
            var fuse = new Fuse(formattedSubtitles, options); // "list" is the item array
            var result = fuse.search(searchQuery);
			result = result.slice(0, 100)
            if (result.length > 0) {
                displayResults(result);
				console.log("result")
            } else {
                alert("Kan ikke finde citat")
            }

        })

}

var thumbnails = ["https://www.thetvdb.com/banners/episodes/80974/345202.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345203.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345204.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345205.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345206.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345207.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345228.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345229.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345230.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345231.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345232.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345233.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345234.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345235.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345236.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345237.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345238.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345239.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345240.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345241.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345242.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345243.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345244.jpg",
				  "https://www.thetvdb.com/banners/episodes/80974/345245.jpg"]
var videoUrls = ["https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40263_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40268_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40261_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40274_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40273_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40277_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40311_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40312_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40315_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40322_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40325_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/08-03-2008/40345_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40346_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40349_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40353_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40357_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40363_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40367_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40371_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40373_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/43062_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40370_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40372_720x540x1400K.mp4/playlist.m3u8",
                         "https://vod-bonanza.dr.dk/bonanza/mp4:bonanza/bonanza/11-03-2008/40408_720x540x1400K.mp4/playlist.m3u8"]
function displayResults(results) {
    var searchContainer = document.getElementById("searchcontainer");
    //searchContainer.innerHTML = JSON.stringify(results)
	
	for(var result of results){
		var time = new Date(result.start).toISOString().substr(11, 8);
		var url = location.origin + "/matador-citater/video.html?episode=" + result.episode+"&start="+result.start;
		var cardtemplate = `<div class="card" style="margin-bottom:20px;">
			<div class="card-body">
				<img style="display: inline-block;" width="300px" src="`+thumbnails[result.episode]+`"/>
				<div style="display: inline-block; padding-left:20px">
					<h4>Episode `+result.episode+`</h4>
					<h6 class="text-muted mb-2">`+time+`</h6>
					<p id="subtext" style="margin-bottom:0px;">`+result.text+`</p>
				</div>     
			</div>
			<a href=`+url+`>
				<span class="link-spanner"></span>
			</a>
		</div>`;

		var card = createElementFromHTML(cardtemplate)

		searchContainer.appendChild(card)
	}
}

function playVideo(episode, start){
	video.pause();
	source.setAttribute('src', videoUrls[episode-1]+"#t="+(start/1000-2));
	video.load();
	video.play();
	video.pause();
	video.play();


}
