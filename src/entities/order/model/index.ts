const statusMap = new Map([
    ['not-payed', 'Не оплачен. Заказ в сборке'],
    ['payed', 'Оплачен. Заказ в сборке'],
    ['delivery', 'Оплачен. Заказ в пути'],
    ['derived', 'Оплачен. Заказ доставлен'],
])

export const getOrderStatus = ({ status }: { status: string }) => {
    return statusMap.get(status)
}
