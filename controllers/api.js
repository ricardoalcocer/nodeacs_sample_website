var ACS = require('acs').ACS

function deleterec(req,res){
	console.log(req.session.session_id);
	ACS.Places.remove({
		place_id:req.query.id,
		session_id:req.session.session_id
	}, function(data) {
		console.log(data);
		res.redirect('/home');
	})
}

function addrec(req,res){
	var name=req.body.placename;
	var city=req.body.city;
	var phone=req.body.phone;
	var latitude=req.body.latitude;
	var longitude=req.body.longitude;

	ACS.Places.create({
		name: name,
		city: city,
		phone_number: phone,
		latitude: latitude,
		longitude: longitude,
		user_id:req.session.user_id,
		session_id:req.session.session_id
	}, function(data) {
		console.log('Created:' + data);
		res.redirect('/home');
	})
}

/*
If you want to serve JSON, here's how you can do it:

var output={prop1:'1',prop2:'2'}
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(output));

*/