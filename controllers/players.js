const PlayerModel = require('../models/player')

exports.playerBySearch = async function(req,res){
    if(req.header('x-api-key') == process.env.API_KEY){
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
    }else{
        res.status(401);
        res.send('Invalid Key');
    }
}