import React ,{ useState }from 'react';
import './App.css';

const App = () =>{
  const [result,setResult] = useState("");
 
  const clickBtn =(e)=> {
      setResult(result.concat(e.target.name));
    }
 
  const clickAC=() =>{
  setResult("");
  }
    
  const clickDEL=() =>{ 
    try{
      setResult(result.slice(0,-1));
      }catch(err){
      setResult('')
      }
 
  }

  const clickres=()=>{
    try{
      // eslint-disable-next-line 
    setResult(eval(result).toString());
    }catch(err){
    setResult('Click AC !')
    }
  }
return (
    <>
   
    <h1>Calculator App</h1>
    <div className='container'>
      <form>
        <input placeholder='0'type='text'value={result}></input>
      </form>

      <div className="keys">
  

      <button className='highlight'onClick={clickAC} >AC</button> 
      <button   className='highlight'onClick={clickDEL} >DEL</button>
      <button   className='highlight'name='%' onClick={clickBtn}>%</button>
      <button   className='highlight' name='/' onClick={clickBtn}>&divide;</button>
      
 
     
      <button name='7' onClick={clickBtn}>7</button>
      <button name='8'  onClick={clickBtn}>8</button>
      <button  name='9' onClick={clickBtn}>9</button>
      <button   className='highlight'name='+' onClick={clickBtn}>+</button>
      

      <button name='4' onClick={clickBtn}>4</button>
      <button name='5' onClick={clickBtn}>5</button>
      <button name='6' onClick={clickBtn}>6</button>
      <button   className='highlight'name='-' onClick={clickBtn}>-</button>

      <button name='1' onClick={clickBtn}>1</button>
      <button name='2' onClick={clickBtn}>2</button>
      <button name='3' onClick={clickBtn}>3</button>
      <button  className='highlight'name='*' onClick={clickBtn}>&times;</button>

      <button name='00' onClick={clickBtn}>00</button>
      <button name='0' onClick={clickBtn}>0</button>
      <button name='.' onClick={clickBtn}>.</button>
      <button  className='highlight' name='=' onClick={clickres} id='res'>=</button>
</div>
    </div>
   
     
  </>
   
  );
}

export default App;
