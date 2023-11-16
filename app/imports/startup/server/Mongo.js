import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Vendors } from '../../api/vendors/Vendors.js';
import { Recipes } from '../../api/recipe/Recipes';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

const addVendors = (vendor) => {
  console.log(`  Adding: ${vendor.storeName} (${vendor.owner})`);
  Vendors.collection.insert(vendor);
};

if (Vendors.collection.find().count() === 0) {
  if (Meteor.settings.defaultVendors) {
    console.log('Creating default vendors.');
    Meteor.settings.defaultVendors.forEach(vendor => addVendors(vendor));
  }
}

const addRecipe = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Recipes.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Recipes.collection.find().count() === 0) {
  if (Meteor.settings.defaultRecipes) {
    console.log('Creating default data.');
    Meteor.settings.defaultRecipes.forEach(data => addRecipe(data));

  }
}
