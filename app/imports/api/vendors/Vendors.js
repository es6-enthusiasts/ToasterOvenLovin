import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The VendorsCollection. It encapsulates state and variable values for Vendors.
 */
class VendorsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VendorsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      storeName: String,
      image: String,
      location: String,
      storeHours: String,
      owner: String,
      ingredients: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.generalPublicationName = `${this.name}.publication.general`;
  }
}

/**
 * The singleton instance of the VendorsCollection.
 * @type {VendorsCollection}
 */
export const Vendors = new VendorsCollection();
