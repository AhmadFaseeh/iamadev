import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    throw new Error("Connection failed!");
  }
};

export default connect;
