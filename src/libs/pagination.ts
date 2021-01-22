// interface paginate {
//     limit: number,
//     page: number
// }
// interface meta {
//     page: number,
//     limit: number,
//     previousPage: number | boolean,
//     nextPage: number | boolean,
//     pageCount: number,
//     total: number
// }

const pagination = (count: number, paginate: { limit: number, page: number }) => {
    const numberOfPages: number = Math.ceil(count / paginate.limit)
    const nextPage: number = Number(paginate.page) + 1
    const meta = {
        page: paginate.page,
        limit: paginate.limit,
        previousPage: (paginate.page > 1) ? (Number(paginate.page - 1)) : false,
        nextPage: (numberOfPages >= nextPage) ? nextPage : false,
        pageCount: numberOfPages,
        total: count
    }
    return meta
}

export default pagination