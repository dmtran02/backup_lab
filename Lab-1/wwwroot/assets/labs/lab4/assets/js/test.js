var counter = 0;

function addHouse() {
    var key = true;
    var houseType = document.getElementById("houseList").value;

    while (key) {

        /**
         * Address Check
         **/

        console.log("Proceeding to checkAddress");
        if (document.getElementById("address").value == "") {
            alert("You have to fill in the address field.");
            document.getElementById("address").focus();
            break;
        }
        else {
            var addressField = document.getElementById("address").value;
        }

        /**
        * Description Check
        **/

        console.log("Proceeding to checkDescription");
        //checkDescriptionInput(document.getElementById("description"));
        if (document.getElementById("description").value == "") {
            alert("You have to fill in the Description field.");
            document.getElementById("description").focus();
            break;
        }
        else {
            var descriptionField = document.getElementById("description").value;
        }

        /**
         * Price Check
         **/

        console.log("Proceeding to checkPrice");
        //checkPriceInput(document.getElementById("price"));
        var priceHolder = document.getElementById("price").value
        var numNum = +priceHolder;
        numNum = numNum.toFixed(2);
        console.log(numNum);
        if (document.getElementById("price").value == "") {
            alert("You have to fill in the Price field.");
            document.getElementById("price").focus();
            break;
        }
        else if (isNaN(numNum)) {
            alert("Entered value is not a valid price.");
            document.getElementById("price").focus();
            break;
        }
        else {
            var priceField = document.getElementById("price").value;
        }

        /*
         * Bedroom Check
         */

        console.log("Proceeding to checkBedroom");
        //checkBedroomInput(document.getElementById("bedroom"));
        var bedroomHolder = document.getElementById("bedroom").value;
        if (document.getElementById("bedroom").value == "") {
            alert("You have to fill in the Bedroom field.");
            document.getElementById("bedroom").focus();
            break;
        }
        else if (isNaN(bedroomHolder)) {
            alert("Entered value is not a valid bedroom number.");
            document.getElementById("bedroom").focus();
            break;
        }
        else {
            var bedroomField = document.getElementById("bedroom").value;
        }

        /*
         * Bathroom Check
         */

        console.log("Proceeding to checkBathroom");
        //checkBathroomInput(document.getElementById("bathroom"));
        var bathroomHolder = document.getElementById("bathroom").value;
        if (document.getElementById("bathroom").value == "") {
            alert("You have to fill in the Bathroom field.");
            document.getElementById("bathroom").focus();
            break;
        }
        else if (isNaN(bathroomHolder)) {
            alert("Entered value is not a valid bathroom number.");
            document.getElementById("bathroom").focus();
            break;
        }
        else {
            var bathroomField = document.getElementById("bathroom").value;
        }

        /*
         * Square Feet Check
         */

        console.log("Proceeding to checkSquareFeet");
        //checkSquareFeetInput(document.getElementById("square-feet"));
        var squareFeetHolder = document.getElementById("square-feet").value;
        if (document.getElementById("square-feet").value == "") {
            alert("You have to fill in the Square Feet field.");
            document.getElementById("square-feet").focus();
            break;
        }
        else if (isNaN(squareFeetHolder)) {
            alert("Entered value is not a valid square feet number.");
            document.getElementById("square-feet").focus();
            break;
        }
        else {
            var squareFeetField = document.getElementById("square-feet").value;
        }

        /*
         * Year Built Check
         */

        console.log("Proceeding to checkYearBuilt");
        //checkYearBuiltInput(document.getElementById("year-built"));
        var yearBuiltHolder = document.getElementById("year-built").value;
        if (document.getElementById("year-built").value == "") {
            alert("You have to fill in the Year Built field.");
            document.getElementById("year-built").focus();
            break;
        }
        else if (isNaN(yearBuiltHolder)) {
            alert("Entered value is not a valid Year Built number.");
            document.getElementById("year-built").focus();
            break;
        }
        else {
            var yearBuiltField = document.getElementById("year-built").value;
        }

        /*
         * Image URL Check
         */

        console.log("Proceeding to checkImageURL");
        //checkImageURLInput(document.getElementById("image-url"));
        if (document.getElementById("image-url").value == "") {
            alert("You have to fill in the Image URL field.");
            document.getElementById("image-url").focus();
            break;
        }
        else {
            var imageURLField = document.getElementById("image-url").value;
        }
        key = false;
    }

    /*
     * Create House Object
     */

    var houseObject = new House(houseType, addressField, descriptionField, priceField, bedroomField, bathroomField, squareFeetField, yearBuiltField, imageURLField);
    console.log(houseObject.price);
    writeOut(houseObject);
    key = true;
}

