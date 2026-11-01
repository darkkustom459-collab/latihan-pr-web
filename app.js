// Data cadangan jika dibuka lewat file:// protocol (CORS restriction)
const fallbackContributors = [
  {
    username: "darkkustom459-collab",
    name: "Dark Kustom",
    role: "Project Maintainer",
    avatar: "https://avatars.githubusercontent.com/u/260207327?v=4",
    bio: "Selamat datang di repo latihan Pull Request! Silakan buat PR pertamamu di sini 🚀",
    skills: ["Git", "GitHub", "Web Dev"],
    links: {
      github: "https://github.com/darkkustom459-collab"
    }
  },
  {
    username: "contoh-kontributor",
    name: "Contoh Teman",
    role: "Frontend Learner",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=contoh",
    bio: "Belajar Git dan Pull Request itu seru dan mudah dipelajari!",
    skills: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com"
    }
  }
];

let allContributors = [];
let currentFilter = 'all';

// DOM Elements
const gridEl = document.getElementById('contributors-grid');
const emptyStateEl = document.getElementById('empty-state');
const countEl = document.getElementById('contributor-count');
const searchInput = document.getElementById('search-input');
const filterChipsEl = document.getElementById('filter-chips');

// Modal Elements
const guideModal = document.getElementById('guide-modal');
const guideModalBtn = document.getElementById('guide-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOkBtn = document.getElementById('modal-ok-btn');

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function loadContributors() {
  try {
    const res = await fetch('data/contributors.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    allContributors = await res.json();
  } catch (err) {
    console.warn("Menggunakan data cadangan (fetch error / file protocol):", err);
    allContributors = fallbackContributors;
  }

  updateStats();
  buildSkillFilters();
  renderCards();
}

function updateStats() {
  if (countEl) {
    countEl.textContent = allContributors.length;
  }
}

function buildSkillFilters() {
  const skillSet = new Set();
  allContributors.forEach(c => {
    if (Array.isArray(c.skills)) {
      c.skills.forEach(s => skillSet.add(s.trim()));
    }
  });

  const skills = Array.from(skillSet).sort();
  skills.forEach(skill => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.dataset.filter = skill;
    chip.textContent = skill;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(el => el.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = skill;
      renderCards();
    });
    filterChipsEl.appendChild(chip);
  });
}

function renderCards() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = allContributors.filter(c => {
    const matchQuery = 
      (c.name && c.name.toLowerCase().includes(query)) ||
      (c.username && c.username.toLowerCase().includes(query)) ||
      (c.bio && c.bio.toLowerCase().includes(query)) ||
      (Array.isArray(c.skills) && c.skills.some(s => s.toLowerCase().includes(query)));

    const matchFilter = currentFilter === 'all' || 
      (Array.isArray(c.skills) && c.skills.includes(currentFilter));

    return matchQuery && matchFilter;
  });

  gridEl.innerHTML = '';

  if (filtered.length === 0) {
    emptyStateEl.classList.remove('hidden');
    return;
  }

  emptyStateEl.classList.add('hidden');

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';

    const avatarUrl = c.avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(c.username || 'dev')}`;
    const skillsHtml = Array.isArray(c.skills)
      ? c.skills.map(s => `<span class="skill-tag">${escapeHTML(s)}</span>`).join('')
      : '';

    const githubLink = c.links?.github || `https://github.com/${encodeURIComponent(c.username || '')}`;

    card.innerHTML = `
      <div class="card-header">
        <img class="card-avatar" src="${escapeHTML(avatarUrl)}" alt="${escapeHTML(c.name || c.username)}" loading="lazy" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(c.username || 'avatar')}'" />
        <div class="card-title-group">
          <h3>${escapeHTML(c.name || c.username)}</h3>
          <span class="card-username">@${escapeHTML(c.username)}</span>
        </div>
      </div>
      ${c.role ? `<span class="card-role">${escapeHTML(c.role)}</span>` : ''}
      <p class="card-bio">${escapeHTML(c.bio || 'Tidak ada bio.')}</p>
      <div class="card-skills">${skillsHtml}</div>
      <div class="card-footer">
        <a class="card-link" href="${escapeHTML(githubLink)}" target="_blank" rel="noopener noreferrer">
          GitHub Profile ↗
        </a>
      </div>
    `;

    gridEl.appendChild(card);
  });
}

// Event Listeners
searchInput.addEventListener('input', () => {
  renderCards();
});

const defaultChip = document.querySelector('.chip[data-filter="all"]');
if (defaultChip) {
  defaultChip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(el => el.classList.remove('active'));
    defaultChip.classList.add('active');
    currentFilter = 'all';
    renderCards();
  });
}

// Modal Toggle
function openModal() {
  guideModal.classList.remove('hidden');
}

function closeModal() {
  guideModal.classList.add('hidden');
}

guideModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOkBtn.addEventListener('click', closeModal);
guideModal.addEventListener('click', (e) => {
  if (e.target === guideModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !guideModal.classList.contains('hidden')) {
    closeModal();
  }
});

// Init
document.addEventListener('DOMContentLoaded', loadContributors);
