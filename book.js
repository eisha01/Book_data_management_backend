import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  person: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Login',
    },
  ],
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
