const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const GETBTN = document.getElementById('change-cat');


const getCats = async () => {
    try
    {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    }
    catch(e)    
    {
        console.log(e);
    }
}


const loadCats = async () => {
    const GETIMG = document.getElementById('cat');
    GETIMG.src = await getCats();
}

GETBTN.addEventListener('click',loadCats);

loadCats();

