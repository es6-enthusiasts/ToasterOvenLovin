import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Vendors } from '../../api/vendors/Vendors';
import { Recipes } from '../../api/recipe/Recipes';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
// Meteor.publish(Vendors.userPublicationName, function () {
//   if (this.userId) {
//     const username = Meteor.users.findOne(this.userId).username;
//     return Vendors.collection.find({ owner: username });
//   }
//   return this.ready();
// });

// General publication. publish all the vendors for everyone to see.
Meteor.publish(Vendors.generalPublicationName, function () {
  return Vendors.collection.find();
});

// User level publication for vendors. Only see the vendors that the user owns.
Meteor.publish(Vendors.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Vendors.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all vendors from all users. Otherwise, publish nothing.
Meteor.publish(Vendors.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Vendors.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
// General publication. publish everything for everyone to see.
Meteor.publish(Recipes.generalPublicationName, function () {
  if (this.userId == null) {
    return Recipes.collection.find();
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Recipes.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Recipes.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Recipes.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Recipes.collection.find();
  }
  return this.ready();
});
