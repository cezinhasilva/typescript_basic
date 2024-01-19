export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0
  protected status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name             = name
    this.accountNumber    = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (balance:number): void => {
    // Verifica se status da conta e valido/ativo
    if(this.validateStatus()){
      this.balance += balance      
      console.log('Voce depositou ' +balance + ' seu saldo atual ' + this.balance)
    }
  }

  withdraw = (balance:number): void => {
    // Verifica se status da conta e valido/ativo
    if(this.validateStatus()){
      // Verifica se existe saldo suficiente para saque
      if( this.validateWithdraw(balance)){
        this.balance -= balance
        console.log('Saque solicitado de: ', balance , ' saldo atualizado ', this.balance)
      }
      else{
        console.log('Saldo insuficiente para saque: ', this.balance, ' Saque solicitado: ', balance)
      }
      
    }
  }

  getBalance = (): void => {
    console.log('Seu saldo: ',this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private validateWithdraw = (balance: number): boolean => {
    if(this.balance >= balance){
      return true
    }

    // Retorno caso ao contrario seria else
    return false
        
  }
}
