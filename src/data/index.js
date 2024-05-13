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
    title: 'TodoList★',
    category: '공부',
    isDone: false,
    content: 'Vue.js 공부 꾸준히 하기',
  },
  {
    id: '',
    date: '2024-05-13',
    title: 'TodoList5',
    category: '할일',
    isDone: true,
    content: 'TodoList 완성하기! ',
  },
  {
    id: '',
    date: '2024-05-09',
    title: 'TodoList4',
    category: '할일',
    isDone: true,
    content: '디테일 페이지 연결하고 css 작업하기',
  },
  {
    id: '',
    date: '2024-05-09',
    title: 'TodoList3',
    category: '할일',
    isDone: true,
    content: '달력페이지 CSS 정리하기',
  },

  {
    id: '',
    date: '2024-05-08',
    title: 'TodoList2',
    category: '할일',
    isDone: true,
    content: '메인페이지 할 일 목록 보여주기',
  },
  {
    id: '',
    date: '2024-05-02',
    title: 'TodoList1',
    category: '할일',
    isDone: true,
    content: '달력페이지 CSS 정리하기',
  },
];
