const { default: mongoose } = require('mongoose');

mongoose.Promise = global.Promise;
async function initMongoose() {
  await mongoose.connect(process.env.MONGODB_CONNECTION, {}).then(() => {
    console.log('Conectado ao mongo');
  });
}
module.exports = {
  initMongoose,
};
