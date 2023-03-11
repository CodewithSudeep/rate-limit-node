const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 10, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message:
		'Too many request from this IP, please try again after a minute',
})

// Apply the rate limiting middleware to all requests
app.use(limiter)


    const lang = [
    {
        id: 1,
        name : "JS"
    },
    {
        id: 2,
        name : "python"
    },
    {
        id: 3,
        name:"PHP"
    }
];

app.get('/lang', (req, res) =>{
    res.send(lang);
});

app.listen(4000);
console.log('listening on port 4000');