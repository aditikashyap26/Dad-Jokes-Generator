const btnE1 = document.getElementById("btn")

const apikey = "Aev3NcSZuGG6g7xmSA6hrw==qQGin5jKFPw7Pmcq";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    const response = fetch(apiURL, options)
    const data = await response.json()

    console.log(data);
}

btnE1.addEventListener("click", getJoke)