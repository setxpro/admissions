export const numberFormatterCompact = (value: number, locale: string) => {
    return new Intl.NumberFormat(locale, {
        notation: 'compact' 
    }).format(value)
} // 2K

export const currencyFormatter = (currency: number) => {
    return new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    }).format(currency)
} // R$ 2.000,00

export const dateFormatter = (date: Date) => {
    return Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short'
    }).format(date);
} 

export const relaiveDateFormatter = (amount: number, locale: string) => {
    return new Intl.RelativeTimeFormat(locale, {
        numeric: 'auto'
    }).format(amount, 'hours')
}