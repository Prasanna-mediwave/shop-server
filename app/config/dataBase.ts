import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://prasannavelu23:xN494xbtmHb6vXNI@shopping.klfdpk7.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db is connected");
  } catch (error) {
    console.log(`db is not connected ${error}`);
  }
};

dbConnection();

export default mongoose.connection;
