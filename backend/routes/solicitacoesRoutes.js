const express = require("express");
const router = express.Router();
const db = require("../db");

// Listar todas as solicitações
router.get("/", (req, res) => {
  db.query("SELECT * FROM solicitacoes", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// Criar nova solicitação
router.post("/", (req, res) => {
  const { descricao, setor, unidade, categoria } = req.body;
  const status = "Solicitado";
  db.query(
    "INSERT INTO solicitacoes (descricao, setor, unidade, categoria, status) VALUES (?, ?, ?, ?, ?)",
    [descricao, setor, unidade, categoria, status],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: result.insertId, descricao, setor, unidade, categoria, status });
      }
    }
  );
});

module.exports = router;
