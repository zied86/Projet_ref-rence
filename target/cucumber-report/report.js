$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("admin/AddUser.feature");
formatter.feature({
  "line": 2,
  "name": "Tester l\u0027ajout d\u0027un utilisateur",
  "description": "ETQ utilisateur je souhaite tester  l\u0027ajout d\u0027un utilisateur",
  "id": "tester-l\u0027ajout-d\u0027un-utilisateur",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@admin"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Tester l\u0027ajout d\u0027un utilisateur",
  "description": "",
  "id": "tester-l\u0027ajout-d\u0027un-utilisateur;tester-l\u0027ajout-d\u0027un-utilisateur",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@update_statusOutline"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Je clique sur le menu admin",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Je clique sur le bouton add",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Je selectionner le user role\"\u003cUservalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Je selectionner employee name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je saisie employee name \"\u003cEmployeeName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je saisie  username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Je selectionner le status \"\u003cStatusvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Je saisie le Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Je confirme le passwrod \"\u003cConfirmepassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Je clique sur le bouton save",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Je vérifier l\u0027ajout de user\"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "tester-l\u0027ajout-d\u0027un-utilisateur;tester-l\u0027ajout-d\u0027un-utilisateur;",
  "rows": [
    {
      "cells": [
        "Uservalue",
        "EmployeeName",
        "Username",
        "Statusvalue",
        "Password",
        "Confirmepassword"
      ],
      "line": 29,
      "id": "tester-l\u0027ajout-d\u0027un-utilisateur;tester-l\u0027ajout-d\u0027un-utilisateur;;1"
    },
    {
      "cells": [
        "1",
        "Alice Duval",
        "Ziee.fxd4e",
        "0",
        "TEST1206952547",
        "TEST1206952547"
      ],
      "line": 30,
      "id": "tester-l\u0027ajout-d\u0027un-utilisateur;tester-l\u0027ajout-d\u0027un-utilisateur;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2705765500,
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
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3513959400,
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
  "duration": 67131100,
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
  "duration": 43108100,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 4188190600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Tester l\u0027ajout d\u0027un utilisateur",
  "description": "",
  "id": "tester-l\u0027ajout-d\u0027un-utilisateur;tester-l\u0027ajout-d\u0027un-utilisateur;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@admin"
    },
    {
      "line": 12,
      "name": "@update_statusOutline"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Je clique sur le menu admin",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Je clique sur le bouton add",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Je selectionner le user role\"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Je selectionner employee name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je saisie employee name \"Alice Duval\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je saisie  username \"Ziee.fxd4e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Je selectionner le status \"0\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Je saisie le Password \"TEST1206952547\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Je confirme le passwrod \"TEST1206952547\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Je clique sur le bouton save",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Je vérifier l\u0027ajout de user\"Ziee.fxd4e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddUserStepDeninitions.jeCliqueSurLeMenuAdmin()"
});
formatter.result({
  "duration": 1488351000,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDeninitions.jeCliqueSurLeBoutonAdd()"
});
formatter.result({
  "duration": 564088300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "AddUserStepDeninitions.jeSelectionnerLeUserRole(String)"
});
formatter.result({
  "duration": 88336200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDeninitions.jeSelectionnerEmployeeName()"
});
formatter.result({
  "duration": 47879700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice Duval",
      "offset": 25
    }
  ],
  "location": "AddUserStepDeninitions.jeSaisieEmployeeName(String)"
});
formatter.result({
  "duration": 79300600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ziee.fxd4e",
      "offset": 21
    }
  ],
  "location": "AddUserStepDeninitions.jeSaisieUsername(String)"
});
formatter.result({
  "duration": 81927900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 27
    }
  ],
  "location": "AddUserStepDeninitions.jeSelectionnerLeStatus(String)"
});
formatter.result({
  "duration": 95185300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST1206952547",
      "offset": 23
    }
  ],
  "location": "AddUserStepDeninitions.jeSaisieLePassword(String)"
});
formatter.result({
  "duration": 70890000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST1206952547",
      "offset": 25
    }
  ],
  "location": "AddUserStepDeninitions.jeConfirmeLePasswrod(String)"
});
formatter.result({
  "duration": 57582200,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDeninitions.jeCliqueSurLeBoutonSave()"
});
formatter.result({
  "duration": 66148000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ziee.fxd4e",
      "offset": 28
    }
  ],
  "location": "AddUserStepDeninitions.jeVérifierLAjoutDeUser(String)"
});
formatter.result({
  "duration": 15154800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#searchSystemUser_userName\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027LAPTOP-ZSS2\u0027, ip: \u0027192.168.1.186\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\zss\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:53129}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cf5c5a6381b6efc4dfe39ff29bd03ece\n*** Element info: {Using\u003did, value\u003dsearchSystemUser_userName}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.e2eTests.automatedTests.admin.searchuser.searchUserPageObject.userNamesSearch(searchUserPageObject.java:44)\r\n\tat com.e2eTests.automatedTests.admin.adduser.AddUserStepDeninitions.jeVérifierLAjoutDeUser(AddUserStepDeninitions.java:78)\r\n\tat ✽.And Je vérifier l\u0027ajout de user\"Ziee.fxd4e\"(admin/AddUser.feature:24)\r\n",
  "status": "failed"
});
formatter.uri("myinfo/ContactDetails.feature");
formatter.feature({
  "line": 2,
  "name": "Tester les details de contact",
  "description": "ETQ utilisateur je souhaite tester les details de contact d\u0027un utilisateur",
  "id": "tester-les-details-de-contact",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@contact"
    }
  ]
});
formatter.before({
  "duration": 1265958300,
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
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2736039200,
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
  "duration": 58262500,
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
  "duration": 63238100,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3343204500,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 1305882900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Tester les details de contact",
  "description": "",
  "id": "tester-les-details-de-contact;tester-les-details-de-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@contact_Details"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Je clique sur contact details",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "je clique sur le bouton Edit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "je saisie Adresse street1 \"rue mohamed 5\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "je saisie Address Street2 \"gabes\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "je saisie city \"gabes\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je saisie stat/province \"mareth\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Je saisie Postal code \"6000\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Je selectionne country \"TN\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "je saisie le teliphone \"71254845\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Je saisie Mobile \"95658632\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Je saisie Work teliphone \"25485652\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "je saisie work email \"test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Je saisie other email \"test1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "je clique sur save",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "je clique sur Edit_attachement",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Je clique un fichier \"C:\\Users\\zss\\Desktop\\stage-photo-animalière-jeune-pic-epeiche.jpg\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Je saisi dans le champ comment \"test contact details\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "je clique sur upload",
  "keyword": "Then "
});
formatter.match({
  "location": "DetailsContactStepDefinition.jeCliqueSurContactDetails()"
});
formatter.result({
  "duration": 876234300,
  "status": "passed"
});
formatter.match({
  "location": "DetailsContactStepDefinition.jeCliqueSurLeBoutonEdit()"
});
formatter.result({
  "duration": 42486000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rue mohamed 5",
      "offset": 27
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieAdresseStreet(String)"
});
formatter.result({
  "duration": 52663000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gabes",
      "offset": 27
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieAddressStreet(String)"
});
formatter.result({
  "duration": 45607500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gabes",
      "offset": 16
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieCity(String)"
});
formatter.result({
  "duration": 44928500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mareth",
      "offset": 25
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieStatProvince(String)"
});
formatter.result({
  "duration": 45148800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 23
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisiePostalCode(String)"
});
formatter.result({
  "duration": 43721700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TN",
      "offset": 24
    }
  ],
  "location": "DetailsContactStepDefinition.jeSelectionneCountry(String)"
});
formatter.result({
  "duration": 67758300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "71254845",
      "offset": 24
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieLeTeliphone(String)"
});
formatter.result({
  "duration": 47676100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "95658632",
      "offset": 18
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieMobile(String)"
});
formatter.result({
  "duration": 48639800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25485652",
      "offset": 26
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieWorkTeliphone(String)"
});
formatter.result({
  "duration": 71805600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 22
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieWorkEmail(String)"
});
formatter.result({
  "duration": 70051600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1@gmail.com",
      "offset": 23
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisieOtherEmail(String)"
});
formatter.result({
  "duration": 83958900,
  "status": "passed"
});
formatter.match({
  "location": "DetailsContactStepDefinition.jeCliqueSurSave()"
});
formatter.result({
  "duration": 1219605800,
  "status": "passed"
});
formatter.match({
  "location": "DetailsContactStepDefinition.jeCliqueSurEdit_attachement()"
});
formatter.result({
  "duration": 47821300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\zss\\Desktop\\stage-photo-animalière-jeune-pic-epeiche.jpg",
      "offset": 22
    }
  ],
  "location": "DetailsContactStepDefinition.jeCliqueUnFichier(String)"
});
formatter.result({
  "duration": 30129200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test contact details",
      "offset": 32
    }
  ],
  "location": "DetailsContactStepDefinition.jeSaisiDansLeChampComment(String)"
});
formatter.result({
  "duration": 48891600,
  "status": "passed"
});
formatter.match({
  "location": "DetailsContactStepDefinition.jeCliqueSurUpload()"
});
formatter.result({
  "duration": 2543667700,
  "status": "passed"
});
formatter.uri("myinfo/PersonalDetails.feature");
formatter.feature({
  "line": 2,
  "name": "Tester la modification detail personnel",
  "description": "ETQ utilisateur je souhaite tester tester la suppression d\u0027un utilisateur",
  "id": "tester-la-modification-detail-personnel",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Personal_Details"
    }
  ]
});
formatter.before({
  "duration": 1260118300,
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
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2536388500,
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
  "duration": 58096900,
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
  "duration": 66759500,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2823654000,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 2092035900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Tester la modification detail personnel",
  "description": "",
  "id": "tester-la-modification-detail-personnel;tester-la-modification-detail-personnel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@PersonalDetails"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Je clique sur le sous menu detail presonnel",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Je clique sur le bouton edit dans le boc detai personnel",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Je saisi le First Name \"ZSS\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Je saisi le Middle Name \"ZSS\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je saisi le Last Name \"ZSSRR\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je saisi le Employee Id \"e1020122\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Je saisi le Other Id \"id854\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Je saisi le Driver\u0027s License Number \"1245\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Je saisi le License Expiry Date \"2022-01-04\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Je saisi le SSN Number \"12345bxjBZX\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Je saisi le SIN Number \"25521\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Je selectionner Marital Status \"Single\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Je selectionner Nationality  \"181\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Je saisi Date of Birth \"1975-10-15\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Je Saisi Nick Nam \"Test\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Je saisi  Military Service \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Je clique sur SaveDetais",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Je clique sur editCustom Fields",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Je selectionner Custom Fields \"O+\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Je clique sur saveCustom Fields",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Je clique sur Add Attachment",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Je choisi un fichier Select File \"C:\\Users\\zss\\Desktop\\stage-photo-animalière-jeune-pic-epeiche.jpg\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Je clique sur upload",
  "keyword": "Then "
});
formatter.match({
  "location": "PersonalDetailsStepDefinition.jeCliqueSurLeSousMenuDetailPresonnel()"
});
formatter.result({
  "duration": 948101700,
  "status": "passed"
});
formatter.match({
  "location": "PersonalDetailsStepDefinition.jeCliqueSurLeBoutonEditDansLeBocDetaiPersonnel()"
});
formatter.result({
  "duration": 45332200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ZSS",
      "offset": 24
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeFirstName(String)"
});
formatter.result({
  "duration": 84385600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ZSS",
      "offset": 25
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeMiddleName(String)"
});
formatter.result({
  "duration": 65725800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ZSSRR",
      "offset": 23
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeLastName(String)"
});
formatter.result({
  "duration": 74426200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e1020122",
      "offset": 25
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeEmployeeId(String)"
});
formatter.result({
  "duration": 70987100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id854",
      "offset": 22
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeOtherId(String)"
});
formatter.result({
  "duration": 68968600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1245",
      "offset": 37
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeDriverSLicenseNumber(String)"
});
formatter.result({
  "duration": 80675900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-01-04",
      "offset": 33
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeLicenseExpiryDate(String)"
});
formatter.result({
  "duration": 116531800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345bxjBZX",
      "offset": 24
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeSSNNumber(String)"
});
formatter.result({
  "duration": 84860200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25521",
      "offset": 24
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiLeSINNumber(String)"
});
formatter.result({
  "duration": 80671300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 32
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSelectionnerMaritalStatus(String)"
});
formatter.result({
  "duration": 71589000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "181",
      "offset": 30
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSelectionnerNationality(String)"
});
formatter.result({
  "duration": 72572700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975-10-15",
      "offset": 24
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiDateOfBirth(String)"
});
formatter.result({
  "duration": 92985900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 19
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiNickNam(String)"
});
formatter.result({
  "duration": 72276800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 28
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSaisiMilitaryService(String)"
});
formatter.result({
  "duration": 66002100,
  "status": "passed"
});
formatter.match({
  "location": "PersonalDetailsStepDefinition.jeCliqueSurSaveDetais()"
});
formatter.result({
  "duration": 1224315800,
  "status": "passed"
});
formatter.match({
  "location": "PersonalDetailsStepDefinition.jeCliqueSurEditCustomFields()"
});
formatter.result({
  "duration": 46049900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O+",
      "offset": 31
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeSelectionnerCustomFields(String)"
});
formatter.result({
  "duration": 101499700,
  "status": "passed"
});
formatter.match({
  "location": "PersonalDetailsStepDefinition.jeCliqueSurSaveCustomFields()"
});
formatter.result({
  "duration": 1261206200,
  "status": "passed"
});
formatter.match({
  "location": "PersonalDetailsStepDefinition.jeCliqueSurAddAttachment()"
});
formatter.result({
  "duration": 41406200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\zss\\Desktop\\stage-photo-animalière-jeune-pic-epeiche.jpg",
      "offset": 34
    }
  ],
  "location": "PersonalDetailsStepDefinition.jeChoisiUnFichierSelectFile(String)"
});
formatter.result({
  "duration": 31236500,
  "status": "passed"
});
formatter.match({
  "location": "PersonalDetailsStepDefinition.jeCliqueSurUpload()"
});
formatter.result({
  "duration": 2574909700,
  "status": "passed"
});
});