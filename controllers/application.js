function index(req,res){
	res.render('index');
}

function error(req,res){
    res.render('error');
}


function about(req,res){
    res.render('about', { 
                            title: 'Beer Places',
                            page: 'About',
                            fullname:req.session.fullname
                        });
}

function contact(req,res){
    res.render('contact', { 
                            title: 'Beer Places',
                            page: 'Contact',
                            fullname:req.session.fullname
                          });
}
