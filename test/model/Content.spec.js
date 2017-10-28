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
    instance = new PostnlShippingClient.Content();
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

  describe('Content', function() {
    it('should create an instance of Content', function() {
      // uncomment below and update the code to test Content
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be.a(PostnlShippingClient.Content);
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be();
    });

    it('should have the property EAN (base name: "EAN")', function() {
      // uncomment below and update the code to test the property EAN
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be();
    });

    it('should have the property productURL (base name: "ProductURL")', function() {
      // uncomment below and update the code to test the property productURL
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "Quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "Weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "Value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be();
    });

    it('should have the property hSTariffNr (base name: "HSTariffNr")', function() {
      // uncomment below and update the code to test the property hSTariffNr
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be();
    });

    it('should have the property countryOfOrigin (base name: "CountryOfOrigin")', function() {
      // uncomment below and update the code to test the property countryOfOrigin
      //var instane = new PostnlShippingClient.Content();
      //expect(instance).to.be();
    });

  });

}));
