// Drag and Drop functionality
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const target = ev.target;

    // Check if the target is an order place and doesn't have any children
    if (!target.hasChildNodes()) {
        target.appendChild(document.getElementById(data));
    }
}

// Handle check
document.getElementById("checkButton").addEventListener("click", checkOrder);

function checkOrder() {
    const expectedOrder = ["step_1", "step_2", "step_3", "step_4", "step_5", "step_6", "step_7", "step_8"];

    for (let i = 1; i <= 8; i++) {
        const container = document.getElementById(`order_${i}`);
        const draggedItem = container.querySelector("p");

        if (draggedItem) {
            const draggedItemId = draggedItem.id;

            if (draggedItemId === expectedOrder[i - 1]) {
                console.log("Item on box " + draggedItemId + " is correct!")
                container.style.backgroundColor = "rgba(145, 233, 208)";
            } else {
                console.log("Item on box " + draggedItemId + " is wrong!")
                container.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
                setTimeout(() => {
                    container.style.backgroundColor = "white";
                }, 2000);
            }
        } else {
            console.log("Item on box " + i + " is empty!")
            container.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            setTimeout(() => {
                container.style.backgroundColor = "white";
            }, 2000);
        }
    }
}

// Handle reset
const originalDNAExtractionContent = document.getElementById("DNA_extraction").innerHTML;
document.getElementById("resetButton").addEventListener("click", reset);

function reset() {
    console.log("clicked");
    const dnaExtractionContainer = document.getElementById("DNA_extraction");
    dnaExtractionContainer.innerHTML = originalDNAExtractionContent;

    // Reattach the event listener for the "Check your answer" button
    document.getElementById("checkButton").addEventListener("click", checkOrder);

    // Reattach the event listener for the "Reset" button
    document.getElementById("resetButton").addEventListener("click", reset);
}