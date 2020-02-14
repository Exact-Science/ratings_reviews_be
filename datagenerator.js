const { performance } = require('perf_hooks');
const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

const productId = faker.random.number({ min: 1, max: 1000000 });
const rating = faker.random.number({ min: 1, max: 5 });
const summary = faker.fake('{{commerce.productName}} so {{commerce.productAdjective}}!');
const body = faker.lorem.paragraph(5);
const recommend = faker.random.boolean();
const reported = faker.random.boolean();
const name = faker.internet.userName();
const email = faker.internet.email();
const response = faker.random.arrayElement([null, null, null, null, faker.hacker.phrase(), null]);
const date = moment(faker.date.between('2015-01-01', '2020-2-14')).format('YYYY-MM-DD');
const helpfulness = faker.random.number({ min: 0, max: 30 });

const t1 = performance.now();
const t2 = performance.now();

const generateRecord = () => {
  const reviewString = `${productId},${rating},${summary},${body},${recommend},${reported},${name},${email},${response},${date},${helpfulness},`;

  return reviewString;
};


// const writeFiles(data) = async () => {

// }

console.log(typeof generateRecord());