const Order = require("../models/order");

module.exports = (app) => {

    // INDEX
    app.get("/home", async (req, res) => {
        await Order.find()
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
    app.get('/orders/new', async (req, res) => {
        await res.render('orders-new', {title: "New order"});
    });

    // CREATE
    app.post('/orders', async (req, res) => {
        await Order.create(req.body).then( async (order) => {
            console.log(order)
            // res.redirect(`/orders/${order._id}`) // Redirect to orders/:id
            // returning json
            await order.save()
            res.send(order)
            // res.send...
        }).catch((err) => {
            console.log(err.message)
        });
    });

    // SHOW
    app.get('/orders/:id', async (req, res) => {
        await Order.findById(req.params.id).then(async (order) => {
            // res.render('orders-show', { order: order })
            // returning json
            await res.json(order)
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
    app.put('/orders/:id', async (req, res) => {
        await Order.findByIdAndUpdate(req.params.id, req.body)
            .then( async order => {
            // res.redirect(`/orders/${order._id}`)
            await order.save();
            res.send(order);
            await res.json(order); // TODO: delete this line if there is problem
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