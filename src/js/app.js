document.addEventListener('DOMContentLoaded', function () {
    importHTML();
    animation();
});

function importHTML() {
    header();
    integration();
    information();
    asesor();
    testimoniales();
    footer();
}

function header() {
    // DIV SHADOW HEADER
    const shadow = document.createElement('DIV');
    shadow.classList.add('shadow');
    document.querySelector('.header').appendChild(shadow);

    // DIV SIGN HEADER
    const signImage = document.createElement('IMG');
    signImage.setAttribute("src", "/build/img/adobeReader.svg");
    const signP = document.createElement('P');
    signP.setAttribute("id", 'nameSign');
    signP.textContent = "Adobe Sign";
    const sign = document.createElement('DIV');
    sign.classList.add('sign');
    sign.classList.add('contenedor');
    sign.appendChild(signImage);
    sign.appendChild(signP);

    document.querySelector('.header').appendChild(sign);

    // DIV TITLE HEADER
    const titleHU = document.createElement('H1');
    titleHU.classList.add('principal');
    titleHU.textContent = "Agiliza tus negocios con firma electrónica.";

    const titleP = document.createElement('P');
    titleP.classList.add('presentation');
    titleP.textContent = "Fácil de usar, es la única solución legalmente vinculante del mercado y se integraron todas las aplicaciones de productividad que elijas."

    const title = document.createElement('DIV');
    title.classList.add('title');
    title.classList.add('contenedor');
    title.appendChild(titleHU);
    title.appendChild(titleP);

    document.querySelector('.header').appendChild(title);
}

