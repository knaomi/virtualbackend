import type {Types, PopulatedDoc, Document} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {Author} from '../author/model';

/**
 * This file defines the properties stored in a Book
 */

// Type definition for Book on the backend
export type Book = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: Types.ObjectId;
  isbn: number;
  name: string;
  coverphoto: string;
};

export type PopulatedBook = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: Author;
  isbn:number;
  name: string;
  coverphoto: string;

};

// Mongoose schema definition for interfacing with a MongoDB table
// Books stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const BookSchema = new Schema<Book>({
  // The author userId
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Author'
  },
  // The isbn of the book in library
  isbn: {
    type: Number,
    required: true
  },
  // The name of the book
  name: {
    type: String,
    required: true
  },
  // the coverphoto of the book
  coverphoto: {
    type: String,
    required: true
  },
  
});

const BookModel = model<Book>('Book', BookSchema);
export default BookModel;
