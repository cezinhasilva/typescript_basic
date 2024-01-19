import { DioAccount } from "./DioAccount"

export class MeiAccount extends DioAccount {

    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    deposit = (balance: number): void => {
        // Verificando se conta e ativa
        if(this.validateStatus()){
            this.balance += balance + 10
            console.log('Voce depositou ' ,balance, ' seu saldo atual com bonus: ' , this.balance)
        }
    }

}