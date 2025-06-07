/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCheckout = /* GraphQL */ `
  mutation CreateCheckout(
    $input: CreateCheckoutInput!
    $condition: ModelCheckoutConditionInput
  ) {
    createCheckout(input: $input, condition: $condition) {
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
export const updateCheckout = /* GraphQL */ `
  mutation UpdateCheckout(
    $input: UpdateCheckoutInput!
    $condition: ModelCheckoutConditionInput
  ) {
    updateCheckout(input: $input, condition: $condition) {
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
export const deleteCheckout = /* GraphQL */ `
  mutation DeleteCheckout(
    $input: DeleteCheckoutInput!
    $condition: ModelCheckoutConditionInput
  ) {
    deleteCheckout(input: $input, condition: $condition) {
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
export const createBanner = /* GraphQL */ `
  mutation CreateBanner(
    $input: CreateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    createBanner(input: $input, condition: $condition) {
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
export const updateBanner = /* GraphQL */ `
  mutation UpdateBanner(
    $input: UpdateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    updateBanner(input: $input, condition: $condition) {
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
export const deleteBanner = /* GraphQL */ `
  mutation DeleteBanner(
    $input: DeleteBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    deleteBanner(input: $input, condition: $condition) {
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
export const createSale = /* GraphQL */ `
  mutation CreateSale(
    $input: CreateSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    createSale(input: $input, condition: $condition) {
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
export const updateSale = /* GraphQL */ `
  mutation UpdateSale(
    $input: UpdateSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    updateSale(input: $input, condition: $condition) {
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
export const deleteSale = /* GraphQL */ `
  mutation DeleteSale(
    $input: DeleteSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    deleteSale(input: $input, condition: $condition) {
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
export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
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
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
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
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
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
export const createInfoPages = /* GraphQL */ `
  mutation CreateInfoPages(
    $input: CreateInfoPagesInput!
    $condition: ModelInfoPagesConditionInput
  ) {
    createInfoPages(input: $input, condition: $condition) {
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
export const updateInfoPages = /* GraphQL */ `
  mutation UpdateInfoPages(
    $input: UpdateInfoPagesInput!
    $condition: ModelInfoPagesConditionInput
  ) {
    updateInfoPages(input: $input, condition: $condition) {
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
export const deleteInfoPages = /* GraphQL */ `
  mutation DeleteInfoPages(
    $input: DeleteInfoPagesInput!
    $condition: ModelInfoPagesConditionInput
  ) {
    deleteInfoPages(input: $input, condition: $condition) {
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
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
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
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
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
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
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
