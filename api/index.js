import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

const URI = process.env.MONGO || "mongodb+srv://i228782:uswazafar@cluster0.ucicd.mongodb.net/mernDB?retryWrites=true&w=majority&authSource=admin";

mongoose
  .connect(URI)
  .then(() => {
    console.log('✅ Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('❌ MongoDB connection error:', err);
  });

const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Serve frontend
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000!');
});
