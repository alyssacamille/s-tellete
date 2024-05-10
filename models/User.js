import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const User = model('User', userSchema);

export default User;