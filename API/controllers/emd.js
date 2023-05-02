var EMD = require('../models/emd')

//GET /api/emd
module.exports.getEMDs = () => {
    return EMD.find()
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// EMD list
module.exports.getAllEMD = () => {
    return EMD.find().sort({data: -1})
        .then(dados => {
            //lambda function that for each element of the array
            //only returns the "_id" "nome" "data" "resultado"
            return dados.map(d => {
                return {
                    _id: d._id,
                    nome: d.nome,
                    data: d.data,
                    resultado: d.resultado
                }
            })
        })
        .catch(erro => {
            return erro
        })

}

//GET /api/EMD/:id
module.exports.getEMD = id => {
    return EMD.findOne({_id: id})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

//GET /api/modalidades
module.exports.getModalidades = id => {
    return EMD.distinct("modalidade")
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

//GET /api/emd?res=OK
module.exports.getEMDResultado = resultado => {
    return EMD.find({resultado: resultado}).sort({data: -1})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

//GET /api/emd?modalidade=X 
module.exports.getEMDModalidade = modalidade => {
    return EMD.find({modalidade: modalidade}).sort({data: -1})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

//GET /api/atletas?gen=F
module.exports.getEMDGenero = genero => {
    return EMD.find({género: genero}).sort({nome: 1})
    .then(dados => {
        return dados.map(d => 
            { return {nome: d.nome} }
        )
    })
    .catch(erro => {
        return erro
    })
}

//GET /api/atletas?clube=X
module.exports.getEMDClube = clube => {
    return EMD.find({clube: clube}).sort({nome: 1})
    .then(dados => {
        return dados.map(d => { return {nome: d.nome} })
    })
    .catch(erro => {
        return erro
    })
}


