const express = require('express');
const path = require('path');

const app = express();

const members = [
    {name: 'Femi Sokoya', age: 26},
    {name: 'Christine Iyke', age: 21}
];

//get all members endpoint
app.get('/api/members', (req, res) => res.json(members));
// //rendering HTML pages in this manner is not ideal, because you'd have
// //to create separate routes/endpoints for each page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//static folders is an easy way to handle this using express
//the public folder can be made into a static folder using MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));