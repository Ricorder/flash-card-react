const Theme = require('./models/themes')
const Cards = require('./models/cards')
const { connect, disconnect } = require('mongoose');
connect('mongodb://localhost:27017/FlashCardsReact', { useNewUrlParser: true, useUnifiedTopology: true });

const themes = [
  {
    name: 'Корпоратив',
  },
  {
    name: 'География',
  },
  {
    name: 'История Рима',
  },
];

const cards = [
  {
    question: 'Когда у человека отсутствует в комнате голова?',
    answers: ['Когда он выглядывает из окна', 'Когда у него нет головы', 'Когда его нет в комнате' ],
    rightAnswer: 'Когда он выглядывает из окна',
    theme: 'Корпоратив'
  },
  {
    question: 'День и ночь – чем они оканчиваются?',
    answers: ['Добрым утром', 'Подъёмом', 'Мягким знаком'],
    rightAnswer: 'Мягким знаком',
    theme: 'Корпоратив'
  },
  {
    question: 'Как сделать так, чтобы у четырех мальчишек было по одному сапогу?',
    answers: ['Двоих разуть', 'Разуть, снять с каждого по сапогу', 'Всем стоять на одной ноге'],
    rightAnswer: 'Разуть, снять с каждого по сапогу',
    theme: 'Корпоратив'
  },
  {
    question: 'Бывает ли такое: ворон летит, а пес на хвосте сидит?',
    answers: ['Усли упал на хвоста', 'Если пёс легче ворона', 'Нет, пес сидит на своем хвосте'],
    rightAnswer: 'Нет, пес сидит на своем хвосте',
    theme: 'Корпоратив'
  },
  {
    question: 'В каком месяце года разговорчивая Дашенька меньше болтает?',
    answers: ['В самом коротком – феврале', 'В январе из-за праздников', 'В июле в отпуске'],
    rightAnswer: 'В самом коротком – феврале',
    theme: 'Корпоратив'
  },
  {
    question: 'Какой узел не развязывается?',
    answers: ['Морской', 'Железнодорожный', 'Двойной'],
    rightAnswer: 'Железнодорожный',
    theme: 'Корпоратив'
  },
  {
    question: 'Реально ли пингвину и белому медведю встретиться в природе?',
    answers: ['Не реально', 'Реально', 'Фиг его знает'],
    rightAnswer: 'Не реально',
    theme: 'География'
  },
  {
    question: 'Климатическая зона, напоминающая огромный пляж?',
    answers: ['Барханы', 'Пустыня', 'Экватриальная'],
    rightAnswer: 'Пустыня',
    theme: 'География'
  },
  {
    question: 'Наиболее плодородная почва',
    answers: ['Песок', 'Глина', 'Чернозём'],
    rightAnswer: 'Чернозём',
    theme: 'География'
  },
  {
    question: 'В какой стране находится одно из оставшихся семи чудес света?',
    answers: ['В Италии', 'В Египте', 'В Греции'],
    rightAnswer: 'В Египте',
    theme: 'География'
  },
  {
    question: 'Какой остров можно надеть на голову?',
    answers: ['Сомбреро', 'Панама', 'Фата'],
    rightAnswer: 'Сомбреро',
    theme: 'География'
  },
  {
    question: 'Назовите самую длинную речку?',
    answers: ['Миссисипи', 'Амазонка', 'Нил'],
    rightAnswer: 'Нил',
    theme: 'География'
  },
  {
    question: 'Племя, которое жило на берегу реки Тибр, там где был основан Рим?',
    answers: ['Этруски', 'Латины', 'Галлы'],
    rightAnswer: 'Латины',
    theme: 'История Рима'
  },
  {
    question: 'Завоёванные Римом области имели название?',
    answers: ['Царство варваров', '“Наша земля”', 'Провинции'],
    rightAnswer: 'Провинции',
    theme: 'История Рима'
  },
  {
    question: 'Каждый год в республиканском Риме избирали?',
    answers: ['Императоров', 'Консулов', 'Сенаторов'],
    rightAnswer: 'Консулов',
    theme: 'История Рима'
  },
  {
    question: 'Слово “вето”, которое произносили народные трибуны, означало:',
    answers: ['Приветствую', 'Запрещаю', 'Разрешаю'],
    rightAnswer: 'Запрещаю',
    theme: 'История Рима'
  },
  {
    question: 'Патрициями называют:',
    answers: ['Потомков греческих колонистов в Италии', 'Потомков основателей Рима', 'Потомков племени этрусков'],
    rightAnswer: 'Потомков основателей Рима',
    theme: 'История Рима'
  },
  {
    question: 'Что называется триумфом:',
    answers: ['Строительство триумфальной арки', 'Торжественное богослужение в Риме', 'Торжественный въезд в Рим полководца – победителя'],
    rightAnswer: 'Торжественный въезд в Рим полководца – победителя',
    theme: 'История Рима'
  },
];

async function main() {
  async function themesFabric() {
    await Theme.create(themes);
  }
  
  async function cardsFabric() {
    await Cards.create(cards);
  }

  await themesFabric()
  await cardsFabric()


  const allThemes = await Theme.find()
  const allCards = await Cards.find()

  await Theme.findOneAndUpdate({ _id: allThemes[0]._id }, { $push: { questions: allCards[0]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[0]._id }, { $push: { questions: allCards[1]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[0]._id }, { $push: { questions: allCards[2]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[0]._id }, { $push: { questions: allCards[3]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[0]._id }, { $push: { questions: allCards[4]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[0]._id }, { $push: { questions: allCards[5]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[1]._id }, { $push: { questions: allCards[6]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[1]._id }, { $push: { questions: allCards[7]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[1]._id }, { $push: { questions: allCards[8]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[1]._id }, { $push: { questions: allCards[9]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[1]._id }, { $push: { questions: allCards[10]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[1]._id }, { $push: { questions: allCards[11]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[2]._id }, { $push: { questions: allCards[12]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[2]._id }, { $push: { questions: allCards[13]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[2]._id }, { $push: { questions: allCards[14]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[2]._id }, { $push: { questions: allCards[15]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[2]._id }, { $push: { questions: allCards[16]._id }}, { new: true },)
  await Theme.findOneAndUpdate({ _id: allThemes[2]._id }, { $push: { questions: allCards[17]._id }}, { new: true },)

  const allThemesPopulate = await Theme.find()
  const allCardsPopulate = await Cards.find()
}

main().then(() => disconnect())
