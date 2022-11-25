const apiUrl = 'https://newsapi.org';

// async funkcija rabotaet s Promise/obeshanijami
// Promise eto objekt kotorqi izmenitsja v budushem 
// U promise est 3 sostojanija 
// 1: pending(v ozidanii) - iznachalnoe sostojanie 
// 2: fulfield (vqpolennenqi) - esli vsjo udachno proshlo 
// 3: rejected (otklonjonnqi) - esli proizashla oshibka
// Promisy nam nuznq dlja togo, 4tobq nashe prilozenie mogla dalshe rabotat ne dozdavshis otveta 
// Kljuchevoe slovo await mozet ispolzovatsja tolko v async funkcijah
// async funkcija vqpolnjaetsja ne v zavisemosti ot vsego ostalnogo koda.
// await preobrazaet object Promise v otvet ot zaprosa

export async function getEverything(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY,
        // apiKey: '',
    });
    return await fetch(`${apiUrl}/v2/everything?${params}`);
}
