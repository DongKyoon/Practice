import React, { useState , useRef, useEffect } from 'react';
import Modal from 'react-modal';
import './GameMain.css';
import CardButton from '../components/CardButton'
import MyWatch from '../components/Watch'
import './MessageBox.css';

const GameMain = () => {
  const [H_TILES, setColumns] = useState(5);
  const [V_TILES, setRows] = useState(4);
  const [prevId, setClickedId] = useState(-1);
  const [prevNumber, setClickedNumber] = useState("-1");
  const [score, setScore] = useState(100);
  const [unveiledTiles, setCount] = useState(0);
  const [resultPopup, setResultPopup] = useState(false);
  const [op, setOp] = useState("stop");
  //initializer 한번만 실행하기 위해
  let ref = useRef(0);

  const buttonTiles = [];
  //const [titleNumbers,setNumbers] = useState([]);
  const [titleInfos,setTileInfos] = useState([]);

  const startHandler = () => {
    setOp("run");
  }
  ////////////////////////
  // Click Handler CardButton에서 불림
  const clickHandler = (buttonNumber,btnId,tile1, tile2) =>{
    if (tile1 > 0) {
      titleInfos[tile1].btnState = "unveiled";
      titleInfos[tile2].btnState = "unveiled";
      setClickedNumber("-1");
      setClickedId(-1);
      if (unveiledTiles >= H_TILES*V_TILES -2 ) {   //Clear Game
        //clearInterval(timerId);
        //timerId.current = null;
        setOp("stop");
        setResultPopup(true);
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
        }  //for (let x
        } //for (let y 
        setTileInfos(tempNumbers);
    } 
    // InitializeTile
    ////////////////////

  ///////////////////
  // Strt new Game
  const startNewGame = (columns,rows) => {
    setColumns(columns);
    setRows(rows);
    setClickedNumber("-1");
    setClickedId(-1);
    setScore(100);
    setCount(0);
    initializeTile(columns, rows);
    setOp("start");
}
  // Start New Game
  /////////////////////////

  /////////////////////////
  // 최초 자동 실행
  useEffect(() => {
    ref.current = ref.current + 1;
    console.log(`setup 함수 실행(${ref.current})`);
    if (ref.current === 1) {
      initializeTile(5, 4);
    }
  }, []);
  // 최초 자동 실행
  //////////////////////////


  for (let y = 0; y < V_TILES; y++) {
    buttonTiles.push(<br />);
    for (let x = 0; x < H_TILES; x++) {
      let i = y*H_TILES + x;
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
      <CardButton key={i} btnId={i} title={tile.number}  btnState={tile.btnState} prevNo={prevNumber} prevId={prevId} onClickButton={()=>clickHandler(tile.number,i,t1,t2)}/> 
      </span>);
    }
  }
  //if (op === "ready") {
  //   setOp("start");
  //} else if (op === "start") {
  //  setOp("run");
  //} 
  return (
    <div className="GameMain">
        <h1> Find Pairs</h1>
        <h2> High Score : {score} </h2>
        <h2> Score : {score} </h2>
        <span className='BtnSpan'><button onClick={()=>startNewGame(4,3)}>New Game - easy</button></span>
        <span className='BtnSpan'><button onClick={()=>startNewGame(5,4)}>New Game - normal</button></span>
        <span className='BtnSpan'><button onClick={()=>startNewGame(5,8)}>New Game - hard</button></span>
        <MyWatch operaion = {op} handler={startHandler}/>

        <br></br>
        {buttonTiles}
        <React.Fragment>
            <Modal className="MessageBox" isOpen={resultPopup}>
                Clear Mission! <br></br> Your Score is {score} <br></br> 
                <div>
                    <button onClick={()=> setResultPopup(false)}>확인</button>
                </div>
            </Modal>
        </React.Fragment>
    </div>
  );
}

export default GameMain;
