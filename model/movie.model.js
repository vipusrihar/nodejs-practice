import { model, Schema } from "mongoose";

const schema = new Schema({
  title: { type: String, required: true, unique: true },
  actor: { type: String, required: true },
  music: { type: String },
});

const Movie = model("Movie", schema);
export default Movie;
