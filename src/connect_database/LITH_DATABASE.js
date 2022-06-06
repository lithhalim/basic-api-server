//CONNECT WITH THE DATABASE (YOU CAN DEFINE MORE THAN ONNE DATABASE)
const Sequelize=require("sequelize")
require('dotenv').config()


//CONNECTION THE DATABASE (postgres://username:password@localhost:5432/database)
const POSTGRES_URL=process.env.DATABASE_URL



//USE TO RUN THE DATABASE ON HEROKKU TO MAKE CONFIGRATION 
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

//CREATION THE DATABASE WILL USE ON PROGRAME
const DATABASE_LITH= new Sequelize(POSTGRES_URL,sequelizeOptions)
//EXPORT DATABASE WITH NAME LITH FOR DEFINE ANY DATABASE
module.exports=DATABASE_LITH


