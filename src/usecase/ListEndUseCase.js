

class ListEndUseCase{


    constructor(presenter, repository) {
        this.presenter = presenter
        this.repository = repository
        this.collection = 'end'
    }


    async findAll(){
        try {
            const allEnd = await this.repository.find(this.collection, {})
            this.presenter.ok(allEnd)
        } catch (fail) {
            console.log('allEnd', fail)
        }
    }

    async findById(userId){
        try {
            const end = await this.repository.findById(this.collection, userId)
            this.presenter.ok(end)
        } catch (fail) {
            console.log('endId', fail)
        }
    }

    async findByName(name){
        try {
            const end = await this.repository.findByName(this.collection, name)
            this.presenter.ok(end)
        } catch (fail) {
            console.log('endName', fail)
        }
    }
    
    async deleteById(userId){
        try {
            const end = await this.repository.deleteById(this.collection, userId)
            this.presenter.ok(end)
        } catch (fail) {
            console.log('DeleteEndId', fail)
        }
    }

    async editById(userId){
        try {
            const end = await this.repository.editById(this.collection, userId)
            this.presenter.ok(end)
        } catch (fail) {
            console.log('EndEditID', fail)
        }
    }


}


module.exports = { ListEndUseCase }