import VideoApiClient from './index';

if(!process.env.INTEGRATION_TESTS_API_TOKEN) {
    console.error("Missing INTEGRATION_TESTS_API_TOKEN env var");
    process.exit(-1);
}

const client = new VideoApiClient({
    apiKey: process.env.INTEGRATION_TESTS_API_TOKEN, 
    baseUri: "https://ws-staging.api.video"
});

client.videos.list()
    .then(videos => console.log(videos))
    .catch(err => console.error("error: ", err));


