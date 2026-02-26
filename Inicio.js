const landingData = {
  instagram: {
    handle: "@daniel.groomer",
    profileUrl: "https://www.instagram.com/daniel.groomer?igsh=bnRvNWhzeTU5cmJi",
    profileImage:
      "https://scontent-gru1-1.cdninstagram.com/v/t51.82787-19/533656286_17979652625887219_4276777498764704023_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4",
    followers: "616",
    following: "122",
    posts: "41",
    role: "Esteticista Animal",
    city: "Uberlandia - MG",
    booking: "Agendamentos via WhatsApp",
    sourceDate: "26/02/2026",
  },
  buyLink: "https://link.mercadopago.com.br/seu-link",
  payments: {
    mercadoPagoCreateLink:
      "https://www.mercadopago.com.br/ferramentas-para-vender/link-de-pagamento",
    whatsappLink: "https://wa.me/5500000000000?text=Quero%20me%20inscrever%20no%20curso",
  },
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
  const igFollowers = document.getElementById("igFollowers");
  const igFollowing = document.getElementById("igFollowing");
  const igPosts = document.getElementById("igPosts");
  const igHandle = document.getElementById("igHandle");
  const igRole = document.getElementById("igRole");
  const igCity = document.getElementById("igCity");
  const igBooking = document.getElementById("igBooking");
  const igPhoto = document.getElementById("igPhoto");
  const igSourceDate = document.getElementById("igSourceDate");
  const igLinks = document.querySelectorAll("[data-ig-link]");
  const mpButton = document.getElementById("mercadoPagoButton");
  const paymentHelper = document.getElementById("paymentHelper");
  const whatsappButton = document.getElementById("whatsappButton");

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
  if (mpButton) {
    mpButton.href = landingData.buyLink;
  }
  if (whatsappButton) {
    whatsappButton.href = landingData.payments.whatsappLink;
  }
  if (paymentHelper) {
    const usingPlaceholder = landingData.buyLink.includes("seu-link");
    if (usingPlaceholder) {
      paymentHelper.innerHTML = `Configure seu link do Mercado Pago em <code>Inicio.js</code> no campo <code>buyLink</code>. Crie em <a href="${landingData.payments.mercadoPagoCreateLink}" target="_blank" rel="noopener noreferrer">Link de Pagamento</a>.`;
    } else {
      paymentHelper.textContent =
        "Pagamento online ativo via Link de Pagamento do Mercado Pago.";
    }
  }
  igLinks.forEach((link) => {
    link.href = landingData.instagram.profileUrl;
  });
  if (igFollowers) igFollowers.textContent = landingData.instagram.followers;
  if (igFollowing) igFollowing.textContent = landingData.instagram.following;
  if (igPosts) igPosts.textContent = landingData.instagram.posts;
  if (igHandle) igHandle.textContent = landingData.instagram.handle;
  if (igRole) igRole.textContent = landingData.instagram.role;
  if (igCity) igCity.textContent = landingData.instagram.city;
  if (igBooking) igBooking.textContent = landingData.instagram.booking;
  if (igPhoto) igPhoto.src = landingData.instagram.profileImage;
  if (igSourceDate) igSourceDate.textContent = landingData.instagram.sourceDate;
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
