const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');
const { initMongoose } = require('./mongo');
const { collaboratorRouter, companyRouter } = require('./routes');
const path = require('path');
const createError = require('http-errors');

async function createApp() {
  config();
  await initMongoose();

  const app = express();
  
    app.use((req,res,next)=>{
      res.header("Access-Control-Allow-Origin","*");
      next();
  })
  
  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, "../public")));

  app.use('/collaborator', collaboratorRouter);
  app.use('/company', companyRouter);
  
  app.use(function (req, res, next) {
    next(createError(404));
  });

  return app;
}

module.exports = {
  createApp,
};
