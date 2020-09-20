
class CreatEndUseCase {

    constructor(presenter, repository, endDTO) {
        this.presenter = presenter
        this.repository = repository
        this.endDTO = endDTO
        this.collection = 'end'
    }


    execute() {
        //validar os dados 
        //criptografia da senha
        //verifica se o usuário já existe
        this.save(this.endDTO)
    }


    async save(end) {
        try {
            const newEnd = await this.repository.save(this.collection, end)
            this.presenter.ok(newEnd)
        } catch (fail) {
            console.log('CreatEndUseCase.save', fail)
        }
    }
}

module.exports = { CreatEndUseCase }