chrome.tabs.onUpdated.addListener( function tempUpdateListener( tabId, info, tab ) {
		
		chrome.tabs.executeScript(null,{file:"jquery.js"});
		chrome.tabs.executeScript(null,{file:"contentscripts.js"});

});//onUpdated

