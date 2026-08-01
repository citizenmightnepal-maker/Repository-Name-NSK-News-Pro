/* ===================================================
   NSK NEWS PRO
   search.js v1.0
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector(".search-box input");

    const cards = document.querySelectorAll(".news-card");

    const clearBtn = document.querySelector(".search-clear");

    if (!searchInput) return;

    function filterNews() {

        const keyword = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {

            const title =
                card.querySelector(".news-title")?.textContent.toLowerCase() || "";

            const summary =
                card.querySelector(".news-summary")?.textContent.toLowerCase() || "";

            if (title.includes(keyword) || summary.includes(keyword)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    }

    searchInput.addEventListener("keyup", filterNews);

    if (clearBtn) {

        clearBtn.addEventListener("click", () => {

            searchInput.value = "";

            filterNews();

            searchInput.focus();

        });

    }

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            searchInput.value = "";

            filterNews();

        }

    });

});
