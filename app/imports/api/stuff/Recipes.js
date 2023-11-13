import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class RecipesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'Recipes';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      recipeID: SimpleSchema.Integer,
      ownerId: String,
      dishName: String,
      image: String,
      ingredients: Array,
      'ingredients.$': String,
      equipment: Array,
      'equipment.$': String,
      instructions: String,
      dietaryRestriction: {
        type: String,
        optional: true,
      },
      costPerServing: SimpleSchema.Integer,
      noServings: SimpleSchema.Integer,
      timeToMake: SimpleSchema.Integer,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}
/**
 * The singleton instance of the StuffsCollection.
 * @type {StuffsCollection}
 */
export const Recipes = new RecipesCollection();
