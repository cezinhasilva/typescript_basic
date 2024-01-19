import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (balance:number): void => {
    
    if(this.validateStatus()){
      this.balance += balance
      console.log('Voce pegou um empréstimo: ',  balance, ' seu saldo atual: ',this.balance)
    }
  }
}
