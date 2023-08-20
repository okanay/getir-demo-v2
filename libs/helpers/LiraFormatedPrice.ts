export const FormatPrice = (price: number) => {
   return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
   }).format(price)
}
