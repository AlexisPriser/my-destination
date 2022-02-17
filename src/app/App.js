
import './App.css';
import Destination from '../destination/Destination'
import Header from '../header/Header'

function App() {
  const obj1={
    nom:"Copenhagen",
    picture:"https://www.devoteam.com/wp-content/uploads/2021/04/municipality-of-Copenhagen-1296x972.jpg",
    adresse:"",
    habitants:"1 M",
    hotels:"70000",
    revenu:"50000",
    surface:"88.25",
    activer:false
  }
  const obj2= Object.assign({}, obj1);
  const obj3= Object.assign({}, obj1);
  const obj4= Object.assign({}, obj1);
  const obj5= Object.assign({}, obj1);
  const obj6= Object.assign({}, obj1);
  const BDD=[obj1,obj2,obj3,obj4,obj5,obj6];

  {BDD.map((obj,i)=>{
    obj["id"]=i+1;
  })}

  return (
    <div className="App">
      <Header/>
      <div className='wrap'>
        {BDD.map((obj,i)=>(
          <Destination obj={obj}/>
        ))}
      </div>
    </div>
  );
}

export default App;
