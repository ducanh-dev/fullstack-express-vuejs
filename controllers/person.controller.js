const lowdb = require('lowdb');
const db = lowdb('db.json');

module.exports.index =  async (req, res) => {
        try {
            let person = req.body;
            await db.get('persons').value();
        }
        catch (error) {
            res.status(500).send(error);
        }
    },
module.exports.getById = async (req, res) => {
        try {
            var id = req.params.id;
            await db.get('persons').find({id: id}).value();
        }
        catch (error) {
            res.status(500).send(error);
        }
    },

    module.exports.create = async (req, res) => {
        try {
            let person = req.body;
            await db.get('persons')
            .push({
                id: id, 
                first_name: person.firtName, 
                last_name: person.lstName })
            .write();
        }
        catch (error) {
            res.status(500).send(error);
        }
    },

    module.exports.update = async (req, res) => {
        try {
            let id = req.params.id;
            let firstName = req.body.firstName;
            let lastName = req.body.lastName
            await db.get('persons').find({id: id}).assign({
                first_name: firstName, 
                last_name: lastName 
            })
            .value();
            
            db.save();
        }
        catch (error) {
            res.status(500).send(error);
        }
    },
}