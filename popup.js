document.addEventListener('DOMContentLoaded', function() {
    btn = document.getElementById('switch-company');
    btn.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var activeTab = tabs[0];
            console.log("send click to " + activeTab.id);
          chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
        });
    },false);
}, false);
