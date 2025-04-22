# Amazon Scraper API & Frontend

This project is a simple **fullstack monorepo** developed as part of test. It consists of:

- A **backend API** using **Bun**, **Express**, **Axios**, and **JSDOM** to scrape product data from the first page of Amazon search results based on a given keyword.
- A **frontend** built with **Vite**, **HTML**, **CSS**, and **Vanilla JavaScript**, providing a user-friendly interface to interact with the scraper.

The application allows users to search for a keyword, triggering a request to the backend which returns a list of Amazon product listings including:
- **Product Title**
- **Rating (stars)**
- **Number of Reviews**
- **Product Image**

## 📁 Project Structure

This repository is organized as a monorepo, containing:

```
TestProjectTask
├─ README.md
├─ backend
│  ├─ README.md
│  ├─ bun.lock
│  ├─ index.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ scrape.ts
│  └─ tsconfig.json
└─ frontend
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ vite.svg
   └─ src
      ├─ counter.js
      ├─ javascript.svg
      ├─ main.js
      └─ style.css
```

First of all

```
git clone https://github.com/pixies0/Test-Project-Task.git

cd Test-Project-Task
```

## 🚀 Execute Backend

### Prerequisites

[Bun](https://bun.sh/) installed globally.

```
1. cd TestProjectTask/backend

2. bun install

3. bun run index.ts

4. http://localhost:3000

5. GET http://localhost:3000/api/scrape?keyword=notebook
```

## 🚀 Execute Frontend

### Prerequisites

[Node.js](https://nodejs.org/en) (v16+)

Vite

```
1. cd TestProjectTask/frontend

2. npm install

3. npm run dev

4. http://localhost:5173
```