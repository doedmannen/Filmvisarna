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
            title: {
                type: String,
            },
            orderID: {
                type: String,
            },
            theatre: {
                type: String,
            },
            time: {
                type: String,
            },
            date: {
                type: String,
            },
            price: {
                type: String,
            },
            adults: {
                type: Number,
            },
            children: {
                type: Number,
            },
            pensioner: {
                type: Number
            },
            totalTickets: {
                type: String,
            },
            placeNumbers: [
                {
                    type: String
                }
            ]
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);