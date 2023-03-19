const express = require("express");
const app = express();
const cors = require("cors");
const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04b1a17503a896059c83f26036528b3466de5e7d74b781f3b496507272583ca8165645ebe0002840e0c806e5a384efc45289d8cbe5623c09284e956e316b3dd28d": 100,
  "04287824035396dd14fdd5a501f9dec400a20a5f454587fbaa1e17e029195cc657c64b0cfab218dffb8b60bdd5ca113bbf8908a9f92cc3465f96516aa6cfcab884": 50,
  "04967fb8bd1dad27b3b93d18652f02744201ee8cb3d169d11baeeebe44ba269381d91d8ac8c760ea7854200d1f5703bd3a6a3d26dc642d60be3020d05ab0e0f995": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { privateKey, recipient, amount } = req.body;

  // -> The sender public key is derived from the private key
  const sender = toHex(secp.getPublicKey(privateKey));

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
