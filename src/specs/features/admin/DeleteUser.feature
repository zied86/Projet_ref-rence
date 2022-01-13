@delete
Feature: Tester la suppression d'un utilisateur
  ETQ utilisateur je souhaite tester tester la suppression d'un utilisateur

  Background:
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le Username "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login

  @delete_user
  Scenario:Tester la suppression d'un utilisateur

    And Je selectionner le checkbox
    Then Je clique sur le bouton delete
    And Je confirme la suppression




