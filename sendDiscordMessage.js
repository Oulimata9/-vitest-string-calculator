const axios = require('axios');

const webhookUrl = 'https://discord.com/api/webhooks/1217969110282145902/ytuD2f0fGQ4a3swW4onxi6qGJuGoPvBsna1nGsHkLY8phMEjTn3N8CB4V_6SZ8doNlUK';

axios.post(webhookUrl, {
    content: "Voici un message envoyé par mon webhook Discord."
})
.then(response => {
    console.log('Message envoyé avec succès');
})
.catch(error => {
    console.error('Erreur lors de l\'envoi du message:', error);
});
