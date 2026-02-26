const landingData = {
  buyLink: "https://seulinkdecurso.com",
  countdownMinutes: 15,
  videos: [
    {
      title: "Banho profissional sem estresse",
      youtubeId: "xN9E5GeF4IM",
    },
    {
      title: "Tosa higiênica passo a passo",
      youtubeId: "nN9xvA5B8tQ",
    },
    {
      title: "Acabamento e finalização",
      youtubeId: "3fumBcKC6RE",
    },
  ],
  samples: [
    {
      title: "Antes e depois - Spitz",
      image:
        "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Acabamento comercial - Poodle",
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Tosa bebê - Shih-tzu",
      image:
        "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=900&q=80",
    },
  ],
  results: [
    {
      title: "Antes e depois - cliente real (Lhasa Apso)",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Resultado de aluna - tosa bebê",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Transformação completa em sessão única",
      image:
        "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

function createVideoCard(video) {
  return `
    <article class="card">
      <iframe
        class="video-frame"
        src="https://www.youtube.com/embed/${video.youtubeId}"
        title="${video.title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>${video.title}</h3>
    </article>
  `;
}

function createSampleCard(sample) {
  return `
    <article class="card gallery-item">
      <img src="${sample.image}" alt="${sample.title}" loading="lazy" />
      <p>${sample.title}</p>
    </article>
  `;
}

function renderLandingPage() {
  const videoGrid = document.getElementById("videoGrid");
  const galleryGrid = document.getElementById("galleryGrid");
  const resultsGrid = document.getElementById("resultsGrid");
  const buyButton = document.getElementById("buyButton");
  const year = document.getElementById("year");

  if (videoGrid) {
    videoGrid.innerHTML = landingData.videos.map(createVideoCard).join("");
  }
  if (galleryGrid) {
    galleryGrid.innerHTML = landingData.samples.map(createSampleCard).join("");
  }
  if (resultsGrid) {
    resultsGrid.innerHTML = landingData.results.map(createSampleCard).join("");
  }
  if (buyButton) {
    buyButton.href = landingData.buyLink;
  }
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) return;

  let totalSeconds = landingData.countdownMinutes * 60;
  const interval = setInterval(() => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    countdownElement.textContent = `${minutes}:${seconds}`;

    if (totalSeconds <= 0) {
      clearInterval(interval);
      countdownElement.textContent = "00:00";
    }
    totalSeconds -= 1;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  renderLandingPage();
  startCountdown();
});
