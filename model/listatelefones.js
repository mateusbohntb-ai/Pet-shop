import database from "../config/database.js"


class listatelefone{

    constructor(){
this.model = database.db.define("telefones",{
    id:{
        type:database.db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
         type:database.db.Sequelize.STRING
    },
    telefone:{
         type:database.db.Sequelize.STRING
    }

})
    }

}

export default new listatelefone().model