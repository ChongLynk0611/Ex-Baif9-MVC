var db = require('../db');

module.exports.index =  (req, res)=>{
    res.render('transaction/transaction');
}

module.exports.create = (req,res)=>{
    res.render('transaction/create');
}

module.exports.postIndex = (req ,res)=>{
    db.get('transaction').push(req.body).write();
    res.redirect('/transaction');
}