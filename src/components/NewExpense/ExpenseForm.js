import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm ({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  function titleChangeHandler (event) {
    setEnteredTitle(event.target.value)
  }

  function amountChangeHandler (event) {
    setEnteredAmount(event.target.value)
  }

  function dateChangeHandler (event) {
    setEnteredDate(event.target.value)
  }

  function submitHandler (event) {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="enteredTitle"
            type="text"
            onChange={titleChangeHandler}
            // This helps us make sure that the value prop of the input field will never be set to null.
            value={enteredTitle || ''}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="enteredAmount"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount || ''}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="enteredDate"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate || ''}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
