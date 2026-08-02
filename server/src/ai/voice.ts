import { RoomServiceClient, AccessToken } from 'livekit-server-sdk';
import * as dotenv from 'dotenv';

dotenv.config();

const livekitHost = process.env.LIVEKIT_URL || 'http://localhost:7880';
const livekitApiKey = process.env.LIVEKIT_API_KEY || 'devkey';
const livekitApiSecret = process.env.LIVEKIT_API_SECRET || 'secret';

export const roomService = new RoomServiceClient(livekitHost, livekitApiKey, livekitApiSecret);

export const generateVoiceToken = (participantName: string, roomName: string = 'empower-hub-global') => {
  const at = new AccessToken(livekitApiKey, livekitApiSecret, {
    identity: participantName,
  });
  
  at.addGrant({ roomJoin: true, room: roomName, canPublish: true, canSubscribe: true });
  return at.toJwt();
};
