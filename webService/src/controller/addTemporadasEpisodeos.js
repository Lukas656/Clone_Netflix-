const database = require('../repository/index');
const Filme = require('../model/filme');
const Temporada = require('../model/temporada');
const Epsiodeo = require('../model/episodeo');


const addTempEp = async () => {
    try {
        // Vou pegar do meu banco de filmes todas que são tipo serie ai pegar o campo _id dele
        const series = await Filme.find({ tipo: 'serie' }).select('_id');
        for (let serie of series) {
            console.log(`FILME ${serie}------`);
            // limitei para me dar até 7 temporadas aleatoriamente 
            const numTemporadas = Math.floor(Math.random() * 5) + 1;
            for (let i = 1; i <= numTemporadas; i++) {
                console.log(`Inserindo temporada ${i} de ${numTemporadas}`);
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`
                }).save();

                const numEpisodeos = Math.floor(Math.random() * 5) + 1;
                for (let x = 1; x <= numEpisodeos; x++) {
                    console.log(`Inserindo Episódio ${x} de ${numEpisodeos}`);
                    await new Epsiodeo({
                        temporada_id: temporada._id,
                        titulo: `Episodeo ${x}`,
                        numero: x,
                        descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque vero expedita tenetur quis, consectetur corporis voluptatem, sed distinctio, eligendi nisi illum laudantium! Eligendi ipsum, tempora sapiente excepturi veritatis voluptate provident.',
                        capa: 'https://picsum.photos/300/200',
                    }).save();
                }
            }
        }

    } catch (err) {
        console.log(err.message)
    }
}

addTempEp();