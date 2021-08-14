const express = require("express");
const app = express();
const path = require("path");
const puerto = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "./public")));
const publicFolderPath = path.resolve(__dirname,"./public");

app.use(express.static(publicFolderPath))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});

app.listen(puerto,()=>{console.log('Server is runnig in the Port ' + puerto);
  });