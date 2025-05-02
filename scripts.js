document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");

  // --- Autofill Agent Info ---
  const agentInfo = {
    "Gregg": { firstName: "Gregg", surname: "Wilson", email: "greggwilson@seeff.com", cell: "083 321 8500" },
    "Bradley": { firstName: "Bradley", surname: "Topham", email: "bradley.topham@seeff.com", cell: "079 493 9537" },
    "Cara Ann": { firstName: "Cara Ann", surname: "Ridl", email: "cara.ridl@seeff.com", cell: "082 325 7030" },
    "Carmen": { firstName: "Carmen", surname: "Jones", email: "carmen.jones@seeff.com", cell: "072 338 5227" },
    "Cece": { firstName: "Cece", surname: "Tsewu", email: "cece.tsewu@seeff.com", cell: "083 332 4781" },
    "Charlotte": { firstName: "Charlotte", surname: "Scholtz", email: "charlotte.scholtz@seeff.com", cell: "082 817 4453" },
    "Cindy": { firstName: "Cindy", surname: "Johnston", email: "cindy.johnston@seeff.com", cell: "083 564 2020" },
    "Dave": { firstName: "Dave", surname: "Jones", email: "davejones@seeff.com", cell: "082 445 8771" },
    "Fiona": { firstName: "Fiona", surname: "Patrick", email: "fiona.patrick@seeff.com", cell: "082 553 7810" },
    "Graham": { firstName: "Graham", surname: "Noot", email: "graham.noot@seeff.com", cell: "081 514 0141" },
    "Hayden": { firstName: "Hayden", surname: "Dowdall", email: "hayden.dowdall@seeff.com", cell: "083 452 6722" },
    "Lynette": { firstName: "Lynette", surname: "Dorkin", email: "lynette.dorkin@seeff.com", cell: "082 293 8034" },
    "Matty": { firstName: "Matty", surname: "Kemp", email: "matty.kemp@seeff.com", cell: "076 680 6306" },
    "Natasha": { firstName: "Natasha", surname: "Brown", email: "natasha.brown@seeff.com", cell: "083 778 8302" },
    "Nolwazi": { firstName: "Nolwazi", surname: "Phewa", email: "nolwazi.phewa@seeff.com", cell: "072 114 1214" },
    "Shane": { firstName: "Shane", surname: "Savage", email: "shane.savage@seeff.com", cell: "061 072 1566" },
    "Sue": { firstName: "Sue", surname: "Andrews", email: "sue.andrews@seeff.com", cell: "073 282 5587" },
    "Varina": { firstName: "Varina", surname: "Ross", email: "varina.ross@seeff.com", cell: "072 119 3089" }
  };

  const agentSelect = document.getElementById('agentSelect');
  const agentFirstName = document.getElementById('agentFirstName');
  const agentSurname = document.getElementById('agentSurname');
  const agentCell = document.getElementById('agentCell');
  const agentEmail = document.getElementById('agentEmail');
  const newAgentFields = document.getElementById('newAgentFields');
  const existingAgentFields = document.getElementById('existingAgentFields');

  agentSelect.addEventListener('change', function () {
    if (this.value === "newAgent") {
      newAgentFields.style.display = 'block';
      existingAgentFields.style.display = 'none';
    } else {
      const selected = agentInfo[this.value];
      if (selected) {
        agentFirstName.value = selected.firstName;
        agentSurname.value = selected.surname;
        agentCell.value = selected.cell;
        agentEmail.value = selected.email;
      } else {
        agentFirstName.value = '';
        agentSurname.value = '';
        agentCell.value = '';
        agentEmail.value = '';
      }
      newAgentFields.style.display = 'none';
      existingAgentFields.style.display = 'block';
    }
  });

  // --- Multiple Owners ---
  document.getElementById('multipleOwnersYes').addEventListener('click', function () {
    document.getElementById('secondOwnerFields').style.display = 'block';
    this.classList.add('selected');
    document.getElementById('multipleOwnersNo').classList.remove('selected');
  });

  document.getElementById('multipleOwnersNo').addEventListener('click', function () {
    document.getElementById('secondOwnerFields').style.display = 'none';
    this.classList.add('selected');
    document.getElementById('multipleOwnersYes').classList.remove('selected');
  });



// --- Competition Section (new block layout toggle) ---
document.getElementById('competitionYes').addEventListener('click', function () {
  document.getElementById('competitionSection').style.display = 'block';
  this.classList.add('selected');
  document.getElementById('competitionNo').classList.remove('selected');
});

document.getElementById('competitionNo').addEventListener('click', function () {
  document.getElementById('competitionSection').style.display = 'none';
  this.classList.add('selected');
  document.getElementById('competitionYes').classList.remove('selected');
});

