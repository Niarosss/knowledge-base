//Detect color scheme system
function detectColorScheme() {
  var e = 'light';
  if (localStorage.getItem('theme'))
    'dark' == localStorage.getItem('theme') && (e = 'dark');
  else {
    if (!window.matchMedia) return !1;
    window.matchMedia('(prefers-color-scheme: dark)').matches && (e = 'dark');
  }
  'dark' == e && (body.classList.add('dark'), (toggleSwitch.checked = !0));
}
//Manually switch theme
function switchTheme(e) {
  e.target.checked
    ? (localStorage.setItem('theme', 'dark'),
      body.classList.add('dark'),
      (toggleSwitch.checked = !0))
    : (localStorage.setItem('theme', 'light'),
      body.classList.remove('dark'),
      (toggleSwitch.checked = !1));
}

//Randow background image
var dir = './img/';
const rand = Math.floor(Math.random() * (3 - 0 + 1) + 0);
var images = ['bg_1.webp', 'bg_2.webp', 'bg_3.webp', 'bg_4.webp'];
//NY background -- "bg_ny1.webp", "bg_ny2.webp"

document.querySelector('.s-intro__bg').style.backgroundImage =
  'url(' + dir + images[rand] + ')';

//Detect highlight text
function detectHight() {
  var e = 'no';
  if (('no' == e && (highToggle.checked = 1), !localStorage.getItem('highlight')))
    return !1;
  'yes' == localStorage.getItem('highlight') && (e = 'yes'),
    'yes' == e && (highToggle.checked = !0);
}
//Switch highlight text funclion
function switchHigh(e) {
  e.target.checked
    ? (localStorage.setItem('highlight', 'yes'), (highToggle.checked = !0))
    : (localStorage.setItem('highlight', 'no'), (highToggle.checked = !1));
}
//Select text
function selectText(element) {
  if (highToggle.checked) {
    if (document.selection) {
      var t = body.createTextRange();
      t.moveToElementText(element);
      t.select();
    } else if (window.getSelection) {
      var t = document.createRange();
      t.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(t);
    }
  }
}
//Get highlight text
function getHighlight() {
  var e = window.getSelection(),
    t = { parent: null, text: '', rect: null };
  return (
    e.rangeCount > 0 &&
      (t = {
        text: e.toString().trim(),
        parent: e.anchorNode.parentNode,
        rect: e.getRangeAt(0).getBoundingClientRect(),
      }),
    t
  );
}
//Show copy menu
function showCopy() {
  var e = getHighlight();
  const t = document.querySelector('.s-copy');
  '' !== e.text
    ? ((t.style.left = e.rect.left + window.pageXOffset + 'px'),
      (t.style.top = e.rect.top + window.pageYOffset - 50 + 'px'),
      (t.style.display = 'flex'))
    : (t.style.display = 'none');
}
function click() {
  window.getSelection().removeAllRanges(),
    (success.style.display = 'none'),
    without_sign.removeAttribute('style'),
    with_sign.removeAttribute('style'),
    hand.removeAttribute('style'),
    (menu.style.display = 'none');
}
async function copyWithoutSign() {
  try {
    var e = getHighlight();
    const n = document.querySelector('#hand');
    var t = '';
    n.checked && (t = 'Добрий день!\n\n'),
      await navigator.clipboard.writeText(t + e.text),
      success.removeAttribute('style'),
      (without_sign.style.display = 'none'),
      (with_sign.style.display = 'none'),
      (hand.style.display = 'none'),
      setTimeout(click, 1e3),
      console.log('Скопійовано текст без підпису');
  } catch (e) {
    console.error('Не вийшло копіювати: ', e);
  }
}
async function copyWithSign() {
  try {
    var e = getHighlight();
    const n = document.querySelector('#hand');
    var t = '';
    n.checked && (t = 'Добрий день!\n\n'),
      await navigator.clipboard.writeText(
        `${
          t + e.text
        }\n\nЗ повагою,\nСлужба підтримки клієнтів\nтел.: (044)000-00-00\ne-mail: email@site.com`,
      ),
      success.removeAttribute('style'),
      (without_sign.style.display = 'none'),
      (with_sign.style.display = 'none'),
      (hand.style.display = 'none'),
      setTimeout(click, 1e3),
      console.log('Скопійовано текст з підписом');
  } catch (e) {
    console.error('Не вийшло копіювати: ', e);
  }
}
//Hide intro
function detectHide() {
  var e = 'no';
  if (!localStorage.getItem('hide-intro')) return !1;
  'yes' == localStorage.getItem('hide-intro') && (e = 'yes'),
    'yes' == e && (body.classList.add('hide-intro'), (HideToggle.checked = !0));
}
function switchHide(e) {
  e.target.checked
    ? (localStorage.setItem('hide-intro', 'yes'),
      body.classList.add('hide-intro'),
      (HideToggle.checked = !0))
    : (localStorage.setItem('hide-intro', 'no'),
      body.classList.remove('hide-intro'),
      (HideToggle.checked = !1));
}
//Calculate percentage
function AutoCalcYear(e) {
  var t = document.getElementById('yearp').value,
    n = Math.round((parseFloat(t) / 365) * 100) / 100;
  (document.getElementById('dayp').value = n),
    isNaN(n) && (document.getElementById('dayp').value = '');
}
function AutoCalcDay(e) {
  var t = document.getElementById('dayp').value,
    n = Math.round(365 * parseFloat(t) * 100) / 100;
  (document.getElementById('yearp').value = n),
    isNaN(n) && (document.getElementById('yearp').value = '');
}
const body = document.querySelector('body');
var toggleSwitch = document.querySelector('#change-th');
detectColorScheme(), toggleSwitch.addEventListener('change', switchTheme, !1);
const highToggle = document.querySelector('#high-tg');
detectHight(),
  highToggle.addEventListener('change', switchHigh, !1),
  document.body.addEventListener('mouseup', function () {
    setTimeout(showCopy, 100);
  }),
  window.addEventListener('scroll', function () {
    var e = getHighlight();
    const t = document.querySelector('.s-copy');
    '' !== e.text &&
      (window.pageYOffset > e.rect.bottom + window.pageYOffset + 100) |
        (window.pageYOffset + 1500 < e.rect.top + window.pageYOffset) &&
      (window.getSelection().removeAllRanges(), (t.style.display = 'none'));
  });
