import { Categories } from '../types/types'
import Beverages from '../../public/images/CategoryImages/Beverages.webp'
import FruitsVeg from '../../public/images/CategoryImages/FruitsVeg.webp'
import BakedGoods from '../../public/images/CategoryImages/BakedGoods.webp'
import Food from '../../public/images/CategoryImages/Food.webp'
import Snacks from '../../public/images/CategoryImages/Snacks.webp'
import IceCream from '../../public/images/CategoryImages/IceCream.webp'
import MilkDairy from '../../public/images/CategoryImages/MilkDairy.webp'
import Breakfast from '../../public/images/CategoryImages/Breakfast.webp'
import ReadyEat from '../../public/images/CategoryImages/ReadyToEat.webp'
import FitForm from '../../public/images/CategoryImages/FitForm.webp'
import PersonalCare from '../../public/images/CategoryImages/PersonalCare.webp'
import HomeCare from '../../public/images/CategoryImages/HomeCare.webp'
import HomeLiving from '../../public/images/CategoryImages/HomeLiving.webp'
import Tech from '../../public/images/CategoryImages/Tech.webp'
import PetFood from '../../public/images/CategoryImages/Pets.webp'
import BabyCare from '../../public/images/CategoryImages/BabyCare.webp'
import SexHealth from '../../public/images/CategoryImages/AdultHealth.webp'

import BeveragesSmall from '../../public/images/CategoryImages/SmallVersions/Beverages-small.webp'
import FruitsVegSmall from '../../public/images/CategoryImages/SmallVersions/FruitsVeg-small.webp'
import BakedGoodsSmall from '../../public/images/CategoryImages/SmallVersions/BakedGoods-small.webp'
import FoodSmall from '../../public/images/CategoryImages/SmallVersions/Food-small.webp'
import SnacksSmall from '../../public/images/CategoryImages/SmallVersions/Snacks-small.webp'
import IceCreamSmall from '../../public/images/CategoryImages/SmallVersions/IceCream-small.webp'
import MilkDairySmall from '../../public/images/CategoryImages/SmallVersions/MilkDairy-small.webp'
import BreakfastSmall from '../../public/images/CategoryImages/SmallVersions/Breakfast-small.webp'
import ReadyEatSmall from '../../public/images/CategoryImages/SmallVersions/ReadyToEat-small.webp'
import FitFormSmall from '../../public/images/CategoryImages/SmallVersions/FitForm-small.webp'
import PersonalCareSmall from '../../public/images/CategoryImages/SmallVersions/PersonalCare-small.webp'
import HomeCareSmall from '../../public/images/CategoryImages/SmallVersions/HomeCare-small.webp'
import HomeLivingSmall from '../../public/images/CategoryImages/SmallVersions/HomeLiving-small.webp'
import TechSmall from '../../public/images/CategoryImages/SmallVersions/Tech-small.webp'
import PetFoodSmall from '../../public/images/CategoryImages/SmallVersions/Pets-small.webp'
import BabyCareSmall from '../../public/images/CategoryImages/SmallVersions/BabyCare-small.webp'
import SexHealthSmall from '../../public/images/CategoryImages/SmallVersions/AdultHealth-small.webp'

export const CategoryList: Categories = [
   {
      unique: '-C1',
      languageCode: 'category-1',
      image: Beverages,
      imageSmall: BeveragesSmall,
      url: '/categories/beverages?c=1',

      altCategories: 11,
   },
   {
      unique: '-C2',
      languageCode: 'category-2',
      image: FruitsVeg,
      imageSmall: FruitsVegSmall,
      url: '/categories/fruits-veg?c=2',
      altCategories: 2,
   },
   {
      unique: '-C3',
      languageCode: 'category-3',
      image: BakedGoods,
      imageSmall: BakedGoodsSmall,
      url: '/categories/baked-goods?c=3',
      altCategories: 4,
   },
   {
      unique: '-C4',
      languageCode: 'category-4',
      image: Food,
      imageSmall: FoodSmall,
      url: '/categories/food?c=4',
      altCategories: 18,
   },
   {
      unique: '-C5',
      languageCode: 'category-5',
      image: Snacks,
      imageSmall: SnacksSmall,
      url: '/categories/snacks?c=5',
      altCategories: 15,
   },
   {
      unique: '-C6',
      languageCode: 'category-6',
      image: IceCream,
      imageSmall: IceCreamSmall,
      url: '/categories/icecream?c=6',
      altCategories: 7,
   },
   {
      unique: '-C7',
      languageCode: 'category-7',
      image: MilkDairy,
      imageSmall: MilkDairySmall,
      url: '/categories/milkdairy?c=7',
      altCategories: 6,
   },
   {
      unique: '-C8',
      languageCode: 'category-8',
      image: Breakfast,
      imageSmall: BreakfastSmall,
      url: '/categories/breakfast?c=8',
      altCategories: 10,
   },
   {
      unique: '-C9',
      languageCode: 'category-9',
      image: ReadyEat,
      imageSmall: ReadyEatSmall,
      url: '/categories/ready-eat?c=9',
      altCategories: 7,
   },
   {
      unique: '-C10',
      languageCode: 'category-10',
      image: FitForm,
      imageSmall: FitFormSmall,
      url: '/categories/fitform?c=10',
      altCategories: 6,
   },
   {
      unique: '-C11',
      languageCode: 'category-11',
      image: PersonalCare,
      imageSmall: PersonalCareSmall,
      url: '/categories/personalcare?c=11',
      altCategories: 14,
   },
   {
      unique: '-C12',
      languageCode: 'category-12',
      image: HomeCare,
      imageSmall: HomeCareSmall,
      url: '/categories/homecare?c=12',
      altCategories: 7,
   },
   {
      unique: '-C13',
      languageCode: 'category-13',
      image: HomeLiving,
      imageSmall: HomeLivingSmall,
      url: '/categories/homeliving?c=13',
      altCategories: 10,
   },
   {
      unique: '-C14',
      languageCode: 'category-14',
      image: Tech,
      imageSmall: TechSmall,
      url: '/categories/tech?c=14',
      altCategories: 3,
   },
   {
      unique: '-C15',
      languageCode: 'category-15',
      image: PetFood,
      imageSmall: PetFoodSmall,
      url: '/categories/petfood?c=15',
      altCategories: 3,
   },
   {
      unique: '-C16',
      languageCode: 'category-16',
      image: BabyCare,
      imageSmall: BabyCareSmall,
      url: '/categories/babycare?c=16',
      altCategories: 4,
   },
   {
      unique: '-C17',
      languageCode: 'category-17',
      image: SexHealth,
      imageSmall: SexHealthSmall,
      url: '/categories/sexhealth?c=17',
      altCategories: 2,
   },
]
