# Auth App

A full-stack authentication application built with Node.js, Express, and React.

## Features

- **Signup**: Create a new account with first name, last name, email, and password
- **Password Validation**: Password must contain at least one uppercase letter and one special character
- **Login**: Authenticate with email and password
- **Dashboard**: View user information after successful login

## Tech Stack

- **Backend**: Node.js, Express.js, CORS
- **Frontend**: React.js with native React components and hooks
- **HTTP Client**: Axios

## Installation

### Prerequisites
- Node.js and npm installed

### Backend Setup

1. Navigate to the root directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Option 1: Run both backend and frontend together
From the root directory:
```bash
npm run dev
```

### Option 2: Run separately

**Terminal 1 - Backend:**
```bash
npm start
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Signup
- **URL**: `POST /api/auth/signup`
- **Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "Password@123"
  }
  ```

### Login
- **URL**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "Password@123"
  }
  ```

## Password Requirements

The password must contain:
- At least one uppercase letter (A-Z)
- At least one special character (!@#$%^&* etc.)

## Project Structure

```
.
├── server.js           # Express server
├── package.json        # Backend dependencies
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── components/
│   │       ├── Signup.js
│   │       ├── Login.js
│   │       ├── Dashboard.js
│   │       └── Auth.css
│   │       └── Dashboard.css
│   └── package.json    # Frontend dependencies
└── README.md
```

## Notes

- User data is stored in-memory (will reset on server restart)
- For production, implement proper password hashing and use a database
- All API calls require CORS to be enabled