/*
 * House Class & Constructor - [category, addr, desc, price, br, bth, sqft, yb, imageurl]
 *                             [    0,      1,    2,    3,    4,  5,    6 ,  7,     8   ] 
 */

class House {
    constructor(category, addr, desc, price, br, bth, sqft, yb, imageurl) {
        this.houseCategory = category;
        this.address = addr;
        this.description = desc;
        this.price = "$" + price;
        this.bedroom = br;
        this.bathroom = bth;
        this.squareFeet = sqft;
        this.yearBuilt = yb;
        this.imageURL = imageurl;
    }

    get houseType() {
        return this.houseCategory;
    }

    set houseType(type) {
        this.houseCategory = type;
    }

    get houseAddress() {
        return this.address;
    }

    set houseAddress(address) {
        this.address = address;
    }

    get houseDescription() {
        return this.description;
    }

    set houseDescription(desc) {
        this.description = desc;
    }

    get housePrice() {
        return this.price;
    }

    set housePrice(price) {
        this.price = price;
    }

    get houseBedroom() {
        return this.bedroom;
    }

    set houseBedroom(num) {
        this.bedroom = num;
    }

    get houseBathroom() {
        return this.bathroom;
    }

    set houseBathroom(num) {
        this.bathroom = num;
    }

    get houseSquareFeet() {
        return this.squareFeet;
    }

    set houseSquareFeet(num) {
        this.squareFeet = num;
    }

    get houseYearBuilt() {
        return this.yearBuilt;
    }

    set houseYearBuilt(year) {
        this.yearBuilt = year;
    }

    get houseImageURL() {
        return this.imageURL;
    }

    set houseImageURL(url) {
        this.imageURL = url;
    }

}

function checkAddressInput(field) {
    if (document.getElementById("address").innerText = (field.value === "")) {
        alert("You have to fill in the address field.");
        document.getElementById("address").focus();
        return false;
    }
    else {
        return true;
    }
}

function checkDescriptionInput(field) {
    if (document.getElementById("description").innerText = (field.value === "")) {
        alert("You have to fill in the Description field.");
    }
}

function checkPriceInput(field) {
    var priceHolder = field.value;
    var numNum = +priceHolder;
    numNum = numNum.toFixed(2);
    console.log(numNum);
    if (document.getElementById("price").innerText = (field.value === "")) {
        alert("You have to fill in the Price field.");
    }
    else if (isNaN(numNum)) {
        console.log("Entered value is not a valid price.");
    }
}

function checkBedroomInput(field) {
    if (document.getElementById("bedroom").innerText = (field.value === "")) {
        alert("You have to fill in the No. Bedroom (BR) field.");
    }
}

function checkBathroomInput(field) {
    if (document.getElementById("bathroom").innerText = (field.value === "")) {
        alert("You have to fill in the No. Bathroom (BTH) field.");
    }
}

function checkSquareFeetInput(field) {
    if (document.getElementById("square-feet").innerText = (field.value === "")) {
        alert("You have to fill in the Sq Feet field.");
    }
}

function checkYearBuiltInput(field) {
    if (document.getElementById("year-built").innerText = (field.value === "")) {
        alert("You have to fill in the Year Built field.");
    }
}

function checkImageURLInput(field) {
    if (document.getElementById("image-url").innerText = (field.value === "")) {
        alert("You have to fill in the Image URL field.");
    }
}

