## Getting Started

Follow these steps to run and test the project:

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mhk98/bookstore.git

   ```

2. Open command prompt and type cd Bookstore
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
