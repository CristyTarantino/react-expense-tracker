import Card from './Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses ({ expenses }) {
  const expenseList = expenses.map(({ id, title, amount, date }) => (
    <ExpenseItem key={id} title={title} amount={amount} date={date}/>
  ))

  return (
    <Card className="expenses">
      {expenseList}
    </Card>)
}
