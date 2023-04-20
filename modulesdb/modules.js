const mongoose = require("mongoose");
// const validator = require("validator");





const zabefest = new mongoose.Schema({
    ticketid: {
        type: String,
        
    },


    fees: {
        type: String,
        
    },

    numberofparticipant: {
        type: String,
        
    },

    selectedmodule: {
        type: String,
        
    },

    teamleadername: {
        type: String,
        
    },

    universityrollno: {
        type: String,
        
    },

    secondparticipantname: {
        type: String,
        
    },

    secondpartricipantrollno: {
        type: String,
        
    },

    thirdparticipantname: {
        type: String,
        
    },


    thirdpartricipantrollno: {
        type: String,
        
    },

    fourthparticipantname: {
        type: String,
        
    },
    fourthpartricipantrollno: {
        type: String,
        
    },

    fivthparticipantname: {
        type: String,
        
    },
    fivthpartricipantrollno: {
        type: String,
        
    },

    teamleaderemail: {
        type: String,
        
    },

    participantWhatsapp: {
        type: String,
        
    },

    module: {
        type: String,
        
    },

    universityname: {
        type: String,
        
    },

   


    // email: {
    //     type: String,
    //     
    //     validate(value) {
    //         if (!validator.isEmail(value)) {
    //             throw new Error("invalide email")
    //         }
    //     }
    // },

 


});



const Zabefest = new mongoose.model('modules List', zabefest)
module.exports = Zabefest;