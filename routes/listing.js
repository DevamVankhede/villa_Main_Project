const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const multer = require("multer");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listing.js");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createdlist)
  );


  router.get("/search", wrapAsync(async (req, res) => {
    const { q } = req.query;
  
    if (!q){
    
      return res.redirect("/listings");
    }
  
    const listings = await Listing.find({
      $or: [
        { title: { $regex: q, $options: "i" } },  
        { location: { $regex: q, $options: "i" } } 
      ]
    });
  
    res.render("listings/searchResults", { listings, q });
  }));
  
  
//index route

// router

router.get("/new", isLoggedIn, listingController.renderNewForm);
router.get("/:id", wrapAsync(listingController.showdata));

//create route

router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.editedform));

router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.edited)
);

router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.deletedlist)
);



module.exports = router;
