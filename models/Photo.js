const mongoose = require("mongoose");

// Define the Photo schema
const photoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String, // Store image as Base64 string or Store file path (e.g., /uploads/photo.jpg)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Photo model
module.exports = mongoose.model("Photo", photoSchema);
