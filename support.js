chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Open ApkOnline Android online for Action Games",
        id: "ActionGamesApkOnline",
        contexts: ["selection", "link", "editable", "image"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "ActionGamesApkOnline") {
        ActionGamesApkOnline();
    }
});

function ActionGamesApkOnline() {         
  	
  		gourl =  "https://www.apkonline.net/games/action";
    	window.open(gourl,'_blank');
	
}



