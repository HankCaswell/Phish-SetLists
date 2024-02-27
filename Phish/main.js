

let apikey = "9F25F748B663039527B0";

const getSetlist = async(event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let formData = form.get('userInput');
    console.log(formData)

    const response = await fetch(`https://api.phish.net/v5/setlists/showdate/${formData}.json?apikey=${apikey}`);
    const data = await response.json(); 
    songTitles = data.data.map(song => song.song);

    let ol = document.createElement("ol");
    songTitles.forEach(element => { 
        let li = document.createElement("li");
        li.textContent = element;
        ol.appendChild(li);
    });

    // Clear previous content and append the new list
    let setlistElement = document.getElementById('setlist');
    setlistElement.innerHTML = ''; // Clear previous content
    setlistElement.appendChild(ol); // Append the new list
    console.log(data);
};

// Attach event listener to form submission
document.getElementById('setlistForm').addEventListener('submit', getSetlist);



