// var magButton = document.getElementById('powerMagButton');
// magButton.addEventListener('click', addContent);

document.querySelectorAll('#powerMagButton').forEach(item => {
    item.addEventListener('click', addContent)
})

document.querySelectorAll('#powerMagButton').forEach(item => {
    item.addEventListener('click', addContent)
})



var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "inline-table";
}



function addSelection(e) {
    xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status = 200) {
            responseObject = JSON.parse(xhr.responseText);

            var newContent = '';
            //filters through professionalProducts
            for (var i = 0; i < responseObject.professionalProducts.length; i++) {
                //execute if click event name matches object name
                if (responseObject.professionalProducts[i].name == e.target.innerText) {
                    console.log('Matched: ' + responseObject.professionalProducts[i].name)
                    newContent += '';

                } else {
                    console.log('no match')
                }

            };
            //Add content
            document.querySelector('.contentBox').innerHTML = newContent;
        }
    };
    xhr.open('GET', './json/mags.json', true);
    xhr.send(null);
}

function addContent(e) {
    xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status = 200) {
            responseObject = JSON.parse(xhr.responseText);

            var newContent = '';
            //filters through professionalProducts
            for (var i = 0; i < responseObject.professionalProducts.length; i++) {
                //execute if click event name matches object name
                if (responseObject.professionalProducts[i].name == e.target.innerText) {
                    console.log('Matched: ' + responseObject.professionalProducts[i].name)
                    newContent += '<div class="animate-bottom">';
                    newContent += '<h1>' + responseObject.professionalProducts[i].name + '</h1>';
                    newContent += '<p>' + responseObject.professionalProducts[i].description + '</p>';
                    newContent += '<image class=\"images\" src=\"' + responseObject.professionalProducts[i].image + '\">';
                    newContent += '<div class="detailsRight">';
                    newContent += '<h1>Features</h1>';
                    for (var ii = 0; ii < responseObject.professionalProducts[i].detailList.length; ii++) {
                        newContent += '<li>' + responseObject.professionalProducts[i].detailList[ii].item + '</li>';
                    }
                    newContent += '</div>';
                    newContent += '</div>';
                } else {
                    console.log('no match')
                }

            };
            //Add content
            document.querySelector('.contentBox').innerHTML = newContent;
        }
    };
    xhr.open('GET', 'mags.json', true);
    xhr.send(null);
}
