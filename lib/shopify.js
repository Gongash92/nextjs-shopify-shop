// env local
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

// function for get response from all products and collections
async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-07/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    credentials: "same-origin",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  // response
  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });
    return data;

  // if error exists print error
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

// get all collections
export async function getAllCollections() {
  const query = ` {
		collections(first:25) {
			edges{
				node {
					title
					handle
					id
				}
			}
		}
	}`;

	// response of graphql query
  const response = await ShopifyData(query);
  const slugs = response.data.collections.edges
    ? response.data.collections.edges
    : [];

  return slugs;
}

// get collection by slug
export async function getTest(handle) {
  const query = `
		{
			collectionByHandle(handle: "${handle}") {
				title
				image{
					originalSrc
				}
				products(first: 25) {
					edges {
						node {
							productType
								vendor
							id
							title
							handle
							priceRange {
									minVariantPrice {
										amount
									}
								}
							images(first: 5) {
								edges {
									node {
										originalSrc
										altText
									}
								}
							}
						}
					}
				}
			}
		}
		`;

	// response of graphql query
  const response = await ShopifyData(query);
  const allCollections = response.data.collectionByHandle
    ? response.data.collectionByHandle
    : [];

  return allCollections;
}

// get products from collection
export async function getProductsInCollection() {
  const query = `
    {
        collectionByHandle(handle: "test") {
          title
          products(first: 3) {
            edges {
              node {
								productType
								vendor
                id
                title
                handle
                priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                images(first: 5) {
                  edges {
                    node {
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }`;

	// response of graphql query
  const response = await ShopifyData(query);
  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProducts;
}

// get all products
export async function getAllProducts() {
  const query = `{
        products(first: 25) {
          edges {
            node {
              handle
              id
							tags
							productType
								vendor
            }
          }
        }
      }`;

	// response of graphql query
  const response = await ShopifyData(query);
  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

// get single product by handle
export async function getProduct(handle) {
  const query = `
        {
          productByHandle(handle: "${handle}") {
            collections(first: 1) {
            edges {
              node {
                products(first: 5) {
                  edges {
                    node {
											productType
											vendor
                      priceRange {
                        minVariantPrice {
                          amount
                        }
                      }
											tags
                      handle
                      title
                      id
                      images(first: 5) {
                        edges {
                          node {
                            originalSrc
                            altText
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
  }
            id
            title
            handle
            description
						productType
								vendor
						tags
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            options {
              name
              values
              id
            }
            variants(first: 25) {
              edges {
                node {
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    originalSrc
                    altText
                  }
                  title
                  id
                  priceV2 {
                    amount
                  }
                }
              }
            }
          }
        }`;

	// response of graphql query
  const response = await ShopifyData(query);
  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];
  return product;
}

// get quantity and id from product end send to shopify checkout
export async function createCheckout(id, quantity) {
  const query = `
      mutation {
        checkoutCreate(input: {
                lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
        }) {
          checkout {
            id
            webUrl
          }
        }
      }`;

	// response of graphql query
  const response = await ShopifyData(query);
  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}


////////////////////////////////////////////////////
// Test phase for login and sign in if user signs up. Code is not used anywhere
///////////////////////////////////////////////////
export async function createCustomer(email, password) {
  const query = `
	mutation customerCreate{
		customerCreate(input: { email: "${email}", password: "${password}" }) {
			customer {
				id
			}
			customerUserErrors {
				code
				field
				message
			}
		}
	}`;

  const response = await ShopifyData(query);
  const customer = response.customerCreate;

  return customer;
}

export async function logInUser(email, password) {
  const query = `
	mutation customerAccessTokenCreate {
		customerAccessTokenCreate(input: { email: "${email}", password: "${password}" }) {
			customerAccessToken {
				accessToken
				expiresAt
			}
			customerUserErrors {
				code
				field
				message
			}
		}
	}

	`;
  const response = await ShopifyData(query);
  const login = response.customerAccessTokenCreate;
  return login;
}

export async function getToken() {
  const query = `{
		customer(customerAccessToken: "4d7ebe2715f0f70d7f02c86874d67068") {
			id
		}
	}`;
  const response = await ShopifyData(query);
  const kljuc = response.data.customer.token;
  return kljuc;
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
          variantId: "${item.id}",
          quantity: ${item.variantQuantity}
        }`;
  });

  const query = `
      mutation {
        checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
          checkout {
            id
            webUrl
            lineItems(first: 25) {
              edges {
                node {
                  id
                  title
                  quantity
                }
              }
            }
          }
        }
      }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}