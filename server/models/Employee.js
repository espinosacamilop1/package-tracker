
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema(
    {
        name: { type: String, required: true },
        position:{type: String, required: true},
        username:{type: String, required: true},
        password:{type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('employees', Employee)