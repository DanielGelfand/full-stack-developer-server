import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    handle: String,
    postedBy: {
        username: String
    },
    avatarImg: String,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number,
        dislikes: Number,
    },
    liked: Boolean,
    disliked: Boolean,
}, {collection: 'tuits'});
export default schema;