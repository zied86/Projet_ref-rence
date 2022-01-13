@search
Feature: Chercher un utilisatuer
  ETQ utilisateur je souhaite tester le filtre de rechechre

  Background:
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le Username "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login
    And Je clique sur le menu admin

  @searchOutline
  Scenario Outline: utline  Chercher un utilisatuer
    When Je saisi le userrname "<userrname>"
    And Je selectionner userrole "<userrole>"
    And Je saisi employee name "<employe_name>"
    And Je seclectionner le status "<status>"
    And Je clique sur le bouton search
    Then Resultat de recherche sera affiché
    Examples:
      | userrname  | userrole | employe_name | status |
      | Zied.tet   | 0        | Alice Duval  | 0      |
      | Zied.ttret | 0        | Alice Duval  | 0      |
      | Zied.tert  | 0        | Alice Duval  | 0      |
      | Zied.Zese  | 0        | Alice Duval  | 0      |

