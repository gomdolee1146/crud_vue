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
    title: 'Vue3 공부 열심히하기',
    category: '공부',
    isDone: false,
    content: 'Vue.js 공부 꾸준히 하기',
  },
  {
    id: '',
    date: '2024-09-13',
    title: '리스트를 완성해보자!',
    category: '할일',
    isDone: true,
    content: 'TodoList 완성하기! ',
  },
  {
    id: '',
    date: '2024-09-09',
    title: '작업하기!',
    category: '할일',
    isDone: true,
    content: '디테일 페이지 연결하고 css 작업하기',
  },
  {
    id: '',
    date: '2024-09-09',
    title: 'TodoList 확인용',
    category: '할일',
    isDone: true,
    content: '달력페이지 CSS 정리하기',
  },

  {
    id: '',
    date: '2024-09-08',
    title: '포트폴리오 완성하기',
    category: '할일',
    isDone: true,
    content: '컨텐츠 확인하고 추가 기능 넣을 부분 고민해보기',
  },
  {
    id: '',
    date: '2024-09-02',
    title: '투두리스트 css 정리',
    category: '할일',
    isDone: true,
    content: '달력페이지 CSS 정리하기',
  },
];
