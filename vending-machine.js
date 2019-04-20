"use strict";
exports.__esModule = true;
var VendingMachine = /** @class */ (function () {
    /*---------------Default & Parameterized construtor----------------------*/
    function VendingMachine(drinkName, quantityOfDrink, noOfCupsRequired, costOfOneCup, concentrationRequired) {
        this.drinkName = drinkName;
        this.quantityOfDrink = quantityOfDrink;
        this.noOfCupsRequired = noOfCupsRequired;
        this.costOfOneCup = costOfOneCup;
        this.concentrationRequired = concentrationRequired;
    }
    /*------------ Setters Method-------------------*/
    VendingMachine.prototype.setDrinkName = function (drinkName) {
        this.drinkName = drinkName;
    };
    VendingMachine.prototype.setQuantityOfDrink = function (quantityOfDrink) {
        this.quantityOfDrink = quantityOfDrink;
    };
    VendingMachine.prototype.setNoOfCupsRequired = function (noOfCupsRequired) {
        this.noOfCupsRequired = noOfCupsRequired;
    };
    VendingMachine.prototype.setCostOfOneCup = function (costOfOneCup) {
        this.costOfOneCup = costOfOneCup;
    };
    VendingMachine.prototype.setConcentrationRequired = function (concentrationRequired) {
        this.concentrationRequired = concentrationRequired;
    };
    /*------------ Getters Method-------------------*/
    VendingMachine.prototype.getDrinkName = function () {
        return this.drinkName;
    };
    VendingMachine.prototype.getQuantityOfDrink = function () {
        return this.quantityOfDrink;
    };
    VendingMachine.prototype.getNoOfCupsRequired = function () {
        return this.noOfCupsRequired;
    };
    VendingMachine.prototype.getCostOfOneCup = function () {
        return this.costOfOneCup;
    };
    VendingMachine.prototype.getConcentrationRequired = function () {
        return this.concentrationRequired;
    };
    /*----------------Find Bill----------------------*/
    VendingMachine.prototype.findBill = function () {
        return (this.noOfCupsRequired * this.costOfOneCup -
            (this.noOfCupsRequired * this.costOfOneCup) / 10);
    };
    return VendingMachine;
}()); //class-VendingMachine
exports.VendingMachine = VendingMachine;
