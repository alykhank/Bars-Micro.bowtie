function $(id) { return document.getElementById(id); }

function mousing()
{
	Bowtie.addMouseTrackingForElement($('artwork'),'mouseUpdate');
}

function mouseUpdate(obj)
{
	if (obj.property("enter") == true)
	{
		stateUpdate();
	}
	else if (obj.property("enter") == false)
	{
		fade();
	}
}

function trackUpdate(theTrack)
{
	var trackTitle = theTrack.title || "Nothing Playing";
	var trackArtist = theTrack.artist || "No Artist";
	var trackAlbum = theTrack.album || "No Album";
	
	$('titleElement').innerHTML = trackTitle;
	$('artistElement').innerHTML = trackArtist;
	$('albumElement').innerHTML = trackAlbum;
}

function artworkUpdate(artworkURL)
{
	if (artworkURL == "")
	{
		$('artwork').src = "noartwork.png";
	}
	else
	{
		$('artwork').src = artworkURL;
	}
}

function playPause()
{
	// send the play/pause command
	Player.playPause();
	// return false so the link isn't followed
	return false;
}

function previousTrack()
{
	// send the play/pause command
	Player.previousTrack();
	// return false so the link isn't followed
	return false;
}

function nextTrack()
{
	// send the play/pause command
	Player.nextTrack();
	// return false so the link isn't followed
	return false;
}

function stateUpdate(playState)
{
	var playState = Player.playState();
	
	$('circle').style.opacity = "1";
	$('block').style.opacity = "1";
	
	if (playState == 0)
	{
		$('play').style.opacity = "1";
		$('pause').style.opacity = "0";
	}
	else if (playState == 1)
	{
		$('play').style.opacity = "0";
		$('pause').style.opacity = "1";
	}
	else if (playState == 2)
	{
		$('play').style.opacity = "1";
		$('pause').style.opacity = "0";
	}
	setTimeout('fade()', 3000);
}

function fade()
{
	$('play').style.opacity = "0";
	$('pause').style.opacity = "0";
	$('circle').style.opacity = "0";
	$('block').style.opacity = "0";
}

function changeColor()
{
	$('titleElement').style.color = "rgba(0,0,0,1)";
	$('artistElement').style.color = "rgba(0,0,0,1)";
	$('albumElement').style.color = "rgba(0,0,0,1)";
	$('dot1').style.color = "rgba(0,0,0,1)";
	$('dot2').style.color = "rgba(0,0,0,1)";
	$('dot3').style.color = "rgba(0,0,0,1)";
}