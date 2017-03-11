const cognitiveServices = require('cognitive-services');

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})


emotion.emotionRecognition()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });
