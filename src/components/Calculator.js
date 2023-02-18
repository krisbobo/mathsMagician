import React from 'react';
import calculate from '../logic/calculate';
import style from './Calculator.module.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttonName = e.target.textContent;
    this.setState((prevState) => calculate(
      {
        total: prevState.total,
        next: prevState.next,
        operation: prevState.operation,
      },
      buttonName,
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');

    return (
      <div className={style.calculator}>
        <div className={style.screen}>{result}</div>
        <div className={style.calculatorButtons}>
          <button type="button" onClick={this.handleClick}>AC</button>
          <button type="button" onClick={this.handleClick}>+/-</button>
          <button type="button" onClick={this.handleClick}>%</button>
          <button type="button" onClick={this.handleClick}>&divide;</button>
          <button type="button" onClick={this.handleClick}>7</button>
          <button type="button" onClick={this.handleClick}>8</button>
          <button type="button" onClick={this.handleClick}>9</button>
          <button type="button" onClick={this.handleClick}>x</button>
          <button type="button" onClick={this.handleClick}>4</button>
          <button type="button" onClick={this.handleClick}>5</button>
          <button type="button" onClick={this.handleClick}>6</button>
          <button type="button" onClick={this.handleClick}>-</button>
          <button type="button" onClick={this.handleClick}>1</button>
          <button type="button" onClick={this.handleClick}>2</button>
          <button type="button" onClick={this.handleClick}>3</button>
          <button type="button" onClick={this.handleClick}>+</button>
          <button type="button" onClick={this.handleClick}>0</button>
          <button type="button" onClick={this.handleClick}>.</button>
          <button type="button" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
