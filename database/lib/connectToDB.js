import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (cached.conn) {
    console.log('Data base already connected');
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      dbName: 'pointsix_nft_utility',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = await mongoose.connect(process.env.MONGODB_URI, options);
  }
  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    console.error(err);
  }

  return cached.conn;
};

export default connectToDB;
