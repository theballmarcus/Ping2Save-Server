var express = require('express');
var router = express.Router();
var config = require("../config.json")
var sqlite3_lib = require('../resources/sqlite3.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Send a post request instead');
});
router.post('/', function (req, res) {
  if(req.body.password != "") {
    if(req.body.file != "") {
      if(config.passwords.save_file == req.body.password) {
        if(req.body.name && req.body.note) {
          var express = require('express');
          var router = express.Router();
          var config = require("../config.json")
          var sqlite3_lib = require('../resources/sqlite3.js')
          
          /* GET users listing. */
          router.get('/', function(req, res, next) {
            res.send('Send a post request instead');
          });
          router.post('/', function (req, res) {
            if(req.body.password != "") {
              if(req.body.file != "") {
                if(config.passwords.save_file == req.body.password) {
                  if(req.body.name && req.body.note) {
                    getRes(req, res, "Saving note...")
                  } else {
                    getRes(req, res, "Missing name or note.")
                  }
                } else {
                  getRes(req, res, "This password doesnt have sufficient permissions.")
                }
              } else {
                if(config.passwords.save_note == req.body.password) {
                  if(req.body.name && req.body.note) {
                    sqlite3_lib.db.write("data/notes.db", `INSERT INTO notes (name,note) VALUES ("${req.body.name}","${req.body.note}")`)
                    getRes(req, res, "Saving note...")
          
                  } else {
                    getRes(req, res, "Missing name or note.")
                  }
                } else {
                  getRes(req, res, "This password doesnt have sufficient permissions.")
                }
              }
            } else {
              getRes(req, res, "No password provided.")
            }
          })
          
          function getRes(req, res, res_text) {
            modifiedReqBody = req.body
            delete modifiedReqBody.password
            res.send({
              "recieved" : modifiedReqBody,
              "msg" : res_text
            })
          }
          module.exports = router;
               getRes(req, res, "Saving note...")
        } else {
          getRes(req, res, "Missing name or note.")
        }
      } else {
        getRes(req, res, "This password doesnt have sufficient permissions.")
      }
    } else {
      if(config.passwords.save_note == req.body.password) {
        if(req.body.name && req.body.note) {
          sqlite3_lib.db.write("data/notes.db", `INSERT INTO notes (name,note) VALUES ("${req.body.name}","${req.body.note}")`)
          getRes(req, res, "Saving note...")

        } else {
          getRes(req, res, "Missing name or note.")
        }
      } else {
        getRes(req, res, "This password doesnt have sufficient permissions.")
      }
    }
  } else {
    getRes(req, res, "No password provided.")
  }
})

function getRes(req, res, res_text) {
  modifiedReqBody = req.body
  delete modifiedReqBody.password
  res.send({
    "recieved" : modifiedReqBody,
    "msg" : res_text
  })
}
module.exports = router;
