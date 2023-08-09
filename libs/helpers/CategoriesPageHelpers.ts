import { redirect } from 'next/navigation'
import { CategoryList } from '../constants/CategoriesList'

type ICategoriesHelper = {
   CheckIsValidPathname: (categories: string) => void
   ConvertIconSrcToSmallSrc: (image: string) => string
   GetAllIconSrc: () => string[]
   GetAllSmallIconSrc: () => string[]
}

class HelperClass implements ICategoriesHelper {
   CheckIsValidPathname(categories: string): void {
      let isValidCategory = false
      const categoryURLs = CategoryList.map(i => i.url)

      categoryURLs.map(i => {
         if (i.includes(categories)) isValidCategory = true
      })

      if (!isValidCategory) redirect('/categories/beverages')
   }
   ConvertIconSrcToSmallSrc(image: string): string {
      const folderName = 'SmallVersions/'
      const removedEndPoint = image.replace('.webp', '')
      const endPoint = '-small.webp'

      return folderName + removedEndPoint + endPoint
   }
   GetAllIconSrc(): string[] {
      return [...CategoryIconSrc]
   }
   GetAllSmallIconSrc(): string[] {
      return [...CategoryIconSrc.map(c => this.ConvertIconSrcToSmallSrc(c))]
   }
}

export const CategoriesHelper: ICategoriesHelper = new HelperClass()

const CategoryIconSrc = [
   'AdultHealth.webp',
   'BabyCare.webp',
   'BakedGoods.webp',
   'Beverages.webp',
   'Breakfast.webp',
   'FitForm.webp',
   'Food.webp',
   'FruitsVeg.webp',
   'HomeCare.webp',
   'HomeLiving.webp',
   'IceCream.webp',
   'MilkDairy.webp',
   'PersonalCare.webp',
   'Pets.webp',
   'ReadyToEat.webp',
   'Snacks.webp',
   'Tech.webp',
]
