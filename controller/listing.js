const Listing=require("../models/listing.js");




module.exports.index=async (req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index', { allListings });
}

module.exports.renderNewForm=(req, res) => {
    res.render('listings/new');
};
 
module.exports.showdata=async (req, res, next) => {
   try {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({
      path: "review", 
      populate: { path: "author" }
    }).populate("owner");
     
    if (!listing) {
        req.flash("error", "Listing requested does not exist");
        return res.redirect("/listings"); 
    }
  console.log(listing);
  
    res.render('listings/show', { listing });
   } catch (error) {
    console.log(error);
   }
  }



  module.exports.createdlist=async (req, res) => {
    let url=req.file.path;
    let filename=req.file.filename
    console.log(url,"...",filename);
    
    const list = new Listing(req.body.listing); 
     list.owner=req.user._id;
     list.image={url,filename};
    await list.save();
    req.flash("success","New Listing Created");
    res.redirect('/listings');
  }


  module.exports.editedform=async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    
      if (!listing) {
        req.flash("error", "Listing requested does not exist");
        return res.redirect("/listings"); 
    }
    let originalimageUrl=listing.image.url;
     originalimageUrl.replace("/upload","/upload/h_300,w_250");
    res.render('listings/edit', { listing,originalimageUrl });
}


module.exports.edited=async (req, res) => {
  
 
  
    const { id } = req.params;
    let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true }); 
   

    if(typeof req.file !== "undefined")
    {
      let url=req.file.path;
      let filename=req.file.filename
      listing.image={url,filename};
      await listing.save();
    }
    res.redirect(`/listings/${id}`);
  }


  module.exports.deletedlist=async (req, res) => {
    const { id } = req.params;
   let deletelisting= await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
}