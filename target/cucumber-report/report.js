$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentication/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Tester la connexion",
  "description": "ETQ utlisateur je souhaite tester la page connexion",
  "id": "tester-la-connexion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authentication"
    }
  ]
});
formatter.before({
  "duration": 3316304400,
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
formatter.match({
  "location": "CommonSteps.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 4257940700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Tester la connexion - ORANGE HRM",
  "description": "",
  "id": "tester-la-connexion;tester-la-connexion---orange-hrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Je saisie le Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Je me redirige vers la pahe Home \"Welcome\"",
  "keyword": "Then "
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
  "duration": 122630400,
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
  "duration": 61108400,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 4404968500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 34
    }
  ],
  "location": "AuthenticationStepDefinitions.jeMeRedirigeVersLaPaheHome(String)"
});
formatter.result({
  "duration": 46463500,
  "status": "passed"
});
formatter.after({
  "duration": 749899900,
  "status": "passed"
});
});