chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    title: 'Nitter <--> Twitter',
    contexts: ["selection","link"],
    id: "myContextMenuId",
  })
);
/*
chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    title: 'Twitter --> Nitter',
    contexts: ["selection","link"],
    id: "myContextMenuId2",
  })
);
*/
chrome.contextMenus.onClicked.addListener((info, tab) => 
  chrome.tabs.create({url: info.linkUrl.replace("nitter.1d4.us","twitter.com")})
);

chrome.contextMenus.onClicked.addListener((info, tab) =>
    chrome.tabs.create({url: info.linkUrl.replace("twitter.com","nitter.1d4.us")})
);

/*
// Below is the old&busted manifest 1.0 way of doing things (which was what I was used to).

chrome.contextMenus.create({title: "Nitter --> Twitter", contexts:["selection"], onclick: nitter2twitter});
chrome.contextMenus.create({title: "Twitter --> Nitter", contexts:["selection"], onclick: twitter2nitter});

function nitter2twitter(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "http://maps.google.com/maps?q=" + searchstring})
}

function twitter2nitter(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "http://maps.google.com/maps?q=" + searchstring})
}
*/
