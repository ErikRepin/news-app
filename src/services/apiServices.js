export async function getEverything(date) {
   return await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f26b12f75aef467fadfdb44c89a5a65f');
}