var ACS = require('acs').ACS

function home(req, res) {
	ACS.Places.query({
        order: "-created_at" // new on top
    }, function(data) {
        if(data.success) {
            console.log(data);
            res.render('home', {
            					title: 'Beer Places',
            					places:data.places, // the home view will know what to do with this array
            					page:'Home',
            					fullname:req.session.fullname
            					});
        } else {
            res.send('Error occured. Error code: ' + data.error + '. Message: ' + data.message);
        }
    })
}
