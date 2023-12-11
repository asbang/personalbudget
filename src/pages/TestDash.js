import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChartD3 } from "../components/PieChartD3";
import { BarChartD3 } from "../components/BarChartD3";
import { SpentBarChartD3 } from "../components/SpentBarChartD3";

function TestDash() {
  const baseURL = "https://personal-budget-api.onrender.com";
  const [budgetData, setBudgetData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [expenses, setExpenses] = useState(Array(8).fill(""));
  const [budgets, setBudgets] = useState(Array(8).fill(""));
  const [savings, setSavings] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("jwt"));
    axios
      .get(baseURL, "/budget", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setBudgetData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get(baseURL, "/expense", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setExpenseData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

      const calculateSavings = async () => {
        // Your asynchronous logic to calculate savings
        let totalExpenses = expenseData.reduce((sum, item) => sum + (item.spent || 0),0);
        let totalBudget = budgetData.reduce((sum, item) => sum + (item.spent || 0),0);
        let difference = totalBudget - totalExpenses;
        let result;
        if (difference > 0) {
          result = `You saved $${difference} this month!`;
        } else if (difference < 0) {
          result = `You spent $${Math.abs(difference)} over budget this month :(`;
        } else {
          result = `You stuck to the budget with $0 margin, impressive!`;
        }
        setSavings(result);
      };
  
      calculateSavings();
  }, []);

  async function submitExpense(e) {
    e.preventDefault();
    axios
      .post(baseURL, "/add-expense", { expenses })
      .then((res) => {
        window.location.reload();
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  async function submitBudget(e) {
    e.preventDefault();
    axios
      .post(baseURL, "/add-budget", { budgets })
      .then((res) => {
        window.location.reload();
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="Budgets" aria-roledescription="Dashboard Page">
      <h1>{savings}</h1>
      <div className="EditTables">
      <form onSubmit={submitBudget}>
        <br></br>
          {budgets.map((budget, index) => (
            <div key={index}>
              <label>
                Edit Budget:
                <input
                  type="text"
                  placeholder="$$$"
                  value={budget}
                  onChange={(e) => {
                    const updatedBudgets = [...budgets];
                    updatedBudgets[index] = e.target.value;
                    setBudgets(updatedBudgets);
                  }}
                />
              </label>
              <br />
            </div>
          ))}
          <input type="submit" />
        </form>
        <table className="BudgetTable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {budgetData.length === 0 ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              budgetData.map((d, i) => (
                <tr key={i}>
                  <td>{d.title}</td>
                  <td>{d.budget}</td>
                </tr>
              ))
            )}
          </tbody>
          <br></br>
          <caption>
          Budgets
        </caption>
        </table>
        <form onSubmit={submitExpense}>
          <br></br>
          {expenses.map((expense, index) => (
            <div key={index}>
              <label>
                Edit Expenses:
                <input
                  type="text"
                  placeholder="$$$"
                  value={expense}
                  onChange={(e) => {
                    const updatedExpenses = [...expenses];
                    updatedExpenses[index] = e.target.value;
                    setExpenses(updatedExpenses);
                  }}
                />
              </label>
              <br />
            </div>
          ))}
          <input type="submit" />
        </form>
        <table className="ExpenseTable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Spent</th>
            </tr>
          </thead>
          <tbody>
            {expenseData.length === 0 ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              expenseData.map((d, i) => (
                <tr key={i}>
                  <td>{d.title}</td>
                  <td>{d.spent}</td>
                </tr>
              ))
            )}
          </tbody>
          <br></br>
          <caption>
          Expenses
        </caption>
        </table>
        <div id="pieChart" aria-roledescription="Budget Pie Chart">
        {budgetData.length > 0 && <PieChartD3 data={budgetData} />}
      </div>
      </div>
      
      <div className="bar-charts" aria-roledescription="Expenses Bar Chart">
      <div id="spentBarChart">
        {expenseData.length > 0 && <SpentBarChartD3 data={expenseData} />}
      </div>
      <div id="barChart" aria-roledescription="Expenses Bar Chart">
        {budgetData.length > 0 && <BarChartD3 data={budgetData} />}
      </div>
      </div>
    </div>
  );
}

export default TestDash;
