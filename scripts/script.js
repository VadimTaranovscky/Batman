"use strict";

const linksListElement = document.querySelector(".tabs ul");
const posterElement = document.querySelector(".poster");
const sybscribeFormElement = document.querySelector(".sybscribe-form");
const mainInfoElement = document.querySelector(".main-info");
const bookMark = linksListElement.lastElementChild;
const searchInput = document.querySelector(".search-input");
const movieBlockList = document.querySelector(".movie-block-list");
const movieList = movieBlockList.querySelector(".movie-list");

const movies = [
  "Человек паук",
  "Халк",
  "Капитан америка",
  "Ограбление по итальянски",
  "11 друзей оушена",
  "8 подруг оушена",
  "Мулан",
  "Тор",
  "Сокровище нации",
  "Джокер",
  "Меч короля артура",
  "Том и джерри",
  "Гадкий я",
  "Миньоны",
  "Полный расколбас"
];

const actorsInfo = [
  {
    id: 0,
    src: "./img/Robert.jpg",
    alt: "Robert Pattison",
    name: "Роберт Паттисон"
  },
  {
    id: 1,
    src: "./img/Zoi.jpg",
    alt: "Zoi Kravetz",
    name: "Зои Кравиц"
  },
  {
    id: 2,
    src: "./img/Kolin.jpg",
    alt: "Robert Pattison",
    name: "Kolin Pharell"
  },
  {
    id: 3,
    src: "./img/Piter.jpg",
    alt: "Piter Sarsgaard",
    name: "Питер Сарсгаард"
  },
  {
    id: 4,
    src: "./img/Poul.jpg",
    alt: "Poul Dano",
    name: "Пол Дано"
  },
  {
    id: 5,
    src: "./img/Endi.jpg",
    alt: "Endi Serkis",
    name: "Энди Серкис"
  },
  {
    id: 6,
    src: "./img/Jeff.jpg",
    alt: "Jeffri Rait",
    name: "Джеффри Райт"
  },
  {
    id: 7,
    src: "./img/John.jpg",
    alt: "John Turturo",
    name: "Джон Туртуро"
  },
  {
    id: 8,
    src: "./img/Maks.jpg",
    alt: "Maks Karver",
    name: "Макс Карвер"
  },
  {
    id: 9,
    src: "./img/Conn.jpg",
    alt: "Conn Onill",
    name: "Кон Онилл"
  }
];

$(window).resize(() => {
  if (innerWidth < 765) {
    posterElement.src = "./img/mobile-poster.png";
  } else {
    posterElement.src = "./img/cover.jpg";
  }
});

const createActorCard = actors => {
  const { src, alt, name } = actors;
  return `
  <div class="actor-card">
    <img src=${src} alt=${alt}>
    <h5>${name}</h5>
  </div>
  `;
};

const createActorsWrapper = () => {
  return `
  <div class="actors-cards"></div>
  `;
};

const createNotFoundBlock = () => {
  return `
  <div class="empty-info">
  <h2>К сожалению, в данном разделе пока нет информации</h2>
  <img src="./img/sad.svg" alt="smile">
  </div>
  `;
};

const createDescription = () => {
  return `<p>
    Предстоящий американский супергеройский фильм, основанный на
    одноимённых комиксах издательства DC Comics. Картина будет
    выпущена компанией Warner Bros. и будет перезагрузкой всех
    фильмов о Бэтмене.
  </p>
  <br />
  <p>
    Фильм является десятым по счёту фильмом из Расширенной
    вселенной DC. Режиссёром и сценаристом фильма выступит Мэтт
    Ривз, а главную роль исполнит Роберт Паттинсон.
  </p>
  <br />
  <h3>Разработка</h3>
  <br />
  <p>
    В октябре 2014 года студия Warner Bros. объявила, что в
    разработке находится сольный фильм о Бэтмене, роль которого
    вновь исполнит Бен Аффлек. В июле 2015 года сообщалось, что
    Аффлек ведёт переговоры со студией по поводу постановки фильма
    и совместного написания сценария с Джеффом Джонсом
  </p>
  <br />
  <p>
    После выхода фильма «Бэтмен против Супермена: На заре
    справедливости» руководитель агентства WME Патрик Уайтсел
    подтвердил, что Аффлек написал сценарий для сольного фильма о
    Бэтмене и в настоящий момент его рассматривают студия и DC. В
    мае 2016 года Джереми Айронс подтвердил, что он появится в
    фильме про Тёмного Рыцаря.
  </p>
  <br />
  <p>
    На Comic-Con в Сан-Диего в июле 2016 года было официально
    подтверждено, что Аффлек станет режиссёром картины. В августе
    2016 года на одной из страниц Аффлека в социальных сетях был
    опубликован тестовый материал, в котором был показан персонаж
    Детстроук. 8 сентября 2016 года Джефф Джонс подтвердил, что
    Джо Манганьелло сыграет наёмника Слейда Уилсона, который,
    возможно, станет главным злодеем фильма.
  </p>`;
};

