# Oengus.api.js

[![Contributor Covenant](https://img.shields.io/david/axios/axios?label=axios&style=plastic)](https://www.npmjs.com/package/axios)

Oengus.api is a NodeJS library for dealing with Oengus API requests.

## Installation

```bash
npm install oengus.api.js
```

## Usage

```javascript
const oengusAPI = require('oengus.api.js');

oengusAPI.getMarathon('marathonId').then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
}); // returns Marathon instance

oengusAPI.getUser('username').then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
}); // returns User instance

oengusAPI.getSchedule('marathonId').then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
}); // returns Schedule instance

oengusAPI.getIncentives('marathonId').then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
}); // returns array of Incentives instance

oengusAPI.getMarathonDonationStats('marathonId').then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
}); // returns Marathon stats instance

oengusAPI.getDonationPage('marathonId', page, size).then(data => {
  console.log(data);
}).catch(err => {
  console.error(err);
}); // returns array of donation instance with size from page
```

## License
[MIT](https://choosealicense.com/licenses/mit/)