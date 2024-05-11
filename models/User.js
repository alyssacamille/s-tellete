import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const User = model('User', userSchema);

export default User;