function integration() {
    const integrationP = document.createElement('P');
    integrationP.classList.add('all');
    integrationP.classList.add('contenedor');
    integrationP.textContent = "Todas las integraciones de Microsoft permiten un fácil acceso para enviar y hacer seguimiento de las firmas electrónicas."

    document.querySelector('.integration').appendChild(integrationP);

    try {
        // DIV LOGOTIPE OFFICE
        const logotipePOffice = document.createElement('P');
        logotipePOffice.textContent = "Office 365"

        const logotipeImgOffice = document.createElement('IMG');
        logotipeImgOffice.setAttribute("src", "/build/img/office.svg");

        const logotipeDivOffice = document.createElement('DIV');
        logotipeDivOffice.classList.add('logotipe');
        logotipeDivOffice.appendChild(logotipeImgOffice);
        logotipeDivOffice.appendChild(logotipePOffice);

        // DIV INFOCARD OFFICE
        const infocardPOffice = document.createElement('P');
        infocardPOffice.classList.add('descriptionCard');
        infocardPOffice.textContent = "Crea y comparte PDF con las aplicaciones de Microsoft, envía para firma y rastra el estado."

        const infocardHCOffice = document.createElement('H4');
        infocardHCOffice.classList.add('titleCard');
        infocardHCOffice.textContent = "Microsoft Office 365"

        const infocardDivOffice = document.createElement('DIV');
        infocardDivOffice.classList.add('infoCard');
        infocardDivOffice.appendChild(infocardHCOffice);
        infocardDivOffice.appendChild(infocardPOffice);

        // CARD OF OFFICE
        const cardOffice = document.createElement('DIV');
        cardOffice.classList.add('card');
        cardOffice.appendChild(logotipeDivOffice);
        cardOffice.appendChild(infocardDivOffice);

        // DIV LOGOTIPE SHAREPOINT
        const logotipePShare = document.createElement('P');
        logotipePShare.textContent = "SharePoint"
        const logotipeImgShare = document.createElement('IMG');
        logotipeImgShare.setAttribute("src", "/build/img/sharepoint.svg");

        const logotipeDivShare = document.createElement('DIV');
        logotipeDivShare.classList.add('logotipe');
        logotipeDivShare.appendChild(logotipeImgShare);
        logotipeDivShare.appendChild(logotipePShare);

        // DIV INFOCARD SHAREPOINT
        const infocardPShare = document.createElement('P');
        infocardPShare.classList.add('descriptionCard');
        infocardPShare.textContent = "Usa Document Cloud con SharePoint para compartir tu flujo de trabajo."

        const infocardHCShare = document.createElement('H4');
        infocardHCShare.classList.add('titleCard');
        infocardHCShare.textContent = "SharePoint"

        const infocardDivShare = document.createElement('DIV');
        infocardDivShare.classList.add('infoCard');
        infocardDivShare.appendChild(infocardHCShare);
        infocardDivShare.appendChild(infocardPShare);

        // CARD OF SHAREPOINT
        const cardShare = document.createElement('DIV');
        cardShare.classList.add('card');
        cardShare.appendChild(logotipeDivShare);
        cardShare.appendChild(infocardDivShare);

        // DIV LOGOTIPE One Drive
        const logotipePOne = document.createElement('P');
        logotipePOne.textContent = "OneDrive"
        const logotipeImgOne = document.createElement('IMG');
        logotipeImgOne.setAttribute("src", "/build/img/onedrive.svg");

        const logotipeDivOne = document.createElement('DIV');
        logotipeDivOne.classList.add('logotipe');
        logotipeDivOne.appendChild(logotipeImgOne);
        logotipeDivOne.appendChild(logotipePOne);

        // DIV INFOCARD One Drive
        const infocardPOne = document.createElement('P');
        infocardPOne.classList.add('descriptionCard');
        infocardPOne.textContent = "Convierte archivos de Microsoft 365 a PDF y combina documentos en un solo archivo."

        const infocardHCOne = document.createElement('H4');
        infocardHCOne.classList.add('titleCard');
        infocardHCOne.textContent = "One Drive"

        const infocardDivOne = document.createElement('DIV');
        infocardDivOne.classList.add('infoCard');
        infocardDivOne.appendChild(infocardHCOne);
        infocardDivOne.appendChild(infocardPOne);

        const cardOne = document.createElement('DIV');
        cardOne.classList.add('card');
        cardOne.appendChild(logotipeDivOne);
        cardOne.appendChild(infocardDivOne);

        // DIV LOGOTIPE TEAMS
        const logotipePTeams = document.createElement('P');
        logotipePTeams.textContent = "Microsoft Teams"
        const logotipeImgTeams = document.createElement('IMG');
        logotipeImgTeams.setAttribute("src", "/build/img/teams.svg");

        const logotipeDivTeams = document.createElement('DIV');
        logotipeDivTeams.classList.add('logotipe');
        logotipeDivTeams.appendChild(logotipeImgTeams);
        logotipeDivTeams.appendChild(logotipePTeams);

        // DIV INFOCARD TEAMS
        const infocardPTeams = document.createElement('P');
        infocardPTeams.classList.add('descriptionCard');
        infocardPTeams.textContent = "Crea, comparte, colabora y aprueba tus documentos electrónicos."

        const infocardHCTeams = document.createElement('H4');
        infocardHCTeams.classList.add('titleCard');
        infocardHCTeams.textContent = "Microsoft Teams"

        const infocardDivTeams = document.createElement('DIV');
        infocardDivTeams.classList.add('infoCard');
        infocardDivTeams.appendChild(infocardHCTeams);
        infocardDivTeams.appendChild(infocardPTeams);

        const cardTeams = document.createElement('DIV');
        cardTeams.classList.add('card');
        cardTeams.appendChild(logotipeDivTeams);
        cardTeams.appendChild(infocardDivTeams);

        const cards = document.createElement('DIV');
        cards.classList.add('cards');
        cards.classList.add('contenedor');
        cards.appendChild(cardOffice);
        cards.appendChild(cardShare);
        cards.appendChild(cardOne);
        cards.appendChild(cardTeams);

        document.querySelector('.integration').appendChild(cards);

    } catch (error) {
        console.log(error);
    }

    const botonA = document.createElement('A');
    botonA.setAttribute("href", "#");
    botonA.setAttribute("id", "buttomIntegration");
    botonA.textContent = "Saber más"
    botonA.classList.add('buttom');

    const botonDiv = document.createElement('DIV');
    botonDiv.classList.add('boton');
    botonDiv.appendChild(botonA);

    document.querySelector('.integration').appendChild(botonDiv);
}

