import Water_1 from '../../public/images/ProductsImages/Beverages/Water/1Normal.webp'
import Water_2 from '../../public/images/ProductsImages/Beverages/Water/2Normal.webp'
import Water_3 from '../../public/images/ProductsImages/Beverages/Water/3Normal.webp'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'

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
         image: Water_1,
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
         image: Water_2,
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
         image: Water_3,
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
   image: StaticImageData
   alt: {
      tr: string
      en: string
   }
}
export type TProducts = TProduct[]
