const express = require('express')
const app = express()
const port = 8080
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
function randomString(e) {
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}


app.get('/getdata', (req, res) => {
  res.json({
    status: 200,
    quotation: randomString()
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})