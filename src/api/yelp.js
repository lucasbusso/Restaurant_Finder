import axios from "axios"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 5suRzI6o1EASsJ0yg9EDw0R1LJD-pP_kioVrmyDC1IyfWswGzivvZpk5BiAYZoqlsnj7XjuNTl5AJmfCfCJJS8o3dWUqGgtTtQKwHC1grUPI3GSHemBhvdQZF8aQY3Yx',
        accept: 'application/json',
    }
})