const without_sign = document.querySelector('.s-copy_without-sign'),
  with_sign = document.querySelector('.s-copy_with-sign'),
  success = document.querySelector('.s-copy_success'),
  hand = document.querySelector('.s-copy_hand'),
  menu = document.querySelector('.s-copy');
document.addEventListener('copy', copyWithoutSign),
  without_sign.addEventListener('click', copyWithoutSign),
  with_sign.addEventListener('click', copyWithSign);
var HideToggle = document.querySelector('#hide-tg');
detectHide(), HideToggle.addEventListener('change', switchHide, !1);

//Send message to telegram
const token = 'TOKEN', // Токен бота
  chat_id = 'ID', // ID чату
  url_api = `https://api.telegram.org/bot${token}/sendMessage`,
  am = document.getElementById('alert');
document.getElementById('tg').addEventListener('submit', function (e) {
  e.preventDefault();
  let t = '<b>Повідомлення з шаблонів</b>\n';
  (t += `Ім'я: ${this.name.value}\n`),
    (t += `Тип звернення: ${this.type.value}\n`),
    (t += `Повідомлення:\n${this.text.value}`),
    axios
      .post(url_api, { chat_id: chat_id, parse_mode: 'html', text: t })
      .then(e => {
        (this.name.value = ''),
          (this.type.value = ''),
          (this.text.value = ''),
          am.classList.add('alert-box--success'),
          (am.style.display = 'block'),
          (am.innerHTML =
            '<p>Повідомлення успішно надіслано. Дякую :3</p><span class="alert-box__close"></span>');
      })
      .catch(e => {
        am.classList.add('alert-box--error'),
          (am.style.display = 'block'),
          (am.innerHTML = `<p>Помилка відправки((<br>${e}</p><span class="alert-box__close"></span>`);
      })
      .finally(() => {
        console.log('Завершена дія відправки повідомлення');
      });
});
//Random quotes))
const quotes = [
    {
      text: '«Практика без теорії цінніша, ніж теорія без практики»',
      author: '- Марк Фабій Квінтиліан',
    },
    { text: '«Ціле опановують по частинах»', author: '- Сене́ка Анне́й Лу́цій' },
    {
      text: '«Робота роботою, але в цьому житті треба ще щось і корисне робити»',
      author: '- Хенрік Ягодзіньскій',
    },
    {
      text: '«Завжди не вистачає часу, щоб виконати роботу як треба, але на те, щоб її переробити, час знаходиться»',
      author: '- закон Мескімена',
    },
    {
      text: '«Ніколи не відкладай на завтра те, що можеш зробити післязавтра»',
      author: '- Альфонс Аллі',
    },
    {
      text: '«Хто вміє, той робить, а хто не вміє, той вчить»',
      author: '- Бернард Шоу',
    },
    {
      text: '«Думати – ось найважча робота, і тому мало хто за неї береться»',
      author: '- Генрі Форд',
    },
    {
      text: '«Стомлює не стільки сама праця, скільки думки про неї»',
      author: '- Марк Фабій Квінтиліан',
    },
    {
      text: '«Зробіть комусь послугу — і це стане вашою роботою»',
      author: '- Закон Мерфі',
    },
    {
      text: '«80% успіху — це з’явитися в потрібному місці в потрібний час»',
      author: '- Вуді Аллен',
    },
    {
      text: '«Краще тримати рот на замку і здатися дурнем, ніж заговорити і розвіяти всі сумніви»',
      author: '- Марк Твен',
    },
    {
      text: '«Краще тримати рот на замку і здатися дурнем, ніж заговорити і розвіяти всі сумніви»',
      author: '- Марк Твен',
    },
    {
      text: '«У всьому є баланс. Кількість енергії, яку ви отримуєте, дорівнює завданням, які потрібно виконати»',
      author: '- Борис Пастернак',
    },
    { text: '«Не в грошах щастя, а в їхній кількості»', author: '- Михайло Генін' },
    {
      text: '«Людині не потрібно нічого понад те, що їй дала природа. Окрім грошей»',
      author: '- Юзеф Бестер',
    },
    {
      text: '«Є тільки один спосіб уникнути критики: нічого не робіть, нічого не говоріть і будьте ніким»',
      author: '- Арісто́тель',
    },
  ],
  quote = quotes[Math.floor(Math.random() * quotes.length)];
