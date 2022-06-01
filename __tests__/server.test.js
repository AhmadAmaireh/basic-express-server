'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Express Server', () => {
  

    it('Handle not found request', async () => {
        const response = await request.get('/abc');
        expect(response.status).toEqual(404);
       
    });
    it('Bad method', async () => {
        const response = await request.post('/person?name=Ahmad');
        expect(response.status).toEqual(404);
       
    });
    it("Home route",async ()=>{
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("Hello I'm Ahmad");

    })
}) 