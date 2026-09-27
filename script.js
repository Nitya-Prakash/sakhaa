import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   HERO
========================================================= */

function initHero() {
  const heroTimeline = gsap.timeline();

  heroTimeline
    .from("#navbar", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(
      "#hero h1 span",
      {
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: 0.09,
        ease: "power4.out",
      },
      "-=0.3",
    )
    .from(
      "#hero .scroll-icon",
      {
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4",
    );

  gsap.to("#hero .scroll-icon", {
    y: 8,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}

/* =========================================================
   NAVBAR
========================================================= */

function initNavbar() {
  const navbar = document.querySelector("#navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
}

/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {
  const menuToggle = document.querySelector("#menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("active");

    mobileMenu.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");

      mobileMenu.classList.remove("menu-open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute("aria-label", "Open navigation menu");

      document.body.style.overflow = "";
    });
  });
}

/* =========================================================
   PROBLEM / WHAT IS SAKHAA
========================================================= */

function initProblem() {
  const problem = document.querySelector("#problem");

  if (!problem) return;

  const problemTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#problem",
      start: "top 75%",
      end: "bottom 85%",
      scrub: 1,
    },
  });

  problemTimeline
    .from("#problem .problem-label", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
    .from(
      "#problem .problem-intro",
      {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.25",
    )
    .from(
      "#problem .problem-copy p",
      {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.35",
    )
    .from(
      "#problem .problem-image",
      {
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.45",
    )
    .from(
      "#problem .problem-bottom",
      {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3",
    );
}

/* =========================================================
   WHY SAKHAA — INTRO
========================================================= */

function initWhyIntro() {
  const whyIntroSection = document.querySelector("#why-sakhaa .why-intro");

  if (!whyIntroSection) return;

  const whyIntro = gsap.timeline({
    scrollTrigger: {
      trigger: "#why-sakhaa .why-intro",
      start: "top 70%",
      end: "bottom 75%",
      scrub: 1,
    },
  });

  whyIntro
    .from("#why-sakhaa .why-section-label", {
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    .from(
      "#why-sakhaa .why-intro-heading h2",
      {
        y: 80,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.2",
    )
    .from(
      "#why-sakhaa .why-intro-heading h3",
      {
        y: 60,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#why-sakhaa .why-intro-footer",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4",
    );
}

/* =========================================================
   WHY SAKHAA — MOVEMENT
========================================================= */

function initMovement() {
  const movementSection = document.querySelector(
    "#why-sakhaa .movement-section",
  );

  if (!movementSection) return;

  const movement = gsap.timeline({
    scrollTrigger: {
      trigger: "#why-sakhaa .movement-section",
      start: "top 70%",
      end: "center center",
      scrub: 1,
    },
  });

  movement
    .from("#why-sakhaa .movement-image", {
      clipPath: "inset(8% 8% 8% 8%)",
      scale: 1.05,
      duration: 1.2,
      ease: "power3.out",
    })
    .from(
      "#why-sakhaa .image-number",
      {
        y: 80,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.7",
    )
    .from(
      "#why-sakhaa .image-note",
      {
        opacity: 0,
        x: 20,
        duration: 0.5,
        stagger: 0.15,
      },
      "-=0.5",
    )
    .from(
      "#why-sakhaa .movement-label",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.7",
    )
    .from(
      "#why-sakhaa .movement-copy h2",
      {
        y: 70,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.3",
    )
    .from(
      "#why-sakhaa .movement-lead",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.4",
    )
    .from(
      "#why-sakhaa .movement-option",
      {
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
      },
      "-=0.2",
    );
}

/* =========================================================
   WHY SAKHAA — SAFETY
========================================================= */

function initSafety() {
  const safetySection = document.querySelector("#why-sakhaa .safety-section");

  if (!safetySection) return;

  const safetyTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#why-sakhaa .safety-section",
      start: "top 80%",
      end: "bottom 85%",
      scrub: 1,
    },
  });

  safetyTimeline
    .from("#why-sakhaa .safety-top", {
      y: 25,
      opacity: 0,
      duration: 0.6,
    })
    .from(
      "#why-sakhaa .safety-heading h2",
      {
        y: 90,
        opacity: 0,
        duration: 0.9,
      },
      "-=0.3",
    )
    .from(
      "#why-sakhaa .safety-heading p",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5",
    )
    .from(
      "#why-sakhaa .safety-product-image",
      {
        clipPath: "inset(8% 8% 8% 8%)",
        scale: 1.06,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7",
    )
    .from(
      "#why-sakhaa .safety-product-mark",
      {
        y: 30,
        opacity: 0,
        duration: 0.4,
      },
      "-=0.5",
    )
    .from(
      "#why-sakhaa .safety-feature",
      {
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#why-sakhaa .safety-sequence",
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.3",
    )
    .from(
      "#why-sakhaa .safety-bottom",
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
      },
      "-=0.2",
    );
}

/* =========================================================
   AWARENESS
========================================================= */

function initAwareness() {
  const awareness = document.querySelector("#awareness");

  if (!awareness) return;

  const label = awareness.querySelector(".awareness-label");

  const items = gsap.utils.toArray(
    awareness.querySelectorAll(".awareness-item"),
  );

  const closing = awareness.querySelector(".awareness-closing");

  gsap.set(label, {
    opacity: 0,
    y: 20,
  });

  gsap.set(items, {
    opacity: 0,
    y: 45,
  });

  gsap.set(closing, {
    opacity: 0,
    y: 30,
  });

  const awarenessTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: awareness,
      start: "top 72%",
      toggleActions: "play none none reverse",
    },
  });

  awarenessTimeline
    .to(label, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    .to(
      items,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.2",
    )
    .to(
      closing,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "+=0.2",
    );
}

/* =========================================================
   CONNECTION / CAREGIVER DASHBOARD
========================================================= */

function initConnection() {
  const connectionSection = document.querySelector("#connection");

  if (!connectionSection) return;

  const heartRate = connectionSection.querySelector("#heart-rate");
  const spo2 = connectionSection.querySelector("#spo2");
  const pulse = connectionSection.querySelector("#pulse");
  const locationTime = connectionSection.querySelector("#location-time");

  /* -----------------------------------------
     SIMULATED HEALTH DATA

     This is only for the website demonstration.

     Replace these values with WebSocket/API/
     MQTT data from the actual wheelchair later.
  ----------------------------------------- */

  function updateHealthData() {
    const newHeartRate = Math.floor(72 + Math.random() * 7);
    const newPulse = Math.floor(70 + Math.random() * 7);
    const newSpO2 = Math.floor(97 + Math.random() * 2);

    if (heartRate) {
      heartRate.textContent = newHeartRate;
    }

    if (pulse) {
      pulse.textContent = newPulse;
    }

    if (spo2) {
      spo2.textContent = newSpO2;
    }
  }

  updateHealthData();

  setInterval(updateHealthData, 4000);

  /* -----------------------------------------
     LOCATION UPDATE
  ----------------------------------------- */

  function updateLocationTime() {
    if (!locationTime) return;

    locationTime.textContent = "Just now";
  }

  updateLocationTime();

  setInterval(updateLocationTime, 5000);

  /* -----------------------------------------
     REQUEST BUTTONS
  ----------------------------------------- */

  const requestButtons = connectionSection.querySelectorAll(".request-option");

  requestButtons.forEach((button) => {
    button.addEventListener("click", () => {
      requestButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
    });
  });

  /* -----------------------------------------
     REMOTE CONTROL
  ----------------------------------------- */

  const controlButtons = connectionSection.querySelectorAll(".control-btn");

  controlButtons.forEach((button) => {
    button.addEventListener("click", () => {
      gsap.to(button, {
        scale: 0.94,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    });
  });

  /* -----------------------------------------
     ACKNOWLEDGE REQUEST
  ----------------------------------------- */

  const acknowledgeButton = connectionSection.querySelector(".acknowledge-btn");

  if (acknowledgeButton) {
    acknowledgeButton.addEventListener("click", () => {
      acknowledgeButton.textContent = "Request Acknowledged";
      acknowledgeButton.style.opacity = "0.65";
    });
  }

  /* -----------------------------------------
     GSAP REVEAL
  ----------------------------------------- */

  const dashboard = connectionSection.querySelector(".care-dashboard");

  const intro = connectionSection.querySelector(".connection-intro");

  const closing = connectionSection.querySelector(".connection-closing");

  gsap.set(intro, {
    opacity: 0,
    y: 40,
  });

  gsap.set(dashboard, {
    opacity: 0,
    y: 70,
    scale: 0.97,
  });

  gsap.set(closing, {
    opacity: 0,
    y: 30,
  });

  const connectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: connectionSection,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  connectionTimeline
    .to(intro, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(
      dashboard,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.3",
    )
    .to(
      closing,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.3",
    );
}

/* =========================================================
   ACCESSIBILITY
========================================================= */

function initAccessibility() {
  const accessibility = document.querySelector("#accessibility");

  if (!accessibility) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: accessibility,
      start: "top 75%",
      once: true,
    },
  });

  tl.from(".accessibility-heading .section-label", {
    y: 15,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  })
    .from(
      ".accessibility-heading h2",
      {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.2",
    )
    .from(
      ".accessibility-intro",
      {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".accessibility-image",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.2",
    )
    .from(
      ".info-item",
      {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5",
    )
    .from(
      ".affordability",
      {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2",
    )
    .from(
      ".accessibility-closing",
      {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2",
    );
}

/* =========================================================
   JOURNEY SWIPER
========================================================= */

function initJourney() {
  const journeySwiperElement = document.querySelector(".journey-swiper");

  if (!journeySwiperElement) return;

  const journeyCurrent = document.querySelector(".journey-current");

  const journeyTotal = document.querySelector(".journey-total");

  const journeyProgress = document.querySelector(".journey-progress-line");

  function updateJourneyProgress(swiper) {
    const current = swiper.realIndex + 1;
    const total = swiper.slides.length;

    if (journeyCurrent) {
      journeyCurrent.textContent = String(current).padStart(2, "0");
    }

    if (journeyTotal) {
      journeyTotal.textContent = String(total).padStart(2, "0");
    }

    if (journeyProgress) {
      const progress = total > 1 ? ((current - 1) / (total - 1)) * 100 : 100;

      journeyProgress.style.setProperty("--progress", `${progress}%`);
    }
  }

  new Swiper(journeySwiperElement, {
    modules: [Navigation],

    slidesPerView: "auto",

    spaceBetween: 24,

    speed: 700,

    grabCursor: true,

    watchOverflow: true,

    navigation: {
      nextEl: ".journey-next",
      prevEl: ".journey-prev",
    },

    breakpoints: {
      0: {
        spaceBetween: 14,
      },

      768: {
        spaceBetween: 20,
      },

      1024: {
        spaceBetween: 24,
      },
    },

    on: {
      init: function () {
        updateJourneyProgress(this);
      },

      slideChange: function () {
        updateJourneyProgress(this);
      },
    },
  });
}

/* =========================================================
   CONTACT — REQUEST A CALL BACK
========================================================= */

function initContact() {
  const callbackTrigger = document.querySelector("#callback-trigger");

  const callbackTriggerText = document.querySelector("#callback-trigger-text");

  const callbackTriggerIcon = document.querySelector("#callback-trigger-icon");

  const callbackFormWrapper = document.querySelector("#callback-form-wrapper");

  const callbackForm = document.querySelector("#callback-form");

  const callbackSubmit = document.querySelector("#callback-submit");

  const callbackSubmitText = document.querySelector("#callback-submit-text");

  const callbackSuccess = document.querySelector("#callback-success");

  if (
    !callbackTrigger ||
    !callbackFormWrapper ||
    !callbackForm ||
    !callbackSuccess
  ) {
    return;
  }

  let isFormOpen = false;

  /* -----------------------------------------
     OPEN / CLOSE FORM
  ----------------------------------------- */

  callbackTrigger.addEventListener("click", () => {
    if (!isFormOpen) {
      isFormOpen = true;

      callbackTrigger.classList.add("is-open");

      callbackTrigger.setAttribute("aria-expanded", "true");

      callbackTriggerText.textContent = "CLOSE REQUEST";

      callbackTriggerIcon.className = "ri-arrow-up-line";

      gsap.to(callbackFormWrapper, {
        height: "auto",
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
      });
    } else {
      isFormOpen = false;

      callbackTrigger.classList.remove("is-open");

      callbackTrigger.setAttribute("aria-expanded", "false");

      callbackTriggerText.textContent = "REQUEST A CALL BACK";

      callbackTriggerIcon.className = "ri-arrow-right-up-line";

      gsap.to(callbackFormWrapper, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: "power3.inOut",
      });
    }
  });

  /* -----------------------------------------
     FORM SUBMISSION
  ----------------------------------------- */

  callbackForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (callbackSubmit && callbackSubmit.classList.contains("is-loading")) {
      return;
    }

    callbackSubmit.classList.add("is-loading");

    callbackSubmitText.textContent = "SENDING...";

    try {
      await emailjs.sendForm(
        "service_4ya35b5",
        "template_ok985id",
        callbackForm,
      );

      /* -----------------------------------------
         SUCCESS
      ----------------------------------------- */

      callbackSubmitText.textContent = "SENT";

      gsap.to(callbackFormWrapper, {
        height: 0,
        opacity: 0,
        duration: 0.55,
        ease: "power3.inOut",

        onComplete: () => {
          isFormOpen = false;

          callbackTrigger.style.display = "none";

          callbackSuccess.style.display = "block";

          gsap.fromTo(
            callbackSuccess,
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
            },
          );
        },
      });

      callbackForm.reset();
    } catch (error) {
      console.error("Callback request failed:", error);

      callbackSubmitText.textContent = "TRY AGAIN";

      callbackSubmit.classList.remove("is-loading");

      alert("Something went wrong. Please try again.");
    }
  });
}

initNavbar();
initMobileMenu();

initHero();

initProblem();

initWhyIntro();
initMovement();
initSafety();

initAwareness();

initConnection();

initAccessibility();

initJourney();

initContact();
