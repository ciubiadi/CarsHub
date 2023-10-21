export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '37fb707816msh0359da1a1346975p1dbaa0jsn1ae674d78fc3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}