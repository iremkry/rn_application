export const getMonthlyExpenses = async () => {
  try {
    const response = await fetch('http://localhost:3000/expenses');
    const expenses = await response.json();
    console.log('Expenses:', expenses);

    const labels = [];
    const values = [];

    const currentMonth = new Date().getMonth(); // Zero-based month (0 = January, 11 = December)
    const currentYear = new Date().getFullYear();

    for (let i = 1; i <= 31; i++) {
      labels.push(i.toString());
      const dayExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate.getDate() === i &&
          expenseDate.getMonth() === currentMonth &&
          expenseDate.getFullYear() === currentYear
        );
      });

      const dayAmount = expenses.filter(expense => {
        const expenseAmount = parseFloat(expense.amount);
        console.log('Expense amount:', expenseAmount);
      })
      values.push(dayAmount);

/*       const dailyTotal = dayExpenses.reduce((sum, expense) => {
        const amount = parseFloat(expense.amount);
        if (isNaN(amount)) {
          console.log(`Invalid amount for expense ID ${expense.id}: ${expense.amount}`);
          console.log('Skipping this expense', amount);
          return sum;
        }
        return sum + amount;
      }, 0);

      console.log(`Total for day ${i}:`, dailyTotal);
      values.push(dailyTotal); */
    }

    return { labels, values };
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return { labels: [], values: [] };
  }
};
