const Joi = require("joi");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { User } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
// const router = express.Router();

module.exports = (app) => {
    app.post("/api/auth", async (req, res) => {
        const { error } = validate(req.body);
        console.log("error", {error});
        
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).send("Invalid email or password.");

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res.status(400).send("Invalid email or password.");

        const token = user.generateAuthToken();
        res.send(token);
    });

    function validate(req) {
        const schema = {
            username: Joi.string()
                .min(5)
                .max(255)
                .required()
                .email(),
            password: Joi.string()
                .min(5)
                .max(255)
                .required()
        };
    
        return Joi.validate(req, schema);
    }
}

