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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PostnlShippingClient);
  }
}(this, function(expect, PostnlShippingClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PostnlShippingClient.Amount();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Amount', function() {
    it('should create an instance of Amount', function() {
      // uncomment below and update the code to test Amount
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be.a(PostnlShippingClient.Amount);
    });

    it('should have the property amountType (base name: "AmountType")', function() {
      // uncomment below and update the code to test the property amountType
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "AccountName")', function() {
      // uncomment below and update the code to test the property accountName
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be();
    });

    it('should have the property BIC (base name: "BIC")', function() {
      // uncomment below and update the code to test the property BIC
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "Currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be();
    });

    it('should have the property IBAN (base name: "IBAN")', function() {
      // uncomment below and update the code to test the property IBAN
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "Reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be();
    });

    it('should have the property transactionNumber (base name: "TransactionNumber")', function() {
      // uncomment below and update the code to test the property transactionNumber
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "Value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new PostnlShippingClient.Amount();
      //expect(instance).to.be();
    });

  });

}));