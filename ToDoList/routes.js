const express = require("express");
const cors = require('cors')
const userModel = require("./models");
const app = express();

app.use(cors())

app.post("/addlist", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/tasklist", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  module.exports = app;

  //delete

  app.route("/removetask/:id").delete((req, res) => {
    const id = req.params.id;
    userModel.findByIdAndRemove({_id:id}, err => {
    if (err) return res.send(500, err);
    res.send({"msg":"delete success"});
    });
    });

    //update
    
    
   app.route("/edit/:id").put((req,res)=>{
      if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    userModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update  with id=${id}. Maybe  not found!`
          });
        } else res.send({ message: " updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating with id=" + id
        });
      });
    });

  
    