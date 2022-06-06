const {app}=require("../server/server")
const supertest=require("supertest")
const mockRequest=supertest(app)//TO MAKE FACK RUN FOR THE FUNCTION
const sqlite3 = require('sqlite3').verbose();//USE TO RUN DATABASE ON MEMORY



//CREATE THE DATABASE 
const db = new sqlite3.Database(':memory:');

//USE TO RUN SEULIZE ON SEQUL:LITE
db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});


describe("",()=>{
    test("response like 404 for invalied rotes ",async()=>{
        const res=await mockRequest.get("/bababa");
        expect(res.status).toBe(404);
    })
    test ("can add a person ",async()=>{
        let thepost={name:"lith",mage:"500"}
        const res=await (await mockRequest.post('/food'))
        expect(res.status).toBe(201);
    })
    test('can read all food ',async()=>{
        const res =await mockRequest.get("/food");
        expect(res.status).toBe(200)
    })
    test('can read update food ',async()=>{
        const res =await mockRequest.put("/food/8");
        expect(res.status).toBe(201)
    })
    test('get specific food type ',async()=>{
        const res =await mockRequest.get("/food/8");
        expect(res.status).toBe(200)
    })
    test('can read delete food ',async()=>{
        const res =await mockRequest.delete("/food/7");
        expect(res.status).toBe(204)
    })   

}) 



//CLOSS THE MEMORY DATABASE AFTER CHECK
db.close();
