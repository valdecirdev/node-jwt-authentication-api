# API de autenticação com JWT, MongoDB e NodeJS.


## Visão Geral

API de autenticação em NodeJS com cadastro, autenticação, confirmação por email, recuperação de senha, histórico de autenticações e controle das sessões ativas. 🚀

O objetivo desse projeto é fornecer uma estrutura robusta e adaptável com todos os métodos necessários para cadastro e autenticação de usuários com total segurança.

Esse projeto deve ser utilizado como guia para novas aplicações, servindo como bootstrap ou modelo para uma nova implementação.

## Instalação

Clone para sua máquina:

```
$ git clone https://github.com/valdecirdev/node-jwt-authentication-api.git
```

Instale as depêndencias e execute em modo de desenvolvimento:

```
$ yarn install
$ yarn dev
```

Para que funcione é necessário criar um cópia do arquivo `.env.example`, renomear para `.env` e preencher com suas configurações, todas elas são necessárias.

---

Para executar em produção utilize o comando:

```
$ yarn start
```

## Dependências

As dependências estão registradas no arquivo `package.json` na raiz do projeto.

Durante o desenvolvimento foi utilizado o gestor de dependências `yarn`.

Entre as dependências destacam-se:

- Express
- Mongoose
- Bcryptjs
- Cors
- Dotenv
- NodeMailer
- Pack
- JsonWebToken
- Dotenv

## Contribuições

Para relatar bugs ou propor melhorias a serem implementadas utilize o Issues ou via [email](mailto:valdecir.junoir@outlook.com).

Este é um projeto público, distribuído sob a licensa `MIT` e pode ser utilizado de acordo com sua necessidade.

## Criadores

[Valdecir Junior](https://github.com/valdecirdev)