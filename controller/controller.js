// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var unirest = require("unirest");
const yelp = require("yelp-fusion");
const clientId = "pbRwg0shy1Zy_gUqWLpiYQ";
const clientSecret =
  "499HGjfOQVwIUWD9ys11menFEA8Ytu77zNrjRCVJ0qYHUQTdpfqdDKNaR7QDYNPy";
const cors = require("cors");
var unirest = require("unirest");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var session = require("express-session");
var CurrentUser = {};

// // Require History Schema
var userMeals = require("../models/User.js");

module.exports = function(app) {
  //route to fill days with meals

  // route for selecting days
  app.post("/user/days", (req, res) => {

    console.log("got here");
    console.log(req.body);
    console.log(req.body.days.days[0]);
    console.log(req.body.days.days[1]);
   var userID = req.body.user_id;
  
    console.log(userID);
  
  console.log("showed you userID");
    let days = req.body.days; //and array of objects

    userMeals.find({ userID: userID }).exec(function(err, results) {
   
      // console.log(results);
      // var mealProperty = results[0].meals;

      // for (i = 0; i < days.length; i++) {
      //   var number = Math.floor(Math.random() * 100);

      //   days[i].meal = mealProperty[i];
      // }

      res.send(days);

      var shuffledMeals = _.shuffle(mealProperty);

      userMeals
        .update({ userID: userID }, { $set: { meals: shuffledMeals } })
        .then(function(doc) {
          userMeals.findOne({ userID: userID }, "meals", function(err, meals) {
            console.log(err);
          });
        });
    });
  });

  // routes for removing meals
  app.delete("/api/:id/meals", (req, res) => {
    let user_id = req.params.id;
    // this is a string of the day for which to remove the meal for
    let day = req.body;

    res.send(`${user_id} has just removed meal(s) from his meal plan!`);
    console.log(`${user_id} has just removed meal(s) from his meal plan!`);
  });

  // routes for updating user information
  app.put("/api/:id/user_info", (req, res) => {
    let user_id = req.params.id;
    let infoToUpdate = req.body;

    res.send(`${user_id} has just updated some user information!`);
    console.log(`${user_id} has just updated some user information!`);
  });

  //receiving things from form

  app.post("/", function(req, res) {

    var userID = req.body.restrictions.user;

    var userName = req.body.restrictions.login;

    var userEmail = req.body.restrictions.email;

    var password = req.body.restrictions.password;

    var preferences = req.body.restrictions.preference;

    var restriction = req.body.restrictions.restriction;

    var modifiedRestrictions = restriction.join("+");

    // console.log(modifiedRestrictions);

    // end of gathering info, commencing api query

    // These code snippets use an open-source library. http://unirest.io/nodejs
    var string1 =
      "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=50&tags=";
    var string2 = preferences.toLowerCase();
    console.log(string2);
    var string3 = string1.concat(string2 + "+");
    var string4 = string3.concat(modifiedRestrictions);
    console.log(string4);
    unirest
      .get(string4)
      .header(
        "X-Mashape-Key",
        "RdXEu67LNZmshdxsrbAGe3gh9fAKp1VdlhxjsnnRI93ldi2bTU"
      )
      .header("Accept", "application/json")
      .end(function(result) {
        var mealPlanArray = [];

        for (i = 0; i < 7; i++) {
          mealPlanArray.push(result.body.recipes[i]);
        }

        userMeals.create(
          {
            userName: userName,
            userID: userID,
            userEmail: userEmail,
            password: password,
            meals: mealPlanArray,
            preferences: preferences,
            restrictions: restriction,
            days: [],
            date: Date.now()
          },
          function(err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log("saved your meals");
              res.send(data);
            }
          }
        );
      });
  });

  //beginning of yelp code

  app.get("/yelp", function(req, res) {
    console.log("in/yelpget");
    // console.log("-------------------------")
    // console.log("this is in get yelp" + req.body);
    // console.log("-------------------------")
    // console.log("Start of the yelp response");
    console.log(req.query.zipcode);
    console.log(req.query.type);
    // Yelp response

    const searchRequest = {
      term: req.query.type,
      location: req.query.zipcode
    };

    yelp
      .accessToken(clientId, clientSecret)
      .then(response => {
        const client = yelp.client(response.jsonBody.access_token);

        client.search(searchRequest).then(response => {
          const firstResult = response.jsonBody.businesses[0];
          const prettyJson = JSON.stringify(firstResult, null, 4);
          // console.log(prettyJson);
          res.send(firstResult);
          // console.log("End of the Yelp Response");
        });
      })
      .catch(e => {
        console.log(e);
      });
  });

  //end of yelp beginning of code to receive day objects in an array

  app.post("/user/:id/", function(req, res) {
    var userID = "fodnb";

    var days = req.body;

    userMeals.find({ userID: userID }).exec(function(err, results) {
      // console.log(results);
      var mealProperty = results[0].meals;

      for (i = 0; i < days.length; i++) {
        var number = Math.floor(Math.random() * 100);

        days[i].meal = mealProperty[i];
      }

      //end of for loop

      //update mongo for persistence

      userMeals.update({
        userID: userID
      }), { $set: { mealsForTheWeek: [] } }, function(err, result) {
        console.log(err);
      };

      userMeals.update({
        userID: userID
      }), { $set: { mealsForTheWeek: days } }, function(err, result) {
        console.log(err);
      };

      res.send(days);
    });
  });
};
