// EMPOWER HUB - Main Express Server Entry Point

import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { Server as SocketIOServer } from 'socket.io';
import apiRoutes from './routes/apiRoutes';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 5000;

// Security & Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'EMPOWER HUB',
    tagline: 'From Talent to Opportunity, From Opportunity to Empowerment.',
    timestamp: new Date().toISOString()
  });
});

// Register API Routes
app.use('/api', apiRoutes);

// Socket.IO Real-time Connection Setup
io.on('connection', (socket) => {
  console.log(`⚡ Socket Client Connected: ${socket.id}`);

  socket.on('join_room', (room) => {
    socket.join(room);
  });

  socket.on('send_message', (data) => {
    io.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log(`🔌 Socket Client Disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 EMPOWER HUB Server is running on port ${PORT}`);
  console.log(`==================================================`);
});
