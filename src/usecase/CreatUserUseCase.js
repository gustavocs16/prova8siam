
class CreatUserUseCase {

    constructor(presenter, repository, userDTO) {
        this.presenter = presenter
        this.repository = repository
        this.userDTO = userDTO
        this.collection = 'users'
    }


    execute() {
        //validar os dados 
        //criptografia da senha
        //verifica se o usuário já existe
        this.save(this.userDTO)
    }


    async save(user) {
        try {
            const newUser = await this.repository.save(this.collection, user)
            this.presenter.ok(newUser)
        } catch (fail) {
            console.log('CreatUserUseCase.save', fail)
        }
    }
}

module.exports = { CreatUserUseCase }