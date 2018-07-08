        function weather(city_name){
          city_name = encodeURIComponent(city_name); //Permet d'échaper les caractère spéciaux 

          var req = new XMLHttpRequest(); //Définition de la requete. (nouvelle requete XMLHttpRequest)

          req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+city_name +'&units=metric&appid=51ddb0b85a5855de3be89b9c520b8f7f'); //Application de la requete défini avant. La méthode GET est suffisante puisque qu'on ne souhaite que récupérer des valeurs et non les envoyer.

          req.onreadystatechange = function() { // On gère ici une requête asynchrone

              if (req.readyState == 4 && req.status == 200) { // Si le fichier est chargé sans erreur
              var data = JSON.parse(req.responseText);//Récupérer les données renvoyées par l'API dans la variable data.
              console.log(data);
              document.getElementById('name').innerHTML ='<p><span class="bold">Nom de la ville : </span><br/> '+data.name+'</p>';
              document.getElementById('description').innerHTML = '<p><span class="bold">Temps :</span><br/>'+data.weather[0].description+'</p>';
              document.getElementById('icon').innerHTML = '<img src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png" alt="Icône météo"/>' ;
              document.getElementById('temp').innerHTML = '<p><span class="bold">Température :</span><br/>'+data.main.temp + '°C</p>';
            }
          }

          req.send(null);//La requete n'a pas besoin d'argument supplémentaire, il faut le signaler pour que la requête s'exécute.
        }
