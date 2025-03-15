const mongoose = require('mongoose')



const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, // ref the user
        ref: 'User'
    },

}, {timestamps: true})





const hootSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['News', 'Sports', 'Games', 'Movies', 'Music', 'Television'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [commentSchema] // embeded inside hoot schema

}, {timestamps: true}) // 2nd arg for our schema, will give hoot documents createdAt and updatedAt properties



const Hoot = mongoose.model('Hoot', hootSchema)


module.exports = Hoot
