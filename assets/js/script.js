const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log( txt.split(/[\r\n]+/gm) );

document.addEventListener('DOMContentLoaded', init);

function init() {

    const uploaderInput = document.querySelector('.uploader__input');
    if(uploaderInput) {
        uploaderInput.addEventListener('change', uploadHandler);
    }
}

function uploadHandler(e) {
    const file = e.target.files[0];

    if(file) {
        const reader = new FileReader();

        reader.onload = function(readerEvent) {
            const text = readerEvent.target.result;
            
        const arrayWithTrips = getArrayWithTrips(text)
        const excursionsPanel = document.querySelector('.panel__excursions');
        
        arrayWithTrips.forEach( trip => {
            const newExcursion = createNewExcursion(trip)
            excursionsPanel.appendChild(newExcursion);
        })
            
           
        
        }

        reader.readAsText(file)
    }

}

function getArrayWithTrips(text) {
    const trips = [];
    const textSplitToTrips = text.split(/[\r\n]+/gm);

    textSplitToTrips.forEach((singleTrip) => {
       
        const SplitTripToItems = singleTrip.replaceAll('","', '$')
                                            .replaceAll('"', '')
                                            .split('$');
        
        const trip = changeArrayTripToObject(SplitTripToItems)
    
        trips.push(trip)
    });

    return trips
}

function changeArrayTripToObject(array) {
    const object = {
        id: array[0],
        title: array[1],
        description: array[2],
        adultPrice: array[3],
        childrenPrice: array[4]
    }

    return object
}

function createNewExcursion(trip) {
    const excursionPrototype = document.querySelector('.excursions__item--prototype')
    const newExcursion = excursionPrototype.cloneNode(true);

    newExcursion.classList.remove('excursions__item--prototype');
    
    const title = newExcursion.querySelector('.excursions__title')
    const description = newExcursion.querySelector('.excursions__description')
    const adultPrice = newExcursion.querySelector('.excursions__price--adult')
    const childrenPrice = newExcursion.querySelector('.excursions__price--children')
    
    newExcursion.dataset.id = trip.id;
    title.innerText = trip.title
    description.innerText = trip.description
    adultPrice.innerText = trip.adultPrice
    childrenPrice.innerText = trip.childrenPrice
    
    return newExcursion
}