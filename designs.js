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
    paintCell();
  });

  var paintCell = function() {
    for (let i = 0; i < grid.rows.length; i++) {
      for (let j = 0; j < grid.rows[i].cells.length; j++) {
        grid.rows[i].cells[j].onclick = function() {
          changeBackground(this);
        };
      }  
    }
  };

  var changeBackground = function(cell) {
    const color = document.getElementById("colorPicker").value;
    cell.style.backgroundColor = color;
  };
};

makeGrid();
