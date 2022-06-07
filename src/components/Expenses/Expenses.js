import ExpenseItem from 'components/Expenses/ExpenseItem'
import Card from 'components/UI/Card'
import './Expenses.css'

export default function Expenses ({ expenses }) {
  const expenseList = expenses
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map(({ id, title, amount, date }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date}/>
    ))

  return (
    <Card className="expenses">
      {expenseList}
    </Card>
  )
}
