import mongoose, { Schema } from 'mongoose';


const UserMac = new Schema({
  Weight: { type: Number, required: true },
  Goal: { type: String, required: true },
  Protein: { type: Number, required: true },
  Fat: { type: Number, required: true },
  Carbs: { type: Number, required: true },
});

export default mongoose.model('Macro', UserMac);
