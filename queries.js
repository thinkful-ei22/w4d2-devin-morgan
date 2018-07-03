'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Select all restaurants 
// knex('restaurants')
//   .select()
//   .then(result => console.log(result));


// Select all italian restaurants
// knex()
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .then(result => console.log(result));

//select and return 10 Italian restaurants
// knex()
//   .select('id', 'name')
//   .from('restaurants')
//   .where({cuisine:'Italian'})
//   .limit(10)
//   .then(result => console.log(result));


//count all thai restaurants
// knex('restaurants')
//   .select()
//   .where('cuisine', 'Thai')
//   .count()
//   .then(result => console.log(result));


//count all restaurants
// knex('restaurants')
//   .select()
//   .count()
//   .then(result => console.log(result));


//count Thai restaurants in zip code 11372
// knex('restaurants')
//   .select()
//   .count()
//   .where('cuisine', 'Thai')
//   .andWhere('address_zipcode', '11372')
//   .then(result => console.log(result));
