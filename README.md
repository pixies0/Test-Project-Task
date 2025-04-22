# Amazon Scraper API

This project is a simple backend that uses **Express**, **Axios** and **JSDOM** with the **Bun** runtime, and was developed as part of a selection process.

The goal is to expose an endpoint that, upon receiving a keyword, scrapes the first page of Amazon results and returns a list of products with title, rating, number of reviews and image.

## 📁 Project Structure

This repository is organized as a monorepo, containing:

```
TestProjectTask
├─ README.md
└─ backend
   ├─ README.md
   ├─ bun.lock
   ├─ index.ts
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  └─ scrape.ts
   └─ tsconfig.json
```

## 🚀 Execute Backend

### Prerequisites

[Bun](https://bun.sh/) installed globally.

```
1. git clone https://github.com/seu-usuario/amazon-scraper.git

2. cd TestProjectTask/backend

3. bun install

4. bun run index.ts

5. http://localhost:3000

6. GET http://localhost:3000/api/scrape?keyword=notebook

```
