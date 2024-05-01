const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

let todayDate = `${year}-${month}-${day}`

export default [
  {
    date: todayDate,
    title: '타이틀1',
    category: '',
    color: '',
    isDone: false,
    content: '콘1'
  },
  {
    date: '2024-01-02',
    title: '타이틀2',
    category: '',
    color: '',
    isDone: false,
    content: '콘2'
  },
  {
    date: '2024-01-03',
    title: '타이틀3',
    category: '',
    color: '',
    isDone: false,
    content: '콘3'
  }
]