import * as C from "./styles";
import { formatNameToNumber } from "../../helpers/datefilter";
import { ResumeItem } from "../resumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    const year = currentMonth.split(" ")[2];
    const month = currentMonth.split(" ")[0];
    const numberMonth = formatNameToNumber(month);

    let currentDate = new Date(parseInt(year), numberMonth - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const year = currentMonth.split(" ")[2];
    const month = currentMonth.split(" ")[0];
    const numberMonth = formatNameToNumber(month);
    let currentDate = new Date(parseInt(year), numberMonth + 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{currentMonth}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
