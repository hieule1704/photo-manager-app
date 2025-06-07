const express = require("express");
const router = express.Router();
const Photo = require("../models/Photo");
const upload = require("../middleware/upload");
const { check, validationResult } = require("express-validator");

// GET: Display all photos (gallery)
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.render("index", { photos });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// GET: Render upload form
router.get("/upload", (req, res) => {
  res.render("upload", { errors: [], photo: {} });
});

// POST: Upload a new photo
// POST: Upload a new photo
// router.post(
//   "/upload",
//   upload.single("image"),
//   [check("title").notEmpty().withMessage("Title is required")],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty() || !req.file) {
//       return res.status(400).render("upload", {
//         errors: errors
//           .array()
//           .concat(req.file ? [] : [{ msg: "Image is required" }]),
//         photo: req.body,
//       });
//     }

//     try {
//       // Convert image to Base64
//       const imageBase64 = req.file.buffer.toString("base64");
//       const photo = new Photo({
//         title: req.body.title,
//         description: req.body.description,
//         image: `data:${req.file.mimetype};base64,${imageBase64}`,
//       });
//       await photo.save();
//       res.redirect("/");
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Server Error");
//     }
//   }
// );

// POST: Upload a new photo
router.post(
  "/upload",
  upload.single("image"),
  [check("title").notEmpty().withMessage("Title is required")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty() || !req.file) {
      return res.status(400).render("upload", {
        errors: errors
          .array()
          .concat(req.file ? [] : [{ msg: "Image is required" }]),
        photo: req.body,
      });
    }
    try {
      // Save the file path to MongoDB
      const photo = new Photo({
        title: req.body.title,
        description: req.body.description,
        image: `/uploads/${req.file.filename}`, // Store relative path
      });
      await photo.save();
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  }
);

// GET: Render edit form
router.get("/edit/:id", async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).send("Photo not found");
    }
    res.render("edit", { photo, errors: [] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// POST: Update a photo
router.post(
  "/edit/:id",
  [check("title").notEmpty().withMessage("Title is required")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const photo = await Photo.findById(req.params.id);
      return res.render("edit", { photo, errors: errors.array() });
    }
    try {
      await Photo.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
      });
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  }
);

// POST: Delete a photo
router.post("/delete/:id", async (req, res) => {
  try {
    await Photo.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
