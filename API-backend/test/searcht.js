const { expect } = require("chai");
let chai =require("chai")
let chaihttp=require("chai-http");
const request=require('supertest')
chai.should();
chai.use(chaihttp);

 describe("searching food ",(done)=>{
        it("check valid field",()=>{
            chai.request('http://localhost:8000')
          .get("/api/v1/search")
          .send({ingridient:"kfc"})
          .then((err,response)=>{
           // response.should.have.status(200);
           expect(body).to.contain.property(' ingridient ');
           expect(body).to.contain.property('label')
            expect(response).equal
            done()
         
         })
        })
     })
    