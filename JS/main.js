// Load Navigation Bar

fetch("components/navbar.html")

    .then(response => response.text())

    .then(data => {

        document.getElementById("navbar-placeholder").innerHTML = data;

        // Mobile Navigation Menu

        const menuToggle = document.getElementById("menuToggle");
        const navLinks = document.getElementById("navLinks");

        if (menuToggle && navLinks) {

            menuToggle.addEventListener("click", () => {

                navLinks.classList.toggle("show");

            });

        }

    })

    .catch(error => {
        console.error("Navigation loading error:", error);
    });
