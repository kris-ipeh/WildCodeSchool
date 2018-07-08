const should = require('should');
const { Tamagootshi } = require('../tamagootshi.class.js');


describe('Tamagootshi app', function() {
    describe('Owner class', function() {
        it.skip('should create a new owner', function(done) {
            done('not implemented');
        }); 
    });

  describe('Tamagootshi class', function() {
    it('should create a Tamagootshi with id,name,owner,weight,dna given a name and a owner', function(done) {
      let t = new Tamagootshi({
          name: 'pi',
          owner: 'me'
      });

      should(t).have.property('id');
      should(t).have.property('name', 'pi');
      should(t).have.property('owner', 'me');
      should(t).have.property('weight', 10);
      should(t).have.property('dna');
      should(t).have.property('eat');
      should(t).have.property('die');
      should(t).have.property('ask');
      should(t).have.property('fuck');
      should(t).have.property('talk');
      should(t).have.property('isAlive', true);
      should(t).have.property('pv', 3);
      done();
    });

    it('should the tamagooshi is alive if pv is not equal to 0', function(done) {
        let t = new Tamagootshi({
            name: 'pi',
            owner: 'me'
        });

        should.strictEqual(t.pv, 3);
        should.strictEqual(t.isAlive, true);
        done();
    });

    it('die() : it should return state alive false', function(done) {
        let t = new Tamagootshi({
            name: 'pi',
            owner: 'me'
        });
        t.die();
        should.strictEqual(t.isAlive, false);
        done()
    });



  });
});
