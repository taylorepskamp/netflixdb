window.titles = {}

//accesses information from content.js
chrome.runtime.onMessage.addListener( (request,sender,sendResponse) => {
    window.titles = request.titleList
})

//opens up table in new tab
chrome.browserAction.onClicked.addListener((tab)=> {
    chrome.tabs.create({url: 'popup.html'}) 
}) 

//ensures that content function is triggered with page reload
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        console.log("Tab updated: " + tab.url);
        chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {
            console.log(response);
        });

    }
});

