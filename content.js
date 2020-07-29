chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var href = window.location.href + '?actorCompanyId=38149327';
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": href});
    }
  }
);
