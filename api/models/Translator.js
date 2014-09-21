/**
* Translator.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    email_address : {
    	type: 'email',
    	unique: true,
    	required: true
    },

    birth_date : {
    	type: 'date',
    	required: true
    },

    first_name : {
    	type: 'string',
    	required: true
	},

    last_name : {
    	type: 'string',
    	required: true
    },

    country : {
    	type: 'string',
    	required: true
    },

    gender : {
    	type: 'string',
    	required: true,
    	enum: ['M', 'F']
    }
  }
};

