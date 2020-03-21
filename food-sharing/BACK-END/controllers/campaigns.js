const Campaign = require("../models/campaign");

module.exports = (app) => {

    // INDEX
    app.get("/home", (req, res) => {
        Campaign.find()
            .then(campaigns => {
                // res.render("campaigns-index", { campaigns: campaigns });
                // returning json
                res.json(campaigns) 
            
            })
            .catch(err => {
                console.log(err);
            });
    });

    // NEW
    app.get('/campaigns/new', (req, res) => {
        res.render('campaigns-new', {title: "New Campaign"});
    });

    // CREATE
    app.post('/campaigns', (req, res) => {
        Campaign.create(req.body).then((campaign) => {
            console.log(campaign)
            // res.redirect(`/campaigns/${campaign._id}`) // Redirect to campaigns/:id
            // returning json
            res.json(campaign)
            // res.send...
        }).catch((err) => {
            console.log(err.message)
        });
    });

    // SHOW
    app.get('/campaigns/:id', (req, res) => {
        Campaign.findById(req.params.id).then((campaign) => {
            res.render('campaigns-show', { campaign: campaign })
            // returning json
            // res.json(campaign)
        }).catch((err) => {
            console.log(err.message);
        });
    });

    // EDIT
    app.get('/campaigns/:id/edit', (req, res) => {
        Campaign.findById(req.params.id, function(err, campaign) {
            res.render('campaigns-edit', {campaign: campaign, title: "Edit Campaign"});
        });
    });

    // UPDATE
    app.put('/campaigns/:id', (req, res) => {
        Campaign.findByIdAndUpdate(req.params.id, req.body)
            .then(campaign => {
            res.redirect(`/campaigns/${campaign._id}`)
            })
            .catch(err => {
            console.log(err.message)
            });
    });

    // DELETE
    // TODO: users shouldnt be able to delete the campaigns. Fix this later
    app.delete('/campaigns/:id', function (req, res) {
        console.log("DELETE campaign")
        Campaign.findByIdAndRemove(req.params.id).then((campaign) => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        });
    });

}