import ExpenseForm from 'components/NewExpense/ExpenseForm'
import './NewExpense.css'

export default function NewExpense ({ onAddExpense }) {
  function saveExpenseDataHandler (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}
