"use strict";
exports.__esModule = true;
var tuck_shop_1 = require("./tuck-shop");
var vending_machine_1 = require("./vending-machine");
var Main = /** @class */ (function () {
    /*-------------------constructor----------------------------*/
    function Main() {
        this.vendingMachine = new Array();
        this.tuckShop = new Array();
        this.vendingMachine.push(new vending_machine_1.VendingMachine("Coffee", 100, 5, 45, ["light", "medium", "strong"]));
        this.vendingMachine.push(new vending_machine_1.VendingMachine("Tea", 90, 4, 32, ["light", "medium", "strong"]));
        this.vendingMachine.push(new vending_machine_1.VendingMachine("Milk", 80, 2, 30, ["light", "medium", "strong"]));
        this.tuckShop.push(new tuck_shop_1.TuckShop("CCD", 123, "E", this.vendingMachine[0]));
        this.tuckShop.push(new tuck_shop_1.TuckShop("Nescafe", 234, "B", this.vendingMachine[1]));
        this.tuckShop.push(new tuck_shop_1.TuckShop("ChaiPoint", 456, "E", this.vendingMachine[2]));
    }
    /*--------------------Search By Drink Name---------------------------*/
    Main.prototype.searchByDrinkName = function (drinkName) {
        var result = this.tuckShop.filter(function (x) {
            if (x.getVendingMachine().getDrinkName() == drinkName)
                return x;
        });
        this.getDrink(result);
    };
    /*--------------------Search By Cost Of 1 Cup---------------------------*/
    Main.prototype.searchByCostOf1Cup = function (cost) {
        var result = this.tuckShop.filter(function (x) {
            if (x.getVendingMachine().getCostOfOneCup() == cost)
                return x;
        });
        this.getDrink(result);
    };
    /*----------------Sort-VendingMachineByCostOf1Cup--------*/
    Main.prototype.sortVendingMachineByCostOf1Cup = function () {
        this.vendingMachine.sort(function (obj1, obj2) {
            return obj1.getCostOfOneCup() - obj2.getCostOfOneCup();
        });
        console.table(this.vendingMachine);
    };
    /*--------------Sort-TuckShopByMachineName-------------------*/
    Main.prototype.sortTuckShopByMachineName = function () {
        this.tuckShop.sort(function (obj1, obj2) {
            if (obj1.getMachineName() < obj2.getMachineName())
                return -1;
            if (obj1.getMachineName() > obj2.getMachineName())
                return 1;
            return 0;
        });
        console.table(this.tuckShop);
    };
    /*-----------------------Getters-Method--------------------------*/
    Main.prototype.getVendingMachine = function () {
        return this.vendingMachine;
    };
    Main.prototype.getTuckShop = function () {
        return this.tuckShop;
    };
    /*------------------Get/Print-Drink-----------------------*/
    Main.prototype.getDrink = function (drink) {
        drink.forEach(function (x) {
            console.log("Drink Name    :", x.getVendingMachine().getDrinkName());
            console.log("No.Of Cups    :", x.getVendingMachine().getNoOfCupsRequired());
            console.log("Cost of 1 Cup :", x.getVendingMachine().getCostOfOneCup());
            console.log("Total Bill    :", x.getVendingMachine().findBill());
        });
        console.table(drink);
    };
    return Main;
}()); //Class-Main
var mainObj = new Main();
console.log('Search By DrinkName:-');
mainObj.searchByDrinkName("Coffee");
console.log('Sort TuckShop By Machine Name:-');
mainObj.sortTuckShopByMachineName();
console.log('Sort Vending Machine By Cost Of 1 Cup');
mainObj.sortVendingMachineByCostOf1Cup();
console.log('Search By Cost Of 1 Cup:-');
mainObj.searchByCostOf1Cup(32);
