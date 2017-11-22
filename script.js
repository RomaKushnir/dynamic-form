var wrapper = document.getElementsByClassName('wrapper')
var check = document.getElementsByClassName('trigger-input');
var parcel = document.getElementsByClassName('input-wrapper-parcel');
var pallet = document.getElementsByClassName('input-wrapper-pallet');
var addBtn = document.getElementById('add');
var removeBtn = document.getElementById('remove');
var insertB = document.getElementsByClassName('insert-block');
var count = 0;


for(var i = 0; i < check.length; i++) {
    check[i].addEventListener('click', toggleBlock);
}

addBtn.addEventListener('click', addBlock);
removeBtn.addEventListener('click', removeBlock);

//перемикання parcel/pallet
function toggleBlock() {
    console.log(event);
    if (this.checked) {
        parcel[0].style.display = "none";
        pallet[0].style.display = "block";
    } 
    else {
        pallet[0].style.display = "none";
        parcel[0].style.display = "block";
    }
}

//function addBlock() {
//    var newInsertB = insertB[count].cloneNode(true);
//    console.log(newInsertB);
//    insertB[count].insertAdjacentElement('afterEnd', newInsertB);
//    count++;
//}
//додавання блока коректуючи ID
function addBlock() {
    var newInsertB = '<div class="container insert-block"><div class="row">                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-3">                   <form class="b-trigger" action="">                    <input type="checkbox" class="trigger-input" id="trigger-btn' + count + '">                    <label class="slider" for="trigger-btn' + count + '"></label>                    </form>                </div>                <div class="input-wrapper-parcel col-lg-10 col-md-10 col-sm-10 col-xs-9">                   <form class="form-parcel" action="">                    <div class="b-measure">                        <label for="weight">Weight:</label>                        <div class="input-measure">                           <div class="measure-points">Kg</div>                           <input id="weight" type="text">                        </div>                    </div>                    <div class="b-measure">                        <label for="weight">Length:</label>                        <div class="input-measure">                           <div class="measure-points">Cm</div>                            <input id="length" type="text">                        </div>                    </div>                    <div class="b-measure">                        <label for="weight">Width:</label>                        <div class="input-measure">                           <div class="measure-points">Cm</div>                            <input id="width" type="text">                       </div>                    </div>                    <div class="b-measure">                        <label for="weight">Height:</label>                        <div class="input-measure">                           <div class="measure-points">Cm</div>                            <input id="height" type="text">                        </div>                    </div>                    </form>                </div>                <div class="input-wrapper-pallet">                   <form class="form-pallet" action="">                    <div class="b-measure">                        <label for="weight">Number of pallets:</label>                        <div class="input-measure">                           <div class="measure-points">Pcs</div>                            <input id="number" type="text">                        </div>                    </div>                    <div class="b-measure">                        <label for="weight">Height:</label>                        <div class="input-measure">                           <div class="measure-points">Cm</div>                            <input id="height" type="text">                        </div>                    </div>                    <div class="b-measure">                        <label for="weight">Weight for pallets:</label>                        <div class="input-measure">                           <div class="measure-points">Kg</div>                            <input id="weight-pallet" type="text">                       </div>                    </div>                    </form>                </div>            </div>        </div>';
//    console.log(newInsertB);
    insertB[count].insertAdjacentHTML('afterEnd', newInsertB);
    count++;
}

//видалення блока
function removeBlock() {
        wrapper[0].removeChild(insertB[count]);
        count--;
}



