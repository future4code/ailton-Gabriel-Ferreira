class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
    return `olá meu nome é ${this.name}`;
  }
}

const user1 = new User(
  "a8ks2j4h23238401hjkdj",
  "gasdhja@asdhj.com",
  "gabriel",
  "332838hdsg"
);

// 1-
// a- Não seria possivel.
// b- uma vez

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer1 = new Customer(
  "18113gh2h31k2kl1",
  "gabriel@gmail.com",
  "jose",
  "j2k1lh48j2lç1",
  "2387-3234-2839-9604"
);

console.log(customer1.introduceYourself());

// 2 -
// a - Uma vez
// b - Duas vezes

// 3 -
