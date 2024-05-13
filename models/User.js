import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true }, // Username is required
    email: { type: String, required: true, unique: true }, // Email is required and must be unique
    password: { type: String, required: true }, // Password is required
    dateOfBirth: { type: Date, required: true }, // Date of Birth is required
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const User = model('User', userSchema);

export default User;