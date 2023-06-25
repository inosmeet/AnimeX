import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

try {
  await mongoose.connect(process.env.MONGODB_URI);
}
 catch(error) {
  console.log(error);
}

mongoose.connection.on("error", (err) => {
  console.log(err);
});

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  googleId: String,
  picture: String,
}, { versionKey: false});


const librarySchema = new mongoose.Schema({
  user: String,
  currentlyWatching: Array,
  wantToWatch: Array,
  completed: Array,
  onHold: Array,
  dropped: Array,
  allAnime: Array
}, { versionKey: false});

userSchema.plugin(findOrCreate);
librarySchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema)
const Library = mongoose.model("Library", librarySchema);

export { User, Library };