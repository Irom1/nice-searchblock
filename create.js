object.onclick = function(){
  chrome.bookmarks.create({'parentId': extensionsFolderId,
                                 'title': 'Delete',
                                 'url': 'javascript:location.replace("https://google.com");'});
};
