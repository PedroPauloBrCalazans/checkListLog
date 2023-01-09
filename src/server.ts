import express from 'express';
import { createNewTask } from './routes';

const app = express();

app.get("/", createNewTask)

app.listen(7474);