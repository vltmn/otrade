export const GET_LISTING_QUERY = `
query ($id: ID!) {
  getListing (id: $id) {
    title,
    price,
    description,
    imgURL,
    category {
      id
      label
    }
    createdBy {
      id
      firstName
      surname
      email
      phone
    }
  }
}
`;

export const GET_CATEGORY_QUERY = `
query ($id: String!) {
  getCategory (categoryId: $id) {
    label
    id
  }
}
`;

export const GET_ALL_LISTINGS_QUERY = `
query {
  getAllListings {
    price
    title
    description
    id
    imgURL
  }
}
`;

export const GET_ALL_LISTINGS_IN_CATEGORY_QUERY = `
  query ($id: String!) {
    getListingsInCategory (categoryId: $id) {
      price
      title
      description
      id
      imgURL
    }
  }
`;

export const CREATE_LISTING_MUTATION = `
mutation (
  $price: Int!,
  $title: String!,
  $description: String!,
  $imgURL: String!,
  $categoryId: String!
  ) {
    createListing (
      price: $price,
      title: $title,
      description: $description,
      imgURL: $imgURL,
      categoryId: $categoryId
      ) {
        id
        imgURL
        price
        title
        description
        category {
          id
          label
        }
    }
  }
`;

export const UPDATE_LISTING_MUTATION = `
mutation (
  $id: ID!,
  $price: Int!,
  $title: String!,
  $description: String!,
  $imgURL: String!,
  $categoryId: String!
  ) {
  updateListing (
    id: $id,
    imgURL: $imgURL,
    title: $title,
    description: $description,
    price: $price,
    categoryId: $categoryId
  ) {
    id
    imgURL
    title
    description
    price
    category {
      id
      label
    }
  }
}
`;

export const GET_ALL_CATEGORIES_QUERY = `
query {
  getAllCategories {
    id
    label
  }
}
`;

export const SEARCH_LISTING_QUERY = `
query($query: String!) {
  searchListings(query: $query) {
    id,
    title,
    description,
    price,
    imgURL
  }
}
`;

export const SEARCH_CATEGORY_QUERY = `
query($query: String!) {
  searchCategories(query: $query) {
    id,
    label
  }
}
`;

export const GET_MY_LISTINGS_QUERY = `
query {
  getMyListings {
    id,
    title,
    description,
    price,
    imgURL
  }
}
`;

export const GET_USER_QUERY = `
query {
  getUser {
    firstName,
    surname,
    email,
    phone
  }
}
`;
