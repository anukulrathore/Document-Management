# NestJS User and Document Management Service

This is a NestJS backend application that provides user authentication, user management, document management, and ingestion triggers. The application uses JWT-based authentication and role-based access control, along with TypeORM for database management.

## Features

- **User Management**:
  - Register users with roles: Admin, Editor, Viewer.
  - Role-based access control with secure authorization guards.
  - Manage user details via APIs.
- **Authentication**:
  - JWT-based authentication for secure login and registration.
  - Password encryption using bcrypt.
- **Document Management**:
  - Create, Read, Update, and Delete (CRUD) operations for documents.
  - Access control based on user roles.
- **Ingestion Trigger**:
  - APIs to initiate ingestion processes in a Python backend.
  - Designed to handle large-scale, asynchronous ingestion tasks.