function information() {

    const itemUnoP = document.createElement('P');
    itemUnoP.classList.add('presentationItem');
    itemUnoP.textContent = "Está certificado de acuerdo con la ISO 27001, SSAE SOC 2 Tipo 2, FedRAMP Tailored y PCI DSS. Ademas, se puede configurar o usar de manera que permita a los organizadores cumplir con los requisitos normativos específicos del sector, como HIPAA, FERPA, GLBA y FDA 21 CFR Parte 11."

    const itemUnoHS = document.createElement('H5');
    itemUnoHS.classList.add('descItem');
    itemUnoHS.textContent = "Adobe Sign es todo lo sencillo que quieras y te ofrece la seguridad que necesites.";

    const itemUnoHC = document.createElement('H4');
    itemUnoHC.classList.add('titleItem');
    itemUnoHC.textContent = "Seguridad y cumplimiento de nivel empresarial.";

    const infoItemUno = document.createElement('DIV');
    infoItemUno.classList.add('infoItem');
    infoItemUno.appendChild(itemUnoHC);
    infoItemUno.appendChild(itemUnoHS);
    infoItemUno.appendChild(itemUnoP);

    const divItemUno = document.createElement('DIV');
    divItemUno.classList.add('imgShadow');

    const imagenItemUno = document.createElement('IMG');
    imagenItemUno.setAttribute("src", "/build/img/itemOne.webp");

    const imageItemUno = document.createElement('DIV');
    imageItemUno.classList.add('imageItem');
    imageItemUno.appendChild(imagenItemUno);
    imageItemUno.appendChild(divItemUno);


    const itemUno = document.createElement('DIV');
    itemUno.classList.add('item');
    itemUno.appendChild(infoItemUno);
    itemUno.appendChild(imageItemUno);

    // Second item
    const itemDosP = document.createElement('P');
    itemDosP.classList.add('presentationItem');
    itemDosP.textContent = "Conserva el dinamismo de los flujos de trabajo agregando firmas electrónicas con facilidad. Adobe Sign permite a los empleados hacer clic para lanzar procesor de firma automatizados para firmantes particulares o miles de destinatarios al instante."

    const itemDosHS = document.createElement('H5');
    itemDosHS.classList.add('descItem');
    itemDosHS.textContent = "Los clientes y los integrantes solo tienen que dar un toque para firmar los documentos desde cualquier lugar.";

    const itemDosHC = document.createElement('H4');
    itemDosHC.classList.add('titleItem');
    itemDosHC.textContent = "Envía y firma más rápido.";

    const infoItemDos = document.createElement('DIV');
    infoItemDos.classList.add('infoItem');
    infoItemDos.appendChild(itemDosHC);
    infoItemDos.appendChild(itemDosP);
    infoItemDos.appendChild(itemDosHS);

    const divItemDos = document.createElement('DIV');
    divItemDos.classList.add('imgShadow');

    const imagenItemDos = document.createElement('IMG');
    imagenItemDos.setAttribute("src", "/build/img/secondItem.webp");

    const imageItemDos = document.createElement('DIV');
    imageItemDos.classList.add('imageItem');
    imageItemDos.appendChild(imagenItemDos);
    imageItemDos.appendChild(divItemDos);

    const itemDos = document.createElement('DIV');
    itemDos.classList.add('itemSec');
    itemDos.appendChild(imageItemDos);
    itemDos.appendChild(infoItemDos);


    // Three item
    const itemTresP = document.createElement('P');
    itemTresP.classList.add('presentationItem');
    itemTresP.textContent = "Adobe Sign funciona sin problemas con Adobe Acrobat DC y se integra con las aplicaciones de Microsoft en las que confían tus equipos."

    const itemTresPS = document.createElement('P');
    itemTresPS.classList.add('presentationItem');
    itemTresPS.textContent = "Además, ofrecemos integración inmediata con docenas de otras aplicaciones, entre las que se incluyen Workday y Salesforce.";
    
    const itemTresHS = document.createElement('H5');
    itemTresHS.classList.add('descItem');
    itemTresHS.textContent = "Envía y firma con facilidad documentos directamente en Microsoft 365, Teams, etc.";

    const itemTresHC = document.createElement('H4');
    itemTresHC.classList.add('titleItem');
    itemTresHC.textContent = "Funciona con las aplicaciones que más te gustan.";

    const infoItemTres = document.createElement('DIV');
    infoItemTres.classList.add('infoItem');
    infoItemTres.appendChild(itemTresHC);
    infoItemTres.appendChild(itemTresP);
    infoItemTres.appendChild(itemTresHS);
    infoItemTres.appendChild(itemTresPS);


    const divItemTres = document.createElement('DIV');
    divItemTres.classList.add('imgShadow');

    const imagenItemTres = document.createElement('IMG');
    imagenItemTres.setAttribute("src", "/build/img/itemThree.webp");

    const imageItemTres = document.createElement('DIV');
    imageItemTres.classList.add('imageItem');
    imageItemTres.appendChild(imagenItemTres);
    imageItemTres.appendChild(divItemTres);

    const itemTres = document.createElement('DIV');
    itemTres.classList.add('item');
    itemTres.appendChild(infoItemTres);
    itemTres.appendChild(imageItemTres);



    // Four item

    const itemFourPC = document.createElement('P');
    itemFourPC.classList.add('presentationItem');
    itemFourPC.classList.add('ciber');
    itemFourPC.textContent = "*'The Total Economic Impact of Adobe Sign', Forrester Consulting, Agosto de 2019."
    const itemFourP = document.createElement('P');
    itemFourP.classList.add('presentationItem');
    itemFourP.textContent = "Nuestro equipo de Professional Services puede guiarte en cada paso. Desde el ahorro de costos hasta el ahorro de tiempo, Adobe Sign ofrece un valor inmediato: 28 dólares ahorrados en costos informáticos por transacción, un ciclo de aprobación 28 veces más rápido y 6,8 millones de dólares en beneficios totales por la transición a flujos de trabajo completamente digitales."

    const itemFourHS = document.createElement('H5');
    itemFourHS.classList.add('descItem');
    itemFourHS.textContent = "Empieza a usar Adobe Sign en cuestión de horas o días, no de semanas o meses.";

    const itemFourHC = document.createElement('H4');
    itemFourHC.classList.add('titleItem');
    itemFourHC.textContent = "Ahorro de tiempo y dinero.";

    const infoItemFour = document.createElement('DIV');
    infoItemFour.classList.add('infoItem');
    infoItemFour.appendChild(itemFourHC);
    infoItemFour.appendChild(itemFourHS);
    infoItemFour.appendChild(itemFourP);
    infoItemFour.appendChild(itemFourPC);

    const divItemFour = document.createElement('DIV');
    divItemFour.classList.add('imgShadow');

    const imagenItemFour = document.createElement('IMG');
    imagenItemFour.setAttribute("src", "/build/img/itemFour.webp");

    const imageItemFour = document.createElement('DIV');
    imageItemFour.classList.add('imageItem');
    imageItemFour.appendChild(imagenItemFour);
    imageItemFour.appendChild(divItemFour);

    const itemFour = document.createElement('DIV');
    itemFour.classList.add('itemSec');
    itemFour.appendChild(imageItemFour);
    itemFour.appendChild(infoItemFour);

    const items = document.createElement('DIV');
    items.classList.add('contenedorItems');
    items.appendChild(itemUno);
    items.appendChild(itemDos);
    items.appendChild(itemTres);
    items.appendChild(itemFour);

    document.querySelector('.information').appendChild(items);
}

