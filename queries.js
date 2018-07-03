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

//list Italian restaurants with zip code 10012, 10013, or 10014
// knex('restaurants')
//   .select('id', 'name')
//   .whereIn('address_zipcode', [10012, 10013, 10014])
//   .andWhere('cuisine','Italian')
//   .orderBy('name')
//   .limit(5)
//   .then(result => console.log(result));

//Create a restaurant
// knex('restaurants')
//   .insert({name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'})
//   .then(result => console.log(result));

//Create a restaurant then return id and name
// knex('restaurants')
//   .insert({name: 'Sunlit Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'breakfast',
//     address_building_number: '444',
//     address_street: 'Astora St',
//     address_zipcode: '36571'})
//   .returning(['id', 'name'])
//   .then(result => console.log(result));

//Create three restaurants and return id and name
// knex('restaurants')
//   .insert(
//     [{name: 'Sunlit Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'breakfast',
//     address_building_number: '444',
//     address_street: 'Astora St',
//     address_zipcode: '36571'},

//     {name: 'Darkwraith Tavern',
//     borough: 'Brooklyn',
//     cuisine: 'bar',
//     address_building_number: '445',
//     address_street: 'Astora St',
//     address_zipcode: '36571'},

//     {name: 'Bed and Breakfast of Chaos',
//     borough: 'Brooklyn',
//     cuisine: 'breakfast',
//     address_building_number: '445',
//     address_street: 'Astora St',
//     address_zipcode: '36571'}
//   ])
//   .returning(['id', 'name'])
//   .then(result => console.log(result));

// Update record w/ nyc_restaurant_id 30191841
// knex('restaurants')
//   .where('nyc_restaurant_id', '30191841')
//   .update('name', 'DJ Reynolds Pub and Restaurant')
//   .then(result => console.log(result));

// Delete record 10
// knex('grades')
//   .where('id', '10')
//   .del()
//   .then(result => console.log(result));

// Delete restaurant id 22
// knex('restaurants')
// .where('id', '22')
//   .del()
//   .then(result => console.log(result));