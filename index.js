const humburger = document.querySelector('.hamburger_menu');
const navMenu = document.querySelector('.nav_link');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav_link_line').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const ArtistsCards = document.querySelector('.hidden_artists_wrapper');

const ArtistsItems = [
  {
    ArtistName: 'Jon Bon Jovi',
    image: 'images/artist_1.webp',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'Chuck Berry',
    image: 'images/artist_3.jpg',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'Richard Anthony',
    image: 'images/rock_artist3.jpeg',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'The Brian Setzer Orchestra',
    image: 'images/artist_2.avif',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'The Big Bopper',
    image: 'images/rock_artist4.webp',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
  {
    ArtistName: 'Johnny Burnette',
    image: 'images/artist_yellow.jpeg',
    Description: "arttist,songwriter ,band did in fact invent rock'n'roll",
    Paragraph: "Charles' proto-soul vocals and Brown's everything-is-a-drum were innovations as profound as Berry's ",
  },
];

if (ArtistsCards) {
  for (let i = 0; i < ArtistsItems.length; i += 1) {
    ArtistsCards.innerHTML += `
    <div class="hidden_artists">
    <div class="artist_details">
        <div class="band_image">
            <img src="${ArtistsItems[i].image}" alt="" class="normal_image_desk">
        </div>
        <div class="artist_description">
            <h2>${ArtistsItems[i].ArtistName}</h2>
            <h4>${ArtistsItems[i].Description}</h4>
            <hr>
            <p>${ArtistsItems[i].Paragraph}</p>
        </div>
     </div>
  </div>
    `;
  }
}