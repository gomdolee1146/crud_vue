const today = new Date();
let year = today.getFullYear();
let monthText = today.getMonth() + 1;
let month = monthText.toString().padStart(2, '0');
let dayText = today.getDate();
let day = dayText.toString().padStart(2, '0');

let todayDate = `${year}-${month}-${day}`;

export default [
  {
    id: today,
    date: todayDate,
    title: '타이틀1',
    category: '',
    isDone: false,
    content: '콘1',
  },
  {
    id: '',
    date: '2024-01-02',
    title: '타이틀2',
    category: '',
    isDone: true,
    content: '콘2',
  },
  {
    id: '',
    date: '2024-01-03',
    title: '타이틀3',
    category: '',
    isDone: false,
    content: '콘3',
  },
];
