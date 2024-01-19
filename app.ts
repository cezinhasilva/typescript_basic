import { CompanyAccount } from './class/CompanyAccount'
import { MeiAccount } from './class/MeiAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount      = new PeopleAccount(1, 'Cesar', 1)
const companyAccount: CompanyAccount    = new CompanyAccount('DIO', 2)
const meiAccount: MeiAccount            = new MeiAccount('Micro Empresa', 3)
/*
console.log(peopleAccount);
console.log(companyAccount);
console.log(meiAccount);
*/
console.log('-----------PeopleAccount---------')
// Saldo
peopleAccount.getBalance()

// Atualizando nome
peopleAccount.setName("Cesar Silva")

// Obtendo nome
const name = peopleAccount.getName()
console.log("PeopleAccounte nome: ", name)

// Deposito
peopleAccount.deposit(15000)

// Saque
peopleAccount.withdraw(500)

// Saldo
peopleAccount.getBalance()

// Emprestimo
console.log('-----------CompanyAccount---------')
companyAccount.getBalance()
companyAccount.getLoan(5000)

// Mei
console.log('-----------MeiAccount---------')
meiAccount.getBalance()
meiAccount.deposit(2000)
meiAccount.getBalance()