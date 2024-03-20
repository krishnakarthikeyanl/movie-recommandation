
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Hello");
});
app.post('/recommend/movie', (req, res) => {
    
    const options = {
        method: 'POST',
        hostname: 'movie-and-show-recommendation.p.rapidapi.com',
        path: '/recommend/movie',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '1dd1e8d7admsh300dabdce441606p11ce0bjsncc24ddeff09e',
            'X-RapidAPI-Host': 'movie-and-show-recommendation.p.rapidapi.com'
        }
    };

    // Make the HTTP request
    const apiRequest = request(options, (apiResponse) => {
        let data = '';

        // Concatenate data chunks
        apiResponse.on('data', (chunk) => {
            data += chunk;
        });

        // Send the response back to the client
        apiResponse.on('end', () => {
            res.send(data);
        });
    });

    // Handle errors
    apiRequest.on('error', (error) => {
        console.error(error);
        res.status(500).send('An error occurred');
    });

    // Send the request body if available
    if (req.body) {
        apiRequest.write(JSON.stringify(req.body));
    }

    apiRequest.end();
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
