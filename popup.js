class SuwasewanaPopup{
    title= '';
    desc = '';
    message = '';
    type= "0";
    constructor(popupContaienr, title, desc, message, type ){
        this.title = title;
        this.desc = desc;
        this.message = message;
        this.type = type;
        this.container = document.getElementById(popupContaienr);
        this.init();
    }

    init(){
        
        // popup contaienr
        let popupContaienr = document.createElement('div');
        popupContaienr.classList.add('popup-container');
        
        // popup
        let popup = document.createElement('div');
        popup.classList.add('popup', 'zoomIn');

        // close btn
        let closeBTN = document.createElement('div');
        closeBTN.classList.add('close-btn');
        closeBTN.innerHTML = '<i data-feather="x"></i>';
        closeBTN.setAttribute("onclick", "popup.hidePopup()" );
        popup.appendChild(closeBTN);

        // icon
        let popupIcon = document.createElement('div');
        popupIcon.classList.add('popup-icon');
        popupIcon.innerHTML = '<i class="feather-16" data-feather="list"  ></i>';

        popup.appendChild(popupIcon);

        // title
        let popupTitle = document.createElement('div');
        popupTitle.classList.add('popup-title');
        popupTitle.innerText = this.title;

        popup.appendChild(popupTitle);

        // desc
        let popupDesc = document.createElement('div');
        popupDesc.classList.add('popup-desc');
        popupDesc.innerHTML = this.desc;

        popup.appendChild(popupDesc);

        // message
        let popupMessage = document.createElement('div');
        popupMessage.classList.add('popup-message');
        popupMessage.id = "popupMessageContainer";
        
        popup.appendChild(popupMessage);
        
        popupContaienr.appendChild(popup);
        this.container.appendChild(popupContaienr);

    }      
    createCalenderEvent(event){
        let eventsContaier = document.createElement('div');
        event[0].events.map( eventitem => {
            let eventDiv = document.createElement('div');
            eventDiv.innerHTML = "<br> <br> Event Title : <h2> " + eventitem.title + "</h2>";
            eventDiv.innerHTML = "Event Desc : <h3> " + eventitem.desc + "</h3>";
            eventsContaier.appendChild(eventDiv);
            // popupMessage.classList.add('popup-message');
        });
        document.getElementById("popupMessageContainer").replaceChildren(eventsContaier);
        document.getElementById("popupMessageContainer").appendChild(eventsContaier);
    }

    showCalenderEnvetPopup(event){
        this.createCalenderEvent(event);
        this.container.style.display = "block";
    }
    showPopup(){
        this.container.style.display = "block";
    }
    hidePopup(){
        this.container.style.display = "none"; 
    }


}