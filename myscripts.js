fetch("https://coding-week-2024-api.onrender.com/api/data")
    .then(response => response.json())
    .then(data => {console.log(data);
        document.getElementById('line1').textContent=data[0].headline;
        document.getElementById('line2').textContent=data[1].headline;
        document.getElementById('line3').textContent=data[2].headline;
        document.getElementById('line4').textContent=data[3].headline;
        document.getElementById('img1').src=data[0].image;
        document.getElementById('img2').src=data[1].image;
        document.getElementById('img3').src=data[2].image;
        document.getElementById('img4').src=data[3].image;
    })