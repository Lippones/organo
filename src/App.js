import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form'
import ListPlayers from './components/ListPlayers';

function App() {
  const time =[
    {
      name: 'Duelista',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      name: 'Iniciadores',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      name: 'Controladores',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
  },
  {
      name: 'Sentinelas',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F5',
  },
]
  const[players, setPlayers] = useState([]);
  const newPlayer=(player)=>{
    console.log(player);
    setPlayers([...players,player])
  }
  return (
    <div className="App">
      <Banner/>
      <Form onPlayer={player=>newPlayer(player)} times={time.map(time=>time.name)}/>
      {time.map((time)=>{
        return(
          <ListPlayers 
            key={time.name}
            title={time.name} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria} 
            time={players.filter(player=>player.list === time.name)}
            
            />
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
