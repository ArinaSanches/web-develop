const mongoose = require('mongoose');
const Participacao = mongoose.model('Participacao');
const Evento = mongoose.model('Evento');
const Texto = mongoose.model('Texto');

module.exports = {
    async index(req, res) {
        // checar as querys que pode ser feitas pelos filtros

        // 1. pega as participacoes dele pelo cpf
        // 2. pega os textos dele em Textos
        // 3. pega os eventos que ele participou em Eventos

        // montar dicionario de resposta = 


        const { page = 1 } = req.query;
        const participacoes = await Participacao.paginate({}, { page, limit: 10 });
        return res.json(participacoes);
    },
};