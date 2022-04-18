import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filteredListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];

  let [year, month] = date.split("-");
  //o ano do item precisa ser = o que eu quero filtrar
  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

const addZeroToDate = (n: number): string => {
  if (n < 10) {
    return `0${n}`;
  }
  return `${n}`;
};

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return ` ${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

export const formatedCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`
};

export const formatNameToNumber = (currentMonth: string): number => {
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  if (currentMonth === 'Janeiro'){
    return 1
  }
  if (currentMonth === 'Fevereiro'){
    return 2
  }
  if (currentMonth === 'Março'){
    return 3
  }
  if (currentMonth === 'Abril'){
    return 4
  }
  if (currentMonth === 'Maio'){
    return 5
  }
  if (currentMonth === 'Junho'){
    return 6
  }
  if (currentMonth === 'Julho'){
    return 7
  }
  if (currentMonth === 'Agosto'){
    return 8
  }
  if (currentMonth === 'Setembro'){
    return 9
  }
  if (currentMonth === 'Outubro'){
    return 10
  }
  if (currentMonth === 'Novembro'){
    return 11
  }
  if (currentMonth === 'Dezembro'){
    return 12
  }
  return 0

}

export const newDateAdjusted = (dateField: string) => {
  let [year, month, day] = dateField.split('-')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}
