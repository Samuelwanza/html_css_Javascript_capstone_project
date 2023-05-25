const featuredSpeakers = [
  {
    speakerName: 'Yonchai Benkler',
    image_url: 'images/speaker_01.png',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    speakerName: 'SohYeong Noh',
    image_url: 'images/speaker2.png',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    speakerName: 'Lila tretikov',
    image_url: 'images/speaker3.png',
    role: 'Executive Director of the Wikimedia Foundation',
    bio: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    speakerName: 'Kilnam Chon',
    image_url: 'images/speaker4.png',
    role: ' ',
    bio: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    speakerName: 'Julia Leda',
    image_url: 'images/speaker5.png',
    role: 'President of Young Pirates of Europe',
    bio: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    speakerName: 'Ryan Merkley',
    image_url: 'images/speaker6.png',
    role: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    bio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.querySelectorAll('.mobile-menu-items>li>a');
  const bar = document.querySelector('.bar');
  const xIcon = document.querySelector('.mobile-menu-toggler');
  const mobileMenu = document.querySelector('#mymobilemenu');
  const blurHerosection = document.querySelector('#show-menu');
  const gridContainer = document.querySelector('.grid-container');
  let featuredSpeakersDataToUse = 0;
  featuredSpeakers.map((speaker) => {
    featuredSpeakersDataToUse += 1;
    const gridItem = document.createElement('div');
    gridItem.innerHTML = `
    <div class="grid-item-wrapper">

        <img src=${speaker.image_url} alt="speaker-image" />
        <div class="grid-item-mini-wrapper">
          <h3>${speaker.speakerName}</h3>
          <p class="secondary">${speaker.role}</p>
          <div></div>
          <p>${speaker.bio}</p>
        </div>
    
      </div>`;
    if (featuredSpeakersDataToUse > 2) {
      gridItem.classList.toggle('grid-item-off');
    }
    gridContainer.appendChild(gridItem);
    return gridItem;
  });

  const moreBtn = document.querySelector('.speakers-wrapper > button ');
  const gridItem = document.querySelectorAll('.grid-item-off');

  moreBtn.addEventListener('click', () => {
    Array.from(gridItem).forEach((gridItem) => {
      gridItem.style.display = 'flex';
      moreBtn.style.display = 'none';
    });
  });
  const toggleMenu = () => {
    mobileMenu.classList.toggle('mobile-menu1');
    mobileMenu.classList.toggle('mobile-menu');

    blurHerosection.classList.toggle('hero-section1');
  };

  const withdrawMenuBar = () => {
    toggleMenu();
    bar.style.display = 'none';
  };

  const sustainMenuBar = () => {
    toggleMenu();
    bar.style.display = 'block';
  };

  bar.addEventListener('click', withdrawMenuBar);
  xIcon.addEventListener('click', sustainMenuBar);
  Array.from(menuList).forEach((item) => {
    item.addEventListener('click', sustainMenuBar);
  });
});
