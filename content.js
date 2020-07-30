chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var href = window.location.href + '?actorCompanyId=38149327';
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": href});
    }
  }
);

function getCompanyId() {
    return 38149327;
}

function addLink() {
    [].forEach.call(document.querySelectorAll('[data-id^="urn:li:activity:"]'), function(elm){
        if (elm.getAttribute("data-got-link") === 'true') return

        console.log(elm);
        var url = "/feed/update/" + elm.getAttribute("data-id") + '?actorCompanyId=' + getCompanyId();
        var link = document.createElement("a");
        link.setAttribute("href", url);
        var text = document.createTextNode("Link");
        link.appendChild(text);

        var menu = elm.querySelector('.feed-shared-update-v2__control-menu');
        if (menu === null) return

        menu.append(link);
        elm.setAttribute('data-got-link', 'true')
    });
}
setInterval(addLink, 3000);
