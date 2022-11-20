// export const fetchEquipmentStocks = (params: any) => {
//     const response = fetch(params)
//     const convertedData = convert(response)
//
//     save({}, ...convertedData)
// }
//
// const fetch = (params: any) => {
//     return [
//         {
//             id: 1,
//         },
//         {
//             id: 2,
//         }
//     ]
// }
//
// const convert = (response: any): [ Record<string, any>, (number | string)[] ] => {
//     const ids: (number | string)[] = []
//     const map: Record<string, any> = {}
//
//     response.forEach((item: any) => {
//         ids.push(item.id)
//         map[item.id] = {
//             ...item
//         }
//     })
//
//     return [
//         map,
//         ids,
//     ]
// }
//
// const save = (store: any, map: any, ids: any) => {
//     store.dispatch('pool', map)
//     store.dispatch('paginationIds', ids)
// }
