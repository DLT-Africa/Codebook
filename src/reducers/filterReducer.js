export const filterReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case "PRODUCT_LIST":
            return {productList: payload.products};
            
        case "SORT_BY":
            console.log(payload.sortBy)
            return {...state, sortBy: payload.sortBy};
        case "RATINGS":
            console.log(payload.ratings)
            return {...state, ratings: payload.ratings};
        case "BEST_SELLER_ONLY":
            console.log(payload.bestSellerOnly)
            return {...state, bestSellerOnly: payload.bestSellerOnly};
        case "ONLY_IN_STOCK":
            return{...state, onlyInStock: payload.onlyInStock};
        case "CLEAR_FILTER":
            return {
                ...state,
                onlyInStock: false,
                bestSellerOnly: false,
                sortBy: null,
                ratings: null
            }
    }

}