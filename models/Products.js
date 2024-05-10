import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    productName: String,
    price: String,
    image: String,
    artist: { type: Schema.Types.ObjectId, ref: 'User' },
    toc: String
});

const Product = model('Product', productSchema);

export default Product;