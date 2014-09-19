# sails-app

a [Sails](http://sailsjs.org) application




-The file config/connections.js is not on this repository due to sensitive information, namely database credentials. Create the mentioned file in the following form:

############################################
module.exports.connections = {

  databaseSystem: {
    adapter: <node module>,
    host: <machine IP address>,
    user: <username>,
    password: <password>,
    database: <database name>
  }

};
############################################
