const mongoose = require('mongoose');
const initData=require('./data.js');
const Listing=require('../models/listing.js');

async function main(){
    await mongoose.connect('mongodb+srv://Devam:oOfSPYqgfQG6JQJm@cluster0.f5o8mhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

main().then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
})

const initDB=async()=>{
await Listing.deleteMany({});
initData.data=initData.data.map((obj)=>({...obj,owner:"6810979c19e256b6b587f9ce"}))
await Listing.insertMany(initData.data);
console.log('Database initialized');
}




initDB();
