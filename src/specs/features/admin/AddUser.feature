@admin
Feature: Tester l'ajout d'un utilisateur
  ETQ utilisateur je souhaite tester  l'ajout d'un utilisateur

  Background:
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le Username "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login


  @update_statusOutline
  Scenario Outline: Tester l'ajout d'un utilisateur
    When Je clique sur le menu admin
    And Je clique sur le bouton add
    And Je selectionner le user role"<Uservalue>"
    And Je selectionner employee name
    And Je saisie employee name "<EmployeeName>"
    And Je saisie  username "<Username>"
    And Je selectionner le status "<Statusvalue>"
    And Je saisie le Password "<Password>"
    And Je confirme le passwrod "<Confirmepassword>"
    Then Je clique sur le bouton save
    And  Je vérifier l'ajout de user"<Username>"



    Examples:
      | Uservalue | EmployeeName | Username    | Statusvalue | Password       | Confirmepassword |
      | 1         | Alice Duval  | Ziee.fxd4e | 0           | TEST1206952547 | TEST1206952547   |


