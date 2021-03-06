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
    instance = new PostnlShippingClient.Customer();
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

  describe('Customer', function() {
    it('should create an instance of Customer', function() {
      // uncomment below and update the code to test Customer
      //var instane = new PostnlShippingClient.Customer();
      //expect(instance).to.be.a(PostnlShippingClient.Customer);
    });

    it('should have the property address (base name: "Address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new PostnlShippingClient.Customer();
      //expect(instance).to.be();
    });

    it('should have the property collectionLocation (base name: "CollectionLocation")', function() {
      // uncomment below and update the code to test the property collectionLocation
      //var instane = new PostnlShippingClient.Customer();
      //expect(instance).to.be();
    });

    it('should have the property contactPerson (base name: "ContactPerson")', function() {
      // uncomment below and update the code to test the property contactPerson
      //var instane = new PostnlShippingClient.Customer();
      //expect(instance).to.be();
    });

    it('should have the property customerCode (base name: "CustomerCode")', function() {
      // uncomment below and update the code to test the property customerCode
      //var instane = new PostnlShippingClient.Customer();
      //expect(instance).to.be();
    });

    it('should have the property customerNumber (base name: "CustomerNumber")', function() {
      // uncomment below and update the code to test the property customerNumber
      //var instane = new PostnlShippingClient.Customer();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new PostnlShippingClient.Customer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new PostnlShippingClient.Customer();
      //expect(instance).to.be();
    });

  });

}));
