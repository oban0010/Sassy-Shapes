shapesColors = ['red','blue','green','purple','orange']
shapes = ['square','circle','pentagon','hexagon','octagon']

html = '';
for(i=0; i<shapes.length; i++){
    for(j=0; j<shapesColors.length; j++){
        html += "<div class='"+shapes[i]+"-"+shapesColors[j]+"'></div>";
        console.log(html)
    }
}
document.getElementById("shapes").innerHTML = html;