// const allSeat = document.getElementsByClassName('allSeat');
// let count = 0;
// for (const seat of allSeat) {

//     seat.addEventListener('click', function (event) {
//         count = count + 1;
//         const selectSeat = event.target.innerText;
//         const seat = document.getElementById(selectSeat);
//         seat.style.backgroundColor = 'green';

        
//     })

// }

let count = 0;
let selected = 0;
const allTiCkets = document.getElementsByClassName('Seat');
for (const seat of allTiCkets) {
    seat.addEventListener('click', function (e) {
        count = count + 1;
        if (count === 4) {
            const applYBtn = document.getElementById('apply-btn');
            applYBtn.removeAttribute('disabled');
            applYBtn.classList.add('bg-bg-green');
        }
        if (count < 5) {
            console.log(e.target.innerText)
            const clickedSeat = e.target.innerText;
            setBackgroundColorById(clickedSeat);

            const seatValue = getValueById('seat-left');
            const avaleaVail = seatValue - 1;
            setTextById('seat-left', avaleaVail)

            const selectedSeat = getValueById('selected-seat');
            selected = selected + 1;
            setTextById('selected-seat', selected);
            setBackgroundColorById('selected-seat')

            makeTable(clickedSeat);

            const total = getValueById('total-price')
            const  newTotal = total + 550;
            setTextById('total-price', newTotal)

            const grandtotal = getValueById('grand-total');
            let newGErandTotal = grandtotal + 550;
            setTextById('grand-total', newGErandTotal
            )
            const nextBtn = document.getElementById('next-btn');
            nextBtn.setAttribute("onclick", "successful()");
            nextBtn.removeAttribute("disabled");
        }
    })
}


function apply() {
    const inputText = document.getElementById('CupPon-input').value;
    if (inputText === 'NEW15') {
        const grand = document.getElementById('grand-total').innerText;
        const discount = grand / 100 * 15;
        const updateGrand = grand - discount;
        setTextById('grand-total', updateGrand);

        const p1 = document.createElement('p');
        p1.innerText = "Discount total";
        p1.classList.add('lg:px-5', 'px-3', 'py-2','text-center');
        const p2 = document.createElement('p');
        p2.innerText = discount ;
        p2.classList.add('lg:px-5', 'px-3', 'py-2','text-center');

        const CupPon = document.getElementById('CupPon');
        CupPon.appendChild(p1);
        CupPon.appendChild(p2);
        // 
        const btn = document.getElementById('apply-btn');
        btn.classList.add('hidden');
        const input = document.getElementById('CupPon-input');
        input.classList.add('hidden');
    }
    else if (inputText === 'Couple 20') {
        const grand = document.getElementById('grand-total').innerText;
        const discount = grand / 100 * 20;
        const updateGrand = grand - discount;
        setTextById('grand-total', updateGrand);

        const p1 = document.createElement('p');
        p1.innerText = "Discount total";
        p1.classList.add('lg:px-5', 'px-3', 'py-2','text-center');
        const p2 = document.createElement('p');
        p2.innerText = discount ;
        p2.classList.add('lg:px-5', 'px-3', 'py-2','text-center');

        const CupPon = document.getElementById('CupPon');
        CupPon.appendChild(p1);
        CupPon.appendChild(p2);

        const btn = document.getElementById('apply-btn');
        btn.classList.add('hidden');
        const input = document.getElementById('CupPon-input');
        input.classList.add('hidden');
    }
    else{
        alert('Coupon Not Valid')
    }
}
function successful() {
    const numInputText = document.getElementById('numberId').value;
    const namInputText = document.getElementById('nameId').value;
    if (namInputText.length > 0 && numInputText.length > 0) {
        const hiddenDiv = document.getElementById('successful');
        hiddenDiv.classList.remove('hidden');
        const purchase = document.getElementById('purchase');
        purchase.classList.add('hidden');
        const CupPon = document.getElementById('CupPon');
        CupPon.classList.add('hidden');
        const header = document.getElementById('header');
        header.classList.add('hidden')
    }
    else{
        alert('lest ses hoise')
    }
}

function continued() {
    const hiddenDiv = document.getElementById('successful');
    hiddenDiv.classList.add('hidden');
    const purchase = document.getElementById('purchase');
    purchase.classList.remove('hidden');
    const CupPon = document.getElementById('CupPon');
    CupPon.classList.remove('hidden');
    const header = document.getElementById('header');
    header.classList.remove('hidden')
}