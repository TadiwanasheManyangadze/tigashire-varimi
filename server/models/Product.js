import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  unit: { type: String, default: 'kg' },
  imageUrl: { type: String },
  farmerName: { type: String, required: true },
  stock: { type: Number, default: 100 },
  category: { type: String, default: 'produce' }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
