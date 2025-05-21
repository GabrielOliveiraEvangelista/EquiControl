# Changelog - EquiControl

## 📌 Versionamento do Projeto

Segue o padrão **MAJOR.MINOR.PATCH**  
Ex: `1.4.2`

- **MAJOR** → alterações incompatíveis com versões anteriores
- **MINOR** → novas funcionalidades, sem quebrar compatibilidade
- **PATCH** → correções de bugs e melhorias internas

### Exemplos de versões:

- `1.0.0` → primeira versão estável
- `1.1.0` → adição de um novo recurso
- `1.1.1` → correção de um bug no recurso

## 🛠️ Como realizar versionamento no Git

### Passo a passo para aplicar uma nova versão:

```bash
git add <PASTA ALTERADA: API-EQUICONTROL ou FRONT-EQUICONTROL>
git commit -m "<MENSAGEM DO COMMIT> <DATA ATUAL> <HORA ATUAL>"
git tag -a <backend ou frontend>@v<NUMERO_DA_VERSAO> -m "DESCRIPTION IN CHANGELOG FILE"
git push -u origin main
git push --tags

```

### Exemplo (Backend):

```bash
# 1 - Adiciona os arquivos alterados na pasta do backend
git add API-EQUICONTROL CHANGELOG.md

# 2 - Cria o commit com data e hora
git commit -m "BACKEND IMPLEMENTATION 09-05-2025 11:55H"

# 3 - Cria uma nova tag com a versão e descrição
git tag -a backend@v1.1.0 -m "DESCRIPTION IN CHANGELOG FILE"

# 4 - Envia as alterações e a tag para o repositório remoto
git push -u origin main
git push --tags


```

## 🚧 Em Desenvolvimento

### 🔄 Ajustes atuais

- [x] Implementação do Docker no Backend
- [x] Implementação do ORM (Prisma) no Backend
- [x] Implementação dos models no schema.prima
- [x] Refatoração do UsersController (data.forEach)

### 📅 Ajustes planejados

- [x] Definir estrutura do **schema global Zod**
- [x] Refatorar arquivos que usam `if` para validar **variáveis de ambiente**
- [ ] Migrar validações de **`ABQM_USUARIO`** e **`ABQM_SENHA`** para o _frontend_
- [ ] Tratar os dados que esta vindo do JSON e ajustar as colunas do banco para tal ajuste (DATATIME, BOOLEAN)
- [ ] Não posso deixar duas tarefas da mesma (com o mesmo title) para um mesmo animal

## 🗄️ Log de Versões – Backend

### 🏷️ `v1.0.0` • 09 / 05 / 2025

🔹 Versão inicial estável do projeto

### 🏷️ `v1.1.0` • 16 / 05 / 2025

🔹 Implementação do Docker Compose

### 🏷️ `v1.2.0` • 19 / 05 / 2025

🔹 Implementação do Prisma ORM

🔹 Modelagem das tabelas do banco de dados
