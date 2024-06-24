export class Vaccine {
  pacienteID?: number;
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
    pacienteID,
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
    this.pacienteID = pacienteID;
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