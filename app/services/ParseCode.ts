import * as queryString from 'query-string';

const urlParams = queryString.parse(location.search);

if (urlParams.error) {
  console.log(`An error occurred: ${urlParams.error}`);
} else {
  console.log(`The code is: ${urlParams.code}`);
}