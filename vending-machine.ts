export class VendingMachine {
  private drinkName: string;
  private quantityOfDrink: number;
  private noOfCupsRequired: number;
  private costOfOneCup: number;
  private concentrationRequired: string[];

  /*---------------Default & Parameterized construtor----------------------*/

  constructor(
    drinkName?: string,
    quantityOfDrink?: number,
    noOfCupsRequired?: number,
    costOfOneCup?: number,
    concentrationRequired?: string[]
  ) {
    this.drinkName = drinkName;
    this.quantityOfDrink = quantityOfDrink;
    this.noOfCupsRequired = noOfCupsRequired;
    this.costOfOneCup = costOfOneCup;
    this.concentrationRequired = concentrationRequired;
  }

  /*------------ Setters Method-------------------*/

  public setDrinkName(drinkName: string): void {
    this.drinkName = drinkName;
  }
  public setQuantityOfDrink(quantityOfDrink: number): void {
    this.quantityOfDrink = quantityOfDrink;
  }
  public setNoOfCupsRequired(noOfCupsRequired: number): void {
    this.noOfCupsRequired = noOfCupsRequired;
  }
  public setCostOfOneCup(costOfOneCup: number): void {
    this.costOfOneCup = costOfOneCup;
  }
  public setConcentrationRequired(concentrationRequired: string[]): void {
    this.concentrationRequired = concentrationRequired;
  }

  /*------------ Getters Method-------------------*/

  public getDrinkName(): string {
    return this.drinkName;
  }
  public getQuantityOfDrink(): number {
    return this.quantityOfDrink;
  }
  public getNoOfCupsRequired(): number {
    return this.noOfCupsRequired;
  }
  public getCostOfOneCup(): number {
    return this.costOfOneCup;
  }
  public getConcentrationRequired(): string[] {
    return this.concentrationRequired;
  }

  /*----------------Find Bill----------------------*/

  public findBill(): number {
    return (
      this.noOfCupsRequired * this.costOfOneCup -
      (this.noOfCupsRequired * this.costOfOneCup) / 10
    );
  }
} //class-VendingMachine
