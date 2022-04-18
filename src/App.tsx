import * as C from "./app.styles";
import { Item } from "./types/Item";
import { Category } from "./types/category";
import { categories } from "./data/categories";
import { itens } from "./data/itens";
import { useState, useEffect } from "react";
import { getCurrentMonth, filteredListByMonth } from "./helpers/datefilter";
import { TableArea } from "./components/tableArea";
import { InfoArea } from "./components/infoArea";
import { formatedCurrentMonth } from "./helpers/datefilter";
import { InputArea } from "./components/inputArea";


const App = () => {
  const [list, setList] = useState(itens); //lista geral
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredlist, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filteredListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in filteredlist) {
      if (categories[filteredlist[i].category].expense) {
        expenseCount += filteredlist[i].value;
      } else {
        incomeCount += filteredlist[i].value;
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredlist]);

  const handleAddItem = (item: Item) => {
 let newList =  [...list]
 newList.push(item)
 setList(newList)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={formatedCurrentMonth(currentMonth)}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredlist} />
      </C.Body>
    </C.Container>
  );
};

export default App;
