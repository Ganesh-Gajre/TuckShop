import { VendingMachine } from "./vending-machine";

export class TuckShop {
  private machineName: string;
  private machineId: number;
  private powerType: string;
  private vendingMachine: VendingMachine;

  /*---------------Default & Parameterized construtor----------------------*/
  constructor(
    machineName?: string,
    machineId?: number,
    powerType?: string,
    vendingMachine?: VendingMachine
  ) {
    this.machineName = machineName;
    this.machineId = machineId;
    this.powerType = powerType;
    this.vendingMachine = vendingMachine;
  }

  /*------------ Setters Method-------------------*/
  public setMachineName(machineName: string): void {
    this.machineName = machineName;
  }
  public setMachineId(machineId: number): void {
    this.machineId = machineId;
  }
  public setPowerType(powerType: string): void {
    this.powerType = powerType;
  }
  public setVendingMachine(vendingMachine: VendingMachine): void {
    this.vendingMachine = vendingMachine;
  }

  /*------------ Getters Method-------------------*/
  public getMachineName(): string {
    return this.machineName;
  }
  public getMachineId(): number {
    return this.machineId;
  }
  public getPowerType(): string {
    return this.powerType;
  }
  public getVendingMachine(): VendingMachine {
    return this.vendingMachine;
  }
} //class-TuckShop
