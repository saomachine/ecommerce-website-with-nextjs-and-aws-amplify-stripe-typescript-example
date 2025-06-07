import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type CheckoutMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BannerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SaleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InfoPagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerCheckout = {
  readonly id: string;
  readonly email?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly address?: string | null;
  readonly apartment?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly region?: string | null;
  readonly zip?: string | null;
  readonly phone?: string | null;
  readonly instructions?: string | null;
  readonly amount?: string | null;
  readonly status?: string | null;
  readonly cart?: string | null;
  readonly tracking?: string | null;
  readonly trackingID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCheckout = {
  readonly id: string;
  readonly email?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly address?: string | null;
  readonly apartment?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly region?: string | null;
  readonly zip?: string | null;
  readonly phone?: string | null;
  readonly instructions?: string | null;
  readonly amount?: string | null;
  readonly status?: string | null;
  readonly cart?: string | null;
  readonly tracking?: string | null;
  readonly trackingID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Checkout = LazyLoading extends LazyLoadingDisabled ? EagerCheckout : LazyCheckout

export declare const Checkout: (new (init: ModelInit<Checkout, CheckoutMetaData>) => Checkout) & {
  copyOf(source: Checkout, mutator: (draft: MutableModel<Checkout, CheckoutMetaData>) => MutableModel<Checkout, CheckoutMetaData> | void): Checkout;
}

type EagerBanner = {
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBanner = {
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Banner = LazyLoading extends LazyLoadingDisabled ? EagerBanner : LazyBanner

export declare const Banner: (new (init: ModelInit<Banner, BannerMetaData>) => Banner) & {
  copyOf(source: Banner, mutator: (draft: MutableModel<Banner, BannerMetaData>) => MutableModel<Banner, BannerMetaData> | void): Banner;
}

type EagerSale = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly buttonText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySale = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly buttonText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sale = LazyLoading extends LazyLoadingDisabled ? EagerSale : LazySale

export declare const Sale: (new (init: ModelInit<Sale, SaleMetaData>) => Sale) & {
  copyOf(source: Sale, mutator: (draft: MutableModel<Sale, SaleMetaData>) => MutableModel<Sale, SaleMetaData> | void): Sale;
}

type EagerReviews = {
  readonly id: string;
  readonly name?: string | null;
  readonly review?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReviews = {
  readonly id: string;
  readonly name?: string | null;
  readonly review?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reviews = LazyLoading extends LazyLoadingDisabled ? EagerReviews : LazyReviews

export declare const Reviews: (new (init: ModelInit<Reviews, ReviewsMetaData>) => Reviews) & {
  copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

type EagerInfoPages = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly page?: string | null;
  readonly header?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInfoPages = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly page?: string | null;
  readonly header?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InfoPages = LazyLoading extends LazyLoadingDisabled ? EagerInfoPages : LazyInfoPages

export declare const InfoPages: (new (init: ModelInit<InfoPages, InfoPagesMetaData>) => InfoPages) & {
  copyOf(source: InfoPages, mutator: (draft: MutableModel<InfoPages, InfoPagesMetaData>) => MutableModel<InfoPages, InfoPagesMetaData> | void): InfoPages;
}

type EagerProducts = {
  readonly id: string;
  readonly title?: string | null;
  readonly price?: string | null;
  readonly image?: string | null;
  readonly tags?: string | null;
  readonly availability?: string | null;
  readonly category?: string | null;
  readonly description?: string | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProducts = {
  readonly id: string;
  readonly title?: string | null;
  readonly price?: string | null;
  readonly image?: string | null;
  readonly tags?: string | null;
  readonly availability?: string | null;
  readonly category?: string | null;
  readonly description?: string | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Products = LazyLoading extends LazyLoadingDisabled ? EagerProducts : LazyProducts

export declare const Products: (new (init: ModelInit<Products, ProductsMetaData>) => Products) & {
  copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}