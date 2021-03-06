/**
 * Postnl shipping client
 * A NodeJS API client for PostNL shipping services. Features include Generating barcdes, Generating labels in Base64
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PostnlShippingClient) {
      root.PostnlShippingClient = {};
    }
    root.PostnlShippingClient.Address = factory(root.PostnlShippingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Address model module.
   * @module model/Address
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   * @param addressType {String} Type of the address. This is a code. You can find the possible values at Guidelines
   * @param city {String} City of the address
   * @param countrycode {String} The ISO2 country codes
   */
  var exports = function(addressType, city, countrycode) {
    var _this = this;

    _this['AddressType'] = addressType;


    _this['City'] = city;

    _this['Countrycode'] = countrycode;











  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AddressType')) {
        obj['AddressType'] = ApiClient.convertToType(data['AddressType'], 'String');
      }
      if (data.hasOwnProperty('Area')) {
        obj['Area'] = ApiClient.convertToType(data['Area'], 'String');
      }
      if (data.hasOwnProperty('Buildingname')) {
        obj['Buildingname'] = ApiClient.convertToType(data['Buildingname'], 'String');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('CompanyName')) {
        obj['CompanyName'] = ApiClient.convertToType(data['CompanyName'], 'String');
      }
      if (data.hasOwnProperty('Countrycode')) {
        obj['Countrycode'] = ApiClient.convertToType(data['Countrycode'], 'String');
      }
      if (data.hasOwnProperty('Department')) {
        obj['Department'] = ApiClient.convertToType(data['Department'], 'String');
      }
      if (data.hasOwnProperty('Doorcode')) {
        obj['Doorcode'] = ApiClient.convertToType(data['Doorcode'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('Floor')) {
        obj['Floor'] = ApiClient.convertToType(data['Floor'], 'String');
      }
      if (data.hasOwnProperty('HouseNr')) {
        obj['HouseNr'] = ApiClient.convertToType(data['HouseNr'], 'String');
      }
      if (data.hasOwnProperty('HouseNrExt')) {
        obj['HouseNrExt'] = ApiClient.convertToType(data['HouseNrExt'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Region')) {
        obj['Region'] = ApiClient.convertToType(data['Region'], 'String');
      }
      if (data.hasOwnProperty('Street')) {
        obj['Street'] = ApiClient.convertToType(data['Street'], 'String');
      }
      if (data.hasOwnProperty('StreetHouseNrExt')) {
        obj['StreetHouseNrExt'] = ApiClient.convertToType(data['StreetHouseNrExt'], 'String');
      }
      if (data.hasOwnProperty('Zipcode')) {
        obj['Zipcode'] = ApiClient.convertToType(data['Zipcode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of the address. This is a code. You can find the possible values at Guidelines
   * @member {String} AddressType
   * @default '02'
   */
  exports.prototype['AddressType'] = '02';
  /**
   * Area of the address
   * @member {String} Area
   */
  exports.prototype['Area'] = undefined;
  /**
   * Building name of the address
   * @member {String} Buildingname
   */
  exports.prototype['Buildingname'] = undefined;
  /**
   * City of the address
   * @member {String} City
   * @default 'Hoofddorp'
   */
  exports.prototype['City'] = 'Hoofddorp';
  /**
   * This field has a dependency with the field Name. One of both fields must be filled mandatory; using both fields is also allowed. Mandatory when AddressType is 09.
   * @member {String} CompanyName
   * @default 'PostNL'
   */
  exports.prototype['CompanyName'] = 'PostNL';
  /**
   * The ISO2 country codes
   * @member {String} Countrycode
   * @default 'NL'
   */
  exports.prototype['Countrycode'] = 'NL';
  /**
   * Send to specific department of a company. 
   * @member {String} Department
   */
  exports.prototype['Department'] = undefined;
  /**
   * Door code of address. Mandatory for some international shipments.
   * @member {String} Doorcode
   */
  exports.prototype['Doorcode'] = undefined;
  /**
   * Remark: please add FirstName and Name (lastname) of the receiver to improve the parcel tracking experience of your customer. 
   * @member {String} FirstName
   * @default 'Peter'
   */
  exports.prototype['FirstName'] = 'Peter';
  /**
   * Send to specific floor of a company
   * @member {String} Floor
   */
  exports.prototype['Floor'] = undefined;
  /**
   * Mandatory for shipments to Benelux. Max. length is 5 characters (only for Benelux addresses). For Benelux addresses,this field should always be numeric.
   * @member {String} HouseNr
   * @default '42'
   */
  exports.prototype['HouseNr'] = '42';
  /**
   * House number extension 
   * @member {String} HouseNrExt
   */
  exports.prototype['HouseNrExt'] = undefined;
  /**
   * Last name of person. This field has a dependency with the field CompanyName. One of both fields must be filled mandatory; using both fields is also allowed. Remark: please add FirstName and Name (lastname) of the receiver to improve the parcel tracking experience of your customer. 
   * @member {String} Name
   * @default 'de Ruiter'
   */
  exports.prototype['Name'] = 'de Ruiter';
  /**
   * Region of the address
   * @member {String} Region
   */
  exports.prototype['Region'] = undefined;
  /**
   * This field has a dependency with the field StreetHouseNrExt. One of both fields must be filled mandatory; using both fields is also allowed. 
   * @member {String} Street
   * @default 'Siriusdreef'
   */
  exports.prototype['Street'] = 'Siriusdreef';
  /**
   * Combination of Street, HouseNr and HouseNrExt. Please see Guidelines for the explanation.
   * @member {String} StreetHouseNrExt
   */
  exports.prototype['StreetHouseNrExt'] = undefined;
  /**
   * Zipcode of the address. Mandatory for shipments to Benelux. Max length (NL) 6 characters,(BE;LU) 4 numeric characters
   * @member {String} Zipcode
   * @default '2132WT'
   */
  exports.prototype['Zipcode'] = '2132WT';



  return exports;
}));


