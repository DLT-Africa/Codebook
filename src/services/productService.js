export async function getProductList(searchTerm){
    const api = import.meta.env.VITE_APP_DB_SERVER

    const response = await fetch(`${api}/products`)




    if(!response.ok){
        throw{message: response.statusText, status: response.status};
    }

    const data = await response.json()

    if(searchTerm) {

    

        const filteredResult  = data?.filter(item => (item?.name.toLowerCase()?.split("").includes( searchTerm.toLowerCase()) || item?.name?.split(" ").includes(searchTerm)) || item.price.toString().includes(searchTerm));

        console.log({filteredResult})

        return filteredResult
    }


   


    return data
}



export const getProduct = async (id) => {

    const api = import.meta.env.VITE_APP_DB_SERVER

    const response =  await fetch(`${api}/products/${id}`)

    if (!response.ok) {
        throw {
            message: response.statusText, status: response.status
        }
    }

    
    const data = await response.json();

    return data
}

export const getFeaturedList = async () => {

    const api = import.meta.env.VITE_APP_DB_SERVER

    const response =  await fetch(`${api}/featured_products`)


    if (!response.ok) {
        throw {
            message: response.statusText, status: response.status
        }
    }

    const data = await response.json();

    return data
}