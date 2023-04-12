import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookstore').then(() => {
      console.log('successfulu conected');
    });
  } catch (e) {
    console.log(e.message);
  }
};

export default connect;
