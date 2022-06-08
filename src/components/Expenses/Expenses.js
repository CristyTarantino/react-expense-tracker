import ExpenseItem from 'components/Expenses/ExpenseItem'
import ExpensesFilter from 'components/Expenses/ExpensesFilter'
import Card from 'components/UI/Card'
import { useEffect, useState } from 'react'
import './Expenses.css'

function Expenses ({ expenses }) {
  const sortedList = expenses.sort((a, b) => a.date.getTime() - b.date.getTime())

  const [filteredExpenseList, setFilteredExpenseList] = useState(sortedList)
  const [filterYear, setFilterYear] = useState(null)

  function filterChangeHandler (year) {
    setFilterYear(year)
  }

  useEffect(() => {
    if (filterYear) {
      setFilteredExpenseList(sortedList.filter(({ date }) => date.getFullYear().toString() === filterYear))
    } else {
      setFilteredExpenseList(sortedList)
    }
  }, [filterYear, sortedList])

  const expenseList = filteredExpenseList
    .map(({ id, title, amount, date }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date}/>
    ))

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      {expenseList}
    </Card>
  )
}

export default Expenses
