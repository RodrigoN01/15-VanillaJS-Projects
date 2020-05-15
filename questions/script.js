// USING SELECTORS INSIDE THE ELEMENT
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach(item => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

// TRAVERSING THE DOM

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(btn => {
//   btn.addEventListener('click', e => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });
