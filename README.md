# CarSafety App 🚗🛡️

## Overview
The **CarSafety App** is designed to allow users to view and compare the safety features of different cars. The app utilizes a clean architecture to ensure maintainability and scalability, while leveraging Firebase for authentication and data management.

## Features
- 🟢 **User-Friendly Interface**: Easy navigation and interaction for users.
- 🟢 **Car Comparison**: Detailed comparison of safety features between different cars.
- 🟢 **Real-Time Data**: Synchronization with Firebase to ensure up-to-date information.

## Technologies Used
- 🟢 **React Native**: For building the mobile application.
- 🟢 **Firebase**: For authentication and database management.
- 🟢 **Redux**: For state management.
- 🟢 **Clean Architecture**: To maintain a structured and scalable codebase.

## Project Structure
The project follows the Clean Architecture principles, which include distinct layers for better separation of concerns and easier maintainability.

### Layers
- 🟢 **Presentation Layer**: 
  - **Components**: Reusable UI components.
  - **Screens**: Main UI screens of the app.
  - **State Management**: Managing the state of the app using Redux.

- 🟢 **Domain Layer**: 
  - **Entities**: Core business objects of the application.
  - **Use Cases**: Application-specific business rules.

- 🟢 **Data Layer**: 
  - **Repositories**: Interfaces for data access.
  - **Data Sources**: Implementation of data access, including Firebase integration.

### Folder Structure
```
CareSafetyApp/
├── src/
│   ├── presentation/
│   │   ├── components/
│   │   ├── screens/
│   │   └── state/
│   │       ├── actions/
│   │       ├── reducers/
│   │       └── store.js
│   ├── domain/
│   │   ├── entities/
│   │   └── usecases/
│   ├── data/
│   │   ├── repositories/
│   │   └── datasources/
│   └── App.js
└── README.md
```

## Firebase Integration
- 🟢 **Firebase Authentication**: For user authentication and secure access.
- 🟢 **Firebase Database**: For real-time data storage and synchronization.

### Firebase Authentication
- 🟢 **Sign Up**: Users can create a new account.
- 🟢 **Sign In**: Users can log in with their credentials.
- 🟢 **Password Recovery**: Users can reset their passwords if forgotten.

### Firebase Database
- 🟢 **Car Data**: Real-time database to store and retrieve car safety information.
- 🟢 **User Data**: Store user preferences and comparison history.

## Redux for State Management
- 🟢 **Actions**: Define actions for triggering state changes.
- 🟢 **Reducers**: Handle state changes based on actions.
- 🟢 **Store**: Centralized state management store.
