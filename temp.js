// const req = require('express');

// const app= express()

// app.use(express.json())

// const users= []

// app.get('/users', (req, res)=>{
//   res.json(users)
// })

// app.post('/users', (req, res)=>{
//   const user = {name: req.body.name, password: req.body.password}
//   users.push(user)
//   res.status(201).send()
// })

// app.listen(3000)
var okbutton=document.getElementById('enter');


okbutton.addEventListener('click',passw);
function passw(){
    console.log("Hello");
    var str=document.getElementById('password').value;
    const data={str};
    // const options={
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data),
    // };
    // fetch('/api',options);
}

