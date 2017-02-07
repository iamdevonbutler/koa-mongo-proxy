const {Types} = require('../../lib');

module.exports = {

  "account.name": {
    required: true,
    type: Types.string,
    trim: true,
    lowercase: true,
    denyXSS: true,
    minLength: 1,
    maxLength: 20,
    transform(value) {
      return 'hey ' + value;
    },
    validate(value) {
      return value !== 'tim';
    }
  },

  "account.friends": {
    type: Types.array(Types.string),
    notNull: true,
    default: []
  },

  "newsletter": {
    type: Types.boolean,
    default: true
  },

  "age": {
    type: Types.number,
  },

  "created": {
    type: Types.date,
  }

}
