// var magButton = document.getElementById('powerMagButton');
// magButton.addEventListener('click', addContent);

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



function addContent(e) {
    xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if(xhr.status = 200) {
            responseObject = JSON.parse(xhr.responseText);
            
            var newContent = '';
            //filters through magnifiers
            for (var i = 0; i < responseObject.magnifiers.length; i++) { 
                //execute if click event name matches object name
                if (responseObject.magnifiers[i].name == e.target.innerText) {
                    console.log('Matched: '+responseObject.magnifiers[i].name)
                    newContent += '<div class="animate-bottom">';
                    newContent += '<h1>'+responseObject.magnifiers[i].name+'</h1>';
                    newContent += '<p>'+responseObject.magnifiers[i].description+'</p>';
                    newContent += '<image class=\"images\" src=\"'+responseObject.magnifiers[i].image+'\">';
                    newContent += '<div class="detailsRight">';
                    newContent += '<h1>Features</h1>';
                    for (var ii = 0; ii < responseObject.magnifiers[i].detailList.length; ii++) {
                        newContent += '<li>'+responseObject.magnifiers[i].detailList[ii].item+'</li>';
                    }
                    newContent += '</div>';
                    newContent += '</div>';
                    } else {
                        console.log('no match')
                    }

            };
            //Add content
            document.querySelector('.powerMagContainer').innerHTML = newContent;
        }
    };
    xhr.open('GET', 'mags.json', true);
    xhr.send(null);
}

