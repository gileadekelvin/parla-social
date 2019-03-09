const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParlamentarSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true
    },
    electoral_name: {
        type: String,
        required: true
    },
    civil_name: {
        type: String
    },
    party: {
        type: String
    },
    state: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    }    
});

module.exports = Parlamentar = mongoose.model('parlamentares', ParlamentarSchema);