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
  "duration": 3076713600,
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
  "duration": 2355577500,
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
  "duration": 104331200,
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
  "duration": 50945900,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2567964500,
  "status": "passed"
});
formatter.match({
  "location": "PhotographStepDefinition.jeCliqueSurSurLeMenuMyInfo()"
});
formatter.result({
  "duration": 1899980100,
  "status": "passed"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonQualification()"
});
formatter.result({
  "duration": 893793300,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Tester langues",
  "description": "",
  "id": "tester-les-details-de-contact;tester-langues",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@languages"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "je clique sur le bouton edit language",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "je select language\"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "je select Fluency\"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "je select competency\"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "je saisie comments \"Fathi\u0026Zied\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "je clique sur le bouton save_language",
  "keyword": "Then "
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonEditLanguage()"
});
formatter.result({
  "duration": 52989400,
  "status": "passed"
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
  "duration": 87840200,
  "status": "passed"
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
  "duration": 80034400,
  "status": "passed"
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
  "duration": 72764400,
  "status": "passed"
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
  "duration": 46569100,
  "status": "passed"
});
formatter.match({
  "location": "QualificationsStepDefinition.jeCliqueSurLeBoutonSave_language()"
});
formatter.result({
  "duration": 2337728000,
  "status": "passed"
});
});