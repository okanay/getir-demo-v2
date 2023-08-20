export const DummyData: TProducts = [
   {
      productId: 1,
      uniqueId: '1',
      altCategoryId: 100,
      productDetails: [
         {
            lan: 'tr',
            text: 'Kuzeyden Su',
            description: '6 x 1,5 L',
         },
         {
            lan: 'en',
            text: 'Kuzeyden Water',
            description: '6 x 1,5 L',
         },
      ],
      imageDetails: {
         imageNormal: '/images/ProductsImages/Beverages/Water/1Normal.webp',
         imageSmall: '/images/ProductsImages/Beverages/Water/1Small.webp',
         alt: {
            tr: '',
            en: '',
         },
      },
      brand: {
         brandId: 1000,
         brandName: 'Kuzeyden Su',
      },
      price: {
         fullPrice: 64.99,
         discount: {
            status: false,
            discountedPrice: 0,
         },
      },
   },
   {
      productId: 2,
      uniqueId: '1',
      altCategoryId: 100,
      productDetails: [
         {
            lan: 'tr',
            text: 'Erikli Su',
            description: '6 x 1,5 L',
         },
         {
            lan: 'en',
            text: 'Erikli Water',
            description: '6 x 1,5 L',
         },
      ],
      imageDetails: {
         imageNormal: '/images/ProductsImages/Beverages/Water/2Normal.webp',
         imageSmall: '/images/ProductsImages/Beverages/Water/2Small.webp',
         alt: {
            tr: '',
            en: '',
         },
      },
      brand: {
         brandId: 1001,
         brandName: 'Erikli Su',
      },
      price: {
         fullPrice: 79.99,
         discount: {
            status: false,
            discountedPrice: 0,
         },
      },
   },
   {
      productId: 3,
      uniqueId: '1',
      altCategoryId: 100,
      productDetails: [
         {
            lan: 'tr',
            text: 'Damla Cam Su',
            description: '2 x 750ml',
         },
         {
            lan: 'en',
            text: 'Damla Glass Water',
            description: '2 x 750ml',
         },
      ],
      imageDetails: {
         imageNormal: '/images/ProductsImages/Beverages/Water/3Normal.webp',
         imageSmall: '/images/ProductsImages/Beverages/Water/3Small.webp',
         alt: {
            tr: '',
            en: '',
         },
      },
      brand: {
         brandId: 1002,
         brandName: 'Damla Su',
      },
      price: {
         fullPrice: 66.4,
         discount: {
            status: true,
            discountedPrice: 56.5,
         },
      },
   },
   {
      productId: 4,
      uniqueId: '1',
      altCategoryId: 101,
      productDetails: [
         {
            lan: 'tr',
            text: 'Damla Cam Su',
            description: '2 x 750ml',
         },
         {
            lan: 'en',
            text: 'Damla Glass Water',
            description: '2 x 750ml',
         },
      ],
      imageDetails: {
         imageNormal: '/images/ProductsImages/Beverages/Water/3Normal.webp',
         imageSmall: '/images/ProductsImages/Beverages/Water/3Small.webp',
         alt: {
            tr: '',
            en: '',
         },
      },
      brand: {
         brandId: 1002,
         brandName: 'Damla Su',
      },
      price: {
         fullPrice: 36.4,
         discount: {
            status: false,
            discountedPrice: 0,
         },
      },
   },
   {
      productId: 5,
      uniqueId: '1',
      altCategoryId: 102,
      productDetails: [
         {
            lan: 'tr',
            text: 'Damla Cam Su',
            description: '2 x 750ml',
         },
         {
            lan: 'en',
            text: 'Damla Glass Water',
            description: '2 x 750ml',
         },
      ],
      imageDetails: {
         imageNormal: '/images/ProductsImages/Beverages/Water/3Normal.webp',
         imageSmall: '/images/ProductsImages/Beverages/Water/3Small.webp',
         alt: {
            tr: '',
            en: '',
         },
      },
      brand: {
         brandId: 1002,
         brandName: 'Damla Su',
      },
      price: {
         fullPrice: 62.4,
         discount: {
            status: false,
            discountedPrice: 0,
         },
      },
   },
   {
      productId: 6,
      uniqueId: '1',
      altCategoryId: 103,
      productDetails: [
         {
            lan: 'tr',
            text: 'Damla Cam Su',
            description: '2 x 750ml',
         },
         {
            lan: 'en',
            text: 'Damla Glass Water',
            description: '2 x 750ml',
         },
      ],
      imageDetails: {
         imageNormal: '/images/ProductsImages/Beverages/Water/3Normal.webp',
         imageSmall: '/images/ProductsImages/Beverages/Water/3Small.webp',
         alt: {
            tr: '',
            en: '',
         },
      },
      brand: {
         brandId: 1002,
         brandName: 'Damla Su',
      },
      price: {
         fullPrice: 22.4,
         discount: {
            status: false,
            discountedPrice: 0,
         },
      },
   },
]

export type TProduct = {
   productId: number
   uniqueId: string
   altCategoryId: number
   productDetails: TProductDetail[]
   imageDetails: TProductImageDetail
   brand: {
      brandId: number
      brandName: string
   }
   price: {
      fullPrice: number
      discount: {
         status: boolean
         discountedPrice: number
      }
   }
}

export type TProductDetail = {
   lan: string
   text: string
   description: string
}

export type TProductImageDetail = {
   imageNormal: string
   imageSmall: string
   alt: {
      tr: string
      en: string
   }
}

export type TProducts = TProduct[]
