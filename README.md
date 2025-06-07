# Photo Manager Web App

A simple photo management web application built with **Node.js**, **Express**, **EJS**, **MongoDB**, and **Bootstrap**. This project demonstrates **CRUD operations** (Create, Read, Update, Delete) for managing photos, using **Multer** for file uploads and **Express Validator** for form validation. It’s designed for learning purposes, with clear code structure and comments to understand Express and middleware.

## Features

- **Create**: Upload images (JPEG/PNG, max 5MB) with a title and optional description.
- **Read**: View a gallery of all uploaded photos.
- **Update**: Edit photo titles and descriptions.
- **Delete**: Remove photos from the gallery and file system.
- **Responsive UI**: Built with Bootstrap for a clean, mobile-friendly interface.
- **File Storage**: Images are stored in the `public/uploads/` folder, with file paths saved in MongoDB.

## Tech Stack

- **Node.js/Express**: Backend framework for handling routes and middleware.
- **EJS**: Template engine for dynamic HTML rendering.
- **MongoDB/Mongoose**: Database for storing photo metadata.
- **Multer**: Middleware for handling file uploads.
- **Express Validator**: Middleware for form validation.
- **Bootstrap**: Frontend framework for styling.

## Project Structure

```
photo-manager/
├── public/
│   ├── uploads/          # Stores uploaded images
│   ├── css/
│   │   └── styles.css    # Custom CSS
│   └── js/
│       └── scripts.js    # Optional client-side JS
├── views/
│   ├── partials/
│   │   ├── header.ejs    # Header template
│   │   └── footer.ejs    # Footer template
│   ├── index.ejs         # Gallery page
│   ├── upload.ejs        # Upload form
│   └── edit.ejs          # Edit form
├── routes/
│   └── photoRoutes.js    # Express routes for CRUD
├── middleware/
│   └── upload.js         # Multer configuration
├── models/
│   └── Photo.js          # Mongoose schema
├── .env                  # Environment variables
├── server.js             # Main Express app
├── package.json          # Project dependencies
└── README.md             # This file
```

## Prerequisites

- **Node.js** (v22.14.0 or later recommended)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** (comes with Node.js)

## Setup Instructions

1. **Clone the Repository** (if applicable):

   ```bash
   git clone https://github.com/hieule1704/photo-manager-app.git
   cd photo-manager
   ```

2. **Initialize the Project**:

   ```bash
   npm init -y
   ```

   Update `package.json` with:

   ```json
   "main": "server.js",
   "scripts": {
     "start": "node server.js",
     "test": "echo \"Error: no test specified\" && exit 1"
   }
   ```

3. **Install Dependencies**:

   ```bash
   npm install express ejs mongodb mongoose multer dotenv express-validator bootstrap
   ```

4. **Set Up MongoDB**:

   - Install MongoDB locally or use MongoDB Atlas.
   - Start the MongoDB server: `mongod` (for local installation).
   - Create a `.env` file in the root directory:
     ```env
     MONGODB_URI=mongodb://localhost:27017/photo_manager
     PORT=3000
     ```

5. **Create the Uploads Folder**:

   ```bash
   mkdir -p public/uploads
   ```

6. **Run the Application**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser.

## Usage

- **Upload a Photo**:
  - Go to `/upload`, enter a title, optional description, and select an image (JPEG/PNG, <5MB).
  - Submit to save the image to `public/uploads/` and its metadata to MongoDB.
- **View Gallery**:
  - Visit `/` to see all uploaded photos in a responsive grid.
- **Edit a Photo**:
  - Click "Edit" on a photo to update its title or description.
- **Delete a Photo**:
  - Click "Delete" to remove a photo from the database (Note: File deletion requires additional setup; see "Future Improvements").

## Verifying Uploads

- **Images**: Check `public/uploads/` for uploaded files (e.g., `123456789.jpg`).
- **Database**: Use MongoDB Compass or the MongoDB shell:
  ```bash
  mongo
  use photo_manager
  db.photos.find().pretty()
  ```
  Look for documents with `image` fields containing paths like `/uploads/filename.jpg`.

## Future Improvements

- **File Deletion**: Add logic to delete image files from `public/uploads/` when a photo is deleted from the database.
- **Authentication**: Integrate `passport` for user login and photo ownership.
- **Cloud Storage**: Use `multer-s3` to store images in AWS S3 instead of the local file system.
- **Pagination**: Add `mongoose-paginate-v2` for large galleries.
- **Image Previews**: Add client-side JavaScript for image previews before upload.

## Troubleshooting

- **Images Not Saving**: Ensure `public/uploads/` exists and is writable. Check file size (<5MB) and type (JPEG/PNG).
- **MongoDB Errors**: Verify MongoDB is running and the `MONGODB_URI` is correct.
- **Static Files Not Loading**: Confirm `app.use(express.static('public'))` is in `server.js`.

## Learning Points

- **Express**: Understand routing and middleware through `photoRoutes.js` and `upload.js`.
- **Multer**: Learn file upload handling with `diskStorage` for saving images to the file system.
- **MongoDB/Mongoose**: Explore schema design and CRUD operations in `Photo.js`.
- **EJS/Bootstrap**: See how templates and partials create a dynamic, styled UI.

## License

MIT License. Feel free to use and modify this project for learning or personal use.

For issues or contributions, contact the developer or open a GitHub issue.
