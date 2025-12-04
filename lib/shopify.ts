"use server";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function ShopifyData(query: string, variables = {}) {
  const URL = `https://${domain}/api/2023-10/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken!,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getProducts() {
  const query = `
  {
    products(first: 25) {
      edges {
        node {
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
                url
                altText
              }
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);
  const allProducts = response.data.products.edges ? response.data.products.edges : [];

  return allProducts;
}

export async function getProduct(handle: string) {
  const query = `
  {
    productByHandle(handle: "${handle}") {
      id
      title
      handle
      description
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);
  const product = response.data.productByHandle ? response.data.productByHandle : [];

  return product;
}

export async function createCart(id: string, quantity: number) {
  const query = `
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          id
          checkoutUrl
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                    }
                    product {
                      title
                      handle
                      images(first: 1) {
                        edges {
                          node {
                            url
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
        }
      }
    }
  `;

  const variables = {
    cartInput: {
      lines: [
        {
          quantity: parseInt(quantity.toString()),
          merchandiseId: id,
        },
      ],
    },
  };

  const response = await ShopifyData(query, variables);
  return response.data.cartCreate.cart;
}

export async function addToCart(cartId: string, id: string, quantity: number) {
  const query = `
    mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                    }
                    product {
                      title
                      handle
                      images(first: 1) {
                        edges {
                          node {
                            url
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
        }
      }
    }
  `;

  const variables = {
    cartId,
    lines: [
      {
        quantity: parseInt(quantity.toString()),
        merchandiseId: id,
      },
    ],
  };

  const response = await ShopifyData(query, variables);
  return response.data.cartLinesAdd.cart;
}

export async function removeFromCart(cartId: string, lineIds: string[]) {
  const query = `
    mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          checkoutUrl
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                    }
                    product {
                      title
                      handle
                      images(first: 1) {
                        edges {
                          node {
                            url
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
        }
      }
    }
  `;

  const variables = {
    cartId,
    lineIds,
  };

  const response = await ShopifyData(query, variables);
  return response.data.cartLinesRemove.cart;
}

export async function updateCart(cartId: string, lines: { id: string; quantity: number }[]) {
  const query = `
    mutation updateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                    }
                    product {
                      title
                      handle
                      images(first: 1) {
                        edges {
                          node {
                            url
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
        }
      }
    }
  `;

  const variables = {
    cartId,
    lines,
  };

  const response = await ShopifyData(query, variables);
  return response.data.cartLinesUpdate.cart;
}

export async function getCart(cartId: string) {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                  }
                  product {
                    title
                    handle
                    images(first: 1) {
                      edges {
                        node {
                          url
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
      }
    }
  `;

  const variables = { cartId };

  const response = await ShopifyData(query, variables);
  return response.data.cart;
}
