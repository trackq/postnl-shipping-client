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
    root.PostnlShippingClient.Dimension = factory(root.PostnlShippingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Dimension model module.
   * @module model/Dimension
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Dimension</code>.
   * @alias module:model/Dimension
   * @class
   * @param weight {String} Weight of the shipment in grams. Approximate weight suffices
   */
  var exports = function(weight) {
    var _this = this;




    _this['Weight'] = weight;

  };

  /**
   * Constructs a <code>Dimension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dimension} obj Optional instance to populate.
   * @return {module:model/Dimension} The populated <code>Dimension</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'String');
      }
      if (data.hasOwnProperty('Length')) {
        obj['Length'] = ApiClient.convertToType(data['Length'], 'String');
      }
      if (data.hasOwnProperty('Volume')) {
        obj['Volume'] = ApiClient.convertToType(data['Volume'], 'String');
      }
      if (data.hasOwnProperty('Weight')) {
        obj['Weight'] = ApiClient.convertToType(data['Weight'], 'String');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'String');
      }
    }
    return obj;
  }

  /**
   * Height of the shipment in milimeters (mm).
   * @member {String} Height
   */
  exports.prototype['Height'] = undefined;
  /**
   * Length of the shipment in milimeters (mm). 
   * @member {String} Length
   */
  exports.prototype['Length'] = undefined;
  /**
   * Volume of the shipment in centimeters (cm3). Mandatory for E@H-products
   * @member {String} Volume
   */
  exports.prototype['Volume'] = undefined;
  /**
   * Weight of the shipment in grams. Approximate weight suffices
   * @member {String} Weight
   * @default '2000'
   */
  exports.prototype['Weight'] = '2000';
  /**
   * Width of the shipment in milimeters (mm). 
   * @member {String} Width
   */
  exports.prototype['Width'] = undefined;



  return exports;
}));


