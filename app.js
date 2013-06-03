// More on ACS from Node.ACS: http://docs.appcelerator.com/cloud/latest/#!/guide/node_acs
// 
var ACS = require('acs').ACS;
var ACS_KEY='YOUR_ACS_KEY';
var ACS_SECRET='YOUR_ACS_SECRET';

// initialize app
function start(app, express) {
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));		//set favicon
	
	// this line is explained here http://docs.appcelerator.com/cloud/latest/#!/guide/node_mvc
	app.use(express.session({ key: 'node.acs', secret: ACS_SECRET }));

	ACS.init(ACS_KEY, ACS_SECRET);
}

// release resources
function stop() {
	
}