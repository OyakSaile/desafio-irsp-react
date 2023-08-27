# Como rodar o projeto?

[![Preview do Vídeo](https://i.imgur.com/G93UgVj.png)](https://www.youtube.com/watch?v=I27PWVk950c&ab_channel=KayoSkada)

## Clique na imagem para ver o tutorial, ou se preferir siga o tutorial abaixo.

Qualquer dúvida pode me chamar no Linkedin,
Bom, esse é normalmente o modo que eu inicio meus projetos, configurando esse boilerplate, claro, que cada caso tem seu uso especifico, mas pra esse daqui quis mostrar como normalmente eu estruturo, nao foi cobrido 100% dos testes, nem 100% das validações, ou nenhuma lib como ZOD, formik e etc. por se tratar de 1 projeto muito simples. Mas dependendo sim do projeto seria bom o uso de algumas dessas lib auxiliares pra manter um bom padrão de código e legibilidade.

https://www.linkedin.com/in/kayoeliasgverdan/

Para rodar o projeto precisamos seguir algumas coisas, pois fiz uma mini API, bem simples apenas para o desafio, sem uso de patterns, sem uso de melhores práticas no back-end foi apenas para usar de auxiliar para desenvolver o app.


Front-END

```jsx
git clone https://github.com/OyakSaile/desafio-irsp-react
```

Passos para rodar o front-end

```jsx
.env adicione
VITE_API_URL=http://localhost:3333
npm i
npm run dev
```

Back-END

```jsx
git clone https://github.com/OyakSaile/desafio-irsp-back-
```

Passos para rodar o back-end
Não usei variaveis de ambiente nem nada assim no back, para não deixar mais chato a parte de rodar o app, facilitando por enquanto.

```jsx
npm i
npm run start:dev
```

# User Management App

This project is a user management application that allows you to list, create, delete, and view user information. It follows certain functional and non-functional requirements as well as business rules to ensure secure and efficient user management.

## Functional Requirements

- [x] List Users: The application should allow users to view a list of all users.
- [x] Create User: Users should be able to create a new user with unique information.
- [x] Delete User: It should be possible to delete a user from the system.

## Business Rules

- [x] Unique Email: The system should prevent the creation of multiple users with the same email.

## Non-Functional Requirements

- [x] Password Encryption: User passwords must be encrypted for security.
- [x] HTTP Requests: The application should utilize the Axios library for handling HTTP requests.
- [x] Styling: Styling should be achieved using the Tailwind CSS library.
- [x] Client-side Security: User passwords must not be visible in the client-side code.

## Challenges

### Challenge 1 - Fetching Users

- [x] For this challenge, you will need to perform a GET request to retrieve all users from the API. You can either use a pre-existing list or create your own.

### Challenge 2 - User Creation

- [x] On the user creation screen, you'll need to make a POST request to the API with the new user's data when the form is submitted. After successful creation, the new user should be added to the list on the home screen.

### Challenge 3 - User Editing

- [x] In the user editing interface, you'll need to send a PUT request to the API with the updated user details when the form is submitted. The changes should be reflected in the user list on the home screen.

## Extra Challenge

- [x] Responsiveness: Ensure that your application is responsive and user-friendly on mobile devices. Use appropriate HTML semantics for different parts of the user interface.

## Distinguishing Factors

- Redux Implementation: Consider implementing state management using Redux for improved control over application state.
- [x] Commit Frequency: Make frequent and meaningful commits to showcase the evolution of your project.
