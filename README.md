# Lead DTI

## Estrutura do projeto
- `BackEnd/` → Backend em .NET 8 (API Web)
- `FrontEnd/` → Frontend em React

## Pré-requisitos
- .NET 8 SDK
- Node.js (18+)
- SQL Server ou LocalDB

## Configuração do banco
1. Criar a database `LeadsDb` no SQL Server.
2. Executar os scripts de criação da tabela `Leads` e inserts de teste.

## Executando o backend
```bash
cd BackEnd
dotnet restore
dotnet run
```

A API estará disponível em: http://localhost:5000
O frontend estará disponível em: http://localhost:3000
