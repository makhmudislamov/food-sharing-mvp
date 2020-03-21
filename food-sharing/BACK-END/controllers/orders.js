const Order = require("../models/order");

module.exports = (app) => {

    // INDEX
    app.get("/home", (req, res) => {
        Order.find()
            .then(orders => {
                // res.render("orders-index", { orders: orders });
                // returning json
                res.json(orders) 
            
            })
            .catch(err => {
                console.log(err);
            });
    });

    // NEW
    app.get('/orders/new', (req, res) => {
        res.render('orders-new', {title: "New order"});
    });

    // CREATE
    app.post('/orders', (req, res) => {
        Order.create(req.body).then((order) => {
            console.log(order)
            // res.redirect(`/orders/${order._id}`) // Redirect to orders/:id
            // returning json
            res.json(order)
            // res.send...
        }).catch((err) => {
            console.log(err.message)
        });
    });

    // SHOW
    app.get('/orders/:id', (req, res) => {
        Order.findById(req.params.id).then((order) => {
            res.render('orders-show', { order: order })
            // returning json
            // res.json(order)
        }).catch((err) => {
            console.log(err.message);
        });
    });

    // EDIT
    app.get('/orders/:id/edit', (req, res) => {
        Order.findById(req.params.id, function(err, order) {
            res.render('orders-edit', {order: order, title: "Edit order"});
        });
    });

    // UPDATE
    app.put('/orders/:id', (req, res) => {
        Order.findByIdAndUpdate(req.params.id, req.body)
            .then(order => {
            res.redirect(`/orders/${order._id}`)
            })
            .catch(err => {
            console.log(err.message)
            });
    });

    // DELETE
    // TODO: users shouldnt be able to delete the orders. Fix this later
    app.delete('/orders/:id', function (req, res) {
        console.log("DELETE order")
        Order.findByIdAndRemove(req.params.id).then((order) => {
            res.redirect('/home');
        }).catch((err) => {
            console.log(err.message);
        });
    });

}