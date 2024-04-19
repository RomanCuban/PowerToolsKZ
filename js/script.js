document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault();
  var searchText = document.querySelector(".form-control").value.toLowerCase();
  var tools = document.querySelectorAll(".tool_box");

  tools.forEach(function (tool) {
    var toolName = tool.querySelector(".text").textContent.toLowerCase();
    if (toolName.includes(searchText)) {
      tool.style.display = "block";
    } else {
      tool.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".nav-link");
  const toolsContainer = document.querySelector(".tools");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedCategory = this.getAttribute("data-category");

      const tools = document.querySelectorAll(".tool_box");
      tools.forEach((tool) => {
        if (
          selectedCategory === "All" ||
          tool.dataset.category === selectedCategory
        ) {
          tool.style.display = "block";
        } else {
          tool.style.display = "none";
        }
      });
    });
  });

  // Загрузка и обработка данных из JSON
  fetch("/data/tools.json")
    .then((response) => response.json())
    .then((data) => {
      data.tools.forEach((tool) => {
        const toolBox = document.createElement("div");
        toolBox.classList.add("tool_box");
        toolBox.dataset.category = tool.category;
        toolBox.style.marginTop = "20px";
        toolBox.style.marginBottom = "40px";
        toolBox.style.marginLeft = "20px";
        toolBox.style.marginRight = "20px";
        toolBox.style.border = "1px solid #a8deef";
        toolBox.style.width = "200px";
        toolBox.style.height = "200px";
        toolBox.style.borderRadius = "15px";
        toolBox.style.transition = "background-color 0.3s ease";

        const toolLink = document.createElement("a");
        toolLink.href = tool.link;

        const toolImage = document.createElement("img");
        toolImage.src = tool.image;
        toolImage.alt = "tool";
        toolImage.style.top = "0";
        toolImage.style.left = "0";
        toolImage.style.width = "100%";
        toolImage.style.height = "100%";
        toolImage.style.objectFit = "contain";

        const toolText = document.createElement("p");
        toolText.classList.add("text");
        toolText.textContent = tool.name;
        toolText.style.marginTop = "15px";
        toolText.style.textAlign = "center";
        toolText.style.color = "#a8deef";
        toolText.style.transition = "color 0.3s ease";

        toolLink.appendChild(toolImage);
        toolLink.appendChild(toolText);
        toolBox.appendChild(toolLink);

        // Добавляем обработчики событий для изменения стилей при наведении мыши
        toolBox.addEventListener("mouseenter", function () {
          toolBox.style.border = "1px solid azure";
          toolText.style.color = "azure";
        });
        toolBox.addEventListener("mouseleave", function () {
          toolBox.style.border = "1px solid #a8deef";
          toolText.style.color = "#a8deef";
        });

        toolsContainer.appendChild(toolBox);
      });
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
      console.error("Error message:", error.message);
    });
});
