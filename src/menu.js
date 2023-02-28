const menuWindow = () => {

    const container = document.querySelector('.main');

    const menu = document.createElement('div');
    menu.classList.add('Menu');

    //recipes

    //Lasagna

    const lasagna = document.createElement('div');
    lasagna.classList.add('recipe');

    const imgLasagna = document.createElement('img');
    imgLasagna.setAttribute("src", "../lasagna.jpg");

    const lasagnaP = document.createElement('p');
    const lasagnah3 = document.createElement('h3');
    lasagnah3.textContent = 'Ipsum Lasagna';


    lasagna.appendChild(imgLasagna);
    lasagnaP.appendChild(lasagnah3);
    lasagna.appendChild(lasagnaP);

    //Margheritta

    const margherita = document.createElement('div');
    margherita.classList.add('recipe');

    const imgMargherita = document.createElement('img');
    imgMargherita.setAttribute("src", "../Margherita.png");

    const margheritaP = document.createElement('p');
    const margheritah3 = document.createElement('h3');
    margheritah3.textContent = 'Lorem Margheritta';

    margherita.appendChild(imgMargherita);
    margherita.appendChild(margheritah3);
    margherita.appendChild(margheritaP);

    //Raviolli

    const raviolli = document.createElement('div');
    raviolli.classList.add('recipe');

    const imgRaviolli = document.createElement('img');
    imgRaviolli.setAttribute("src", "../raviolli.png");

    const raviolliP = document.createElement('p');
    const raviollih3 = document.createElement('h3');
    raviollih3.textContent = 'Dolor Raviolli';

    raviolli.appendChild(imgRaviolli);
    raviolli.appendChild(raviollih3);
    raviolli.appendChild(raviolliP);


    //spaghetti

    const spaghetti = document.createElement('div');
    spaghetti.classList.add('recipe');

    const imgSpaghetti = document.createElement('img');
    imgSpaghetti.setAttribute("src", "../spaghetti.png");

    const spaghettiP = document.createElement('p');
    const spaghettih3 = document.createElement('h3');
    spaghettih3.textContent = 'Amet Spaghett';

    spaghetti.appendChild(imgSpaghetti);
    spaghetti.appendChild(spaghettih3);
    spaghetti.appendChild(spaghettiP);


    menu.appendChild(lasagna);
    menu.appendChild(margherita);
    menu.appendChild(raviolli);
    menu.appendChild(spaghetti);

    container.appendChild(menu);
}

export default menuWindow;
