const users = [
    {
        name: "Mathilde",
        email: "ma@roi.be"
    },
    {
        name: "Philippe",
        email: "phil@roi.be"

    }
];
//charge la librerie express et on garde une reference
const express = require('express');
//cree une app express
const app = express();
//charge middleware qui 'decode' l'information
app.use(express.urlencoded({ extended: true}));
/*
app.get('form.html', (req, res) =>{
    res.send('public\form.html');
})
*/
app.get('/user', (req, res) => {
    console.log('HTTP REQUEST GET on resource user');
    //res.send('liste de utilisaters<br>'+JSON.stringify(users));
    //res.send(JSON.stringify(users));
    res.send({users: users});
})

app.post('/user', (req, res) => {
    console.log('HTTP REQUEST POT on resource user with');
    console.log(req.body);
    //unsecure verification
    users.push(req.body);
    //TODO creer le nouvel user
    res.send('Post received');
})

app.use(express.static('public'));

app.use('/', (req, res) => res.send('ok'));
app.listen('3000', () => console.log('ready on 3000'))