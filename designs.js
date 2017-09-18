// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  const grid = document.getElementById("pixel_canvas");

  document.getElementById("submit").addEventListener("click", function() {

    event.preventDefault();
    grid.innerHTML = "";

    const width = document.getElementById("input_width").value;
    const height = document.getElementById("input_height").value;

    for (let i = 0; i < height; i++) {
      const rows = document.createElement("tr");
      let j = 0;
      while (j < width) {
        const cells = document.createElement("td");
        j++;
        rows.appendChild(cells);
      }
      grid.appendChild(rows);
    }
  });
};

makeGrid();
