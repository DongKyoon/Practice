import React, { useState , useRef, useEffect } from 'react';

const MyWatch = (props) => {

    const [min,setMin] = useState(0);
    const [sec,setSec] = useState(0);
    //const [currentOp, setOp] = useState("stop");

    const elapsedTime = useRef(0);
    const timerId = useRef(null);
    const currentOp = useRef("stop");
    /////////////////////////
    // 최초 자동 실행
    useEffect(() => {
        if ( timerId.current === null) {
            timerId.current = setInterval(()=>{
                setMin(Math.floor(elapsedTime.current / 60));
                setSec(elapsedTime.current % 60);
                if (currentOp.current !== "stop") {
                    elapsedTime.current += 1;
                }
            }, 1000);     
        }
        currentOp.current = "run";
    }, []);
    // 최초 자동 실행
    //////////////////////////
    console.log("currentOp = "+currentOp.current + ",props.operaion =" + props.operaion);
   if  ( props.operaion === "stop") {
        console.log("stop : elapsedTime=" + elapsedTime.current);
    } else if ( props.operaion === "start") {
        console.log("start : elapsedTime=" + elapsedTime.current);
        elapsedTime.current = 0;
        props.handler();
    }
    currentOp.current = props.operaion;




    return(
        <div>
            {min} : {sec}
        </div>
    );
}
export default MyWatch;