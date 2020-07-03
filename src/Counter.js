import React, { useState } from 'react';
import styles from './Counter.module.css';
import 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";

function Counter() {

  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(Number(event.target.value));
  };

  const resetValue = (event) => {
    setCount(0)
  };


  return (
<div class="container">
  <div class="row center-align">
    <div class="col s12 m12 l6 xl6">
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title">
          <label for="counter" 
           className={styles.titleCard}>Choose your initial number</label>
          </span>
          <input type="number" id={styles.counter} name="counter"
            onChange={handleChange} value={count}></input>

          <div id={styles.buttonAll}>
            <button class="btn-floating btn-medium waves-effect waves-light green lighten-1"
              onClick={() => setCount(count + 1)} id={styles.buttonAdd}>+1</button>

            <button class="btn-floating btn-medium waves-effect waves-light deep-orange"
              onClick={() => setCount(count - 1)} id={styles.buttonMinus}>-1</button>

            <input type="reset" value="Reset" onClick={resetValue} id={styles.buttonReset}
              class="waves-effect waves-purple btn-small grey lighten-5" href="#"></input>
          </div>
          <p className={styles.text}>Number of click : 
            <span className={styles.numberCount}>
            {count}</span></p>
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
}

export default Counter;
