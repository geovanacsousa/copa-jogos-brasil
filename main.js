function createGame(player1, hour, player2, group) {
  /*let player1alt = player1.slice(-1) ==="a" ? "da" : "do"
  let player2alt = player2.slice(-1) === "a" ? "da" : "do"*/
  

  return `

<li>
<h4> Grupo ${group}</h4>
</li>

   <li>
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li>

            <div class="nome-times">
<h1>${player1}</h1>
<h1>${player2}</h1>
</div>
            
  `
}

function createCard(date, day, games) {
  return `
   <div class="card">
       <h2>${date} <span>${day}</span></h2>
       <ul>
       ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logocopa.svg" alt="Logo da copa" />
      </header>
      <main id="cards">

       ${createCard(
         "24/11",
         "quinta",
         createGame("brazil", "16:00", "serbia", "G") + 
         createGame('switzerland','07:00','cameroon','G') +
         createGame('uruguay','10:00','south korea','H') +
         createGame('portugal','13:00','ghana','H')
       )}
       
       ${createCard(
         "28/11",
         "segunda",
           createGame("switzerland", "07:00", "cameroon", "G") +
           createGame("uruguay", "10:00", "south korea", "H") +
           createGame("brazil", "13:00", "switzerland", "G") +
           createGame("portugal", "13:00", "ghana", "H")
       )}

       ${createCard(
         "02/12",
         "sexta",
         createGame("south korea", "12:00", "portugal", "H") +
           createGame("ghana", "12:00", "uruguay", "H") +
           createGame("serbia", "16:00", "switzerland", "G") +
           createGame("cameroon", "16:00", "brazil", "G")
       )}
      </main>
`