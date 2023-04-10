const questions = document.querySelectorAll('.ques');
console.log(questions);

questions.forEach((q) => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle('show');
    const plus = q.querySelector('.fa-plus');
    plus.classList.toggle('rotate');
  });
});