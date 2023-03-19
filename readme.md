## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions

For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

### Test keys

Private key: 4c2c95a1da60f9a2548fb79685c13e12357dddcea415429fdcdd7c15d7625ba5
Public key: 04b1a17503a896059c83f26036528b3466de5e7d74b781f3b496507272583ca8165645ebe0002840e0c806e5a384efc45289d8cbe5623c09284e956e316b3dd28d

Private key: c165a95b6b098b99d3ed311bfbc521a1d62f68b870c32d3f4bdd2b9ec26f17fa
Public key: 04287824035396dd14fdd5a501f9dec400a20a5f454587fbaa1e17e029195cc657c64b0cfab218dffb8b60bdd5ca113bbf8908a9f92cc3465f96516aa6cfcab884

Private key: 4c2f519d4d98ea3fc6d7f2a3c4b8d8f316b9bb219dd871767564cb0246f85f28
Public key: 04967fb8bd1dad27b3b93d18652f02744201ee8cb3d169d11baeeebe44ba269381d91d8ac8c760ea7854200d1f5703bd3a6a3d26dc642d60be3020d05ab0e0f995
