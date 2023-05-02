var express = require('express');
var router = express.Router();
var EMD = require('../controllers/emd');


/* GET emd

Example curl request:
curl -X GET http://localhost:3000/api/emd
*/
router.get('/api/emd', function(req, res, next) {
  if(req.query.modalidade){
    EMD.getEMDModalidade(req.query.modalidade)
      .then(EMD => {
        res.json(EMD)
      })
      .catch(erro => {
        res.json({"error": erro, "message": "Erro na obtenção do emd"})
      })
  }
  else if(req.query.res && req.query.res == "OK"){
    EMD.getEMDResultado(true)
      .then(EMD => {
        res.json(EMD)
      })
      .catch(erro => {
        res.json({"error": erro, "message": "Erro na obtenção do emd"})
      })
  }
  else{
    EMD.getEMD()
      .then(EMD => {
        res.json(EMD)
      })
      .catch(erro => {
        res.json({"error": erro, "message": "Erro na obtenção do emd"})
      })  
  }
});

/* GET EMD */
router.get('/api/emd/:id', function(req, res, next) {
  EMD.getEMD(req.params.id)
    .then(EMD => {
      res.json(EMD)
    })
    .catch(erro => {
      res.json({"error": erro, "message": "Erro na obtenção do emd"})
    })
});

/* GET Modalidades */
router.get('/api/modalidades', function(req, res, next) {
  EMD.getModalidades()
    .then(categorias => {
      res.json(categorias)
    })
    .catch(erro => {
      res.json({"error": erro, "message": "Erro na obtenção dos atletas"})
    })
});

router.get('/api/atletas', function(req, res, next) {
  if(req.query.gen){
    EMD.getEMDGenero(req.query.gen)
      .then(produtos => {
        res.json(produtos)
      })
      .catch(erro => {
        res.json({"error": erro, "message": "Erro na obtenção da emd de ateletas femininos"})
      })
  }
  else if(req.query.clube){
    EMD.getEMDClube(req.query.clube)
      .then(produtos => { 
        res.json(produtos)
      })
      .catch(erro => {
        res.json({"error": erro, "message": "Erro na obtenção da emd de atletas de clube"})
      })
  }
  else{
    res.json({"error": "Erro", "message": "Erro query de atletas desconhecida"})
  }
});

module.exports = router;
