const cardData = [
  {
    backgroundImage: "./assets/images/banner1.png",
    title:
      '<p class="title-hide">Holistic <span class="yellow-text">Development</span></p>',
    heading:
      '<h2 class="show-heading">Holistic <span class="yellow-text">Development</span></h2>',
    subHeading: "Right Mix of Curricular and Co-Curricular Activities.",
  },
  {
    backgroundImage: "./assets/images/banner2.png",
    title:
      '<p class="title-hide"><span class="yellow-text">Proven</span> and <span class="yellow-text">Tested</span> Centralized Curriculum</p>',
    heading:
      '<h2 class="show-heading"><span class="yellow-text">Proven</span> and <span class="yellow-text">Tested</span> Centralized Curriculum</h2>',
    subHeading:
      "CBSE school with balanced traditional & contemporary curriculum to foster growth in all its students.",
  },
  {
    backgroundImage: "./assets/images/banner3.png",
    title:
      '<p class="title-hide"><span class="yellow-text">Innovative</span> and <span class="yellow-text">Challenging</span> learning Methodologies</p>',
    heading:
      '<h2 class="show-heading"><span class="yellow-text">Innovative</span> and <span class="yellow-text">Challenging</span> learning Methodologies</h2>',
    subHeading:
      "Facilitate excellence through critical thinking and profound learning.",
  },
  {
    backgroundImage: "./assets/images/banner4.png",
    title:
      '<p class="title-hide"><span class="yellow-text">Faculty</span> Enrichment Program</p>',
    heading:
      '<h2 class="show-heading"><span class="yellow-text">Faculty</span> Enrichment Program</h2>',
    subHeading: "Regular teacher training and curriculum workshops",
  },
];

const container = document.querySelector(".card-container");

cardData.forEach((card) => {
  container.innerHTML += `
  <div
  class="card"
  style="
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.8) 85%
      ),
      url(${card.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
  "
>
  ${card.title}
  <div class="hover-details">
    ${card.heading}
    <p class="show-sub-heading">${card.subHeading}</p>
  </div>
</div>
    `;
});
