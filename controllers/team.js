const PlayerModel = require('../models/player')

exports.playerByTeam = async function(req,res){
    try{
        const {Name, Page} = req.body;

        const regex = new RegExp(Name, "i")
        const players = await PlayerModel.paginate({club:{$regex : regex }},
                                                   {page:Page,customLabels:{docs: 'Players'}});
        res.send(players);
    }catch(err){
        console.log(err);
    }
}