(document.getElementById('bes').innerHTML = quote.text),
  (document.getElementById('tes').innerHTML = quote.author),
  //Preloader and other stuff
  (function (e) {
    const t = anime
        .timeline({ easing: 'easeInOutCubic', duration: 800, autoplay: !1 })
        .add({
          targets: '#loader',
          opacity: 0,
          duration: 1e3,
          begin: function (e) {
            window.scrollTo(0, 0);
          },
        })
        .add({
          targets: '#preloader',
          opacity: 0,
          complete: function (e) {
            (document.querySelector('#preloader').style.visibility = 'hidden'),
              (document.querySelector('#preloader').style.display = 'none');
          },
        })
        .add(
          { targets: ['.s-header__logo', '.s-header__menu-toggle'], opacity: [0, 1] },
          '-=200',
        )
        .add(
          {
            targets: ['.s-intro__title', '.s-intro__pretitle', '.s-intro__more'],
            translateY: [100, 0],
            opacity: [0, 1],
            delay: anime.stagger(200),
          },
          '-=400',
        )
        .add(
          {
            targets: ['.s-intro__social', '.s-intro__scroll'],
            opacity: [0, 1],
            delay: anime.stagger(200),
          },
          '-=200',
        ),
      n = function () {
        const n = document.querySelector('#preloader');
        n &&
          (e.classList.add('ss-preload'),
          window.addEventListener('load', function () {
            e.classList.remove('ss-preload'), e.classList.add('ss-loaded'), t.play();
          }));
      },
      o = function () {
        new Rellax('.rellax');
      },
      s = function () {
        const e = document.querySelector('.s-header__menu-toggle'),
          t = 500;
        window.addEventListener('scroll', function () {
          let n = window.scrollY;
          n > t ? e.classList.add('opaque') : e.classList.remove('opaque');
        });
      },
      i = function () {
        const e = document.querySelector('.s-header__menu-toggle'),
          t = document.querySelectorAll('.feedback'),
          n = document.querySelector('.settings'),
          o = document.querySelector('.percent'),
          s = document.querySelector('.s-header__nav'),
          i = document.querySelector('.s-settings'),
          c = document.querySelector('.s-feedback'),
          a = document.querySelector('.s-percentage'),
          l =
            (document.querySelector('.s-header__nav-close-btn'),
            document.querySelectorAll('.close-mark')),
          r = document.querySelector('body');
        if (e && s && n && i && t && c && o && a) {
          e.addEventListener('click', function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              r.classList.add('menu-is-open'),
              r.classList.contains('settings-is-open') &&
                r.classList.remove('settings-is-open'),
              r.classList.contains('feedback-is-open') &&
                r.classList.remove('feedback-is-open');
          }),
            n.addEventListener('click', function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                r.classList.add('settings-is-open'),
                r.classList.contains('menu-is-open') &&
                  r.classList.remove('menu-is-open');
            });
          for (const e of t)
            e.addEventListener('click', function (e) {
              e.preventDefault(), e.stopPropagation();
              let t = document.createElement('script');
              (t.src = 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js'),
                body.append(t),
                r.classList.add('feedback-is-open'),
                r.classList.contains('menu-is-open') &&
                  r.classList.remove('menu-is-open');
            });
          o.addEventListener('click', function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              r.classList.add('percentage-is-open');
          }),
            document
              .querySelector('.close-perc')
              .addEventListener('click', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  r.classList.contains('percentage-is-open') &&
                    r.classList.remove('percentage-is-open');
              });
          for (const e of l)
            e.addEventListener('click', function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                r.classList.contains('menu-is-open') &&
                  r.classList.remove('menu-is-open'),
                r.classList.contains('feedback-is-open') &&
                  r.classList.remove('feedback-is-open'),
                r.classList.contains('settings-is-open') &&
                  r.classList.remove('settings-is-open');
            }),
              r.addEventListener('click', function (t) {
                t.target.closest('.s-header__nav, .s-popup') ||
                  e.dispatchEvent(new Event('click'));
              });
        }
      },
      c = function () {
        function e() {
          let e = window.pageYOffset;
          t.forEach(function (t) {
            const n = window.innerHeight,
              o = t.getBoundingClientRect().top + window.scrollY + 0.2 * n - n,
              s = t.offsetHeight,
              i = o + s,
              c = e > o && e <= i,
              a = t.classList.contains('ss-animated');
            c &&
              !a &&
              anime({
                targets: t.querySelectorAll('[data-animate-el]'),
                opacity: [0, 1],
                translateY: [100, 0],
                delay: anime.stagger(200, { start: 200 }),
                duration: 800,
                easing: 'easeInOutCubic',
                begin: function (e) {
                  t.classList.add('ss-animated');
                },
              });
          });
        }
        const t = document.querySelectorAll('[data-animate-block]');
        t && window.addEventListener('scroll', e);
      },
      a = function () {
        const e = document.querySelectorAll('.alert-box');
        e.forEach(function (e) {
          e.addEventListener('click', function (t) {
            t.target.matches('.alert-box__close') &&
              (t.stopPropagation(),
              t.target.parentElement.classList.add('hideit'),
              setTimeout(function () {
                e.style.display = 'none';
              }, 500));
          });
        });
      },
      l = function () {
        const e = 900,
          t = document.querySelector('.ss-go-top');
        t &&
          (window.scrollY >= e && t.classList.add('link-is-visible'),
          window.addEventListener('scroll', function () {
            window.scrollY >= e
              ? t.classList.contains('link-is-visible') ||
                t.classList.add('link-is-visible')
              : t.classList.remove('link-is-visible');
          }));
      };
    n(), o(), s(), c(), i(), a(), l();
  })(document.documentElement);
