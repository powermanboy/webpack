var dev = require("./webpack.config.dev.js");
var prod = require("./webpack.config.prod.js");
const Target=process.env.NODE_ENV;

if(Target==="dev"){
  module.exports=dev;
}

if(Target==="build"){
  module.exports=prod;
}