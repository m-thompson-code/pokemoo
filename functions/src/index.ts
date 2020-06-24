import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

// import axios from 'axios';

import { adminInit } from './admin-init';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript


// Required to be called before using any firebase admin functionality
adminInit();

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(cookieParser());

app.get('/ping', async (req: express.Request, res: express.Response) => {
    const message = "app - ping";
    console.log(message);
    return res.status(200).type('json').send({
        message: message
    });
});

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

export const app_endpoints = functions.https.onRequest(app);