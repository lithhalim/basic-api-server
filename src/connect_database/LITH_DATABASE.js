//CONNECT WITH THE DATABASE (YOU CAN DEFINE MORE THAN ONNE DATABASE)
const Sequelize=require("sequelize")

require('dotenv').config()


//DATABASE URL FOR CONNCTION (postgres://USERNAME:PASSWORD@localhost:5432/DATABASE)
let POSTGRES_URL
if(process.env.NODE_ENV === "test"){//CHECK IF USER WANT TEST INVIROMENT USE IN PROGRAME SQLITE:MEMORY
  POSTGRES_URL="sqlite:memory";
}
else if(process.env.NODE_ENV === "production"){
  POSTGRES_URL=process.env.DATABASE_URL
}
else{//IF THE USER NEED PORDUCTION OR DEVELOPMENT USE THE MAIN DATABASE 
POSTGRES_URL=process.env.DATABASE_URL1
}


let sequelizeOption=process.env.NODE_ENV==="production"?{//ATT PRODUCTION SIDE HEROKU
  dialectOption:{//YOU NEED TO ADD SSL TYPE OF SECURETY TO CAN DEPLY
    ssl:{
      require:true,
      rejectUnauthorized:false
    }
  }
}:{}




const DATABASE_LITH= new Sequelize(POSTGRES_URL,{
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})
module.exports=DATABASE_LITH//EXPORT DATABASE WITH NAME LITH FOR DEFINE ANY DATABASE


