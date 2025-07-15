# Fab Lab Convidados

Este projeto é uma aplicação web para cadastro de convidados em um Fab Lab. A aplicação permite que os usuários registrem informações sobre os convidados, como nome, email, telefone, empresa/departamento, data da visita e observações.

## Estrutura do Projeto

```
Fab-Lab-Convidados
├── api
│   └── convidados.js        # Manipula requisições HTTP para cadastro e listagem de convidados
├── public
│   ├── index.html           # Documento HTML principal com o formulário de cadastro
│   ├── script.js            # Lógica JavaScript para manipulação do formulário
│   └── styles.css           # Estilos CSS para a aplicação
├── package.json              # Configuração do npm e dependências do projeto
└── README.md                 # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd Fab-Lab-Convidados
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Uso

1. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

2. Acesse a aplicação em seu navegador através de `http://localhost:3000`.

## Conexão com o Banco de Dados

Para salvar os dados em um banco de dados na Vercel, você pode usar serviços como Vercel Postgres ou outro serviço de banco de dados. 

### Modificações Necessárias

Você precisará modificar o arquivo `api/convidados.js` para incluir a lógica de conexão com o banco de dados e realizar as operações CRUD necessárias. Certifique-se de instalar as dependências necessárias para a conexão com o banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.