@serach_pim
Feature: Tester la recherche de module employee
  ETQ utilisateur je souhaite tester la recherche de module employee

  Background:
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le Username "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login

  @search_employee
  Scenario: Tester la recherche d'un employee
    When Je clique sur le menu PIM
    And Je clique sur le bouton Employeelist
    And Je vérifier le titre de bloc recherche ">"
    And Je vérifier l'existance des champs"Employee Name" et "Id" et "Employment Status"et "Include"et "Supervisor Name"et "Job Title"et"Sub Unit"
    And Je recherche le l'employee "e1020122"
    And Je clique sur le bouton recherche
    And Je vérifier le resultat de recherche
    Then  Je clique sur le bouton reset



