const { model, Schema } = require('mongoose') 

const design_images_schema = new Schema({
    image_url:{
        type: String,
        required: true,
    },
},{timestamps: true})



module.exports = model('design_images', design_images_schema)