/*
 * Clear Fields Function - Clears all textbox entries on page
 */

function clearFields() {
    console.log("clearFields is clicked!");
    document.getElementById("address").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("bedroom").value = "";
    document.getElementById("bathroom").value = "";
    document.getElementById("square-feet").value = "";
    document.getElementById("year-built").value = "";
    document.getElementById("image-url").value = "";
}

function writeOut(houseObject) {
    var myJSON = JSON.stringify(houseObject);
    if (typeof (Storage) !== "undefined") {
        // Store
        var lock = true;
        var i = 0;
        console.log("Local Storage Key at " + counter + ": " + localStorage.key(counter));
        while (lock) {
            if (!localStorage.key(i) == counter) {
                //alert(localStorage.key(i) + " + " + counter);
                //alert("Duplicate Key Detected!");
                i++;
            }
            else if (localStorage.key(counter) == null) {
                localStorage.setItem(counter, myJSON);
                lock = false;
                counter++;
            }
            else {
                localStorage.setItem(i, myJSON);
                lock = false;
                counter++;
            }
        }
        counter = 0;
        // Retrieve
        document.getElementById("test").innerHTML = localStorage.getItem("property");
    } else {
        document.getElementById("test").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function prepareModification() {

    // Create HTML Element Nodes here
    var index = 0;
    console.log(Object.keys(localStorage));
    for (var key in localStorage) {
        if (key == "key" || key == "length") {
            break;
        }
        else {
            var objectHolder = JSON.parse(localStorage.getItem(key));
            console.log(objectHolder['address']);

            var divToAdd = document.createElement("div");
            headerToAdd = document.createElement("h2");
            pAddress = document.createElement("p");
            pDescription = document.createElement("p");
            pPrice = document.createElement("p");
            pBedroom = document.createElement("p");
            pBathroom = document.createElement("p");
            pSquareFeet = document.createElement("p");
            pYearBuilt = document.createElement("p");
            pImageURL = document.createElement("p");
            imgPropertyImage = document.createElement("img");
            btnModify = document.createElement("button");
            btnRemove = document.createElement("button");

            divToAdd.setAttribute("class", "column");
            divToAdd.style.border = '2px solid black';
            divToAdd.style.width = '95%';
            headerToAdd.setAttribute("class", "columnHeader");
            pAddress.setAttribute("class", "address");
            pDescription.setAttribute("class", "description");
            pPrice.setAttribute("class", "price");
            pBedroom.setAttribute("class", "bedroom");
            pBathroom.setAttribute("class", "bathroom");
            pSquareFeet.setAttribute("class", "squareFeet");
            pYearBuilt.setAttribute("class", "yearBuilt");
            pImageURL.setAttribute("class", "imageURL");
            imgPropertyImage.setAttribute("class", "propertyImage");

            btnModify.appendChild(document.createTextNode("Modify"));
            btnModify.setAttribute("id", key);
            btnModify.setAttribute("class", "modifyButton");
            btnModify.setAttribute("type", "button");
            btnModify.setAttribute("onclick", "modifyProperty(this.id)");

            btnRemove.appendChild(document.createTextNode("Remove"));

            var container = document.getElementById('column');
            divToAdd.appendChild(headerToAdd);
            divToAdd.appendChild(pAddress);
            divToAdd.appendChild(pDescription);
            divToAdd.appendChild(pPrice);
            divToAdd.appendChild(pBedroom);
            divToAdd.appendChild(pBathroom);
            divToAdd.appendChild(pSquareFeet);
            divToAdd.appendChild(pYearBuilt);
            divToAdd.appendChild(pImageURL);
            divToAdd.appendChild(imgPropertyImage);
            divToAdd.appendChild(document.createElement("br"));
            divToAdd.appendChild(btnModify);
            divToAdd.appendChild(btnRemove);
            container.appendChild(divToAdd);

            var columnHeader = document.getElementsByClassName('columnHeader');
            var addressHeader = document.getElementsByClassName('address');
            var priceHeader = document.getElementsByClassName('price');
            var bedroomHeader = document.getElementsByClassName('bedroom');
            var bathroomHeader = document.getElementsByClassName('bathroom');
            var squareFeetHeader = document.getElementsByClassName('squareFeet');
            var yearBuiltHeader = document.getElementsByClassName('yearBuilt');
            var imageURLHeader = document.getElementsByClassName('imageURL');

            var objectHolder = JSON.parse(localStorage.getItem(localStorage.key(key)));

            var categoryHolder = objectHolder['houseCategory'];
            console.log(index);
            columnHeader[index].innerHTML = categoryHolder;

            var addressHolder = objectHolder['address'];
            addressHeader[index].innerHTML = "Address: " + addressHolder;

            var priceHolder = objectHolder['price'];
            priceHeader[index].innerHTML = "Price: " + priceHolder;

            var bedroomHolder = objectHolder['bedroom'];
            bedroomHeader[index].innerHTML = "Bedroom (BR): " + bedroomHolder;

            var bathroomHolder = objectHolder['bathroom'];
            bathroomHeader[index].innerHTML = "Bathroom (BTH): " + bathroomHolder;

            var squareFeetHolder = objectHolder['squareFeet'];
            squareFeetHeader[index].innerHTML = "Square Feet: " + squareFeetHolder;

            var yearBuiltHolder = objectHolder['yearBuilt'];
            yearBuiltHeader[index].innerHTML = "Year Built: " + yearBuiltHolder;

            var imageURLHolder = objectHolder['imageURL'];
            imageURLHeader[index].innerHTML = "Image URL: " + imageURLHolder;
            document.getElementsByClassName('propertyImage')[index].setAttribute("src", imageURLHolder);
            document.getElementsByClassName('propertyImage')[index].setAttribute("alt", "house" + index);

            index++;
        }
    }
}

function modifyProperty(buttonID) {
    console.log(buttonID);
    var modifyObjectHolder = JSON.parse(localStorage.getItem(localStorage.key(buttonID)));
    var houseIdentifier = document.getElementById('houseIdentifier');
    var modifyCategory = document.getElementById('houseList');
    var modifyAddress = document.getElementById('address');
    var modifyDescription = document.getElementById('description');
    var modifyPrice = document.getElementById('price');
    var modifyBedroom = document.getElementById('bedroom');
    var modifyBathroom = document.getElementById('bathroom');
    var modifySquareFeet = document.getElementById('squareFeet');
    var modifyYearBuilt = document.getElementById('yearBuilt');
    var modifyImageURL = document.getElementById('imageURL');

    houseIdentifier.value = buttonID;
    modifyCategory.value = modifyObjectHolder.houseCategory;
    modifyAddress.value = modifyObjectHolder.address;
    modifyDescription.value = modifyObjectHolder.description;
    modifyPrice.value = modifyObjectHolder.price;
    modifyBedroom.value = modifyObjectHolder.bedroom;
    modifyBathroom.value = modifyObjectHolder.bathroom;
    modifySquareFeet.value = modifyObjectHolder.squareFeet;
    modifyYearBuilt.value = modifyObjectHolder.yearBuilt;
    modifyImageURL.value = modifyObjectHolder.imageURL;

    document.getElementById('modifyContainer').style.visibility = 'visible';
} // on click function

function confirmModifyProperty() {
    var key = true;

    var addressCheck = false;
    var descriptionCheck = false;
    var priceCheck = false;
    var bedroomCheck = false;
    var bathroomCheck = false;
    var squareFeetCheck = false;
    var yearBuiltCheck = false;
    var imageURLCheck = false;

    var validationConfirm = false;
    var houseIdentifier = document.getElementById('houseIdentifier').value;

    /*
     * Retrieve inputted values
     */

    var modifyCategory = document.getElementById('houseList');
    var modifyAddress = document.getElementById('address');
    var modifyDescription = document.getElementById('description');
    var modifyPrice = document.getElementById('price');
    var modifyBedroom = document.getElementById('bedroom');
    var modifyBathroom = document.getElementById('bathroom');
    var modifySquareFeet = document.getElementById('squareFeet');
    var modifyYearBuilt = document.getElementById('yearBuilt');
    var modifyImageURL = document.getElementById('imageURL');

    /*
     * Prepare values to create new House object
     */

    var modifiedCategory = modifyCategory.value;
    var modifiedAddress = modifyAddress.value;
    var modifiedDescription = modifyDescription.value;
    var modifiedPrice = modifyPrice.value;
    var modifiedBedroom = modifyBedroom.value;
    var modifiedBathroom = modifyBathroom.value;
    var modifiedSquareFeet = modifySquareFeet.value;
    var modifiedYearBuilt = modifyYearBuilt.value;
    var modifiedImageURL = modifyImageURL.value;

    while (key) {

        /**
         * Address Check
         **/

        console.log("Proceeding to checkAddress");
        if (document.getElementById("address").value == "") {
            alert("You have to fill in the address field.");
            document.getElementById("address").focus();
            break;
        }
        else {
            var addressField = document.getElementById("address").value;
            addressCheck = true;
        }

        /**
        * Description Check
        **/

        console.log("Proceeding to checkDescription");
        //checkDescriptionInput(document.getElementById("description"));
        if (document.getElementById("description").value == "") {
            alert("You have to fill in the Description field.");
            document.getElementById("description").focus();
            break;
        }
        else {
            var descriptionField = document.getElementById("description").value;
            descriptionCheck = true;
        }

        /**
         * Price Check
         **/

        console.log("Proceeding to checkPrice");
        //checkPriceInput(document.getElementById("price"));
        var priceHolder = document.getElementById("price").value
        var numNum = +priceHolder;
        numNum = numNum.toFixed(2);
        console.log(numNum);
        if (document.getElementById("price").value == "") {
            alert("You have to fill in the Price field.");
            document.getElementById("price").focus();
            break;
        }
        else if (isNaN(numNum)) {
            alert("Entered value is not a valid price.");
            document.getElementById("price").focus();
            break;
        }
        else {
            var priceField = document.getElementById("price").value;
            priceCheck = true;
        }

        /*
         * Bedroom Check
         */

        console.log("Proceeding to checkBedroom");
        //checkBedroomInput(document.getElementById("bedroom"));
        var bedroomHolder = document.getElementById("bedroom").value;
        if (document.getElementById("bedroom").value == "") {
            alert("You have to fill in the Bedroom field.");
            document.getElementById("bedroom").focus();
            break;
        }
        else if (isNaN(bedroomHolder)) {
            alert("Entered value is not a valid bedroom number.");
            document.getElementById("bedroom").focus();
            break;
        }
        else {
            var bedroomField = document.getElementById("bedroom").value;
            bedroomCheck = true;
        }

        /*
         * Bathroom Check
         */

        console.log("Proceeding to checkBathroom");
        //checkBathroomInput(document.getElementById("bathroom"));
        var bathroomHolder = document.getElementById("bathroom").value;
        if (document.getElementById("bathroom").value == "") {
            alert("You have to fill in the Bathroom field.");
            document.getElementById("bathroom").focus();
            break;
        }
        else if (isNaN(bathroomHolder)) {
            alert("Entered value is not a valid bathroom number.");
            document.getElementById("bathroom").focus();
            break;
        }
        else {
            var bathroomField = document.getElementById("bathroom").value;
            bathroomCheck = true;
        }

        /*
         * Square Feet Check
         */

        console.log("Proceeding to checkSquareFeet");
        //checkSquareFeetInput(document.getElementById("square-feet"));
        var squareFeetHolder = document.getElementById("square-feet").value;
        if (document.getElementById("square-feet").value == "") {
            alert("You have to fill in the Square Feet field.");
            document.getElementById("square-feet").focus();
            break;
        }
        else if (isNaN(squareFeetHolder)) {
            alert("Entered value is not a valid square feet number.");
            document.getElementById("square-feet").focus();
            break;
        }
        else {
            var squareFeetField = document.getElementById("square-feet").value;
            squareFeetCheck = true;
        }

        /*
         * Year Built Check
         */

        console.log("Proceeding to checkYearBuilt");
        //checkYearBuiltInput(document.getElementById("year-built"));
        var yearBuiltHolder = document.getElementById("year-built").value;
        if (document.getElementById("year-built").value == "") {
            alert("You have to fill in the Year Built field.");
            document.getElementById("year-built").focus();
            break;
        }
        else if (isNaN(yearBuiltHolder)) {
            alert("Entered value is not a valid Year Built number.");
            document.getElementById("year-built").focus();
            break;
        }
        else {
            var yearBuiltField = document.getElementById("year-built").value;
            yearBuiltCheck = true;
        }

        /*
         * Image URL Check
         */

        console.log("Proceeding to checkImageURL");
        //checkImageURLInput(document.getElementById("image-url"));
        if (document.getElementById("image-url").value == "") {
            alert("You have to fill in the Image URL field.");
            document.getElementById("image-url").focus();
            break;
        }
        else {
            var imageURLField = document.getElementById("image-url").value;
            imageURLCheck = true;
        }
        key = false;
    }

    if (addressCheck && descriptionCheck && priceCheck && bedroomCheck && bathroomCheck && squareFeetCheck
        && yearBuiltCheck && imageURLCheck) {
        console.log("Initiating Modification Sequence...");
    }

    /*
     * Remove the old house to prepare addition of newly-modified house
     */

    //removeProperty(houseIdentifier);

    /*
     * Create new House Object to add in Local Storage
     */

    var houseObject = new House(modifiedCategory, modifiedAddress, modifiedDescription, modifiedPrice,
        modifiedBedroom, modifiedBathroom, modifiedSquareFeet, modifiedYearBuilt, modifiedImageURL);

    //localStorage.setItem(houseIdentifier, JSON.stringify(houseObject));




    document.getElementById('modifyContainer').style.visibility = 'hidden';
}

function removeProperty(buttonID) {
    localStorage.removeItem(buttonID);
} // on click function

function searchProperty() {

    var filter = {
        price: "$" + document.getElementById("max-price").value,
        squareFeet: document.getElementById('square-feet').value,
        bedroom: document.getElementById('numBedrooms').value,
        bathroom: document.getElementById('numBathrooms').value
    };

    for (var key in localStorage) {

        var priceCheck = false;
        var squareFeetCheck = false;
        var bedroomCheck = false;
        var bathroomCheck = false;

        if (key == "key" || key == "length") {
            break;
        }
        else {
            var houseHolder = JSON.parse(localStorage.getItem(key));
            /*
            for (var key in filter) {
                if (houseHolder[key] === undefined || houseHolder[key] != filter[key]) {
                    return false;
                } 
                console.log(houseHolder.address);
                return true;
            }
            */
            var searchPrice = document.getElementById('max-price').value;
            var searchSquareFeet = document.getElementById('square-feet').value;
            var searchBedroom = document.getElementById('numBedrooms').value;
            var searchBathroom = document.getElementById('numBathrooms').value;

            //console.log(houseHolder['price']);
            var priceToCompare = houseHolder['price'].replace(/\$/g, '');
            console.log(priceToCompare);

            if (parseInt(searchPrice) < parseInt(priceToCompare)) {
                priceCheck = true;
            }
            if (parseInt(searchSquareFeet) < parseInt(houseHolder['squareFeet'])) {
                squareFeetCheck = true;
            }
            if (parseInt(searchBedroom) == parseInt(houseHolder['bedroom'])) {
                bedroomCheck = true;
            }
            if (parseInt(searchBathroom) == parseInt(houseHolder['bathroom'])) {
                bathroomCheck = true;
            }

            if (priceCheck && squareFeetCheck && bedroomCheck && bathroomCheck) {
                console.log(houseHolder.address);
            }
        }
    }
}