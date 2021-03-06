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
    define(['ApiClient', 'model/Address', 'model/Amount', 'model/Contact', 'model/Customs', 'model/Dimension', 'model/Group', 'model/ProductOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./Amount'), require('./Contact'), require('./Customs'), require('./Dimension'), require('./Group'), require('./ProductOption'));
  } else {
    // Browser globals (root is window)
    if (!root.PostnlShippingClient) {
      root.PostnlShippingClient = {};
    }
    root.PostnlShippingClient.Shipments = factory(root.PostnlShippingClient.ApiClient, root.PostnlShippingClient.Address, root.PostnlShippingClient.Amount, root.PostnlShippingClient.Contact, root.PostnlShippingClient.Customs, root.PostnlShippingClient.Dimension, root.PostnlShippingClient.Group, root.PostnlShippingClient.ProductOption);
  }
}(this, function(ApiClient, Address, Amount, Contact, Customs, Dimension, Group, ProductOption) {
  'use strict';




  /**
   * The Shipments model module.
   * @module model/Shipments
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Shipments</code>.
   * @alias module:model/Shipments
   * @class
   * @param addresses {Array.<module:model/Address>} List of 1 or more Address type elements. At least 1 address type is mandatory
   * @param barcode {String} Barcode of the shipment. This is a unique value
   * @param dimension {module:model/Dimension} 
   * @param productCodeDelivery {String} Product code of the shipment 
   */
  var exports = function(addresses, barcode, dimension, productCodeDelivery) {
    var _this = this;

    _this['Addresses'] = addresses;

    _this['Barcode'] = barcode;











    _this['Dimension'] = dimension;








    _this['ProductCodeDelivery'] = productCodeDelivery;








  };

  /**
   * Constructs a <code>Shipments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Shipments} obj Optional instance to populate.
   * @return {module:model/Shipments} The populated <code>Shipments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Addresses')) {
        obj['Addresses'] = ApiClient.convertToType(data['Addresses'], [Address]);
      }
      if (data.hasOwnProperty('Amounts')) {
        obj['Amounts'] = ApiClient.convertToType(data['Amounts'], [Amount]);
      }
      if (data.hasOwnProperty('Barcode')) {
        obj['Barcode'] = ApiClient.convertToType(data['Barcode'], 'String');
      }
      if (data.hasOwnProperty('CollectionTimeStampStart')) {
        obj['CollectionTimeStampStart'] = ApiClient.convertToType(data['CollectionTimeStampStart'], 'String');
      }
      if (data.hasOwnProperty('CollectionTimeStampEnd')) {
        obj['CollectionTimeStampEnd'] = ApiClient.convertToType(data['CollectionTimeStampEnd'], 'String');
      }
      if (data.hasOwnProperty('Contacts')) {
        obj['Contacts'] = ApiClient.convertToType(data['Contacts'], [Contact]);
      }
      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], 'String');
      }
      if (data.hasOwnProperty('CostCenter')) {
        obj['CostCenter'] = ApiClient.convertToType(data['CostCenter'], 'String');
      }
      if (data.hasOwnProperty('CustomerOrderNumber')) {
        obj['CustomerOrderNumber'] = ApiClient.convertToType(data['CustomerOrderNumber'], 'String');
      }
      if (data.hasOwnProperty('Customs')) {
        obj['Customs'] = ApiClient.convertToType(data['Customs'], [Customs]);
      }
      if (data.hasOwnProperty('DeliveryAddress')) {
        obj['DeliveryAddress'] = ApiClient.convertToType(data['DeliveryAddress'], 'String');
      }
      if (data.hasOwnProperty('DeliveryDate')) {
        obj['DeliveryDate'] = ApiClient.convertToType(data['DeliveryDate'], 'String');
      }
      if (data.hasOwnProperty('DeliveryTimeStampStart')) {
        obj['DeliveryTimeStampStart'] = ApiClient.convertToType(data['DeliveryTimeStampStart'], 'String');
      }
      if (data.hasOwnProperty('DeliveryTimeStampEnd')) {
        obj['DeliveryTimeStampEnd'] = ApiClient.convertToType(data['DeliveryTimeStampEnd'], 'String');
      }
      if (data.hasOwnProperty('Dimension')) {
        obj['Dimension'] = Dimension.constructFromObject(data['Dimension']);
      }
      if (data.hasOwnProperty('DownPartnerBarcode')) {
        obj['DownPartnerBarcode'] = ApiClient.convertToType(data['DownPartnerBarcode'], 'String');
      }
      if (data.hasOwnProperty('DownPartnerID')) {
        obj['DownPartnerID'] = ApiClient.convertToType(data['DownPartnerID'], 'String');
      }
      if (data.hasOwnProperty('DownPartnerLocation')) {
        obj['DownPartnerLocation'] = ApiClient.convertToType(data['DownPartnerLocation'], 'String');
      }
      if (data.hasOwnProperty('Groups')) {
        obj['Groups'] = ApiClient.convertToType(data['Groups'], [Group]);
      }
      if (data.hasOwnProperty('IDType')) {
        obj['IDType'] = ApiClient.convertToType(data['IDType'], 'Number');
      }
      if (data.hasOwnProperty('IDNumber')) {
        obj['IDNumber'] = ApiClient.convertToType(data['IDNumber'], 'String');
      }
      if (data.hasOwnProperty('IDExpiration')) {
        obj['IDExpiration'] = ApiClient.convertToType(data['IDExpiration'], 'String');
      }
      if (data.hasOwnProperty('ProductCodeCollect')) {
        obj['ProductCodeCollect'] = ApiClient.convertToType(data['ProductCodeCollect'], 'Number');
      }
      if (data.hasOwnProperty('ProductCodeDelivery')) {
        obj['ProductCodeDelivery'] = ApiClient.convertToType(data['ProductCodeDelivery'], 'String');
      }
      if (data.hasOwnProperty('ProductOptions')) {
        obj['ProductOptions'] = ApiClient.convertToType(data['ProductOptions'], [ProductOption]);
      }
      if (data.hasOwnProperty('ReceiverDateOfBirth')) {
        obj['ReceiverDateOfBirth'] = ApiClient.convertToType(data['ReceiverDateOfBirth'], 'String');
      }
      if (data.hasOwnProperty('Reference')) {
        obj['Reference'] = ApiClient.convertToType(data['Reference'], 'String');
      }
      if (data.hasOwnProperty('ReferenceCollect')) {
        obj['ReferenceCollect'] = ApiClient.convertToType(data['ReferenceCollect'], 'String');
      }
      if (data.hasOwnProperty('Remark')) {
        obj['Remark'] = ApiClient.convertToType(data['Remark'], 'String');
      }
      if (data.hasOwnProperty('ReturnBarcode')) {
        obj['ReturnBarcode'] = ApiClient.convertToType(data['ReturnBarcode'], 'String');
      }
      if (data.hasOwnProperty('ReturnReference')) {
        obj['ReturnReference'] = ApiClient.convertToType(data['ReturnReference'], 'String');
      }
      if (data.hasOwnProperty('TimeslotID')) {
        obj['TimeslotID'] = ApiClient.convertToType(data['TimeslotID'], 'String');
      }
    }
    return obj;
  }

  /**
   * List of 1 or more Address type elements. At least 1 address type is mandatory
   * @member {Array.<module:model/Address>} Addresses
   */
  exports.prototype['Addresses'] = undefined;
  /**
   * List of 0 or more AmountType elements. An amount represents a value of the shipment. Amount type 01 mandatory for COD-shipments, Amount type 02 mandatory for domestic insured shipments. Amount type 04 mandatory for Commercial route China (productcode 4992). Amount type 12 mandatory for Inco terms DDP Commercial route China (productcode 4992)
   * @member {Array.<module:model/Amount>} Amounts
   */
  exports.prototype['Amounts'] = undefined;
  /**
   * Barcode of the shipment. This is a unique value
   * @member {String} Barcode
   * @default '3SDEVC2016112104'
   */
  exports.prototype['Barcode'] = '3SDEVC2016112104';
  /**
   * Starting date/time of the collection of the shipment. Format: dd-MM-yyyy hh:mm:ss
   * @member {String} CollectionTimeStampStart
   */
  exports.prototype['CollectionTimeStampStart'] = undefined;
  /**
   * Ending date/time of the collection of the shipment. Format: dd-MM-yyyy hh:mm:ss
   * @member {String} CollectionTimeStampEnd
   */
  exports.prototype['CollectionTimeStampEnd'] = undefined;
  /**
   * One or more ContactType elements belonging to a shipment. Mandatory in some cases. Please refer to the Guidelines 
   * @member {Array.<module:model/Contact>} Contacts
   */
  exports.prototype['Contacts'] = undefined;
  /**
   * Content of the shipment. Mandatory for Extra@Home shipments
   * @member {String} Content
   */
  exports.prototype['Content'] = undefined;
  /**
   * Cost center of the shipment. This value will appear on your invoice
   * @member {String} CostCenter
   */
  exports.prototype['CostCenter'] = undefined;
  /**
   * Order number of the customer
   * @member {String} CustomerOrderNumber
   */
  exports.prototype['CustomerOrderNumber'] = undefined;
  /**
   * The Customs type is mandatory for GlobalPack shipments and not allowed for any other shipment types.
   * @member {Array.<module:model/Customs>} Customs
   */
  exports.prototype['Customs'] = undefined;
  /**
   * Delivery address specification. This field is mandatory when AddressType on the Address is 09.
   * @member {String} DeliveryAddress
   * @default '01'
   */
  exports.prototype['DeliveryAddress'] = '01';
  /**
   * The delivery date of the shipment. We strongly advice to use the DeliveryDate service to get this date when using delivery options like Evening/Morning/Sameday delivery etc. For those products, this field is mandatory (please regard the Guidelines section). Format: dd-MM-yyyy hh:mm:ss
   * @member {String} DeliveryDate
   */
  exports.prototype['DeliveryDate'] = undefined;
  /**
   * The delivery date and the specific starting time of the shipment delivery. This can be retrieved from the DeliveryDate webservice using the MyTime delivery option. Format: dd-MM-yyyy hh:mm:ss
   * @member {String} DeliveryTimeStampStart
   */
  exports.prototype['DeliveryTimeStampStart'] = undefined;
  /**
   * The delivery date and the specific end time of the shipment delivery. This can be retrieved from the DeliveryDate webservice using the MyTime delivery option. Format: dd-MM-yyyy hh:mm:ss
   * @member {String} DeliveryTimeStampEnd
   */
  exports.prototype['DeliveryTimeStampEnd'] = undefined;
  /**
   * @member {module:model/Dimension} Dimension
   */
  exports.prototype['Dimension'] = undefined;
  /**
   * Barcode of the downstream network partner of PostNL Pakketten.
   * @member {String} DownPartnerBarcode
   */
  exports.prototype['DownPartnerBarcode'] = undefined;
  /**
   * Identification of the downstream network partner of PostNL Pakketten.
   * @member {String} DownPartnerID
   */
  exports.prototype['DownPartnerID'] = undefined;
  /**
   * Identification of the location of the downstream network partner of PostNL Pakketten. Mandatory for Pickup at PostNl Location Belgium: LD-01
   * @member {String} DownPartnerLocation
   */
  exports.prototype['DownPartnerLocation'] = undefined;
  /**
   * List of 0 or more Group types with data, grouping multiple shipments together. Mandatory for multicollo shipments. Please see Guidelines (Multiple shipments) for more information.
   * @member {Array.<module:model/Group>} Groups
   */
  exports.prototype['Groups'] = undefined;
  /**
   * Type of the ID document. Mandatory for ID Check products. See Products for possible values
   * @member {Number} IDType
   */
  exports.prototype['IDType'] = undefined;
  /**
   * Document number of the ID document. Mandatory for ID Check products
   * @member {String} IDNumber
   */
  exports.prototype['IDNumber'] = undefined;
  /**
   * Expiration date of the ID document. Mandatory for ID Check products
   * @member {String} IDExpiration
   */
  exports.prototype['IDExpiration'] = undefined;
  /**
   * Second product code of a shipment
   * @member {Number} ProductCodeCollect
   */
  exports.prototype['ProductCodeCollect'] = undefined;
  /**
   * Product code of the shipment 
   * @member {String} ProductCodeDelivery
   * @default '3085'
   */
  exports.prototype['ProductCodeDelivery'] = '3085';
  /**
   * Product options for the shipment, mandatory for certain products, see the Products page of this webservice
   * @member {Array.<module:model/ProductOption>} ProductOptions
   */
  exports.prototype['ProductOptions'] = undefined;
  /**
   * Date of birth. Mandatory for Age check products
   * @member {String} ReceiverDateOfBirth
   */
  exports.prototype['ReceiverDateOfBirth'] = undefined;
  /**
   * Your own reference of the shipment. Mandatory for Extra@Home shipments; for E@H this is used to create your order number, so this should be unique for each request.
   * @member {String} Reference
   */
  exports.prototype['Reference'] = undefined;
  /**
   * Additional reference of the collect order of the shipment
   * @member {String} ReferenceCollect
   */
  exports.prototype['ReferenceCollect'] = undefined;
  /**
   * Remark of the shipment.
   * @member {String} Remark
   */
  exports.prototype['Remark'] = undefined;
  /**
   * Return barcode of the shipment. Mandatory for Label in the Box (return label) shipments.
   * @member {String} ReturnBarcode
   */
  exports.prototype['ReturnBarcode'] = undefined;
  /**
   * Return reference of the shipment
   * @member {String} ReturnReference
   */
  exports.prototype['ReturnReference'] = undefined;
  /**
   * ID of the chosen timeslot as returned by the timeslot webservice
   * @member {String} TimeslotID
   */
  exports.prototype['TimeslotID'] = undefined;



  return exports;
}));


