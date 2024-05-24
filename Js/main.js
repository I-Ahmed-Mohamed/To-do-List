
// CRUD

var userInput = document.getElementById('userInput')
var searchInput = document.getElementById('searchInput')

var allList = []


if(localStorage.getItem('todoList') != null){
    allList = JSON.parse(localStorage.getItem('todoList'))
    console.log(allList);
    displayList()
}

localStorage.setItem
localStorage.getItem


// create
function addItem(){
    // console.log(userInput.value);
    var list = {
        name : userInput.value
    }
    console.log(list);
    allList.push(list)
    console.log(allList);
    clearInput()
    displayList()
    localStorage.setItem('todoList',JSON.stringify(allList))
}


// Clear input data
function clearInput(){
    userInput.value = ''
}


// Display Lists
function displayList(){
    var container = ''
    for ( var i = 0 ; i < allList.length ; i++){
        container += `
                <div class="home-item mb-2 p-3 rounded-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
                    <p id="x" class="mb-0" >${allList[i].name}</p>
                    <i class=" fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
                </div>
        `
    }
    document.getElementById('homeContent').innerHTML = container
}



// Delete Item
function deleteItem(deleteIndex){
    console.log(deleteIndex);
    allList.splice(deleteIndex,1)
    console.log(allList);
    localStorage.setItem('todoList',JSON.stringify(allList))
    displayList()
}




// Search
function searchItem(){
    // console.log('sh8alaaaaa');

    var searchText = searchInput.value
    var container = ''
    for ( var i = 0 ; i < allList.length ; i++){
        if(allList[i].name.toLowerCase().includes(searchText.toLowerCase())){
            container += `
            <div class="home-item mb-2 p-3 rounded-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
            <p id="x" class="mb-0" >${allList[i].name}</p>
            <i class=" fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
            </div>
            `
        }
    }
    document.getElementById('homeContent').innerHTML = container
}




