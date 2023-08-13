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
      unique: '1',
      languageCode: 'category-1',
      image: Beverages,
      imageSmall: BeveragesSmall,
      url: '/categories/beverages',
      slugName: 'beverages',
      altCategories: [
         { unique: 'C1', id: 100, languageCode: 'Water', name: 'Water', url: '#water' },
         { unique: 'C1', id: 101, languageCode: 'Ice', name: 'Ice', url: '#ice' },
         { unique: 'C1', id: 102, languageCode: 'Soda', name: 'Soda', url: '#soda' },
         { unique: 'C1', id: 103, languageCode: 'Sparkling-Water', name: 'Sparkling Water', url: '#sparkling-water' },
         { unique: 'C1', id: 104, languageCode: 'Ayran-Kefir', name: 'Ayran & Kefir', url: '#ayran-kefir' },
         { unique: 'C1', id: 105, languageCode: 'Iced-Tea', name: 'Iced Tea', url: '#iced-tea' },
         { unique: 'C1', id: 106, languageCode: 'Juice', name: 'Juice', url: '#juice' },
         { unique: 'C1', id: 107, languageCode: 'Coffee', name: 'Coffee', url: '#coffee' },
         { unique: 'C1', id: 108, languageCode: 'Tea', name: 'Tea', url: '#tea' },
         { unique: 'C1', id: 109, languageCode: 'Energy-Drink', name: 'Energy Drink', url: '#energy-drink' },
         { unique: 'C1', id: 110, languageCode: 'Functional-Drinks', name: 'Functional Drinks', url: '#functional-drinks' },
      ],
   },
   {
      unique: '2',
      languageCode: 'category-2',
      image: FruitsVeg,
      imageSmall: FruitsVegSmall,
      url: '/categories/fruits-veg',
      slugName: 'fruits-veg',

      altCategories: [
         { unique: 'C2', id: 100, languageCode: 'Fruits', name: 'Fruits', url: '#fruits' },
         { unique: 'C2', id: 101, languageCode: 'Vegetables', name: 'Vegetables', url: '#vegetables' },
      ],
   },
   {
      unique: '3',
      languageCode: 'category-3',
      image: BakedGoods,
      imageSmall: BakedGoodsSmall,
      url: '/categories/baked-goods',
      slugName: 'baked-goods',

      altCategories: [
         { unique: 'C3', id: 102, languageCode: 'FreshBakery', name: 'Fresh Bakery', url: '#fresh-bakery' },
         { unique: 'C3', id: 103, languageCode: 'Bakery', name: 'Bakery', url: '#bakery' },
         { unique: 'C3', id: 104, languageCode: 'FrozenBakery', name: 'Frozen Bakery', url: '#frozen-bakery' },
         { unique: 'C3', id: 105, languageCode: 'GlutenFree', name: 'Gluten-Free', url: '#gluten-free' },
      ],
   },
   {
      unique: '4',
      languageCode: 'category-4',
      image: Food,
      imageSmall: FoodSmall,
      url: '/categories/food',
      slugName: 'food',

      altCategories: [
         { unique: 'C4', id: 100, languageCode: 'Pasta', name: 'Pasta', url: '#pasta' },
         { unique: 'C4', id: 101, languageCode: 'Rice', name: 'Rice', url: '#rice' },
         { unique: 'C4', id: 102, languageCode: 'Bulghur', name: 'Bulghur', url: '#bulghur' },
         { unique: 'C4', id: 103, languageCode: 'Legumes', name: 'Legumes', url: '#legumes' },
         { unique: 'C4', id: 104, languageCode: 'Paste', name: 'Paste', url: '#paste' },
         { unique: 'C4', id: 105, languageCode: 'Sauce', name: 'Sauce', url: '#sauce' },
         { unique: 'C4', id: 106, languageCode: 'CannedFood', name: 'Canned Food', url: '#canned-food' },
         { unique: 'C4', id: 107, languageCode: 'Flour', name: 'Flour', url: '#flour' },
         { unique: 'C4', id: 108, languageCode: 'Oil', name: 'Oil', url: '#oil' },
         { unique: 'C4', id: 109, languageCode: 'OliveOil', name: 'Olive Oil', url: '#olive-oil' },
         { unique: 'C4', id: 110, languageCode: 'Sugar', name: 'Sugar', url: '#sugar' },
         {
            unique: 'C4',
            id: 111,
            languageCode: 'VinegarSaladDressing',
            name: 'Vinegar & Salad Dressing',
            url: '#vinegar-salad-dressing',
         },
         { unique: 'C4', id: 112, languageCode: 'Spices', name: 'Spices', url: '#spices' },
         { unique: 'C4', id: 113, languageCode: 'Soup', name: 'Soup', url: '#soup' },
         { unique: 'C4', id: 114, languageCode: 'Desserts', name: 'Desserts', url: '#desserts' },
         { unique: 'C4', id: 115, languageCode: 'CakeIngredients', name: 'Cake Ingredients', url: '#cake-ingredients' },
         { unique: 'C4', id: 116, languageCode: 'Cream', name: 'Cream', url: '#cream' },
         { unique: 'C4', id: 117, languageCode: 'ButterMargarine', name: 'Butter & Margarine', url: '#butter-margarine' },
      ],
   },
   {
      unique: '5',
      languageCode: 'category-5',
      image: Snacks,
      imageSmall: SnacksSmall,
      url: '/categories/snacks',
      slugName: 'snacks',

      altCategories: [
         { unique: 'C5', id: 100, languageCode: 'GoesWellWith', name: 'Goes Well With', url: '#goes-well-with' },
         { unique: 'C5', id: 101, languageCode: 'Chips', name: 'Chips', url: '#chips' },
         { unique: 'C5', id: 102, languageCode: 'Nuts', name: 'Nuts', url: '#nuts' },
         { unique: 'C5', id: 103, languageCode: 'Cakes', name: 'Cakes', url: '#cakes' },
         { unique: 'C5', id: 104, languageCode: 'Biscuits', name: 'Biscuits', url: '#biscuits' },
         { unique: 'C5', id: 105, languageCode: 'Wafer', name: 'Wafer', url: '#wafer' },
         { unique: 'C5', id: 106, languageCode: 'TabletChocolate', name: 'Tablet Chocolate', url: '#tablet-chocolate' },
         { unique: 'C5', id: 107, languageCode: 'ChocolateBar', name: 'Chocolate Bar', url: '#chocolate-bar' },
         { unique: 'C5', id: 108, languageCode: 'GiftBoxes', name: 'Gift Boxes', url: '#gift-boxes' },
         { unique: 'C5', id: 109, languageCode: 'Spreads', name: 'Spreads', url: '#spreads' },
         { unique: 'C5', id: 110, languageCode: 'CrackersCookies', name: 'Crackers & Cookies', url: '#crackers-cookies' },
         { unique: 'C5', id: 111, languageCode: 'CandyGum', name: 'Candy & Gum', url: '#candy-gum' },
         {
            unique: 'C5',
            id: 112,
            languageCode: 'DrageesChocolatesKids',
            name: 'Dragees & Chocolates for Kids',
            url: '#dragees-chocolates-kids',
         },
         { unique: 'C5', id: 113, languageCode: 'FitForm', name: 'Fit & Form', url: '#fit-form' },
         { unique: 'C5', id: 114, languageCode: 'Dessert', name: 'Dessert', url: '#dessert' },
      ],
   },
   {
      unique: '6',
      languageCode: 'category-6',
      image: IceCream,
      imageSmall: IceCreamSmall,
      url: '/categories/icecream',
      slugName: 'icecream',
      altCategories: [
         { unique: 'C6', id: 100, languageCode: 'Stick', name: 'Stick', url: '#stick' },
         { unique: 'C6', id: 101, languageCode: 'Bar', name: 'Bar', url: '#bar' },
         { unique: 'C6', id: 102, languageCode: 'Cone', name: 'Cone', url: '#cone' },
         { unique: 'C6', id: 103, languageCode: 'IceCreamPacks', name: 'Ice Cream Packs', url: '#ice-cream-packs' },
         { unique: 'C6', id: 104, languageCode: 'Multipack', name: 'Multipack', url: '#multipack' },
         { unique: 'C6', id: 105, languageCode: 'Cup', name: 'Cup', url: '#cup' },
         { unique: 'C6', id: 106, languageCode: 'IceCreamSauce', name: 'Ice Cream Sauce', url: '#ice-cream-sauce' },
      ],
   },
   {
      unique: '7',
      languageCode: 'category-7',
      image: MilkDairy,
      imageSmall: MilkDairySmall,
      url: '/categories/milkdairy',
      slugName: 'milkdairy',

      altCategories: [
         { unique: 'C7', id: 100, languageCode: 'Milk', name: 'Milk', url: '#milk' },
         { unique: 'C7', id: 101, languageCode: 'Cheese', name: 'Cheese', url: '#cheese' },
         { unique: 'C7', id: 102, languageCode: 'Yogurt', name: 'Yogurt', url: '#yogurt' },
         { unique: 'C7', id: 103, languageCode: 'ButterMargarin', name: 'Butter & Margarin', url: '#butter-margarin' },
         { unique: 'C7', id: 104, languageCode: 'AyranKefir', name: 'Ayran & Kefir', url: '#ayran-kefir' },
      ],
   },
   {
      unique: '8',
      languageCode: 'category-8',
      image: Breakfast,
      imageSmall: BreakfastSmall,
      url: '/categories/breakfast',
      slugName: 'breakfast',

      altCategories: [
         { unique: 'C8', id: 100, languageCode: 'Eggs', name: 'Eggs', url: '#eggs' },
         { unique: 'C8', id: 101, languageCode: 'DeliProducts', name: 'Deli Products', url: '#deli-products' },
         { unique: 'C8', id: 102, languageCode: 'Olives', name: 'Olives', url: '#olives' },
         { unique: 'C8', id: 103, languageCode: 'CerealGranola', name: 'Cereal & Granola', url: '#cereal-granola' },
         { unique: 'C8', id: 104, languageCode: 'HoneyJam', name: 'Honey & Jam', url: '#honey-jam' },
         { unique: 'C8', id: 105, languageCode: 'Spreads', name: 'Spreads', url: '#spreads' },
         { unique: 'C8', id: 106, languageCode: 'Cheese', name: 'Cheese', url: '#cheese' },
         { unique: 'C8', id: 107, languageCode: 'Tea', name: 'Tea', url: '#tea' },
         { unique: 'C8', id: 108, languageCode: 'Halva', name: 'Halva', url: '#halva' },
         { unique: 'C8', id: 109, languageCode: 'Vegan', name: 'Vegan', url: '#vegan' },
      ],
   },
   {
      unique: '9',
      languageCode: 'category-9',
      image: ReadyEat,
      imageSmall: ReadyEatSmall,
      url: '/categories/ready-eat',
      slugName: 'ready-eat',

      altCategories: [
         { unique: 'C9', id: 100, languageCode: 'Sandwiches', name: 'Sandwiches', url: '#sandwiches' },
         { unique: 'C9', id: 101, languageCode: 'InstantMeal', name: 'Instant Meal', url: '#instant-meal' },
         { unique: 'C9', id: 102, languageCode: 'FrozenFoods', name: 'Frozen Foods', url: '#frozen-foods' },
         { unique: 'C9', id: 103, languageCode: 'Desserts', name: 'Desserts', url: '#desserts' },
         { unique: 'C9', id: 104, languageCode: 'CigKofte', name: 'Çiğ Köfte', url: '#cig-kofte' },
         { unique: 'C9', id: 105, languageCode: 'Vegan', name: 'Vegan', url: '#vegan' },
         { unique: 'C9', id: 106, languageCode: 'Appetizers', name: 'Appetizers', url: '#appetizers' },
      ],
   },
   {
      unique: '10',
      languageCode: 'category-10',
      image: FitForm,
      imageSmall: FitFormSmall,
      url: '/categories/fitform',
      slugName: 'fitform',

      altCategories: [
         { unique: 'C10', id: 100, languageCode: 'Bars', name: 'Bars', url: '#bars' },
         { unique: 'C10', id: 101, languageCode: 'Granola', name: 'Granola', url: '#granola' },
         { unique: 'C10', id: 102, languageCode: 'CrackersBiscuits', name: 'Crackers & Biscuits', url: '#crackers-biscuits' },
         { unique: 'C10', id: 103, languageCode: 'Cereal', name: 'Cereal', url: '#cereal' },
         { unique: 'C10', id: 104, languageCode: 'GlutenFree', name: 'Gluten-Free', url: '#gluten-free' },
         { unique: 'C10', id: 105, languageCode: 'Vegan', name: 'Vegan', url: '#vegan' },
      ],
   },
   {
      unique: '11',
      languageCode: 'category-11',
      image: PersonalCare,
      imageSmall: PersonalCareSmall,
      url: '/categories/personalcare',
      slugName: 'personalcare',

      altCategories: [
         { unique: 'C11', id: 100, languageCode: 'OralCare', name: 'Oral Care', url: '#oral-care' },
         { unique: 'C11', id: 101, languageCode: 'HairCare', name: 'Hair Care', url: '#hair-care' },
         { unique: 'C11', id: 102, languageCode: 'ShowerBath', name: 'Shower & Bath', url: '#shower-bath' },
         { unique: 'C11', id: 103, languageCode: 'Soap', name: 'Soap', url: '#soap' },
         { unique: 'C11', id: 104, languageCode: 'Deodorant', name: 'Deodorant', url: '#deodorant' },
         { unique: 'C11', id: 105, languageCode: 'HygienicPads', name: 'Hygienic Pads', url: '#hygienic-pads' },
         { unique: 'C11', id: 106, languageCode: 'Cosmetics', name: 'Cosmetics', url: '#cosmetics' },
         { unique: 'C11', id: 107, languageCode: 'PrePostShave', name: 'Pre & Post Shave', url: '#pre-post-shave' },
         { unique: 'C11', id: 108, languageCode: 'BodyHandCare', name: 'Body & Hand Care', url: '#body-hand-care' },
         { unique: 'C11', id: 109, languageCode: 'WaxDepilatory', name: 'Wax & Depilatory', url: '#wax-depilatory' },
         { unique: 'C11', id: 110, languageCode: 'WetWipes', name: 'Wet Wipes', url: '#wet-wipes' },
         { unique: 'C11', id: 111, languageCode: 'HairDye', name: 'Hair Dye', url: '#hair-dye' },
         { unique: 'C11', id: 112, languageCode: 'Health', name: 'Health', url: '#health' },
         { unique: 'C11', id: 113, languageCode: 'Cologne', name: 'Cologne', url: '#cologne' },
      ],
   },
   {
      unique: '12',
      languageCode: 'category-12',
      image: HomeCare,
      imageSmall: HomeCareSmall,
      url: '/categories/homecare',
      slugName: 'homecare',

      altCategories: [
         { unique: 'C12', id: 100, languageCode: 'Cleaning', name: 'Cleaning', url: '#cleaning' },
         { unique: 'C12', id: 101, languageCode: 'Laundry', name: 'Laundry', url: '#laundry' },
         { unique: 'C12', id: 102, languageCode: 'Paper', name: 'Paper', url: '#paper' },
         { unique: 'C12', id: 103, languageCode: 'Kitchen', name: 'Kitchen', url: '#kitchen' },
         { unique: 'C12', id: 104, languageCode: 'Dishes', name: 'Dishes', url: '#dishes' },
         { unique: 'C12', id: 105, languageCode: 'Soap', name: 'Soap', url: '#soap' },
         { unique: 'C12', id: 106, languageCode: 'Scents', name: 'Scents', url: '#scents' },
      ],
   },
   {
      unique: '13',
      languageCode: 'category-13',
      image: HomeLiving,
      imageSmall: HomeLivingSmall,
      url: '/categories/homeliving',
      slugName: 'homeliving',

      altCategories: [
         {
            unique: 'C13',
            id: 100,
            languageCode: 'NewspaperMagazines',
            name: 'Newspaper & Magazines',
            url: '#newspaper-magazines',
         },
         { unique: 'C13', id: 101, languageCode: 'Kitchenware', name: 'Kitchenware', url: '#kitchenware' },
         { unique: 'C13', id: 102, languageCode: 'Batteries', name: 'Batteries', url: '#batteries' },
         { unique: 'C13', id: 103, languageCode: 'GamesToys', name: 'Games & Toys', url: '#games-toys' },
         {
            unique: 'C13',
            id: 104,
            languageCode: 'ElectricityLighting',
            name: 'Electricity & Lighting',
            url: '#electricity-lighting',
         },
         { unique: 'C13', id: 105, languageCode: 'Stationery', name: 'Stationery', url: '#stationery' },
         { unique: 'C13', id: 106, languageCode: 'Picnic', name: 'Picnic', url: '#picnic' },
         { unique: 'C13', id: 107, languageCode: 'Umbrella', name: 'Umbrella', url: '#umbrella' },
         { unique: 'C13', id: 108, languageCode: 'ShoeCare', name: 'Shoe Care', url: '#shoe-care' },
         { unique: 'C13', id: 109, languageCode: 'Other', name: 'Other', url: '#other' },
      ],
   },
   {
      unique: '14',
      languageCode: 'category-14',
      image: Tech,
      imageSmall: TechSmall,
      url: '/categories/tech',
      slugName: 'tech',

      altCategories: [
         {
            unique: 'C14',
            id: 100,
            languageCode: 'BatteryChargersCable',
            name: 'Battery Chargers & Cable',
            url: '#battery-chargers-cable',
         },
         { unique: 'C14', id: 101, languageCode: 'Music', name: 'Music', url: '#music' },
         {
            unique: 'C14',
            id: 102,
            languageCode: 'ComputerAccessories',
            name: 'Computer Accessories',
            url: '#computer-accessories',
         },
      ],
   },
   {
      unique: '15',
      languageCode: 'category-15',
      image: PetFood,
      imageSmall: PetFoodSmall,
      url: '/categories/petfood',
      slugName: 'petfood',

      altCategories: [
         { unique: 'C15', id: 100, languageCode: 'Cats', name: 'Cats', url: '#cats' },
         { unique: 'C15', id: 101, languageCode: 'Dogs', name: 'Dogs', url: '#dogs' },
         { unique: 'C15', id: 102, languageCode: 'Birds', name: 'Birds', url: '#birds' },
      ],
   },
   {
      unique: '16',
      languageCode: 'category-16',
      image: BabyCare,
      imageSmall: BabyCareSmall,
      url: '/categories/babycare',
      slugName: 'babycare',
      altCategories: [
         { unique: 'C16', id: 100, languageCode: 'Diapers', name: 'Diapers', url: '#diapers' },
         { unique: 'C16', id: 101, languageCode: 'BabyCare', name: 'Baby Care', url: '#baby-care' },
         { unique: 'C16', id: 102, languageCode: 'BabyFoods', name: 'Baby Foods', url: '#baby-foods' },
         { unique: 'C16', id: 103, languageCode: 'BabyBottles', name: 'Baby Bottles', url: '#baby-bottles' },
      ],
   },
   {
      unique: '17',
      languageCode: 'category-17',
      image: SexHealth,
      imageSmall: SexHealthSmall,
      url: '/categories/sexhealth',
      slugName: 'sexhealth',
      altCategories: [
         { unique: 'C17', id: 100, languageCode: 'Condoms', name: 'Condoms', url: '#condoms' },
         { unique: 'C17', id: 101, languageCode: 'GelsLubricants', name: 'Gels & Lubricants', url: '#gels-lubricants' },
      ],
   },
]
