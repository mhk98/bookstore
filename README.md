## Getting Started

Follow these steps to run and test the project:

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mhk98/bookstore.git

   ```

2. Open command prompt and type cd bookstore
3. npm install (Install project dependencies)
4. npm run dev (Run the Bookstore project)
5. The server will be running at http://localhost:5000
6. SQL Script

```bash
  CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 email VARCHAR(255) NOT NULL UNIQUE,
 password TEXT NOT NULL,
 role VARCHAR(255) NOT NULL,
 createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

```bash
   CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    birthdate DATE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


```

```bash
CREATE TABLE books (
 id INT AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(255) NOT NULL,
 description TEXT,
 published_date DATE NOT NULL,
 author_id INT UNSIGNED,
 createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);


```

7. ENV File

```bash
DB_CLIENT=mysql
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=KHAtarnak@@26
DB_NAME=bookstore_db
DB_PORT=3306
PORT=5000
TOKEN_SECRET="3I4aO2OVppwOm4gsI877RJThVR9tVUureKkAA7ID1ripGS4jARq9SAljMsI4lBzY"

```

8. Register JSON

```bash
{
  "email":"test@123.com",
  "password":"123456",
  "role":"admin"
}

```

8. Login JSON

```bash
{
  "email":"test@123.com",
  "password":"123456"
}

```

8. Authors JSON

```bash
{

  "name": "Ahmed",
  "bio": "Ahmed Sofa (1943-2001) was a prominent Bangladeshi writer, thinker.",
  "birthdate": "1843-05-24"
}


```

8. Books JSON

```bash

{
  "title": "Bandhan Hara (The Unfettereds)",
  "description": "A collection of short stories that reflect his thoughts on freedom and human dignity.",
  "published_date": "1984-06-22",
  "author_id":1
}

```