function asesor() {
    const asesorA = document.createElement('A');
    asesorA.setAttribute("href", "#");
    asesorA.setAttribute("id", "buttomAsesor");
    asesorA.classList.add('buttom');
    asesorA.textContent = "Quiero que me contacten";

    const asesorP = document.createElement('P');
    asesorP.setAttribute("id",'asesorParf');
    asesorP.textContent = "Nuestros asesores pueden brindarte más información para integrar las necesidades de tu empresa."
    
    const asesorInfo = document.createElement('DIV');
    asesorInfo.classList.add('asesorInfo');
    asesorInfo.appendChild(asesorP);
    asesorInfo.appendChild(asesorA);

    document.querySelector('.asesor').appendChild(asesorInfo);
}

function testimoniales() {
    const blockTestimonial = document.createElement('BLOCKQUOTE');
    blockTestimonial.setAttribute("id", "testimonialBlock");
    blockTestimonial.textContent = "adaptarse es avanzar";

    const testimonial = document.createElement('DIV');
    testimonial.classList.add('testimonial');
    testimonial.appendChild(blockTestimonial);

    document.querySelector('.testimoniales').appendChild(testimonial);
}

function footer() {

    const contactoTitle = document.createElement('P');
    contactoTitle.classList.add('contactoTitle');
    contactoTitle.textContent = "Contáctanos";

    const infoUno = document.createElement('P');
    infoUno.classList.add('info');
    infoUno.textContent = "800-915-9428"


    const infoDos = document.createElement('P');
    infoDos.classList.add('info');
    infoDos.textContent = "800-915-9428"


    const divContacto = document.createElement('DIV');
    divContacto.classList.add('contacto');
    divContacto.appendChild(contactoTitle);
    divContacto.appendChild(infoUno);
    divContacto.appendChild(infoDos);

    const pLeft = document.createElement('P');
    pLeft.classList.add('titleAdobe');
    pLeft.textContent = "Adobe";

    const imgLeft = document.createElement('IMG');
    imgLeft.setAttribute("src", "build/img/adobe.svg");

    const leftFooter = document.createElement('DIV');
    leftFooter.classList.add('leftFooter');
    leftFooter.appendChild(imgLeft);
    leftFooter.appendChild(pLeft);
    leftFooter.appendChild(divContacto);

    const pRightU = document.createElement('P');
    pRightU.classList.add('contactoTitle');
    pRightU.textContent = "Sobre nosotros";

    const pRightD = document.createElement('P');
    pRightD.classList.add('info');
    pRightD.textContent = "Adobe";

    const pRightT = document.createElement('P');
    pRightT.classList.add('info');
    pRightT.textContent = "345 Park Avenue";

    const pRightC = document.createElement('P');
    pRightC.classList.add('info');
    pRightC.textContent = "San José, CA 95119-2704, EE. UU.";

    const rightFooter = document.createElement('DIV');
    rightFooter.classList.add('rightFooter');
    rightFooter.appendChild(pRightU);
    rightFooter.appendChild(pRightD);
    rightFooter.appendChild(pRightT);
    rightFooter.appendChild(pRightC);

    const infoFooter = document.createElement('DIV');
    infoFooter.classList.add('infoFooter');
    infoFooter.appendChild(leftFooter);
    infoFooter.appendChild(rightFooter);

    const contenedorFooter = document.createElement('DIV');
    contenedorFooter.classList.add('contenedorFooter');
    contenedorFooter.classList.add('contenedor');
    contenedorFooter.appendChild(infoFooter);
    
    document.querySelector('.footer').appendChild(contenedorFooter);

    const pCopyU = document.createElement('P');
    pCopyU.classList.add('textCopy');
    pCopyU.textContent = "&copy; Copyright 2021 Adobe. All rights reserved.";

    const pCopyD = document.createElement('P');
    pCopyD.classList.add('textCopy');
    pCopyD.innerHTML = "<span>Unsubscribe / </span> Enviar a un amigo"

    const liU = document.createElement('LI');
    liU.innerHTML = "<a><i class='fab fa-facebook'></i></a>";

    const liD = document.createElement('LI');
    liD.innerHTML = "<a><i class='fab fa-instagram'></i></a>";

    const liT = document.createElement('LI');
    liT.innerHTML = "<a><i class='fab fa-linkedin-in'></i></a>";

    const social = document.createElement('UL');
    social.classList.add('social');
    social.appendChild(liU);
    social.appendChild(liD);
    social.appendChild(liT);


    const divCopy = document.createElement('DIV');
    divCopy.classList.add('copy');
    divCopy.appendChild(pCopyU);
    divCopy.appendChild(pCopyD);
    divCopy.appendChild(social);

    document.querySelector('.footer').appendChild(divCopy);
}

