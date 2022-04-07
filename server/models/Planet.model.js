const { Schema, model } = require("mongoose");

const planetSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    velocity: { type: Number, required: true },
    distance: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Planet = model("Planet", planetSchema);

module.exports = Planet;

