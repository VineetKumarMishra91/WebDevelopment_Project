document.getElementById("categories-btn").addEventListener("click", function(event) {
    event.stopPropagation();
    let dropdown = document.getElementById("categories-dropdown");
    dropdown.parentElement.classList.toggle("show");
});

document.getElementById("close-dropdown").addEventListener("click", function(event) {
    event.stopPropagation();
    document.querySelector(".dropdown").classList.remove("show");
});

document.getElementById("categories-dropdown").addEventListener("click", function(event) {
    event.stopPropagation();
});

window.addEventListener("click", function(event) {
    if (!event.target.matches("#categories-btn")) {
        document.querySelector(".dropdown").classList.remove("show");
    }
});

// Helper function to toggle dropdown visibility
function setupDropdownToggle(buttonId, dropdownId) {
    document.getElementById(buttonId).addEventListener("click", function(event) {
        event.stopPropagation();
        let dropdown = document.getElementById(dropdownId);
        dropdown.parentElement.classList.toggle("show");
    });
}

// Helper function to close dropdown
function setupCloseDropdown(closeButtonId) {
    document.getElementById(closeButtonId).addEventListener("click", function(event) {
        event.stopPropagation();
        document.querySelector(".dropdown").classList.remove("show");
    });
}


function setupDropdownClickPrevention(dropdownId) {
    document.getElementById(dropdownId).addEventListener("click", function(event) {
        event.stopPropagation();
    });
}

// Generic function to add a tag
function addTag(value, container, checkboxes) {
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.textContent = value;

    const removeBtn = document.createElement("span");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "×";

    removeBtn.addEventListener("click", function() {
        tag.remove();
        const checkbox = Array.from(checkboxes).find(cb => cb.value === value);
        if (checkbox) checkbox.checked = false; // Uncheck the corresponding checkbox
    });

    tag.appendChild(removeBtn);
    container.appendChild(tag);
}


function removeTag(value, container) {
    const tags = container.querySelectorAll(".tag");
    tags.forEach(tag => {
        if (tag.textContent.includes(value)) {
            tag.remove();
        }
    });
}

// Generic function to set up checkbox handling
function setupCheckboxHandling(dropdownId, selectedContainerId) {
    const checkboxes = document.querySelectorAll(`#${dropdownId} input[type='checkbox']`);
    const selectedContainer = document.getElementById(selectedContainerId);

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                addTag(this.value, selectedContainer, checkboxes);
            } else {
                removeTag(this.value, selectedContainer);
            }
        });
    });
}


setupDropdownToggle("location-btn", "location-dropdown");

setupCloseDropdown("close-location");

setupDropdownClickPrevention("location-dropdown");

// Handle checkbox selection and update tags for Location
setupCheckboxHandling("location-dropdown", "selected-location");

// Set up dropdown toggle for Team Size
setupDropdownToggle("team-size-btn", "team-size-dropdown");

// Set up close dropdown for Team Size
setupCloseDropdown("close-team-size");

// Prevent dropdown from closing when clicking inside Team Size dropdown
setupDropdownClickPrevention("team-size-dropdown");

// Handle checkbox selection and update tags for Team Size
setupCheckboxHandling("team-size-dropdown", "selected-team-size");

// Set up dropdown toggle for Stage
setupDropdownToggle("stage-btn", "stage-dropdown");

// Set up close dropdown for Stage
setupCloseDropdown("close-stage");

// Prevent dropdown from closing when clicking inside Stage dropdown
setupDropdownClickPrevention("stage-dropdown");

// Handle checkbox selection and update tags for Stage
setupCheckboxHandling("stage-dropdown", "selected-stage");

// Close dropdowns when clicking outside
window.addEventListener("click", function(event) {
    if (!event.target.matches(".btn-filter")) {
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.classList.remove("show");
        });
    }
});








