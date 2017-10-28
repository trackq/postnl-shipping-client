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
    root.PostnlShippingClient.ProductOption = factory(root.PostnlShippingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductOption model module.
   * @module model/ProductOption
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProductOption</code>.
   * @alias module:model/ProductOption
   * @class
   * @param characteristic {String} The characteristic of the ProductOption. Mandatory for some products, please see the Products page
   * @param option {String} The product option code for this ProductOption. Mandatory for some products, please see the Products page
   */
  var exports = function(characteristic, option) {
    var _this = this;

    _this['Characteristic'] = characteristic;
    _this['Option'] = option;
  };

  /**
   * Constructs a <code>ProductOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductOption} obj Optional instance to populate.
   * @return {module:model/ProductOption} The populated <code>ProductOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Characteristic')) {
        obj['Characteristic'] = ApiClient.convertToType(data['Characteristic'], 'String');
      }
      if (data.hasOwnProperty('Option')) {
        obj['Option'] = ApiClient.convertToType(data['Option'], 'String');
      }
    }
    return obj;
  }

  /**
   * The characteristic of the ProductOption. Mandatory for some products, please see the Products page
   * @member {String} Characteristic
   * @default '118'
   */
  exports.prototype['Characteristic'] = '118';
  /**
   * The product option code for this ProductOption. Mandatory for some products, please see the Products page
   * @member {String} Option
   * @default '006'
   */
  exports.prototype['Option'] = '006';



  return exports;
}));


