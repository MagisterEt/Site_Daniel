const landingData = window.SITE_CONFIG || {};

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

function createBenefitCard(text) {
  return `<article class="card benefit-pill">${text}</article>`;
}

function createTestimonialCard(item) {
  return `
    <article class="card testimonial-card">
      <p>"${item.quote}"</p>
      <strong>- ${item.author}</strong>
    </article>
  `;
}

function createStickyBuyCTA() {
  if (document.getElementById("stickyBuyCta")) return;
  const isBuyPage = window.location.pathname.endsWith("/comprar.html");
  if (isBuyPage) return;

  const wrapper = document.createElement("div");
  wrapper.id = "stickyBuyCta";
  wrapper.className = "sticky-buy-cta";
  wrapper.innerHTML = `
    <a class="btn btn-primary" href="${landingData.buyLink}" target="_blank" rel="noopener noreferrer">
      ${landingData.stickyCtaText || "Comprar curso agora"}
    </a>
  `;
  document.body.appendChild(wrapper);
}

function renderLandingPage() {
  const videoGrid = document.getElementById("videoGrid");
  const galleryGrid = document.getElementById("galleryGrid");
  const resultsGrid = document.getElementById("resultsGrid");
  const benefitsGrid = document.getElementById("benefitsGrid");
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  const whyTitle = document.getElementById("whyTitle");
  const whyText = document.getElementById("whyText");
  const benefitsTitle = document.getElementById("benefitsTitle");
  const testimonialsTitle = document.getElementById("testimonialsTitle");
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
  const brandNodes = document.querySelectorAll("[data-brand]");
  const igHandleNodes = document.querySelectorAll("[data-ig-handle]");

  if (videoGrid) {
    videoGrid.innerHTML = (landingData.videos || []).map(createVideoCard).join("");
  }
  if (galleryGrid) {
    galleryGrid.innerHTML = (landingData.samples || []).map(createSampleCard).join("");
  }
  if (resultsGrid) {
    resultsGrid.innerHTML = (landingData.results || []).map(createSampleCard).join("");
  }
  if (benefitsGrid) {
    benefitsGrid.innerHTML = (landingData.salesCopy?.benefits || [])
      .map(createBenefitCard)
      .join("");
  }
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = (landingData.salesCopy?.testimonials || [])
      .map(createTestimonialCard)
      .join("");
  }
  if (whyTitle) whyTitle.textContent = landingData.salesCopy?.whyTitle || "";
  if (whyText) whyText.textContent = landingData.salesCopy?.whyText || "";
  if (benefitsTitle) benefitsTitle.textContent = landingData.salesCopy?.benefitsTitle || "";
  if (testimonialsTitle)
    testimonialsTitle.textContent = landingData.salesCopy?.testimonialsTitle || "";
  if (buyButton) {
    buyButton.href = landingData.buyLink;
  }
  if (mpButton) {
    mpButton.href = landingData.buyLink;
  }
  if (whatsappButton) {
    whatsappButton.href = landingData.payments?.whatsappLink || "#";
  }
  if (paymentHelper) {
    const usingPlaceholder = (landingData.buyLink || "").includes("seu-link");
    if (usingPlaceholder) {
      paymentHelper.innerHTML = `Configure seu link do Mercado Pago em <code>site-config.js</code> no campo <code>buyLink</code>. Crie em <a href="${landingData.payments?.mercadoPagoCreateLink}" target="_blank" rel="noopener noreferrer">Link de Pagamento</a>.`;
    } else {
      paymentHelper.textContent =
        "Pagamento online ativo via Link de Pagamento do Mercado Pago.";
    }
  }
  igLinks.forEach((link) => {
    link.href = landingData.instagram?.profileUrl || "#";
  });
  if (igFollowers) igFollowers.textContent = landingData.instagram?.followers || "0";
  if (igFollowing) igFollowing.textContent = landingData.instagram?.following || "0";
  if (igPosts) igPosts.textContent = landingData.instagram?.posts || "0";
  if (igHandle) igHandle.textContent = landingData.instagram?.handle || "";
  if (igRole) igRole.textContent = landingData.instagram?.role || "";
  if (igCity) igCity.textContent = landingData.instagram?.city || "";
  if (igBooking) igBooking.textContent = landingData.instagram?.booking || "";
  if (igPhoto) igPhoto.src = landingData.instagram?.profileImage || "";
  if (igSourceDate) igSourceDate.textContent = landingData.instagram?.sourceDate || "";
  if (year) {
    year.textContent = new Date().getFullYear();
  }
  brandNodes.forEach((el) => {
    el.textContent = landingData.brandName || "Seu Nome Groomer";
  });
  igHandleNodes.forEach((el) => {
    el.textContent = landingData.instagram?.handle || "@seuinstagram";
  });
}

function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) return;

  let totalSeconds = (landingData.countdownMinutes || 15) * 60;
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
  createStickyBuyCTA();
});
