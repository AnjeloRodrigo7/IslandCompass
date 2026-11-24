/* =====================================
   LOAD NAVIGATION BAR
===================================== */

fetch("components/navbar.html")

    .then(response => {

        if (!response.ok) {

            throw new Error("Navigation file could not be loaded.");

        }

        return response.text();

    })

    .then(data => {

        // Insert navigation HTML

        document.getElementById("navbar-placeholder").innerHTML = data;


        // Get mobile menu elements

        const menuToggle = document.getElementById("menuToggle");

        const navLinks = document.getElementById("navLinks");


        // Mobile menu functionality

        if (menuToggle && navLinks) {

            menuToggle.addEventListener("click", () => {

                navLinks.classList.toggle("show");

                const isOpen = navLinks.classList.contains("show");

                menuToggle.setAttribute("aria-expanded", isOpen);

            });

        }

    })

    .catch(error => {

        console.error("Navigation loading error:", error);

    });
