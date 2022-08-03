
const  chai =require("chai")
let chaihttp=require("chai-http");
const request=require('supertest')
var expect = chai.expect;
const app=require('../controllers/UserControllers');
chai.use(chaihttp);
describe("test authentication ",()=>{
   it('get', function(done) { 
     chai.request('http://localhost:7000')
      .get('/api/auth/profile/')
      .end(function(err, res) {
        expect(res).equal;
        done();                              
      });
    });
     
    it('profile as expected ', function() {   
      chai.request('http://localhost:7000')
      .get('/api/auth/profile')
      .end(function(err, res) {
        expect(res).equal;    
      });
    });
    it('register user POST',()=>{
      request('http://localhost:7000')
      .post('/api/auth/register')
      .send({firstName:'king',lastName:"lord",email:"kinglord@gmail.com",password:"king12@1R"})
      .then((res)=>{
         
         expect(body).to.contain.property('_id');
         expect(body).to.contain.property('firstName')
         expect(body).to.contain.property('lastName')
         expect(body).to.contain.property('email')
         expect(body).to.contain.property('password') 
         expect(res).equal
         
     }) 
    })
    it('login user POST',()=>{
      request('http://localhost:7000')
      .post('/api/auth/login')
      .send({email:"king@gmail.com",password:"king@112R"})
      .then((res)=>{ 
         expect(res).to.have.cookie('sessionid');
         expect(body).to.contain.property('email')
         expect(body).to.contain.property('password') 
         expect(res).equal
         
     }) 
    })
  
  
 
 
 
})
   