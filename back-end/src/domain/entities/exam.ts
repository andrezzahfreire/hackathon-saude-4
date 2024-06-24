export class Exam {
  examID?: string;
  userID?: string;
  nomePaciente?: string;
  dataNascimento?: string;
  sexo?: 'M' | 'F';
  tipoExame?: string;
  dataExame?: string;
  resultados?: string;
  medicoResponsavel?: string;
  observacoes?: string;

  constructor({
    examID,
    userID,
    nomePaciente,
    dataNascimento,
    sexo,
    tipoExame,
    dataExame,
    resultados,
    medicoResponsavel,
    observacoes,
  }: Exam) {
    this.examID = examID;
    this.userID = userID;
    this.nomePaciente = nomePaciente;
    this.dataNascimento = dataNascimento;
    this.sexo = sexo;
    this.tipoExame = tipoExame;
    this.dataExame = dataExame;
    this.resultados = resultados;
    this.medicoResponsavel = medicoResponsavel;
    this.observacoes = observacoes;
  }
}