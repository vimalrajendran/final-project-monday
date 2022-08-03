let chai =require("chai")
let chaihttp=require("chai-http");
const request=require('supertest')
var expect = chai.expect;
let server=require("../Model/favoriteModel")



//assertion style should
chai.should();
chai.use(chaihttp);
describe("favorite",()=>{
    //get
    describe("validate ",(done)=>{
        it("check valid field",()=>{
            chai.request(server)
          .get("/api/favorite")
          .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a("object");  
            response.body.should.be.a("array")
            done()
         
         })
        })
     })
     it('add to favorite',()=>{
      request('http://localhost:9000')
      .post('/api/favorite//addToFavorite')
      .send({label:'green bean',category:"green",Image:"img.jpg",PROCNT:"24"})
      .then((res)=>{
         
         expect(body).to.contain.property('userid');
         expect(body).to.contain.property('label')
         expect(body).to.contain.property('category')
         expect(body).to.contain.property('image')
         expect(body).to.contain.property('PROCNT')
         expect(body).to.contain.property(' FAT')
         expect(body).to.contain.property('ENERC_KCAL')
         expect(body).to.contain.property(' CHOCDF') 
         expect(res).equal
        
         
     }) 
    })
    it('get favorite', function() {   
      chai.request('http://localhost:9000')
      .get('/api/favorite/getFavorite')
      .end(function(err, res) {
        expect(res).equal;    
      });
    
    })
    it('delete favorite', function() {   
      chai.request('http://localhost:9000')
      .put('/api/favorite/removeFavorite/')
      .end(function(err, res) {
        expect(res).equal;    
      });
    
    })
})
