import ExpenseDate from 'components/Expenses/ExpenseDate'
import Card from 'components/UI/Card'
import { useState } from 'react'
import './ExpenseItem.css'

export default function ExpenseItem ({ title: titleProp, amount, date }) {
  const [title, setTitle] = useState(titleProp)

  function clickHandler (newTitle) {
    setTitle(newTitle)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}
