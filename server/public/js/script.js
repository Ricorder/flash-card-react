const header = document.querySelector('.header');

header.addEventListener('click', async (el) => {
  el.preventDefault()
  console.log(el.target.innerText);
    const response = await fetch(`/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({theme : el.target.innerText}),
    }
  );
  const serverResponse = await response.json();
  console.log(serverResponse);
  console.log(serverResponse.question.answers[0]);

  const questionBlock = document.querySelector('.question');
  const question = document.createElement('div');
  questionBlock.append(question)  
  question.innerText = serverResponse.question.question;

  const answer1 = document.querySelector('.answer');
  const answer1Child = document.createElement('div');
  answer1.append(answer1Child)
  answer1Child.innerHTML = `<a href="/">${serverResponse.question.answers[0]}</a><br>`;

  const answer2 = document.querySelector('.answer');
  const answer2Child = document.createElement('div');
  answer2.append(answer2Child)
  answer2Child.innerHTML = `<a href="/">${serverResponse.question.answers[1]}</a><br>`;

  const answer3 = document.querySelector('.answer');
  const answer3Child = document.createElement('div');
  answer3.append(answer3Child)
  answer3Child.innerHTML = `<a href="/">${serverResponse.question.answers[2]}</a><br>`;






  // questionBlock.setAttribute('class', 'questionBlock')
  // question.setAttribute('class', 'question')
  // questionBlock.innerHTML = question
  // console.log(serverResponse.question.question);
      // console.log(newDiv);
  // question = document.querySelector('.question');
  // const secondDiv = document.createElement('div')
  // newDiv.append(secondDiv)

})
