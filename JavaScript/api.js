// const API_KEY = "gizli kalacak";

// fonksiyon şehir ve birim bilgilerini parametre olarak alır
export default async function fetchWeatherData(city,units) {
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`);
            // console.log(response);
        // eğer istek başarılı değilse hata fırlat
        if(!response.ok){
            throw new Error("istek başarılı değil");
        }
        // API'dan gelen yanıtı JSON formatına dönüştür ve geri döndür.
        return response.json();
    }catch(error) {
        console.log(error);
    }
}