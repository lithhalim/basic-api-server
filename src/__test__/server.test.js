const {app}=require("../server/server")
const supertest=require("supertest")
const mockRequest=supertest(app)//TO MAKE FACK RUN FOR THE FUNCTION
const { LITH_DATABASE } = require('../connect_database/LITH_DATABASE');

beforeAll(async () => {
    await LITH_DATABASE.sync();
});



describe('Web server', () => {
    // ALL CHECK FOR FOOD SECTION 
    test('Check For Undifine Route', async () => {
        const response = await mockRequest.get('/api/v1/foooood');
        expect(response.status).toBe(404);
    });
    test('add new type of food', async () => {
        const response = await mockRequest.post('/api/v1/food').send({
            name: 'kfc',
            type: 'checken'
        });
        expect(response.status).toBe(201);
    });

    test('Get All Data For Food', async () => {
        const response = await mockRequest.get('/api/v1/food');
        expect(response.status).toBe(200);

    });
    // test if can delete a person
    test('Delete Specific Type Of Food', async () => {
        const response = await mockRequest.delete('/api/v1/food/1');
        expect(response.status).toBe(204);
    });
            // test if can update a person
    test('can update a record', async () => {
        const response = await mockRequest.put('/api/v1/food/1');
        expect(response.status).toBe(201);
    });

    
    //ALL CHECK FOR CLOTHES SECTION
    test('404 Connction For Clothes', async () => {
        const response = await mockRequest.get('/api/v1/clooooth');
        expect(response.status).toBe(404);
    });

    test('Add new Element For Clothes', async () => {
        const response = await mockRequest.post('/api/v1/clothes').send({
            name: 'scuret',
            price: '120'
        });
        expect(response.status).toBe(201);
    });


    it('can get all clothes', async () => {
        const response = await mockRequest.get('/api/v1/clothes');
        expect(response.status).toBe(200);

    });



    test('Delete On Element Of Clothes', async () => {
        const response = await mockRequest.delete('/api/v1/clothes/1');
        expect(response.status).toBe(204);
    });
});



//CLOSS THE MEMORY DATABASE AFTER CHECK
afterAll(async () => {
    await LITH_DATABASE.drop();
});
