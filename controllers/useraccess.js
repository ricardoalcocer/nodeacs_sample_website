var ACS = require('acs').ACS

function login(req,res){
    ACS.Users.login({
        login: req.body.username, // grab data from http post
        password: req.body.password
    }, function(data) {
    	if (data.success){
    		// set session data to be used later througout the app
			req.session.session_id=data.meta.session_id;
            req.session.user_id=data.users[0].id;
			req.session.fullname=data.users[0].first_name + ' ' + data.users[0].last_name;
			
			res.redirect('/home'); // the "home" controller will pick it up
    	}else{ 
    		res.redirect('/error');
    	}
    });
}

function logoff(req,res){
    ACS.Users.logout(function(data) {
    	delete req.session.session_id;
    	res.redirect('/');
  	});
}