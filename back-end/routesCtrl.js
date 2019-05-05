const knex = require('./knex/knex')

module.exports = {
    getAll,
    post
};

function getAll(req, res) {
    knex.select()
        .from('pers')
        .then( pers => res.send(pers));
}

function post(req, res) {    
    knex('pers').insert({
        pers_nom: req.body.pers_nom,
        pers_cor_ele: req.body.pers_cor_ele,
        pers_cla: req.body.pers_cla
    })
    .then(() => {
        knex.select()
            .from('pers')
            .then( pers => res.send(pers));
    })  
};
