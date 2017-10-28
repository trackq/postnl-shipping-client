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
    root.PostnlShippingClient.Amount = factory(root.PostnlShippingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Amount model module.
   * @module model/Amount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Amount</code>.
   * @alias module:model/Amount
   * @class
   * @param amountType {String} Amount type. This is a code. Possible values are:  01 = Cash on delivery (COD) 02 = Insured value 04 mandatory for Commercial route China. 12 mandatory for Inco terms DDP Commercial route China.
   * @param value {String} Money value in EUR (unless value Currency is specified for another currency). Value format (N6.2): #####0.00 (2 digits behind decimal dot) Mandatory for COD and Insured products
   */
  var exports = function(amountType, value) {
    var _this = this;

    _this['AmountType'] = amountType;






    _this['Value'] = value;
  };

  /**
   * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Amount} obj Optional instance to populate.
   * @return {module:model/Amount} The populated <code>Amount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AmountType')) {
        obj['AmountType'] = ApiClient.convertToType(data['AmountType'], 'String');
      }
      if (data.hasOwnProperty('AccountName')) {
        obj['AccountName'] = ApiClient.convertToType(data['AccountName'], 'String');
      }
      if (data.hasOwnProperty('BIC')) {
        obj['BIC'] = ApiClient.convertToType(data['BIC'], 'String');
      }
      if (data.hasOwnProperty('Currency')) {
        obj['Currency'] = ApiClient.convertToType(data['Currency'], 'String');
      }
      if (data.hasOwnProperty('IBAN')) {
        obj['IBAN'] = ApiClient.convertToType(data['IBAN'], 'String');
      }
      if (data.hasOwnProperty('Reference')) {
        obj['Reference'] = ApiClient.convertToType(data['Reference'], 'String');
      }
      if (data.hasOwnProperty('TransactionNumber')) {
        obj['TransactionNumber'] = ApiClient.convertToType(data['TransactionNumber'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Amount type. This is a code. Possible values are:  01 = Cash on delivery (COD) 02 = Insured value 04 mandatory for Commercial route China. 12 mandatory for Inco terms DDP Commercial route China.
   * @member {String} AmountType
   * @default '01'
   */
  exports.prototype['AmountType'] = '01';
  /**
   * Name of bank account owner 
   * @member {String} AccountName
   */
  exports.prototype['AccountName'] = undefined;
  /**
   * BIC number,optional for COD shipments (mandatory for bank account number other than originating in The Netherlands)
   * @member {String} BIC
   */
  exports.prototype['BIC'] = undefined;
  /**
   * Currency code according ISO 4217. E.g. EUR
   * @member {String} Currency
   * @default 'EUR'
   */
  exports.prototype['Currency'] = 'EUR';
  /**
   * IBAN bank account number,mandatory for COD shipments. Dutch IBAN numbers are 18 characters 
   * @member {String} IBAN
   */
  exports.prototype['IBAN'] = undefined;
  /**
   * Personal payment reference 
   * @member {String} Reference
   */
  exports.prototype['Reference'] = undefined;
  /**
   * Transaction number
   * @member {String} TransactionNumber
   */
  exports.prototype['TransactionNumber'] = undefined;
  /**
   * Money value in EUR (unless value Currency is specified for another currency). Value format (N6.2): #####0.00 (2 digits behind decimal dot) Mandatory for COD and Insured products
   * @member {String} Value
   * @default '100.00'
   */
  exports.prototype['Value'] = '100.00';



  return exports;
}));


