# Geer Intern Assignment

## Project Overview

This is a simple product management app built with Next.js. It allows users to view products, add new products, edit existing ones, and delete products. It also supports filtering products by category.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/praveenstp09/geer-intern-assignment.git
   cd geer-intern-assignment
   
2.Install dependencies and start the development server:

      npm install
      npm run dev

3. Open your browser and visit:

      http://localhost:3000


Tech Stack Used

Next.js 13 (App Router)

React (with client components)

Tailwind CSS for styling

React Icons for icons

Local API routes (Next.js API routes)

Local storage for cart management


Notes and Assumptions

The product data is stored in-memory inside a JavaScript array (/lib/data.js). This means data will reset on server restart.

Image URLs must be valid external URLs; make sure to configure next.config.js to allow external image hosts.

The cart is managed using localStorage.


