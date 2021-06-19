const PlayerModel = require('../models/player')

exports.playerByTeam = async function(req,res){
    if(req.header('x-api-key') == process.env.API_KEY){
        try{
            const {Name, Page} = req.body;

            const regex = new RegExp(Name, "i")
            const players = await PlayerModel.paginate({club:{$regex : regex }},
                                                       {page:Page,customLabels:{docs: 'Players',totalDocs:'totalPlayers'}});
            res.send(players);
        }catch(err){
            console.log(err);
        }
    }else{
        res.status(401);
        res.send('Invalid Key');
    }
}