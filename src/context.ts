import { ProfileAPI } from "./datasources/profile-api";
import { AddressAPI } from "./datasources/address-api";
import { ProfileAdressMapAPI } from "./datasources/profile-address-map-api";

export type DataSourceContext = {
  dataSources: {
    profileAPI: ProfileAPI;
    addressAPI: AddressAPI;
    profileAddressMapAPI: ProfileAdressMapAPI;
  };
}
