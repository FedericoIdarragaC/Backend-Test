const PlayerModel = require('../models/player')

exports.playerBySearch = async function(req,res){
    try{
        const {search,order, page} = req.query;
        
        const regex = new RegExp(search, 'i')
        const players = await PlayerModel.paginate({name:{$regex: regex}},
                                                   {page:page,
                                                    customLabels:{docs: 'Players'},
                                                    sort:{name:order ? order:'asc'}});                                               
        res.send(players);
    }catch(err){
        console.log(err);
    }
}