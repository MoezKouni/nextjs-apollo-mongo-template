import { Schema, connect, model, models } from "mongoose";

connect(
  // I'm using MongoDB Clusters, once you create one go to connect, setup
  // connection security and then choose the "Connect your application"
  // connection method.

  // Create a .env file and inside of it (replace user, password and dbName):
  // eslint-disable-next-line max-len
  // DB_URL= mongodb+srv://<user>:<password>@basewebsites.hm2ds.mongodb.net/<dbName>?retryWrites=true&w=majority
  process.env.MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSchema = new Schema({
  email: { required: true, type: String, createIndexes: true },
  name: { required: true, type: String },
  phone: { required: true, type: String },
});

const challengeSchema = new Schema({
  title: { required: true, type: String },
  short_description: { required: true, type: String },
  type: { required: true, type: String },
  domaine: { required: true, type: String },
  technologies: [{ required: true, type: String }],
  difficulty: { required: true, type: String },
  brief: { required: true, type: String },
  getting_started: { required: true, type: String },
  ideas: { required: true, type: String },
  taken: { type: Number },
  done: { type: Number },
});

const User = models.users || model("users", userSchema);
const Challenge = models.challenges || model("challenges", challengeSchema);
// console.log(models);
// const User = models.User || model("user", userSchema);
// const User = model("user", userSchema);

export { User, Challenge };
