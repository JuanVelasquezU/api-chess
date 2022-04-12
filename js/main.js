const search = document.getElementById('seach');
const form = document.getElementById('form');
let jugador = "";


//Escuchar evento submit del form

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const username = search.value;
   userSearch(username)
   
})


//obtener info de usuario en Lichess




const userSearch = async(username) => {

 try {
   const userData= await fetch(`https://lichess.org/api/user/${username}`)

    const data = await userData.json();

    const idJugador= data.id;
    const online= data.online;
    const dataUrl = data.url;
    const dataGameBullet = data.perfs.bullet.rating;
    const dataGameBlitz= data.perfs.blitz.rating;
    const dataGameRapid= data.perfs.rapid.rating;
    const dataGameClassic= data.perfs.classical.rating;

    document.getElementById('usernamehtml').innerHTML=idJugador;

    console.log(data)

    

  


 } catch (error) {
     
 }



}

// userSearch()
