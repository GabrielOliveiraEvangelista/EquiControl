# Changelog - EquiControl

## 📌 Versionamento do Projeto

Segue o padrão **MAJOR.MINOR.PATCH**  
Exemplo: `1.4.2`

- **MAJOR** → alterações incompatíveis com versões anteriores
- **MINOR** → novas funcionalidades, sem quebrar compatibilidade
- **PATCH** → correções de bugs e melhorias internas

### 🧪 Exemplos de versões:

- `1.0.0` → primeira versão estável
- `1.1.0` → adição de um novo recurso
- `1.1.1` → correção de um bug no recurso

---

## 🛠️ Como realizar versionamento no Git

### ✅ Passo a passo para aplicar uma nova versão:

```bash
git add <PASTA ALTERADA: API-EQUICONTROL ou FRONT-EQUICONTROL>
git commit -m "<MENSAGEM DO COMMIT> <DATA ATUAL> <HORA ATUAL>"
git tag -a <backend ou frontend>@v<NUMERO_DA_VERSAO> -m "DESCRIPTION IN CHANGELOG FILE"
git push -u origin main
git push --tags

```

### 📄 Exemplo (Backend):

```bash
# 1 - Adiciona os arquivos alterados na pasta do backend
git add API-EQUICONTROL

# 2 - Cria o commit com data e hora
git commit -m "BACKEND IMPLEMENTATION 09-05-2025 11:55H"

# 3 - Cria uma nova tag com a versão e descrição
git tag -a backend@v1.1.0 -m "DESCRIPTION IN CHANGELOG FILE"

# 4 - Envia as alterações e a tag para o repositório remoto
git push -u origin main
git push --tags

# 5 - Atualiza o changelog e faz novo commit
git add CHANGELOG.md
git commit -m "UPDATE IN CHANGELOG.md FILE 09-05-2025 12:02H"
git push -u origin main

```

## 🚧 Em Desenvolvimento

### 🔄 Ajustes atuais

- [x] **Implementação do Docker** no Backend

### 📅 Ajustes planejados

- [ ] Definir estrutura do **schema global Zod**
- [ ] Refatorar arquivos que usam `if` para validar **variáveis de ambiente**
- [ ] Migrar validações de **`ABQM_USUARIO`** e **`ABQM_SENHA`** para o _frontend_

---------------------------------------LOG'S-------------------------------------------------

## 📘 Log de Versões – Backend

### 🏷️ `v1.0.0` • 09 / 05 / 2025

🔹 **Versão inicial estável** do projeto

## 📘 Log de Versões – Frontend
