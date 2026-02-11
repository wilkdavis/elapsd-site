const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("lightbox-close");
const prevButton = document.getElementById("lightbox-prev");
const nextButton = document.getElementById("lightbox-next");

if (!lightbox || !lightboxImage || !closeButton || !prevButton || !nextButton) {
  // Layout may not include lightbox markup in some contexts.
} else {
  const getTriggers = () => Array.from(document.querySelectorAll(".lightbox-trigger"));
  const focusSelector = [
    "button:not([disabled])",
    "a[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  let isOpen = false;
  let currentIndex = -1;
  let lastTrigger = null;

  function updateNavVisibility() {
    const count = getTriggers().length;
    const hasMultiple = count > 1;
    prevButton.hidden = !hasMultiple;
    nextButton.hidden = !hasMultiple;
  }

  function showByIndex(index) {
    const triggers = getTriggers();
    const count = triggers.length;
    if (!count) return;

    const wrappedIndex = ((index % count) + count) % count;
    const trigger = triggers[wrappedIndex];
    const src = trigger.dataset.lightboxSrc;
    const alt = trigger.dataset.lightboxAlt || "";

    if (!src) return;

    currentIndex = wrappedIndex;
    lightboxImage.src = src;
    lightboxImage.alt = alt;
  }

  function trapFocus(event) {
    if (event.key !== "Tab" || !isOpen) return;

    const focusable = Array.from(lightbox.querySelectorAll(focusSelector)).filter(
      (el) => !el.hasAttribute("hidden")
    );

    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function closeLightbox() {
    if (!isOpen) return;

    isOpen = false;
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
    lightboxImage.alt = "";

    if (lastTrigger && typeof lastTrigger.focus === "function") {
      lastTrigger.focus();
    }
  }

  function openLightbox({ index, trigger }) {
    showByIndex(index);
    if (!lightboxImage.src) return;

    isOpen = true;
    lastTrigger = trigger || null;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    updateNavVisibility();
    closeButton.focus();
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".lightbox-trigger");
    if (!trigger) return;

    const triggers = getTriggers();
    const index = triggers.indexOf(trigger);
    if (index < 0) return;

    openLightbox({ index, trigger });
  });

  closeButton.addEventListener("click", closeLightbox);

  prevButton.addEventListener("click", () => {
    if (!isOpen) return;
    showByIndex(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    if (!isOpen) return;
    showByIndex(currentIndex + 1);
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showByIndex(currentIndex - 1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showByIndex(currentIndex + 1);
      return;
    }

    trapFocus(event);
  });
}
