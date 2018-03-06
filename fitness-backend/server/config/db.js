import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NativeFitness");

}