// ✅ Create new block-style comparable section
function createComparableBlock() {
  const block = document.createElement('div');
  block.className = 'comparable-block';

  block.innerHTML = `
    <div class="row-group">
      <div><input type="text" class="compInput price" placeholder="Selling Price"></div>
      <div><input type="text" class="compInput price" placeholder="Listing Price"></div>
    </div>
    <div class="row-group">
      <div style="flex: 100%;"><input type="text" class="compInput" placeholder="Address"></div>
    </div>
    <div class="row-group">
      <div><input type="text" class="compInput" placeholder="Beds"></div>
      <div><input type="text" class="compInput" placeholder="Baths"></div>
      <div><input type="text" class="compInput" placeholder="Rec"></div>
      <div><input type="text" class="compInput" placeholder="Gar"></div>
      <div><input type="text" class="compInput" placeholder="Pool"></div>
    </div>
    <div class="row-group">
      <div><input type="text" class="compInput" placeholder="G/Flat"></div>
      <div><button type="button" class="delete-btn">Delete</button></div>
    </div>
  `;

  // Optional: apply price formatting if function exists
  if (typeof addPriceFormatting === "function") {
    addPriceFormatting(block);
  }

  // Delete button
  block.querySelector('.delete-btn').addEventListener('click', function () {
    if (confirm("Are you sure you want to delete this comparable?")) {
      block.remove();
    }
  });

  document.getElementById('competitionContainer').appendChild(block);
}

// ✅ Add initial event listener to "+" button
document.getElementById('addComparableBtn').addEventListener('click', createComparableBlock);

// --- Sales Section (table toggle stays the same) ---
document.getElementById('salesYes').addEventListener('click', function () {
  document.getElementById('salesTableSection').style.display = 'block';
  this.classList.add('selected');
  document.getElementById('salesNo').classList.remove('selected');
});

document.getElementById('salesNo').addEventListener('click', function () {
  document.getElementById('salesTableSection').style.display = 'none';
  this.classList.add('selected');
  document.getElementById('salesYes').classList.remove('selected');
});

// --- Add Sales Row (table layout remains) ---
document.getElementById('addSaleRowBtn').addEventListener('click', function () {
  const table = document.getElementById('salesTable').getElementsByTagName('tbody')[0];
  const row = table.insertRow();
  const fields = ['R0', 'R0', 'No, Street, Area', 'eg. 2', 'eg. 1', 'eg. 1', 'eg. 2', 'Yes/No', 'Yes/No'];

  fields.forEach((ph, i) => {
    const cell = row.insertCell(i);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = ph;
    input.className = (i === 0 || i === 1) ? 'salesInput price' : 'salesInput';
    cell.appendChild(input);
  });

  const deleteCell = row.insertCell(9);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = "Delete";
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function () {
    if (confirm("Are you sure you want to delete this sale?")) {
      row.remove();
    }
  });
  deleteCell.appendChild(deleteBtn);

  addPriceFormatting(row);
});






  // --- Price Formatting Function ---
  function addPriceFormatting(row) {
    const priceInputs = row.querySelectorAll('input.price');
    priceInputs.forEach(input => {
      input.addEventListener('input', function () {
        let value = this.value.replace(/[^\d]/g, '');
        if (value) {
          this.value = 'R' + Number(value).toLocaleString();
        } else {
          this.value = '';
        }
      });
    });
  }

  // --- Price formatting function ---
  function addPriceFormatting(container) {
    const priceInputs = container.querySelectorAll('input.price');
    priceInputs.forEach(input => {
      input.addEventListener('input', function () {
        let value = this.value.replace(/[^\d]/g, '');
        if (value) {
          this.value = 'R' + Number(value).toLocaleString();
        } else {
          this.value = '';
        }
      });
    });
  }

  // --- Live Format Price Fields (Initial Load) ---
  addPriceFormatting(document); // ✅ Applies formatting to all .price inputs

  // --- Set up date picker ---
  const calendarIcon = document.getElementById("calendarIcon");
  console.log("calendarIcon found:", calendarIcon);
  const valuationDateInput = document.getElementById("valuationDate");

  calendarIcon.addEventListener("click", function () {
    console.log("Calendar icon clicked");

    // Slight delay helps in Safari
    setTimeout(() => {
      if (valuationDateInput.showPicker) {
        valuationDateInput.showPicker(); // Preferred modern method
      } else {
        valuationDateInput.focus(); // Fallback
      }
    }, 10);
  });

  // --- Image preview for uploaded house image ---
  const houseImageUpload = document.getElementById('houseImageUpload');
  const houseImage = document.getElementById('houseImage');
  const uploadedImageSection = document.getElementById('uploadedImageSection');

  houseImageUpload.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        houseImage.src = e.target.result;
        uploadedImageSection.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
});
