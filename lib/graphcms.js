import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// get all blog posts graphql requst from CMS
export const getPosts = async () => {
  const query = gql`
    query Myquery {
      postsConnection {
        edges {
          node {
            createdAt
            title
            handle
            excert
            image {
              url
            }
            content
            category {
              id
              name
              slug
            }
          }
        }
      }
    }
  `;
  // response of graphql query
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

// get all blog categories
export const getCategorys = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  // response of graphql query
  const result = await request(graphqlAPI, query);
  return result.categories;
};

// get category by slug
export const getCategory = async (slug) => {
  const query = gql`
    query getCategoryDetailes($slug: String!) {
      category(where: { slug: $slug }) {
        name
        post {
          createdAt
          title
          handle
          excert
          image {
            url
          }
          category {
            slug
            name
          }
        }
      }
    }
  `;

  // response of graphql query
  const result = await request(graphqlAPI, query, { slug });
  return result.category;
};

// get single post by slug
export const getPostsDetails = async (handle) => {
  const query = gql`
    query GetPostDetails($handle: String!) {
      post(where: { handle: $handle }) {
        createdAt
        title
        handle
        excert
        image {
          url
        }
        content
        category {
          id
          name
          slug
        }
      }
    }
  `;

  // response of graphql query
  const result = await request(graphqlAPI, query, { handle });
  return result.post;
};

// get featured blog posts
export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featured: true}) {
				title
				handle
				excert
				image{
					url
				}
				category{
					name
					slug
				}
			}
    }
  `;


  // response of graphql query
  const result = await request(graphqlAPI, query);
  return result.posts;
};


// get recent blog post
export const getRecentBlogs = async () => {
  const query = gql`
    query RecentBlogs {
      posts(orderBy: createdAt_ASC, first: 3) {
        title
        handle
        excert
        image {
          url
        }

        category {
          name
          slug
        }
      }
    }
  `;

  // response of graphql query
  const result = await request(graphqlAPI, query);
  return result.posts;
};
