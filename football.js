 var countries = ['Ukraine', ['Dynamo Kyiv', 'Shahtar Donetsk', 'Metalurh', 'Dnipro'],'Eritrea', ['Medlaw Megbi', 'Hintsa FC', 'Denden F.C.', 'Keren FC'], 'Italy', ['Juventus', 'Roma', 'Internazionale', 'Lazio'],'England', ['Arsenal', 'West Ham United', 'Manchester United', 'Chelsea'] ];
    
   

document.getElementById("randomTeam").addEventListener('click', random(), false);

function random() { 
    var team = countries[Math.floor(Math.random() * countries.length)];
    

document.getElementById("output1").innerHTML = team;
}


    
    