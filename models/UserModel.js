import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    likedMovies: Array,
});
const user = mongoose.model("users", userSchema);
export default user