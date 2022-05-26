# Getting Started
Shopify + NextJS + Tailwind custom build

First, run the development server:

npm install

Then..

npm run dev

Open http://localhost:3000 with your browser to see the result.

# Shopify Connectivity

Shopify store API is used to connect a client's shopify store to this custom Next.js ecomm template. The Shopify site is/will be transfered over to client upon launch and will be managed and maintained by their team/contractors.

## Quick Setup Details for Shopify & Next.js

1. Go to Shopify Partners page and login. Go to client's page or create a new dev site which will later be transfered to client.
2. Go to Stores and click login
3. Go to Apps --> Private Apps --> Creat New Private App
4. Once finished you'll take select the StoreFront API then grab the Storefront Access Token
5. Copy the token to the SHOPIFY_STOREFRONT_ACCESSSTOKEN inside the .env.local file inside your project.
6. Also place the SHOPIFY_STORE_DOMAIN in the same env.local folder which can be found in the URL of the newly created shopify account in your browser. Just grab the SITENAME.SHOPIFY.COM portion of the URL

# GRAPH CMS Connectivity

1. Go to GraphCMS page and login. Go to settings and select a link API Access
2. Copy the Content API token and paste inside .env file NEXT_PUBLIC_GRAPHCMS_ENDPOINT='token'
3. We are now connected to cms for blogs

# Lib folder


The lib folder contains graphql functions for retrieving data from the servers shopify for products and graphCMS for blogs
