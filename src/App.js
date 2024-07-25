import { Routes, Route } from "react-router-dom";
import GameMain from "./components/GameMain";
import './App.css';


const App = () => {
  return (
<div>
      <Routes>
      <Route path="/" element={<GameMain />} />
      <Route path="" element={<GameMain />} />
      </Routes>
    </div>
  );
}

export default App;

/*
import MyButton from './components/CardButton'
const H_TILES = 5;
const V_TILES = 4;
function App() {


  const [prevId, setClickedId] = useState(-1);
  const [prevNumber, setClickedNumber] = useState("-1");
  const [score, setScore] = useState(100);
  const [unveiledTiles, setCount] = useState(0);
  //initializer 한번만 실행하기 위해
  let ref = useRef(0);

  const buttonTiles = [];
  //const [titleNumbers,setNumbers] = useState([]);
  const [titleInfos,setTileInfos] = useState([]);

  ////////////////////////
  // Click Handler MyButton에서 불림
  const clickHandler = (buttonNumber,btnId,tile1, tile2) =>{
    if (tile1 > 0) {
      titleInfos[tile1].btnState = "unveiled";
      titleInfos[tile2].btnState = "unveiled";
      setClickedNumber("-1");
      setClickedId(-1);
      if (unveiledTiles >= H_TILES*V_TILES -2 ) {
      
      }
      setCount(unveiledTiles+2);
    } else {
      if (prevId > -1) {
        setScore(score -1);
      }
      setClickedNumber(buttonNumber);
      setClickedId(btnId);  
    }
    console.log("MyButton" + buttonNumber + " clicked! t1="+tile1 + ", t2=" + tile2);
  }
  // Click Handler MyButton에서 불림
  ////////////////////////

  ////////////////////////////////////
  // InitializeTile
  const initializeTile = (width, height) => {
    let candidateNumbers = [];
    let tempNumbers = [];
    console.log("initializeTile(" + width + ", "+ height+")");
    for (let i = 0; i < width*height/2; i++) {
      candidateNumbers.push(i);
      candidateNumbers.push(i);
    }
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let selectedNumber = -1;
        while( selectedNumber < 0 ) {
          let index = Math.floor(Math.random()*width*height);
          if (candidateNumbers[index] < 0) continue;
          selectedNumber = candidateNumbers[index];
          candidateNumbers[index] = -1;
        }
        let i = y*width + x;
        let tileInfo = {key:i, number : selectedNumber.toString(), btnState : "veiled"};
        tempNumbers = tempNumbers.concat(tileInfo);
        //tempNumbers = tempNumbers.concat({key:i, number : selectedNumber.toString(), btnState : "auto"});
        //tempNumbers = tempNumbers.concat(selectedNumber.toString());
      }  //for (let x
    } //for (let y 
    //setNumbers(tempNumbers);
    setTileInfos(tempNumbers);
  } 
  // InitializeTile
  ////////////////////

  useEffect(() => {
    ref.current = ref.current + 1;
    console.log(`setup 함수 실행(${ref.current})`);
    if (ref.current === 1) {
      initializeTile(H_TILES, V_TILES);
    }
  }, []);

  for (let y = 0; y < V_TILES; y++) {
    buttonTiles.push(<br />);
    for (let x = 0; x < H_TILES; x++) {
      let i = y*H_TILES + x;
      //let tile = titleNumbers.indexOf(i);
      //if (tile === undefined) {
      //  continue;
      //}
      if (titleInfos[i] === undefined) {
        continue;
      }
      let tile = titleInfos[i];
      let t1 = -1;
      let t2 = -1;
      if ((prevNumber  === tile.number) && (i !== prevId)) {
        t1 = i;
        t2 = prevId;
      }
      console.log("tile.key="+tile.key + ", tile.key="+tile.number + ", tile.btnState="+tile.btnState);
      buttonTiles.push( <span key={i+H_TILES*V_TILES} className='BtnSpan'> 
      <MyButton key={i} btnId={i} title={tile.number}  btnState={tile.btnState} prevNo={prevNumber} prevId={prevId} onClickButton={()=>clickHandler(tile.number,i,t1,t2)}/> 
      </span>);
      //console.log("buttonTiles(" + x + "," + y +") = MyButton(btnId="+ i+" ,title = "+tile.number+", prev=" + prevId);
      //buttonTiles.push( <span key={i+H_TILES*V_TILES} className='BtnSpan'> <MyButton key={i} btnId={i} title={titleNumbers[i]}  prevNo={prevNumber} prevId={prevId} onClickButton={()=>clickHandler(titleNumbers[i],i)}/> </span>);
      //console.log("buttonTiles(" + x + "," + y +") = MyButton(btnId="+ i+" ,title = "+titleNumbers[i]+", prev=" + prevId);
    }
  }

  return (
    //</div><div  onClick={(e)=>{clickHandler(e.btnId)} } className="App">
    <div className="App">
        <h1> Find pairs </h1>
        <h2> High Score : {score} </h2>
        <h2> Score : {score} </h2>
        {buttonTiles}
    </div>
  );
}

export default App;
//<div onClick={(e) => {clickHandler("22"); e.stopPropagation();}} >
//</div>
*/