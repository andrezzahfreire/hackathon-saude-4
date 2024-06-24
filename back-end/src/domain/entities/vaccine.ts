export class Vaccine {
  userID?: number;
  nome?: string;
  dataNascimento?: string;
  sexo?: 'M' | 'F';
  nomeVacina?: string;
  dose?: string;
  dataAdministracao?: string;
  localAdministracao?: string;
  fabricante?: string;
  lote?: string;
  profissionalSaude?: string;
  notasAdicionais?: string;

  constructor({
    userID,
    nome,
    dataNascimento,
    sexo,
    nomeVacina,
    dose,
    dataAdministracao,
    localAdministracao,
    fabricante,
    lote,
    profissionalSaude,
    notasAdicionais,
  }: Vaccine) {
    this.userID = userID;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.sexo = sexo;
    this.nomeVacina = nomeVacina;
    this.dose = dose;
    this.dataAdministracao = dataAdministracao;
    this.localAdministracao = localAdministracao;
    this.fabricante = fabricante;
    this.lote = lote;
    this.profissionalSaude = profissionalSaude;
    this.notasAdicionais = notasAdicionais;
  }
}