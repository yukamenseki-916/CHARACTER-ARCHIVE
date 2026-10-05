/* =========================
   FLOOR AREA CHARACTER ARCHIVE
   SIDE MENU
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const menuContainer = document.createElement("div");

  menuContainer.innerHTML = `

    <button
      class="menu-button"
      id="menuButton"
      aria-label="メニューを開く"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>


    <nav
      class="side-menu"
      id="sideMenu"
      aria-label="サイトメニュー"
    >

      <div class="menu-title">

        <div class="menu-title-main">
          FLOOR AREA
        </div>

        <div class="menu-title-sub">
          CHARACTER ARCHIVE
        </div>

      </div>


      <ul class="menu-list">

        <li>
          <a
            href="index.html"
            class="menu-link"
          >
            <span class="menu-link-main">
              CHARACTER
            </span>

            <span class="menu-link-sub">
              CHARACTER ARCHIVE
            </span>
          </a>
        </li>


        <li>
          <a
            href="calendar.html"
            class="menu-link"
          >
            <span class="menu-link-main">
              BIRTHDAY
            </span>

            <span class="menu-link-sub">
              BIRTHDAY CALENDAR
            </span>
          </a>
        </li>


        <li>
          <a
            href="scenario.html"
            class="menu-link"
          >
            <span class="menu-link-main">
              SCENARIO
            </span>

            <span class="menu-link-sub">
              SCENARIO ARCHIVE
            </span>
          </a>
        </li>


        <li>
          <a
            href="voice.html"
            class="menu-link"
          >
            <span class="menu-link-main">
              VOICE
            </span>

            <span class="menu-link-sub">
              VOICE ARCHIVE
            </span>
          </a>
        </li>


        <li>
          <a
            href="chat.html"
            class="menu-link"
          >
            <span class="menu-link-main">
              CHAT
            </span>

            <span class="menu-link-sub">
              CHARACTER CHAT
            </span>
          </a>
        </li>


        <li>
          <a
            href="about.html"
            class="menu-link"
          >
            <span class="menu-link-main">
              ABOUT
            </span>

            <span class="menu-link-sub">
              ABOUT THIS ARCHIVE
            </span>
          </a>
        </li>

      </ul>

    </nav>


    <div
      class="menu-overlay"
      id="menuOverlay"
    ></div>

  `;


  document.body.prepend(menuContainer);


  const menuButton =
    document.getElementById("menuButton");

  const sideMenu =
    document.getElementById("sideMenu");

  const menuOverlay =
    document.getElementById("menuOverlay");


  function openMenu() {

    menuButton.classList.add("is-open");

    sideMenu.classList.add("is-open");

    menuOverlay.classList.add("is-open");

  }


  function closeMenu() {

    menuButton.classList.remove("is-open");

    sideMenu.classList.remove("is-open");

    menuOverlay.classList.remove("is-open");

  }


  menuButton.addEventListener(
    "click",
    function () {

      if (
        sideMenu.classList.contains("is-open")
      ) {

        closeMenu();

      } else {

        openMenu();

      }

    }
  );


  menuOverlay.addEventListener(
    "click",
    closeMenu
  );


  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        closeMenu();

      }

    }
  );


  const menuLinks =
    document.querySelectorAll(".menu-link");


  menuLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      closeMenu
    );

  });

});
