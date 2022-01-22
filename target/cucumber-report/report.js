$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pim/SearchPim.feature");
formatter.feature({
  "line": 2,
  "name": "Tester la recherche de module employee",
  "description": "ETQ utilisateur je souhaite tester la recherche de module employee",
  "id": "tester-la-recherche-de-module-employee",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@serach_pim"
    }
  ]
});
formatter.before({
  "duration": 3328911100,
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
  "duration": 2562923200,
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
  "duration": 94944500,
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
  "duration": 49677400,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinitions.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3352914300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Tester la recherche d\u0027un employee",
  "description": "",
  "id": "tester-la-recherche-de-module-employee;tester-la-recherche-d\u0027un-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@search_employee"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Je clique sur le menu PIM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Je clique sur le bouton Employeelist",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Je vérifier le titre de bloc recherche \"\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Je vérifier l\u0027existance des champs\"Employee Name\" et \"Id\" et \"Employment Status\"et \"Include\"et \"Supervisor Name\"et \"Job Title\"et\"Sub Unit\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Je recherche le l\u0027employee \"e1020122\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je clique sur le bouton recherche",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je vérifier le resultat de recherche",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Je clique sur le bouton reset",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPimStepDefinition.jeCliqueSurLeMenuPIM()"
});
formatter.result({
  "duration": 1576513000,
  "status": "passed"
});
formatter.match({
  "location": "SearchPimStepDefinition.jeCliqueSurLeBoutonEmployeelist()"
});
formatter.result({
  "duration": 663130900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003e",
      "offset": 40
    }
  ],
  "location": "SearchPimStepDefinition.jeVérifierLeTitreDeBlocRecherche(String)"
});
formatter.result({
  "duration": 30553200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee Name",
      "offset": 35
    },
    {
      "val": "Id",
      "offset": 54
    },
    {
      "val": "Employment Status",
      "offset": 62
    },
    {
      "val": "Include",
      "offset": 84
    },
    {
      "val": "Supervisor Name",
      "offset": 96
    },
    {
      "val": "Job Title",
      "offset": 116
    },
    {
      "val": "Sub Unit",
      "offset": 129
    }
  ],
  "location": "SearchPimStepDefinition.jeVérifierLExistanceDesChampsEtEtEtEtEtEt(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 146538900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e1020122",
      "offset": 28
    }
  ],
  "location": "SearchPimStepDefinition.jeRechercheLeLEmployee(String)"
});
formatter.result({
  "duration": 72761300,
  "status": "passed"
});
formatter.match({
  "location": "SearchPimStepDefinition.jeCliqueSurLeBoutonRecherche()"
});
formatter.result({
  "duration": 468835100,
  "status": "passed"
});
formatter.match({
  "location": "SearchPimStepDefinition.jeVérifierLeResultatDeRecherche()"
});
formatter.result({
  "duration": 84600,
  "status": "passed"
});
formatter.match({
  "location": "SearchPimStepDefinition.jeCliqueSurLeBoutonReset()"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
});