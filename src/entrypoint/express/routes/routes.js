const { CreatUserUseCase } = require('../../../usecase/CreatUserUseCase')
const { ListUserUseCase } = require('../../../usecase/ListUserUseCase')

const { CreatEndUseCase } = require('../../../usecase/CreatEndUseCase')
const { ListEndUseCase } = require('../../../usecase/ListEndUseCase')
const { PresenterWEB } = require('../../../presenter/PresenterWEB')
const { OperatorsDB } = require('../../../repository/mongoAtlas/OperatorsDB')


module.exports = app => {


    app.get('/user', function (req, res) {
        const listUserUseCase = new ListUserUseCase(new PresenterWEB(res), new OperatorsDB())
        listUserUseCase.findAll()
    })

    app.get('/user/:id', function (req, res) {
        const listUserUseCase = new ListUserUseCase(new PresenterWEB(res), new OperatorsDB())
        listUserUseCase.findById(req.params.id)
    })

    app.get('/user/name/:name', function (req, res) {
        const listUserUseCase = new ListUserUseCase(new PresenterWEB(res), new OperatorsDB())
        listUserUseCase.findByName(req.params.name)

    })


    app.post('/user', function (req, res) {
        new CreatUserUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute()
    })
    

    app.put('/user', function (req, res) {
        const listUserUseCase = new ListUserUseCase(new PresenterWEB(res), new OperatorsDB())
        listUserUseCase.editById(req.body)
    })


    app.delete('/user/:id', function (req, res) {
        const listUserUseCase = new ListUserUseCase(new PresenterWEB(res), new OperatorsDB())
        listUserUseCase.deleteById(req.params.id)

    })



    app.get('/endereco', function (req, res) {
        const end = new ListEndUseCase(new PresenterWEB(res), new OperatorsDB())
        end.findAll()
    })

    app.get('/endereco/:id', function (req, res) {
        const end = new ListEndUseCase(new PresenterWEB(res), new OperatorsDB())
        end.findById(req.params.id)
    })

    app.get('/endereco/name/:name', function (req, res) {
        const end = new ListEndUseCase(new PresenterWEB(res), new OperatorsDB())
        end.findByName(req.params.name)
    })


    app.post('/endereco', function (req, res) {
        new CreatEndUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute()
    })
    

    app.put('/endereco', function (req, res) {
        const end = new ListEndUseCase(new PresenterWEB(res), new OperatorsDB())
        end.editById(req.body)
       
    })


    app.delete('/endereco/:id', function (req, res) {
        const end = new ListEndUseCase(new PresenterWEB(res), new OperatorsDB())
        end.deleteById(req.params.id)
    })

}