function animation() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(EaselPlugin);

    // Header
    gsap.set(".sign", { scale: 1 });
    gsap.timeline()
        .from(".sign", { duration: 1, opacity: 0 })
        .from("#imagen", { opacity: 0, scale: 0, ease: "back" })
        .from('#nameSign', { opacity: 0, scale: 0, ease: "bounce" })
        .from(".title", { duration: 1, opacity: 0 })
        .from(".principal", { opacity: 0, scale: 0, ease: "back" })
        .from(".presentation", { opacity: 0, scale: 0, ease: "bounce" });

    // Integration
    var integration = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            start: '-40% 50%',
            end: '35% 50%',
            scrub: 1
        }, duration: 1
    });
    integration.from(".cards .card ", { opacity: 0, y: 160, stagger: 0.1, duration: 2, ease: 'back' })
    integration.from("#buttomIntegration", { opacity: 0, scale: 0, ease: "bounce" })

    // Information

    var information = gsap.timeline({
        scrollTrigger: {
            trigger: '.information',
            start: '0% 50%',
            end: '25% 50%',
            scrub: 1
        }, duration: 1
    });

    information.from(".infoItem", { opacity: 0, x: -160, duration: 1, ease: 'back' })
    information.from(".imageItem", { opacity: 0, x: -160, duration: 1, ease: 'back' })

    // Asesor

    var asesor = gsap.timeline({
        scrollTrigger: {
            trigger: '.asesorInfo',
            start: '-70% 50%',
            end: '60% 50%',
            scrub: 1
        }, duration: 1
    });

    asesor.from("#asesorParf", { opacity: 0, y: 160, duration: 1, ease: 'back' })
    asesor.from("#buttomAsesor", { opacity: 0, y: 160, duration: 1, ease: 'bounce' })
    asesor.from("#testimonialBlock", { duration: 1, opacity: 0 })

    // Footer 

    var footer = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: '0% 85%',
            end: '70% 85%',
            scrub: 1
        }, duration: 5
    });

    footer.from(".leftFooter", { duration: 3, opacity: 0, scale: 0, ease: "back" })
        .from(".contacto", { delay: 2, opacity: 0, scale: 0, ease: "back" })
        .from(".rightFooter", { delay: 2, opacity: 0, y: 160, ease: "bounce" })
        .from(".copy", { delay: 2, opacity: 0, x: -100, ease: "elastic" })
}