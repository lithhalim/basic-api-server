const {app}=require("../server/server")
const supertest=require("supertest")
const mockRequest=supertest(app)


const DATABASE_LITH=require("../connect_database/LITH_DATABASE")

beforeAll(async()=>{
    await DATABASE_LITH.sync();
})

describe("",()=>{
    test("response like 404 for invalied rotes ",async()=>{
        const res=await mockRequest.get("/bababa");
        expect(res.status).toBe(404);
    })
    test ("can add a person ",async()=>{
        const res=await (await mockRequest.post('/project/people')).send({
            name:"lith",
            age:"100"
        })
        expect(res.status).toBe(201);
    })
    test('can read all people ',async()=>{
        const res =await mockRequest.get("/project/people");
        expect(res.status).toBe(200)
    })
    test('can read update people ',async()=>{
        const res =await mockRequest.put("/projectpeople/8");
        expect(res.status).toEqual(201)
    })
    test('can read delete people ',async()=>{
        const res =await mockRequest.delete("/projectpeople/7");
        expect(res.status).toEqual(204)
    })   

}) 


afterAll(async()=>{
    await DATABASE_LITH.drop();
})