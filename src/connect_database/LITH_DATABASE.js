//CONNECT WITH THE DATABASE (YOU CAN DEFINE MORE THAN ONNE DATABASE)
const Sequelize=require("sequelize")

require('dotenv').config()


const POSTGRES_URL=process.env.DATABASE_URL



let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl :{require: true,rejectUnauthorized: false},
                native: true
            }
        } : {};




const DATABASE_LITH= new Sequelize(POSTGRES_URL,sequelizeOptions)
module.exports=DATABASE_LITH//EXPORT DATABASE WITH NAME LITH FOR DEFINE ANY DATABASE


