let chai =require("chai")
let chaihttp=require("chai-http");
const assert = require("assert");
//const User = require("../models/userModel");

let server=require("../models/userModel")



//assertion style should
chai.should();
chai.use(chaihttp);
describe("authentication",()=>{
    //get
    describe("check",(done)=>{
        it("check valid field",()=>{
            chai.request(server)
          .get("/api/auth")
          .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a("object"); 
            response.body.should.have.property("_id")
            response.body.should.have.property("firstName")
            response.body.should.have.property(" lastName")
            response.body.should.have.property("email");
            response.body.should.have.property("password");
            done()
         
         })
        })
     })
     
     
   })
 
 
       