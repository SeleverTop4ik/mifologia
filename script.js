const prophecies = [
    "Ти знайдеш свою долю у найнеочікуваніший момент.",
    "Ти отримаєш велике благословення.",
    "На тебе чекає несподівана подорож.",
    "Будь уважний: доля готує тобі випробування.",
    "Ти зустрінеш людину, яка змінить твоє життя.",
    "Боги сприятимуть тобі в твоїх починаннях.",
    "Ти отримаєш несподівану звістку.",
    "Доля готує для тебе цікаву пригоду.",
    "Скоро здійсниться одна з твоїх мрій.",
    "Будь уважний: можливість вже поруч.",
    "Твої зусилля принесуть велику нагороду.",
    "Боги прихильні до тебе – але будь обережний з вибором друзів.",
    "Твоя подорож принесе великі зміни у життя.",
    "Справжня сила – в знаннях. Вчися, щоб досягти величі.",
    "Боги випробують тебе, але ти зможеш витримати будь-яке випробування."
  ];

const prophecyText = document.querySelector(".prophecy");

let isClicked = false

prophecyText.addEventListener("click", () => {
    if (!isClicked){
    const randomIndex = Math.floor(Math.random() * prophecies.length);
    prophecyText.innerText = prophecies[randomIndex];
    isClicked = true
    }
  });

  const lot = [
    "Грецький воїн, який боровся під Троєю.",
     "Єгипетський жрець, що служив Ра.",
     "Скандинавський берсерк, який загинув у бою й потрапив до Вальгалли.",
     "Друїд, що читав пророцтва в лісах кельтів.",
     "Ацтекський жрець, що приносив жертви Сонцю.",
     "Мандрівний філософ Стародавньої Греції.",
     "Майстер бойових мистецтв у Китаї часів династії Шан.",
     "Жінка-воїн амазонка, що кидала виклик імперіям.",
     "Індійський мудрець, що медитував у Гімалаях.",
     "Римський легіонер у поході на північ.",
     "Шаман у племені сибірських мисливців.",
     "Провидець у храмі Аполлона в Дельфах.",
     "Майстер меча в Японії періоду Хейан.",
     "Оракул у храмі Ісіди в Єгипті.",
     "Захисник Афін, який стояв поруч із Періклом.",
     "Арабський мудрець, що вивчав зорі в пустелі.",
     "Кельтський герой, який приборкав чудовисько.",
     "Воїн із давньої Месопотамії, що будував зіккурат.",
     "Фінікійський мореплавець, який відкривав нові землі.",
     "Богиня чи бог у тілі смертного, що прийшов випробувати людей."
   ];
 
 const prophecyText = document.querySelector(".lot");
 
 let isClicked = false
 
 prophecyText.addEventListener("click", () => {
     if (!isClicked){
     const randomIndex = Math.floor(Math.random() * prophecies.length);
     prophecyText.innerText = prophecies[randomIndex];
     isClicked = true
     }
   });
