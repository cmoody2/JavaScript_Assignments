function displayType(store) {
    var storeType = store.getAttribute("data-store-type");
    alert(store.innerHTML + " is available at " + storeType);
}