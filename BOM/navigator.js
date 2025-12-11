const appName = document.getElementById('appName');
const appCodeName = document.getElementById('appCodeName')
const platform = document.getElementById('platform')
const cookieEnabled = document.getElementById('cookieEnabled');
const product = document.getElementById('product');
const appVersion = document.getElementById ('appVersion');
const userAgent = document.getElementById('userAgent');
const language = document.getElementById ('language');
const online = document.getElementById ('online');
const javaEnabled = document.getElementById('javaEnabled');



appName.innerHTML = "App Name is :" + navigator.appName;
appCodeName.innerHTML = "App Code Name :" + navigator.appCodeName;
platform.innerHTML = "Platform :" + navigator.platform;
cookieEnabled.innerHTML = "Cookie Enabled :" + navigator.cookieEnabled;
product.innerHTML = "Product :" + navigator.product;
appVersion.innerHTML = "App Version :" + navigator.appVersion;
userAgent.innerHTML = "User Agent :" + navigator.userAgent;
language.innerHTML = "Language :" + navigator.language;
online.innerHTML =  "Online :" + navigator.onLine;
javaEnabled.innerHTML = "Java Enabled :" + navigator.javaEnabled();