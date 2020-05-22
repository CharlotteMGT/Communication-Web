function ajaxRequest(type, url,callback)
{
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);

    xhr.onload=() =>
    {
        switch (xhr.status)
        {
            case 200:
            case 201: console.log(xhr.responseText); callback(xhr.responseText);
        
            break;
            default: httpErrors(xhr.status);

        }
    };

    xhr.send();
}

function display(text)
{
    document.getElementById('timestamp').innerHTML='<span class="material-icons">watch_later</span> <strong>'+ text+ '</strong>';
}

function httpErrors(errorCode)
{
    document.getElementById('errors').style.display='block';
        switch(errorCode)
    {
            
        case 400: document.getElementById('errors').innerHTML='<span class="material-icons">report</span> ' + errorCode+' Requête incorrecte';
        break;

        case 401: document.getElementById('errors').innerHTML='<span class="material-icons">report</span> ' +errorCode+' Authentifiez vous';
        break;

        case 403:  document.getElementById('errors').innerHTML='<span class="material-icons">report</span> ' +errorCode+' Accès refusé';           
        break;

        case 404:   document.getElementById('errors').innerHTML='<span class="material-icons">report</span> ' +errorCode+' Page non trouvée';
        break;

        case 500: document.getElementById('errors').innerHTML='<span class="material-icons">report</span> ' +errorCode+ ' Erreur interne du serveur';
        break;

        case 503: document.getElementById('errors').innerHTML='<span class="material-icons">report</span> ' +errorCode+' Service indisponible';
        break;

    }
}


setInterval(ajaxRequest,1000,'GET','php/timestamp.php', display);


