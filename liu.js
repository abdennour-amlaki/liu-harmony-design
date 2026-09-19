(() => {
  "use strict";

  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const year = document.getElementById("year");
  const form = document.getElementById("projectForm");
  const status = document.getElementById("formStatus");

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 30);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    mainNav?.classList.remove("open");
    menuToggle?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  };

  menuToggle?.addEventListener("click", () => {
    const open = !mainNav.classList.contains("open");

    mainNav.classList.toggle("open", open);
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );

    document.body.classList.toggle("menu-open", open);
  });

  mainNav?.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", closeMenu)
  );

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => {
        const active = btn === button;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", String(active));
      });

      cards.forEach(card => {
        const show =
          filter === "all" || card.dataset.category === filter;

        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px"
      }
    );

    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add("visible"));
  }

  // Contact form
  form?.addEventListener("submit", async event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const projectType = String(data.get("projectType") || "").trim();
    const location = String(data.get("location") || "").trim();
    const message = String(data.get("details") || "").trim();

    if (status) {
      status.textContent = "Sending your message...";
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            phone: phone,
            projectType: projectType,
            location: location,
            message: message
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      if (status) {
        status.textContent = "Message sent successfully! ✓";
      }

      form.reset();

    } catch (error) {
      console.error(error);

      if (status) {
        status.textContent =
          "Unable to send message. Please try again.";
      }
    }
  });

})();