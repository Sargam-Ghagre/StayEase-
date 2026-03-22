const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-river-running-through-a-lush-green-park-Bz5iQD532mg",
        set: (v) => v=== "" ? "https://unsplash.com/photos/a-river-running-through-a-lush-green-park-Bz5iQD532mg" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
