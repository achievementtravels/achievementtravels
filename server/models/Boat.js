import mongoose from "mongoose";

const AmenitySchema = new mongoose.Schema({
  label: { type: String, required: true },
  title: { type: String, required: true },
});

const imageSchema = new mongoose.Schema({
  avif: { type: String },
  webp: { type: String },
  jpg: { type: String, required: true },
});

const BoatSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    images: { type: [imageSchema], default: [] },
    price: { type: String },
    amenities: { type: [AmenitySchema] },
  },
  { timestamps: true }
);

const Boat = mongoose.model("Boat", BoatSchema);
export default Boat;
