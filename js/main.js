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

    if (data.online == true) {
       console.log("estoy en linea")
       
    }

    const idJugador= data.id;
    const online= data.online;
    const dataUrl = data.url;
    const dataGameBullet = data.perfs.bullet.rating;
    const dataGameBlitz= data.perfs.blitz.rating;
    const dataGameRapid= data.perfs.rapid.rating;
    const dataGameClassic= data.perfs.classical.rating;


    document.getElementById('usernamehtml').innerHTML=idJugador;
    document.getElementById('bullet').innerHTML=dataGameBullet;
    document.getElementById('blitz').innerHTML=dataGameBlitz;
    document.getElementById('rapid').innerHTML=dataGameRapid;
    document.getElementById('classic').innerHTML=dataGameClassic;

    console.log(data)


 } catch (error) {
     
 }
}



//    
// asyncTv()
