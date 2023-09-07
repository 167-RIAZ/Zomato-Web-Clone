

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search input");
    const foodCards = document.querySelectorAll(".food-card");

    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();

      foodCards.forEach((card) => {
        const cardTitle = card.querySelector("h3").textContent.toLowerCase();
        if (cardTitle.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
</script>
