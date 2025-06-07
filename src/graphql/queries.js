/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncCheckouts = /* GraphQL */ `
  query SyncCheckouts(
    $filter: ModelCheckoutFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCheckouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        firstName
        lastName
        address
        apartment
        city
        country
        region
        zip
        phone
        instructions
        amount
        status
        cart
        tracking
        trackingID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCheckout = /* GraphQL */ `
  query GetCheckout($id: ID!) {
    getCheckout(id: $id) {
      id
      email
      firstName
      lastName
      address
      apartment
      city
      country
      region
      zip
      phone
      instructions
      amount
      status
      cart
      tracking
      trackingID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCheckouts = /* GraphQL */ `
  query ListCheckouts(
    $filter: ModelCheckoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCheckouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        address
        apartment
        city
        country
        region
        zip
        phone
        instructions
        amount
        status
        cart
        tracking
        trackingID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBanners = /* GraphQL */ `
  query SyncBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBanners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBanner = /* GraphQL */ `
  query GetBanner($id: ID!) {
    getBanner(id: $id) {
      id
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBanners = /* GraphQL */ `
  query ListBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSales = /* GraphQL */ `
  query SyncSales(
    $filter: ModelSaleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSales(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        buttonText
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSale = /* GraphQL */ `
  query GetSale($id: ID!) {
    getSale(id: $id) {
      id
      title
      content
      buttonText
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSales = /* GraphQL */ `
  query ListSales(
    $filter: ModelSaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        buttonText
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        review
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getReviews = /* GraphQL */ `
  query GetReviews($id: ID!) {
    getReviews(id: $id) {
      id
      name
      review
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        review
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncInfoPages = /* GraphQL */ `
  query SyncInfoPages(
    $filter: ModelInfoPagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInfoPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        page
        header
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getInfoPages = /* GraphQL */ `
  query GetInfoPages($id: ID!) {
    getInfoPages(id: $id) {
      id
      title
      content
      page
      header
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInfoPages = /* GraphQL */ `
  query ListInfoPages(
    $filter: ModelInfoPagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfoPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        page
        header
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        price
        image
        tags
        availability
        category
        description
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      title
      price
      image
      tags
      availability
      category
      description
      slug
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        image
        tags
        availability
        category
        description
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
