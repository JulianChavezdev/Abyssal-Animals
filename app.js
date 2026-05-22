

const API_URL = "http://localhost:3000/creatures";

const creatureGrid  = document.getElementById("creatureGrid");
const loadingState  = document.getElementById("loadingState");
const errorState    = document.getElementById("errorState");
const filterButtons = document.querySelectorAll(".filter-btn");


const fetchCreatures = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`HTTP error — status: ${response.status}`);
  return response.json();
};


const buildCreatureCard = (creature) => {
  const { name, scientificName, depth, category, bioluminescent, description, image } = creature;

  const bioLabel    = bioluminescent
    ? `<span class="bioluminescent-badge">✦ Bioluminescent</span>`
    : "";

  const depthDisplay = depth ?? "Unknown";
  const imgSrc       = image || "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg";

  return `
    <div class="col-sm-6 col-lg-4 col-xl-3 creature-col" data-category="${category}">
      <article class="card">
        <div class="card-img-wrapper">
          <img
            src="${imgSrc}"
            alt="${name}"
            class="card-img-top"
            loading="lazy"
          />
          <div class="card-img-overlay-gradient"></div>
          ${bioLabel}
        </div>

        <div class="card-body">
          <span class="card-category">${category}</span>
          <h2 class="card-title">${name}</h2>
          <p class="card-scientific-name">${scientificName}</p>
          <p class="card-text">${description}</p>

          <div class="card-depth">
            <span class="depth-icon">▾</span>
            <span>Depth: <strong>${depthDisplay}</strong></span>
          </div>
        </div>
      </article>
    </div>
  `;
};


const renderCreatures = (creatures) => {
  creatureGrid.innerHTML = creatures.map(buildCreatureCard).join("");
};


const hideLoading = () => {
  loadingState.classList.add("d-none");
};


const showError = () => {
  loadingState.classList.add("d-none");
  errorState.classList.remove("d-none");
};


const applyStaggeredAnimation = () => {
  const cols = creatureGrid.querySelectorAll(".creature-col");
  cols.forEach((col, index) => {
    col.style.animationDelay = `${index * 75}ms`;
  });
};


const filterByCategory = (category) => {
  const cols = creatureGrid.querySelectorAll(".creature-col");
  cols.forEach((col) => {
    const matchesAll      = category === "all";
    const matchesCategory = col.dataset.category === category;
    col.classList.toggle("hidden", !(matchesAll || matchesCategory));
  });
};

const initFilters = () => {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterByCategory(btn.dataset.filter);
    });
  });
};


const init = async () => {
  try {
    const creatures = await fetchCreatures();
    renderCreatures(creatures);
    hideLoading();
    applyStaggeredAnimation();
    initFilters();
  } catch (error) {
    console.error("Failed to load creature data:", error);
    showError();
  }
};

init();
