const knex = require('./knex/knex')

module.exports = {
    getAll,
    post,
    put,
    kill
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
}

function getbyid(req, res) {
    knex.select()
        .from('pers')
        .where('pers_sec', req.body.pers_sec)
        .then( pers => res.send(pers));
}

function put(req, res) {
    knex('pers').where('pers_sec', req.params.pers_sec)
                .update({
                    pers_nom: req.body.pers_nom,
                    pers_cor_ele: req.body.pers_cor_ele,
                    pers_cla: req.body.pers_cla
                })
                .then(function() {
                    knex.select()
                    .from('pers')
                    .then( pers => res.send(pers));
                })
}

function kill(req, res) {
    knex('pers').where('pers_sec', req.params.pers_sec)
                .del()
                .then(function() {
                    knex.select()
                    .from('pers')
                    .then( pers => res.send(pers));
                })
};
