if (document.querySelector('.exercise03')) {
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

    // Handle DNA check
    document.getElementById("checkDNAButton").addEventListener("click", checkDNA);

    function checkDNA() {
        const expectedLetters = ["G", "T", "C", "C", "A", "T"];

        for (let i = 1; i <= 6; i++) {
            const container = document.getElementById(`DNA_${i}`);
            const draggedItem = container.querySelector("p");

            if (draggedItem) {
                const draggedItemId = draggedItem.id[0];

                if (draggedItemId === expectedLetters[i - 1]) {
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

    // Handle RNA check
    document.getElementById("checkRNAButton").addEventListener("click", checkRNA);

    function checkRNA() {
        const expectedLetters = ["C", "A", "G", "G", "U", "A"];

        for (let i = 1; i <= 6; i++) {
            const container = document.getElementById(`RNA_${i}`);
            const draggedItem = container.querySelector("p");

            if (draggedItem) {
                const draggedItemId = draggedItem.id[0];

                if (draggedItemId === expectedLetters[i - 1]) {
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
}