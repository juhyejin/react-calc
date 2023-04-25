import './App.css'
import Btn from "./component/Btn/Btn.jsx";
import {useState} from "react";
import Input from "./component/Input/Input.jsx";

function App() {
  const [num, setNum] = useState(0);
  const [inputNum, setInputNum] = useState({
    firstNum : 0,
    secondNum: 0,
  });

  const handleClick = (e) => {
    const calc = e.target.innerText;
    let calcNum = 0;

    const firstNum = Number(inputNum.firstNum);
    const secondNum = Number(inputNum.secondNum);

    switch (calc){
      case '+' :
        calcNum = firstNum +secondNum
        break
      case '-' :
        calcNum = firstNum - secondNum
        break
      case '*' :
        calcNum = firstNum * secondNum
        break
      case '/' :
        calcNum = firstNum / secondNum
    }
    setNum(calcNum)
  }

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setInputNum({...inputNum, [name]: value})
  }

  return (
    <>
      <h4>계산기</h4>

      <div>
        <Input value={inputNum.firstNum} name="firstNum" change={handleChange}/>
        <Input value={inputNum.secondNum} name="secondNum" change={handleChange}/>
      </div>

      <Btn BtnName='+' click={handleClick}/>
      <Btn BtnName='*' click={handleClick}/>
      <Btn BtnName='-' click={handleClick}/>
      <Btn BtnName='/' click={handleClick}/>

      <div>
        {num}
      </div>
    </>
  )
}

export default App
