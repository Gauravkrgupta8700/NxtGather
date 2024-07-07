const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const port = 4000;
const jwt = require('jsonwebtoken');

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for handling CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/nxtgather");

// Route for testing server status
app.get("/", (req, res) => {
    res.send("Express App is running");
});

// Image Storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serve images statically
app.use('/images', express.static('upload/images'));

// Endpoint for uploading images
app.post("/upload", upload.single('event'), async(req, res) => {
    if (!req.file) { // Check if no file is uploaded
        return res.status(400).json({ error: "No file uploaded" });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Event Schema
const Event = mongoose.model("Event", {
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
    image: String, // Added image field to store image URLs
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    venue: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Endpoint for adding events

app.post('/addevent', async(req, res) => {
    try {
        const { name, image, old_price, new_price, category, venue } = req.body;
        // last event to determine the new ID
        let lastEvent = await Event.findOne().sort({ id: -1 });
        console.log(lastEvent);
        let newId = lastEvent ? lastEvent.id + 1 : 1;
        console.log(req.body);
        const event = new Event({
            id: newId,
            name: name,
            image: image,
            old_price: old_price,
            new_price: new_price,
            category: category,
            venue: venue
        });

        await event.save();
        console.log(event);
        res.json({
            success: true,
            event: event
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// app.post('/addevent', async(req, res) => {
//     try {
//         let events = await Event.find({});
//         let id;

//         if (events.length > 0) {
//             let last_event = events[events.length - 1];
//             id = last_event.id + 1;
//         } else {
//             id = 1;
//         }

//         const event = new Event({
//             id: id,
//             name: req.body.name,
//             image: req.body.image,
//             old_price: req.body.old_price,
//             new_price: req.body.new_price,
//             category: req.body.category,
//             venue: req.body.venue
//         });

//         await event.save();

//         res.json({
//             success: true,
//             event: event // Optionally return the entire event object
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// Creating Endpoints for New Collection
app.get('/newcollections', async(req, res) => {
    let events = await Event.find({});
    let newcollection = events.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})


// Creating Endpoints for Popular in tech_fest 
app.get('/popularintechfest', async(req, res) => {
    let events = await Event.find({ category: "Tech_Fest" });
    let popular_in_techfest = events.slice(0, 4);
    console.log("Popular in techfest fetched");
    res.send(popular_in_techfest);
})

// Creating middleware to fetch user
const fetchUser = async(req, res, next) => {
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).send({ errors: "Please authenticate with valid user" })
        } else {
            try {
                const data = jwt.verify(token, 'secret_ecom');
                req.user = data.user;
                next();
            } catch (error) {
                res.status(401).send({ error: "Please authenticate using a valid token " })
            }
        }
    }
    // Creating Endpoints for adding events in cartdata
app.post('/addtocart', async(req, res) => {
    console.log("Added", req.body.EventId);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.EventId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cart });
    res.send("Added");
})

//Creating EndPoints to remove cartdata
app.post('/removefromcart', async(req, res) => {
    console.log("removed", req.body.EventId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.EventId] > 0)
        userData.cartData[req.body.EventId] -= 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cart });
    res.send("Removd");
})



// Schema Creating for user Model

const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },

    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

//  Creating API for register user

app.post('/signup', async(req, res) => {

    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "esisting user found with same email address" })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();
    const data = {
        user: {

            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })

})

// Creating Endpoint for user login 

app.post('/login', async(req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: "Wrong Password" });
        }
    } else {
        res.json({ success: false, errors: "Wrong Email ID" });
    }
})

// Endpoint for removing events
app.post('/removeevent', async(req, res) => {
    try {
        await Event.findOneAndDelete({ id: req.body.id });
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for fetching all events
app.get('/allevents', async(req, res) => {
    try {
        let events = await Event.find({});
        res.send(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});