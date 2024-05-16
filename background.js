chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.query({}, function(tabs) {
      if (tabs.length > 10) {
        // 10個以上のタブが開かれている場合、最後のタブを閉じる
        chrome.tabs.remove(tab.id);
      }
    });
  });
   