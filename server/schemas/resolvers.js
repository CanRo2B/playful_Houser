const { AuthenticationError } = require('apollo-server-express');
const { User, Property, Contact } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('properties');
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('properties');
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('properties');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    properties: async () => {
      return Property.find().populate('tenants');
    },

    property: async (parent, { propertyId }) => {
      return Property.findOne({ _id: propertyId }).populate('tenants');
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password, landlord }) => {
      const user = await User.create({ username, email, password, landlord });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    addProperty: async (parent, { input }, context) => {
      input.manager = context.user._id;
      const property = await Property.create({ ...input });
      if (context.user) {
        User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { properties: property._id } }
        );
        return property;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    // saveProperty: async (parent, { _id }, context) => {
    //   const save = await User.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`Book ${title } saved`]: 1 } },
    //     { new: true }
    //   );
    //   return save;
    //   // }
    //   // throw new AuthenticationError('You need to be logged in!');
    // },

    addContact: async (parent, { input }, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          { $set: { contact: { ...input } } },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeProperty: async (parent, { propertyId }, context) => {
      if (context.user) {
        const property = await Property.findOneAndDelete({
          _id: propertyId
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { properties: property._id } }
        );
        return property;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addTenant: async (parent, { propertyId, username }, context) => {
      if (context.user) {
        const tenant = await User.findOne({ username: username });
        return Property.findOneAndUpdate(
          {
            _id: propertyId
          },
          { $addToSet: { tenants: tenant._id } },
          { new: true }
        ).populate('tenants');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeTenant: async (parent, { propertyId, userId }, context) => {
      if (context.user) {
        return Property.findOneAndUpdate(
          { _id: propertyId },
          { $pull: { tenants: userId } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
