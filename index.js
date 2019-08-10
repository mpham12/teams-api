let express = require('express');
let bodyParser = require('body-parser');
let teams = require('./teams.json');
let model = require('./model');
let Sequelize = require('sequelize');


let app = express();
let port = 1337;
let Op = Sequelize.Op;



app.get('/teams', (request, response) => {
    model.Teams.findAll({
        attributes: ['id', 'location', 'mascot', 'abbreviation', 'conference', 'division']

    }).then((teams) => {
        response.send(teams)
    })
});
app.get('/teams/:teamIdOrAbbr', (request, response) => {
    model.Teams.findAll({
        where: {
            [Op.or]: [{
                id: request.params.teamIdOrAbbr
            }, {
                abbreviation: request.params.teamIdOrAbbr
            }]
        }
    }).then((teams) => {
        response.send(teams)
    });


});
app.use(bodyParser.json())
app.post('/teams', (request, response) => {

    //getting value for teams
    var {
        id,
        location,
        mascot,
        abbreviation,
        conference,
        division
    } = request.body;

    if (!id || !location || !mascot || !abbreviation || !conference || !division) {
        response.status(400).send('The following attributes are require:id,location,mascot,abbreviation,conference,division')
    } else {
        model.Teams.create({
            id,
            location,
            mascot,
            abbreviation,
            conference,
            division
        }).then((newTeams) => {
            response.sendStatus(200).send(newTeams)
        })
    }

});


app.all('*', (request, response) => {

});

app.listen(port, () => {
    console.log(`teams server running on port ` + port)
})