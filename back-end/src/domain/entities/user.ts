export class User {
    userID?: string;
    nome?: string;
    email?: string;
    senha?: string; 
    dataNascimento?: string;
    sexo?: 'M' | 'F';
    endereco?: string;
    telefone?: string;
  
    constructor({
      userID,
      nome,
      email,
      senha,
      dataNascimento,
      sexo,
      endereco,
      telefone,
    }: User) {
      this.userID = userID;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.dataNascimento = dataNascimento;
      this.sexo = sexo;
      this.endereco = endereco;
      this.telefone = telefone;
    }
  }