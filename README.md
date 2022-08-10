# timestamp-microservice
API Timestamp Microservice

A request to '/api/:date?' with a valid date returns a JSON object with an unix key that is a Unix timestamp of the input date in milliseconds and an utc key that is a string of the input date in the format: "Thu, 01 Jan 1970 00:00:00 GMT". An empty date ('/api') parameter should return the current time in a JSON object with an unix and an utc key.