const createRecention = () => {
  return `
    <div class="feedback-card">
    <div class="user-info">
      <span>Example</span>
      <span>Example</span>
    </div>
    <div class="message">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatibus at assumenda, amet a culpa, repudiandae earum fugiat, deleniti omnis est voluptas facere accusamus repellat.
    </div>
  </div>
    `;
};

const clearParentElement = () => {
  $(mainInfoElement)
    .find("br")
    .remove();
  const mainInfoKids = mainInfoElement.children.length;
  for (let i = 0; i < mainInfoKids; i++) {
    mainInfoElement.removeChild(mainInfoElement.lastElementChild);
  }
  return true;
};

const sortLinkByName = linkText => {
  const clear = clearParentElement();
  if (linkText.toLowerCase() === "рецензии" && clear === true) {
    for (let i = 0; i < 5; i++) {
      mainInfoElement.insertAdjacentHTML("afterbegin", createRecention());
    }
  }
  if (linkText.toLowerCase() === "описание" && clear === true) {
    mainInfoElement.insertAdjacentHTML("afterbegin", createDescription());
  }
  if (linkText.toLowerCase() === "актеры" && clear === true) {
    const changedArr = actorsInfo.map(item => {
      return createActorCard(item);
    });
    mainInfoElement.insertAdjacentHTML("afterbegin", createActorsWrapper());
    for (let item of changedArr) {
      mainInfoElement.firstElementChild.insertAdjacentHTML("beforeend", item);
    }
  }
  if (
    linkText.toLowerCase() === "премьеры" ||
    linkText.toLowerCase() === "награды" ||
    linkText.toLowerCase() === "факты" ||
    (linkText.toLowerCase() === "сайты" && clear === true)
  ) {
    mainInfoElement.insertAdjacentHTML("afterbegin", createNotFoundBlock());
  }
};

const changeTab = target => {
  if (target.tagName === "A") {
    const links = linksListElement.querySelectorAll("a");
    for (let item of links) {
      item.style.color = "black";
    }
    target.style.color = "#FF8F27";
    sortLinkByName(target.textContent);
  }
};

const getUserMail = userMail => {
  console.log(userMail);
};

const setMovie = resultMovie => {
  movieList.textContent = "";
  for (let item of resultMovie) {
    const li = document.createElement("li");
    li.innerHTML = item;
    movieList.append(li);
    li.addEventListener("click", () => {
      searchInput.value = li.textContent;
      movieList.textContent = "";
    });
  }
};

const createMovieList = () => {
  movieList.textContent = "";
  if (searchInput.value != "") {
    const resultMovie = movies.filter(item => {
      return item.toLowerCase().startsWith(searchInput.value.toLowerCase());
    });
    setMovie(resultMovie);
  }
};

const sendEmail = () => {
  const mailValue = sybscribeFormElement.querySelector(".subscribe-field");
  const mailRegex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  if (mailRegex.test(mailValue.value)) {
    getUserMail(mailValue.value);
    swal({
      icon: "success",
      title: "Успех!",
      text: "Вы подписались на рассылку"
    });
    mailValue.value = "";
  }
};

const addBookMark = () => {
  const check = bookMark.firstElementChild.getAttribute("check");
  if (check == "false") {
    bookMark.firstElementChild.src = "./img/bookmark-icon.svg";
    bookMark.firstElementChild.removeAttribute("check");
    bookMark.firstElementChild.setAttribute("check", "true");
    swal({
      icon: "success",
      title: "Добавлено!",
      text: "Теперь страница в ваших закладках",
      closeOnClickOutside: true,
      buttons: false,
      timer: 2500
    });
  } else {
    bookMark.firstElementChild.src = "./img/svg-editor-image.svg";
    bookMark.firstElementChild.removeAttribute("check");
    bookMark.firstElementChild.setAttribute("check", "false");
    swal({
      icon: "success",
      title: "Удалено!",
      text: "Страница удалена из списка ваших закладок",
      closeOnClickOutside: true,
      buttons: false,
      timer: 2500
    });
  }
};

sybscribeFormElement.addEventListener("submit", event => {
  event.preventDefault();
  sendEmail();
});

bookMark.addEventListener("click", () => {
  addBookMark();
});

searchInput.addEventListener("input", () => {
  createMovieList();
});

linksListElement.addEventListener("click", event => {
  event.preventDefault();
  changeTab(event.target);
});
