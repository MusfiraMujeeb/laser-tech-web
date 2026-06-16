import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IQuote extends Document {
  name: string;
  phone: string;
  email: string;
  service: string;
  material: string;
  dimensions?: string;
  description: string;
  createdAt: Date;
}

const QuoteSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  material: { type: String, required: true },
  dimensions: { type: String },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Quote = models.Quote || model<IQuote>('Quote', QuoteSchema);
export default Quote;