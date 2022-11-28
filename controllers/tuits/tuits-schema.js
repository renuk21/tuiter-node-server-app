import mongoose from 'mongoose';
const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const tuitsSchema = mongoose.Schema({
    tuit: {type: String, required: true},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    dislikes: {type: Number, default: 0},
    disliked: {type: Boolean, default: false},
    image: {type: String, default: '../../images/nasa.jpg'},
    username: {type: String, default:'NASA'},
    handle: {type: String, default:'@nasa'},
    time: {type: String, default: date.getDate().toString() +" "+ monthNames[date.getMonth()] +" "+ date.getFullYear().toString()}
}, {collection: 'tuits'});
export default tuitsSchema;
