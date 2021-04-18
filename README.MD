# Oengus.api

[![Contributor Covenant](https://img.shields.io/david/axios/axios?label=axios&style=plastic)](https://www.npmjs.com/package/axios)

Oengus.api is a NodeJS library for dealing with Oengus API requests.

## Installation

```bash
npm install oengus.api
```

## Usage

```javascript
const oengusAPI = require('./api');

oengusAPI.getMarathon(`marathon's id`).then(data =>{console.log(data);}); // returns Marathon instance
oengusAPI.getUser(`username`).then(data =>{console.log(data);}); // returns User instance 
oengusAPI.getSchedule(`marathon's id`).then(data =>{console.log(data);}); // returns Schedule instance 
```

## License
[MIT](https://choosealicense.com/licenses/mit/)