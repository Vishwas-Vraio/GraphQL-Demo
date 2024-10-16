import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    getProfileWithAddress: async (_, { profileId }, { dataSources }) => {
      try {
        // Fetch profile by profileId
        const profile = await dataSources.profileAPI.getProfile(profileId);
        if (!profile) {
          return {
            code: 404,
            success: false,
            message: `Profile with ID ${profileId} not found`,
            profile: null,
            addresses: [],
          };
        }

        // Fetch addresses linked to the profile
        const profileAddressMaps =
          await dataSources.profileAddressMapAPI.getProfileAddressMap(
            profileId
          );

        const addresses = await Promise.all(
          profileAddressMaps.map(async (map) => {
            return await dataSources.addressAPI.getAddress(map.addressId);
          })
        );

        return {
          code: 200,
          success: true,
          message: "Profile and addresses fetched successfully",
          profile,
          addresses: addresses
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: error.message,
          profile: null,
          addresses: [],
        };
      }
    },
  },

  Mutation: {
    createProfileWithAddress: async (
      _,
      { profileInput, addressInput },
      { dataSources }
    ) => {
      try {
        // Create profile
        const profile = await dataSources.profileAPI.createProfile(
          profileInput
        );
        if (!profile) {
          throw new Error("Failed to create profile");
        }

        // Create address
        const address = await dataSources.addressAPI.createAddress(
          addressInput
        );
        if (!address) {
          throw new Error("Failed to create address");
        }

        // Map profile and address
        const profileAddressMap =
          await dataSources.profileAddressMapAPI.createProfileAddressMap({
            profileId: profile.profileId,
            addressId: address.addressId,
          });

        if (!profileAddressMap) {
          throw new Error("Failed to map profile and address");
        }

        return {
          code: 200,
          success: true,
          message: "Profile and address created and mapped successfully",
          profile,
          address,
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: error.message,
          profile: null,
          address: null,
        };
      }
    },
  },

  // Address: {
  //   // Whenever Address is requested, it will be resolved here
  //   addressId: async ({ addressId }, _, { dataSources }) => {
  //     return dataSources.addressAPI.getAddress(addressId);
  //   },
  // },
};
