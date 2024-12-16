# NestJS User and Document Management Service

This is a NestJS backend application that provides user authentication, user management, document management, and ingestion triggers. The application uses JWT-based authentication and role-based access control, along with TypeORM for database management.

## Features

- **User Management**: Register users with roles (Admin, Editor, Viewer), manage user details, and ensure role-based access control.
- **Authentication**: Secure login and registration endpoints using JWT for authentication.
- **Document Management**: CRUD operations to create, read, update, and delete documents.
- **Ingestion Trigger**: A mechanism to trigger ingestion processes in a Python backend via API calls.
