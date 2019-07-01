import { ChatServer } from './server';

let app = new ChatServer().startServer();
export { app };