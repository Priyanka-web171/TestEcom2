var SW_VERSION="2023.1";
function showZ1Notification(a){if(a=a.pushContent?a.pushContent.pnContentWeb:null){var b=a.title||"",e=a.message||"",c=a.icon||"";a.action&&"yesno"===a.action.toLowerCase()?self.registration.showNotification(b,{body:e,data:{linkName:a.__link},icon:c+"?apikey="+self._apiKey,image:a.z1image,dir:"ltr",actions:[{action:"yes",title:"Yes",icon:""},{action:"no",title:"No",icon:""}]}):self.registration.showNotification(b,{body:e,data:{linkName:a.__link},icon:c+"?apikey="+self._apiKey,image:a.z1image,dir:"ltr"})}}
self.addEventListener("install",function(a){self.skipWaiting()});self.addEventListener("activate",function(a){a.waitUntil(self.clients.claim())});self.registration.pushManager.getSubscription().then(function(a){});
self.addEventListener("message",function(a){a.data&&(a.data.pushContent&&showZ1Notification(a.data),self._apiKey=a.data.apiKey||"",self._accesstoken=a.data.accesstoken||"",self._hostName=a.data.hostName||"",self._deviceId=a.data.deviceId||"",self._customerId=a.data.customerId||"",self._profileKey=a.data.profileKey||"")});
self.addEventListener("push",function(a){var b=a.data.text();b&&(b=JSON.parse(b),self._data=b,a={},a.pushContent=b,showZ1Notification(a),self.clients.matchAll({type:"window"}).then(function(a){a.forEach(function(a){a.postMessage({type:"ACK",payload:b,actionState:"reached"})})}))});
self.addEventListener("notificationclick",function(a){var b=a.notification.data.linkName?a.notification.data.linkName:"";if(a.action)switch(a.action){case "yes":a.notification.close();a.waitUntil(clients.matchAll({type:"window"}).then(function(a){for(var c=0;c<a.length;c++){var d=a[c];d.postMessage({type:"ACK",payload:self._data,actionState:"interacted"});if(d.url===b&&"focus"in d)return d.focus()}}));break;case "no":a.notification.close();break;default:console.log("Unknown action clicked: "+a.action)}else a.notification.close(),
""!==b&&a.waitUntil(clients.matchAll({type:"window"}).then(function(a){for(var c=0;c<a.length;c++){var d=a[c];d.postMessage({type:"ACK",payload:self._data,actionState:"interacted"});d.postMessage({type:"LNK",payload:self._data});if(d.url===b&&"focus"in d)return d.focus()}if(clients.openWindow)return clients.openWindow(b)}))});
self.addEventListener("notificationclose",function(a){a.waitUntil(clients.matchAll({type:"window"}).then(function(a){for(var b=0;b<a.length;b++)a[b].postMessage({type:"ACK",payload:self._data,actionState:"dismissed"})}))});
