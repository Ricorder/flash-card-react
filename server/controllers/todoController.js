const Cards = require("../models/cards");
const Theme = require("../models/themes");

let currQuestionArr = [];
let currQuestionIndex = 0;
let statRightQuestion = 0;
let result = 0

async function allThemeRender (req, res) {
  const theme = await Theme.find();
  result = 0;
  res.render('main', theme);
};

async function addCard (req, res) {
  const {theme} = req.body;
  const rightTheme = await Cards.find({ theme: theme });
  console.log(rightTheme);
  const index = 0;
  res.json({ question: rightTheme[index], index: index + 1 });
};

async function finalCard (req, res) {
  const theme = req.params.name
  const index = Number(req.params.index);
  const userAnswer = req.body.input;
  
  if (index === 4) {
    res.json({theme})
  }else {
    const rightTheme = await Cards.find({ theme });
    if (index === 3) {
      const lastCheck = userAnswer === rightTheme[index - 1].answer;
      lastCheck ? result += 1 : null
      res.json({question: { question: 'И ответ на последний вопрос', theme }, index: index + 1, validation: lastCheck ? "Угадали" : "Не угадали", })
    }else {
      if (userAnswer === rightTheme[index - 1].answer) {
        result += 1;
        res.json({ question: rightTheme[index], index: index + 1, validation: "Угадали",})
      }else {
        res.json({question: rightTheme[index], index: index + 1, validation: "Не угадали",})
      }
    }
  }
};

async function resultRender (req, res) {
  const theme = req.params.name;
  res.json({ name: theme, score: result })
};

module.exports = {
  allThemeRender,
  addCard,
  finalCard,
  resultRender,
};
