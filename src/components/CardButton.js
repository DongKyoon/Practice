import { useReducer } from "react";
import styles from "./CardButton.module.css"

/*
const checkButton = (state, action) => {
    console.log("Action.title = " + action.title + ", Action.prevNo = " +action.prevNo + ", Action.prevId = " +action.prevId+ ", Action.btnId = " +action.btnId);
    if ( action.title === action.prevNo) {
        if (action.prevId !== action.btnId) {
            return {btnstate : "unveiled"};  
        }
    }     
    return {btnstate : state.btnstate};
}
*/

const CardButton = (props) => {
    //const [state, setState] = {"veiled"};
    //const [state, dispatch] = useReducer(checkButton, { btnstate: "veiled" });
    /*
    const handleClick = (param) => {
        console.log("param.title = " +param.title + ", param.prevNo = " +param.prevNo + ", param.prevId = " +param.prevId);
        if (param.title == param.prevNo) {
            setState({btnstate: "unveiled"});
        }
    }
    */
    console.log("CardButton("+ props.title + "): state = " + props.btnState + " ,prevNo = " + props.prevNo);
    if (props.btnState === "veiled") {
            return (
                //<div>
                <button onClick={()=>
                            {
                                //dispatch({title: props.title, prevNo: props.prevNo, prevId: props.prevId, btnId: props.btnId}); 
                                if ( (props.title === props.prevNo) && (props.prevId !== props.btnId)){
                                    props.onClickButton(props.title, props.btnId, props.prevId, props.btnId);
                                } else {
                                    props.onClickButton(props.title, props.btnId, -1, -1);
                                }
                            }
                        }
                        id = {props.btnId} key = {props.btnId}
                        className={styles.veiled } > {props.title}  </button>
                //</div>
            );
    } else if (props.btnState === "unveiled") {
        return (
            //<div>
            <button  key = {props.btnId} className={styles.unveiled_button } id = {props.id}> {props.title}   </button>
            //</div>
        );
    } else {
        return (
            //<div>
            <button  key = {props.btnId} className={styles.unveiled_button } id = {props.id}> {props.title}  {props.btnstate}  </button>
            //</div>
        );

    }
};

export  default CardButton;