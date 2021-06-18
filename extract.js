const fetch = require('node-fetch');
const model = require('./models/player');

async function getData(){
    let page = 1;
    do{
        const response = await fetch(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${page}`);
        const data = await response.json();
        
        count = data.count; 
        console.log(`Page number ${page}`);

        data.items.forEach(player => {  
            let playerInsert = {
                name: player.commonName ? player.commonName : `${player.firstName} ${player.lastName}`, 
                nation: player.nation.name,
                club: player.club.name,
                position: player.position
            };

            model.create(playerInsert)
            .then(playerDB => console.log(`Player: ${playerDB.name} saved.`))
            .catch(err => console.log(err));
        });
        page += 1;
    }while(count);
}

module.exports = {
    getData
};