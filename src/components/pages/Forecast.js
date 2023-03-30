import React from "react";
import { useContext } from "react";
import { DiagramMaker } from "../../App.js";
import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'
import moment from 'moment';

let time = moment();
let presentMonth = time.format("MMMM YYYY");
let monthOne = moment().add(-1, "months").format("MMMM YYYY");
let monthTwo = moment().add(1, "months").format("MMMM YYYY");
let monthThree = moment().add(2, "months").format("MMMM YYYY");
let monthFour = moment().add(3, "months").format("MMMM YYYY");
let monthFive = moment().add(4, "months").format("MMMM YYYY");
const balance = localStorage.getItem("balance"); 
const balanceInteger = parseInt(balance);
// const demoSavings = 5000;

function Forecast() {
  const [pieState] = useContext(DiagramMaker);
  return (
    <div>
      <h1>{pieState.name}'s Financial Forecast</h1>
      <LineChart data={LineGraph()} />
    </div>
  );
}

function LineGraph() {
  const [pieState] = useContext(DiagramMaker);
  return([[monthOne, pieState.savings], 
      [presentMonth, balanceInteger + pieState.savings],
      [monthTwo, balanceInteger * 2 + pieState.savings], 
      [monthThree, balanceInteger * 3 + pieState.savings], 
      [monthFour, balanceInteger * 4 + pieState.savings], 
      [monthFive, balanceInteger * 5 + pieState.savings]])
}

export default Forecast;
