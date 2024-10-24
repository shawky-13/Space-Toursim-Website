let linksThree = document.querySelectorAll(".technology section li a");
let techName = document.querySelector(".tech-name");
let techDesc = document.querySelector(".tech-description");
let techImg = document.getElementById("techImg");

// selecting the tabs of crew page
fetch("/js/data.json")
  .then((Response) => {
    if (!Response.ok) {
      throw new Error(`Response Status: ${Response.status}`);
    }
    return Response.json();
  })
  .then((data) => {
    techName.textContent = data.technology[0].name;
    techDesc.textContent = data.technology[0].description;
    techImg.src = `${data.technology[0].images.portrait}`;

    linksThree.forEach((link) => {
      link.onclick = function () {
        linksThree.forEach((link) => {
          link.classList.remove("active-2");
        });
        link.classList.add("active-2");
        if (link.classList.contains("one")) {
          techName.textContent = data.technology[0].name;
          techDesc.textContent = data.technology[0].description;
          techImg.src = `${data.technology[0].images.portrait}`;
        } else if (link.classList.contains("two")) {
          techName.textContent = data.technology[1].name;
          techDesc.textContent = data.technology[1].description;
          techImg.src = `${data.technology[1].images.portrait}`;
        } else {
          techName.textContent = data.technology[2].name;
          techDesc.textContent = data.technology[2].description;
          techImg.src = `${data.technology[2].images.portrait}`;
        }
      };
    });
  });
