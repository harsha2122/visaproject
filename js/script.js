// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

const boardingDate = document.getElementById('boarding-date');
const returningDate = document.getElementById('returning-date');


const datepickerOptions = {
    onSelect: (instance, date) => {
        instance.el.value = date.toLocaleDateString();
    }
};

datepicker(boardingDate, datepickerOptions);
datepicker(returningDate, datepickerOptions);

function search() {
    const journeyFrom = document.getElementById('journey-from').value;
    const journeyTo = document.getElementById('journey-to').value;
    const boardingDateValue = boardingDate.value;
    const returningDateValue = returningDate.value;

    console.log('Journey From:', journeyFrom);
    console.log('Journey To:', journeyTo);
    console.log('Boarding Date:', boardingDateValue);
    console.log('Returning Date:', returningDateValue);
}

