$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myinfo/Qualifications.feature");
formatter.feature({
  "line": 2,
  "name": "Tester les details de contact",
  "description": "ETQ utilisateur je souhaite tester les details de contact d\u0027un utilisateur",
  "id": "tester-les-details-de-contact",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@qualification"
    }
  ]
});
formatter.before({
  "duration": 2854981200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur sur le menu MyInfo",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je clique sur le bouton qualification",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 11081379100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 74098000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 54733900,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 6846667700,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 76844800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#menu_pim_viewMyDetails\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027LAPTOP-ZSS2\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\zss\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:53020}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3f2fb6e7b98dfd318e2509a94fdebd04\n*** Element info: {Using\u003did, value\u003dmenu_pim_viewMyDetails}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographPageObject.myInfo(PhotographPageObject.java:48)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo(PhotographStepDefinition.java:19)\r\n\tat ✽.And Je clique sur sur le menu MyInfo(myinfo/Qualifications.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonQualification()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Tester les details de contact",
  "description": "",
  "id": "tester-les-details-de-contact;tester-les-details-de-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@work_experience"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Je clique sue le boutton edition experience",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Je saisi le company \"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Je saisi le job tilte \"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je selectionner la date from \"2021-01-01\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je selectionner la date to \"2022-01-01\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Je salis un comment \"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Je clique sur le bouton daveexperience",
  "keyword": "Then "
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSueLeBouttonEditionExperience()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 21
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiLeCompany(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 23
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiLeJobTilte(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-01-01",
      "offset": 30
    }
  ],
  "location": "QualificationsStepDefinition.jeSelectionnerLaDateFrom(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-01-01",
      "offset": 28
    }
  ],
  "location": "QualificationsStepDefinition.jeSelectionnerLaDateTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 21
    }
  ],
  "location": "QualificationsStepDefinition.jeSalisUnComment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonDaveexperience()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1275178800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur sur le menu MyInfo",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je clique sur le bouton qualification",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 4397600900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 46965000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 45758800,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3064081600,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 20899500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#menu_pim_viewMyDetails\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027LAPTOP-ZSS2\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\zss\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:52414}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4a92f56294e1c01ce5595de99bf6e594\n*** Element info: {Using\u003did, value\u003dmenu_pim_viewMyDetails}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographPageObject.myInfo(PhotographPageObject.java:48)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo(PhotographStepDefinition.java:19)\r\n\tat ✽.And Je clique sur sur le menu MyInfo(myinfo/Qualifications.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonQualification()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Tester les details de contact",
  "description": "",
  "id": "tester-les-details-de-contact;tester-les-details-de-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@edication"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Je clique sur le bouton editeducation",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Je selectionner un level \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Je saisi l\u0027instutite \"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Je saisi Major Specialization \"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Je saisi  year \"2021\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Je saisi gpa/Score \"20\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Je saisi start date \"2022-01-15\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Je saisi end date \"2025-01-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Je clique sur le bouton saveeducation",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonEditeducation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "QualificationsStepDefinition.jeSelectionnerUnLevel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 22
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiLInstutite(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 31
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiMajorSpecialization(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 16
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 20
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiGpaScore(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-01-15",
      "offset": 21
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiStartDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2025-01-30",
      "offset": 19
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiEndDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonSaveeducation()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1165766200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur sur le menu MyInfo",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je clique sur le bouton qualification",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3755025400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 86668500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 91926000,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 1126339300,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 11203000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#menu_pim_viewMyDetails\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027LAPTOP-ZSS2\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\zss\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:52605}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3e9fcc046db0715364d5d14a14fa58c2\n*** Element info: {Using\u003did, value\u003dmenu_pim_viewMyDetails}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographPageObject.myInfo(PhotographPageObject.java:48)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo(PhotographStepDefinition.java:19)\r\n\tat ✽.And Je clique sur sur le menu MyInfo(myinfo/Qualifications.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonQualification()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Tester les details de contact",
  "description": "",
  "id": "tester-les-details-de-contact;tester-les-details-de-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@skills"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Je clique sur le bouton editskill",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Je selectionner un skill \"15\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Je saisi years of experience\"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Je saisi Commentsskill\"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Je clique sur saveskill",
  "keyword": "And "
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonEditskill()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "QualificationsStepDefinition.jeSelectionnerUnSkill(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 29
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiYearsOfExperience(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 23
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisiCommentsskill(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurSaveskill()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1210759500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur sur le menu MyInfo",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je clique sur le bouton qualification",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 4013757100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 61671800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 56478900,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 1316759600,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 12192800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#menu_pim_viewMyDetails\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027LAPTOP-ZSS2\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\zss\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:52764}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b2607be3d3ff3ef4fdad16eb15610510\n*** Element info: {Using\u003did, value\u003dmenu_pim_viewMyDetails}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographPageObject.myInfo(PhotographPageObject.java:48)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo(PhotographStepDefinition.java:19)\r\n\tat ✽.And Je clique sur sur le menu MyInfo(myinfo/Qualifications.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonQualification()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 43,
  "name": "Tester langues",
  "description": "",
  "id": "tester-les-details-de-contact;tester-langues",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@languages"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "je clique sur le bouton edit language",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "je select language\"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "je select Fluency\"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "je select competency\"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "je saisie comments \"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "je clique sur le bouton save_language",
  "keyword": "Then "
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonEditLanguage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "QualificationsStepDefinition.jeSelectLanguage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "QualificationsStepDefinition.jeSelectFluency(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "QualificationsStepDefinition.jeSelectCompetency(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 20
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisieComments(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonSave_language()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1226990200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur sur le menu MyInfo",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je clique sur le bouton qualification",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3698849800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 75327900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 72864400,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 1127945400,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 13828400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#menu_pim_viewMyDetails\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027LAPTOP-ZSS2\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\zss\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:52938}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd5c8f365c3924ce2f6cb2a27adcd82f\n*** Element info: {Using\u003did, value\u003dmenu_pim_viewMyDetails}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographPageObject.myInfo(PhotographPageObject.java:48)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo(PhotographStepDefinition.java:19)\r\n\tat ✽.And Je clique sur sur le menu MyInfo(myinfo/Qualifications.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonQualification()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 52,
  "name": "Tester license",
  "description": "",
  "id": "tester-les-details-de-contact;tester-license",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@license"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "je clique sur le bouton add_license",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "je select Type de certif\"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "je saisie license Number\"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "je saisie issued date \"2010-10-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "le saisie Expired Date \"2021-01-20\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "je clique sur le bouton save_license",
  "keyword": "Then "
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonAdd_license()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 25
    }
  ],
  "location": "QualificationsStepDefinition.jeSelectTypeDeCertif(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 25
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisieLicenseNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2010-10-30",
      "offset": 23
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisieIssuedDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-01-20",
      "offset": 24
    }
  ],
  "location": "QualificationsStepDefinition.leSaisieExpiredDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonSave_license()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1253269300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur sur le menu MyInfo",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je clique sur le bouton qualification",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3692935400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 55906700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthenticationStepDefinitions.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 48847800,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 1108076700,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 14389700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#menu_pim_viewMyDetails\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027LAPTOP-ZSS2\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\zss\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:53184}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a49386ff045d388a0495aca7f511bd98\n*** Element info: {Using\u003did, value\u003dmenu_pim_viewMyDetails}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographPageObject.myInfo(PhotographPageObject.java:48)\r\n\tat com.e2eTests.automatedTests.myinfo.photograph.PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo(PhotographStepDefinition.java:19)\r\n\tat ✽.And Je clique sur sur le menu MyInfo(myinfo/Qualifications.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonQualification()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 61,
  "name": "Tester Attachement",
  "description": "",
  "id": "tester-les-details-de-contact;tester-attachement",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@attachments"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "je clique sur le bouton Add_Attachement",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "je choisie un fichier \"C:\\Users\\zss\\Desktop\\stage-photo-animalière-jeune-pic-epeiche.jpg\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "je saisie un comment \"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "je clique sur le bouton Upload",
  "keyword": "Then "
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonAdd_Attachement()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\zss\\Desktop\\stage-photo-animalière-jeune-pic-epeiche.jpg",
      "offset": 23
    }
  ],
  "location": "QualificationsStepDefinition.jeChoisieUnFichier(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fathi\u0026Zied",
      "offset": 22
    }
  ],
  "location": "QualificationsStepDefinition.jeSaisieUnComment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonUpload()"
});
formatter.result({
  "status": "skipped"
});
});