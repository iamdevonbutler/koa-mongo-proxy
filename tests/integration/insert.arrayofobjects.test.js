const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

var db;

describe('insert(): array of objects:', () => {

  before(() => {
    ({db} = require('../../lib')); // tests setDefaultDb() method.
  });

  it('should error given a payload missing a required property', function* () {
    var doc = {
      account: {
        name: 'jay',
        friends: ['a', 1]
      }
    };
    try {
      yield db.users.insert(doc);
      var re = yield db.users.findOne();
      console.log(re);
    }
    catch (e) {
      // schema should use the [] for min/max/valid/transform.
      // see if it sets a freidns default. e.g. just provide account.
      console.log(e.errors[0]);
      e.errors.length.should.eql(1);
    }
  });

  // it('should transform a property given a custom transform function', (done) => {
  //   var doc;
  //   doc = {
  //     account: {
  //       friends: [{
  //         name: 'JAY'
  //       }]
  //     }
  //   };
  //   db.users.insert(doc).then(result => {
  //     db.users.findOne({}).then(result => {
  //       result.account.friends[0].name.should.eql('jay!');
  //       result.account.friends[0].nicknames.should.eql([]);
  //       done();
  //     });
  //   });
  // });

  //
  //
  // it('should throw an error given a document w/ data in violation of the minLength property', (done) => {
  //   var doc;
  //   doc = {
  //     account: {
  //       friends: [{
  //         name: ''
  //       }]
  //     }
  //   };
  //   try {
  //     db.users.insert(doc).then(result => {
  //       done(result);
  //     });
  //   } catch (e) {
  //     e.errors.length.should.eql(1);
  //     e.errors[0].property.should.eql('minLength');
  //     done();
  //   }
  //   doc = {
  //     account: {
  //       friends: []
  //     }
  //   };
  //   try {
  //     db.users.insert(doc).then(result => {
  //       done(result);
  //     });
  //   } catch (e) {
  //     e.errors.length.should.eql(1);
  //     e.errors[0].property.should.eql('minLength');
  //     done();
  //   }
  // });
  //
  // it('should throw an error given a document w/ data in violation of the maxLength property', (done) => {
  //   var doc;
  //   doc = {
  //     account: {
  //       friends: [{
  //         name: 'jay'
  //       }, {
  //         name: 'jay'
  //       }, {
  //         name: 'jay'
  //       }]
  //     }
  //   };
  //   try {
  //     db.users.insert(doc).then(result => {
  //       done(result);
  //     });
  //   } catch (e) {
  //     e.errors.length.should.eql(1);
  //     e.errors[0].property.should.eql('maxLength');
  //     done();
  //   }
  // });
  //
  // it('should throw an error given an invalid type constraint on a property on an object', (done) => {
  //   var doc;
  //   doc = {
  //     account: {
  //       friends: [{
  //         name: 1
  //       }]
  //     }
  //   };
  //   try {
  //     db.users.insert(doc).then(result => {
  //       done(result);
  //     });
  //   } catch (e) {
  //     e.errors.length.should.eql(1);
  //     e.errors[0].property.should.eql('type');
  //     done();
  //   }
  // });
  //
  // it('should sanitize an object property', (done) => {
  //   var doc;
  //   doc = {
  //     account: {
  //       friends: [{
  //         name: '<script>jay</script>'
  //       }]
  //     }
  //   };
  //   db.users.insert(doc).then(result => {
  //     db.users.findOne({}).then(result => {
  //       result.account.friends[0].name.should.not.eql('<script>jay</script>');
  //       done();
  //     });
  //   });
  // });
  //
  // it('should set default values', (done) => {
  //   var doc;
  //   doc = {
  //     account: {
  //       friends: [{
  //         name: 'jay'
  //       }]
  //     }
  //   };
  //   db.users.insert(doc).then(result => {
  //     db.users.findOne({}).then(result => {
  //       result.account.friends.should.eql([
  //         {
  //           name: 'jay!',
  //           nicknames: []
  //         }
  //       ]);
  //       done();
  //     });
  //   });
  // });
  //
  // it('should successfully insert a document given correct data', (done) => {
  //   var doc;
  //   doc = {
  //     account: {
  //       friends: [{
  //         name: 'jay',
  //         nicknames: [{
  //           name: 'gus',
  //           giver: [{
  //             name: 'flip'
  //           }]
  //         }]
  //       },
  //       {
  //         name: 'lou'
  //       }]
  //     }
  //   };
  //   db.users.insert(doc).then(result => {
  //     db.users.findOne({}).then(result => {
  //       result.account.friends[1].should.be.ok;
  //       result.account.friends[0].name.should.eql('jay!');
  //       result.account.friends[0].nicknames[0].name.should.eql('gus');
  //       result.account.friends[0].nicknames[0].giver[0].name.should.eql('flip');
  //       done();
  //     });
  //   });
  // });
});
