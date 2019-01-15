const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true
    },
    bookedTickets: [
        {
            movieSessionID: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'movieSession'
            },
            adults: {
                type: Number,
            },
            children: {
                type: Number,
            },
            pensioner: {
                type: Number
            }
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);