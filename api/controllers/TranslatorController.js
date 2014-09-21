/**
 * TranslatorController
 *
 * @description :: Server-side logic for managing Translators
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  'new': function(req,res){
    res.view();    
  },

  create: function(req, res) {

    var paramObj = {

      email_address: req.param('email_address'),

      birth_date: req.param('birth_date'),

      first_name: req.param('first_name'),

      last_name: req.param('last_name'),

      country: req.param('country'),

      gender: req.param('gender'),

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Translator.create(paramObj, function translatorCreated(err, translator) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/translator/new');
      }

      // res.json(translator);
      res.redirect('/translator/show/' + translator.id);

    });
  },

  show: function(req, res, next) {
    Translator.findOne(req.param('id'), function foundTranslator(err, translator) {
      if (err) return next(err);
      if (!translator) return next();

      // res.json(translator);
      res.view({
        translator: translator
      });
    });
  },

  index: function(req, res, next) {
    Translator.find(function foundTranslators(err, translators) {
      if (err) return next(err);
      
      res.view({
        translators: translators
      });
    });
  },

  edit: function(req, res, next) {

    Translator.findOne(req.param('id'), function foundTranslator(err, translator) {
      if (err) return next(err);
      if (!translator) return next('translator doesn\'t exist.');

      res.view({
        translator: translator
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      email_address: req.param('email_address'),

      birth_date: req.param('birth_date'),

      first_name: req.param('first_name'),

      last_name: req.param('last_name'),

      country: req.param('country'),

      gender: req.param('gender'),

    }

    Translator.update(req.param('id'), paramObj, function translatorUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/translator/edit/' + req.param('id'));
      }

      res.redirect('/translator/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Translator.findOne(req.param('id'), function foundTranslator(err, translator) {
      if (err) return next(err);

      if (!translator) return next('Translator doesn\'t exist.');

      Translator.destroy(req.param('id'), function translatorDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/translator');

    });
  }
 

};

