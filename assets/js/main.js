fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(json => {
        const random = json[Math.floor(Math.random() * json.length)];
        document.querySelector('.photo').src = random.flags.png;

        const input = document.querySelector(".enter");
        document.querySelector('.done').addEventListener('click', function () {
            if (json.name == input.value) {
                alert("doğrudur")
            }
            else {
                alert("düzgün deyil!");
            }
        }
        )
    });