# NestJS User and Document Management Service

This repository contains a NestJS backend application designed to manage users, documents, and ingestion processes. It features secure authentication, role-based access control, and database management with TypeORM. The application is modular, scalable, and integrates seamlessly with external ingestion systems.

## Table of Contents

- [Features](#features)
  - [User Management](#user-management)
  - [Authentication](#authentication)
  - [Document Management](#document-management)
  - [Ingestion Trigger](#ingestion-trigger)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### **User Management**

- **Role Management**:
  - Roles: Admin, Editor, Viewer.
  - Admins manage users, roles, and all application data.
  - Editors can perform CRUD operations on documents.
  - Viewers have read-only access to documents.
- **User APIs**:
  - Endpoints for user registration, login, and profile updates.
  - Admin endpoints to manage user accounts and roles.
- **Secure Access Control**:
  - Role-based access control (RBAC) implemented using NestJS guards.
  - Protects APIs from unauthorized access.

### **Authentication**

- **JWT Authentication**:
  - Issue JSON Web Tokens (JWTs) on successful login.
  - Tokens are used to authenticate subsequent requests.
- **Password Security**:
  - Passwords are encrypted using bcrypt for secure storage.
  - Supports enforcing password strength policies.

### **Document Management**

- **CRUD Operations**:
  - Endpoints to create, read, update, and delete documents.
  - Includes support for document metadata and categorization.
- **Access Control**:
  - Document operations are secured based on user roles.
- **Optional Enhancements**:
  - Document versioning to track changes.
  - Audit logs for tracking document-related actions.

### **Ingestion Trigger**

- **Integration with Python Backend**:
  - APIs to initiate ingestion workflows in an external Python-based service.
- **Asynchronous Processing**:
  - Built to handle large-scale data ingestion using queue systems or event-driven architectures.
- **Error Handling and Monitoring**:
  - Logs errors during ingestion and integrates with monitoring tools for visibility.

---

## Technologies Used

- **Framework**: [NestJS](https://nestjs.com/) for modular and scalable development.
- **Database**: [TypeORM](https://typeorm.io/) for managing relational databases.
- **Authentication**: JWT for secure user sessions.
- **Encryption**: bcrypt for password hashing.
- **API Design**: RESTful APIs with role-based access control.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nestjs-user-document-service.git
   cd nestjs-user-document-service
