const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PlayerSchema = new mongoose.Schema({
    name:{type:String},
    nation:{type:String},
    club:{type:String},
    position:{type:String}
})

PlayerSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('player',PlayerSchema);