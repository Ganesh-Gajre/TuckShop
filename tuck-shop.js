"use strict";
exports.__esModule = true;
var TuckShop = /** @class */ (function () {
    /*---------------Default & Parameterized construtor----------------------*/
    function TuckShop(machineName, machineId, powerType, vendingMachine) {
        this.machineName = machineName;
        this.machineId = machineId;
        this.powerType = powerType;
        this.vendingMachine = vendingMachine;
    }
    /*------------ Setters Method-------------------*/
    TuckShop.prototype.setMachineName = function (machineName) {
        this.machineName = machineName;
    };
    TuckShop.prototype.setMachineId = function (machineId) {
        this.machineId = machineId;
    };
    TuckShop.prototype.setPowerType = function (powerType) {
        this.powerType = powerType;
    };
    TuckShop.prototype.setVendingMachine = function (vendingMachine) {
        this.vendingMachine = vendingMachine;
    };
    /*------------ Getters Method-------------------*/
    TuckShop.prototype.getMachineName = function () {
        return this.machineName;
    };
    TuckShop.prototype.getMachineId = function () {
        return this.machineId;
    };
    TuckShop.prototype.getPowerType = function () {
        return this.powerType;
    };
    TuckShop.prototype.getVendingMachine = function () {
        return this.vendingMachine;
    };
    return TuckShop;
}()); //class-TuckShop
exports.TuckShop = TuckShop;
