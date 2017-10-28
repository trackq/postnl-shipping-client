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
    root.PostnlShippingClient.Contact = factory(root.PostnlShippingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Contact model module.
   * @module model/Contact
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Contact</code>.
   * @alias module:model/Contact
   * @class
   * @param contactType {String} Type of the contact. This is a code. You can find the possible values at Guidelines
   */
  var exports = function(contactType) {
    var _this = this;

    _this['ContactType'] = contactType;



  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ContactType')) {
        obj['ContactType'] = ApiClient.convertToType(data['ContactType'], 'String');
      }
      if (data.hasOwnProperty('Email')) {
        obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
      }
      if (data.hasOwnProperty('SMSNr')) {
        obj['SMSNr'] = ApiClient.convertToType(data['SMSNr'], 'String');
      }
      if (data.hasOwnProperty('TelNr')) {
        obj['TelNr'] = ApiClient.convertToType(data['TelNr'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of the contact. This is a code. You can find the possible values at Guidelines
   * @member {String} ContactType
   * @default '01'
   */
  exports.prototype['ContactType'] = '01';
  /**
   * Email address of the contact. Mandatory in some cases. Please see Guidelines
   * @member {String} Email
   * @default 'receiver@email.com'
   */
  exports.prototype['Email'] = 'receiver@email.com';
  /**
   * Mobile phone number of the contact. Mandatory in some cases
   * @member {String} SMSNr
   * @default '+31612345678'
   */
  exports.prototype['SMSNr'] = '+31612345678';
  /**
   * Phone number of the contact
   * @member {String} TelNr
   * @default '+31301234567'
   */
  exports.prototype['TelNr'] = '+31301234567';



  return exports;
}));

