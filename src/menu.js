const menuWindow = () => {

    console.log('hi2')

    const container = document.querySelector('.main');

    // home

    const home = document.createElement('div')
    home.classList.add("Home");

    //Name

    const wrapName = document.createElement('div')
    wrapName.classList.add("wrap-name");

    const name = document.createElement('div')
    name.classList.add("name");

    const nameP = document.createElement('h1');
    nameP.textContent = `Ipsum's Restaurant`;

    name.appendChild(nameP)
    wrapName.appendChild(name);

    //Description

    const wrapDescription = document.createElement('div');
    wrapDescription.classList.add('wrap-description');

    const description = document.createElement('div');
    description.classList.add('description');

    const descriptionP1 = document.createElement('p')
    descriptionP1.classList.add('advert');
    descriptionP1.textContent = 'The best restaurant in the world of lorem ipsum. ';

    const descriptionP2 = document.createElement('p');
    descriptionP2.classList.add('advert');
    descriptionP2.textContent = 'New recipes generating everyday means our menu is always fresh and creative!';

    description.appendChild(descriptionP1);
    description.appendChild(descriptionP2);
    wrapDescription.appendChild(description);

    //Open Times

    const wrapOpentime = document.createElement('div');
    wrapOpentime.classList.add('wrap-opentime');

    const opentTime = document.createElement('div');
    opentTime.classList.add('openTime');

    const openHours = document.createElement('h3');
    const openP = document.createElement('p');

    openHours.textContent = 'Open hours';
    openP.textContent = 'all day, everyday!';

    opentTime.appendChild(openHours);
    opentTime.appendChild(openP);
    wrapOpentime.appendChild(opentTime);

    //Location

    const wrapLocation = document.createElement('div');
    wrapLocation.classList.add('wrap-location');

    const location = document.createElement('div');
    location.classList.add('location');

    const locationP = document.createElement('p');
    locationP.textContent = 'In any generator closest to you!';

    location.appendChild(locationP);
    wrapLocation.appendChild(location);

    home.appendChild(wrapName);
    home.appendChild(wrapDescription);
    home.appendChild(wrapOpentime);
    home.appendChild(wrapLocation);

    container.appendChild(home);

}

export default menuWindow;
