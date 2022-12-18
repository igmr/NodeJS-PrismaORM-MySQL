DROP DATABASE IF EXISTS NodeJS_PrismaORM;
CREATE DATABASE IF NOT EXISTS NodeJS_PrismaORM;

USE NodeJS_PrismaORM;

DROP TABLE IF EXISTS User;
CREATE TABLE IF NOT EXISTS User (
    id                 INTEGER       NOT NULL                     AUTO_INCREMENT,
    name               VARCHAR(255)  NOT NULL,
    email              VARCHAR(255)  NOT NULL,
    bio                VARCHAR(255)      NULL,
    CONSTRAINT pkUser  PRIMARY KEY (id),
    CONSTRAINT ukEmail UNIQUE(email)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO User (name, email, bio)
VALUES('Martinez', 'demo@demo.com', 'Administardor');

DROP TABLE IF EXISTS Post;
CREATE TABLE IF NOT EXISTS Post (
    id         INTEGER      NOT NULL                              AUTO_INCREMENT,
    authorId   INTEGER      NOT NULL,
    title      VARCHAR(255) NOT NULL,
    content    VARCHAR(255)     NULL,
    published  BOOLEAN      NOT NULL DEFAULT false,
    createdAt  DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    updatedAt  DATETIME(3)      NULL,
    CONSTRAINT pkPost       PRIMARY KEY (id),
    CONSTRAINT fkPostUser   FOREIGN KEY (authorId)
        REFERENCES User(id) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO Post (authorId, title) VALUES
(1,'POST 01'),
(1,'POST 02'),
(1,'POST 03'),
(1,'POST 04'),
(1,'POST 05'),
(1,'POST 06'),
(1,'POST 07'),
(1,'POST 08'),
(1,'POST 09'),
(1,'POST 10'),;

-- * https://dev.mysql.com/doc/