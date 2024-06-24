# Hackathton Saúde 4.0

## Como Executar

1. Execute `npm install` para instalar as dependências.
2. Configure as chaves de acesso da AWS, podendo ser configuradas utilizando o AWS CLI.

### Executando Localmente

Execute o comando para rodar offline:

```bash
sls offline --stage prd
```

### Implantação na AWS

Execute o comando para implantar na AWS e testar:

```bash
serverless deploy --stage prd
```

Certifique-se de ter as permissões necessárias e que sua conta AWS esteja corretamente configurada para implantar os recursos especificados no Serverless Framework.