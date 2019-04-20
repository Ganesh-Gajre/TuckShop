import { TuckShop } from "./tuck-shop";
import { VendingMachine } from "./vending-machine";

class Main {
  private vendingMachine: VendingMachine[] = new Array();
  private tuckShop: TuckShop[] = new Array();


  /*-------------------constructor----------------------------*/
  constructor() {
    this.vendingMachine.push(
      new VendingMachine("Coffee", 100, 5, 45, ["light", "medium", "strong"])
    );
    this.vendingMachine.push(
      new VendingMachine("Tea", 90, 4, 32, ["light", "medium", "strong"])
    );
    this.vendingMachine.push(
      new VendingMachine("Milk", 80, 2, 30, ["light", "medium", "strong"])
    );

    this.tuckShop.push(new TuckShop("CCD", 123, "E", this.vendingMachine[0]));
    this.tuckShop.push(
      new TuckShop("Nescafe", 234, "B", this.vendingMachine[1])
    );
    this.tuckShop.push(
      new TuckShop("ChaiPoint", 456, "E", this.vendingMachine[2])
    );
  }


  /*--------------------Search By Drink Name---------------------------*/
  public searchByDrinkName(drinkName: string): void {
    let result = this.tuckShop.filter(x => {
      if (x.getVendingMachine().getDrinkName() == drinkName) return x;
    });
    this.getDrink(result);
  }

  /*--------------------Search By Cost Of 1 Cup---------------------------*/
  public searchByCostOf1Cup(cost: number): void {
    let result = this.tuckShop.filter(x => {
      if (x.getVendingMachine().getCostOfOneCup() == cost) return x;
    });
    this.getDrink(result);
  }


  /*----------------Sort-VendingMachineByCostOf1Cup--------*/
  public sortVendingMachineByCostOf1Cup(): void {
    this.vendingMachine.sort(function(obj1, obj2) {
      return obj1.getCostOfOneCup() - obj2.getCostOfOneCup();
    });
    console.table(this.vendingMachine);
  }

  /*--------------Sort-TuckShopByMachineName-------------------*/
  public sortTuckShopByMachineName(): void {
    this.tuckShop.sort(function(obj1, obj2) {
      if (obj1.getMachineName() < obj2.getMachineName()) return -1;
      if (obj1.getMachineName() > obj2.getMachineName()) return 1;
      return 0;
    });
    console.table(this.tuckShop);
  }


  /*-----------------------Getters-Method--------------------------*/
  getVendingMachine(): VendingMachine[] {
    return this.vendingMachine;
  }
  getTuckShop(): TuckShop[] {
    return this.tuckShop;
  }


  /*------------------Get/Print-Drink-----------------------*/
  public getDrink(drink: TuckShop[]): void {
    drink.forEach(x => {
      console.log("Drink Name    :", x.getVendingMachine().getDrinkName());
      console.log(
        "No.Of Cups    :",
        x.getVendingMachine().getNoOfCupsRequired()
      );
      console.log("Cost of 1 Cup :", x.getVendingMachine().getCostOfOneCup());
      console.log("Total Bill    :", x.getVendingMachine().findBill());
    });
    console.table(drink);
  }
}//Class-Main

let mainObj = new Main();
console.log('Search By DrinkName:-');
mainObj.searchByDrinkName("Coffee");
console.log('Sort TuckShop By Machine Name:-');
mainObj.sortTuckShopByMachineName();
console.log('Sort Vending Machine By Cost Of 1 Cup')
mainObj.sortVendingMachineByCostOf1Cup();
console.log('Search By Cost Of 1 Cup:-');
mainObj.searchByCostOf1Cup(32);
