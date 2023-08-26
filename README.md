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
