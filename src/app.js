

// express

const express = require('express')
var hbs = require('hbs')
const app = express()
const port = 3000



const path = require ('path');
const x = path.join(__dirname , '../public');
app.use (express.static(x));






app.get('/about', (req, res) => {
  res.send('this about page')
})

app.get('/service', (req, res) => {
  res.send('this service page')
})

app.get('/price', (req, res) => {
  res.send('tis price page')
})

app.get('/data1', (req, res) => {
  res.send({
    name : "rofaida",
    age : 20,
    city : "BNS"
  });
})

//HBS


app.set('view engine', 'hbs');

const view = path.join(__dirname , "../temp1/views")
app.set("views" , view);

////////////////////////////////////////////////////////////////////////

const partialsPath = path.join(__dirname , "../temp1/partials")

hbs.registerPartials(partialsPath);

///////////////////////////////////////////////////////////////////////
app.get ('/' , (req, res) => {
res.render('index' , {
  title : "Home",
  desc : "THIS HOME PAGE"
})
})

app.get('/students' , (req, res) => {
  res.render('students' , {
    title: "student 1",
    name : "rofaida amer",
    desc : "software engginering",
    age  : 20,
  
  })
  })

  app.get('/team' , (req, res) => {
    res.render('team' , {
      title: "student 2",
      name : "omar Ahmed",
      desc : "software engginering",
      age  : 22,
    
    })
  })


/////////////////////////////////////////////////////////////










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})