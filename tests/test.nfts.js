import chai from 'chai';
import chaiHttp from 'chai-http';
import express from 'express';

const app = express();
chai.use(chaiHttp);
const expect = chai.expect;

describe('API Tests', () => {
  describe('Authentication', () => {
    it('should create a login token', (done) => {
      chai
        .request(app)
        .post('/auth')
        .send({ username: 'testuser', password: 'testpassword' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
          done();
        });
    });
  });

  describe('NFTs', () => {
    let token; // Store the authentication token for subsequent requests

    before((done) => {
      // Get the authentication token before running NFT tests
      chai
        .request(app)
        .post('/auth')
        .send({ username: 'testuser', password: 'testpassword' })
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });

    it('should get all NFTs', (done) => {
      chai
        .request(app)
        .get('/nfts')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should get a specific NFT by ID', (done) => {
      const nftId = 1; // Replace with an existing NFT ID
      chai
        .request(app)
        .get(`/nfts/${nftId}`)
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('tokenId');
          expect(res.body).to.have.property('tokenUri');
          done();
        });
    });

    it('should mint a new NFT', (done) => {
      const receiverAddress = '0x1234567890'; // Replace with a valid receiver address
      chai
        .request(app)
        .post('/nfts')
        .set('Authorization', `Bearer ${token}`)
        .send({ receiverAddress })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('tokenId');
          expect(res.body).to.have.property('tokenUri');
          done();
        });
    });

    it('should update an NFT', (done) => {
      const nftId = 1; // Replace with an existing NFT ID
      // Send a request to update the NFT with new details
      chai
        .request(app)
        .patch(`/nfts/${nftId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ /* Update payload */ })
        .end((err, res) => {
          expect(res).to.have.status(200);
          // Additional assertions for the updated NFT
          done();
        });
    });

    it('should delete an NFT', (done) => {
      const nftId = 1; // Replace with an existing NFT ID
      chai
        .request(app)
        .delete(`/nfts/${nftId}`)
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          // Additional assertions for the deleted NFT
          done();
        });
    });
  });
});
