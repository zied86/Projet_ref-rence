Feature: Tester la connexion
  ETQ utlisateur je souhaite tester la page connexion

  @loginOutline
  Scenario Outline: Tester la connexion avec un scénario outline
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le username "<username>"
    And Je saisie le password "<password>"
    And Je clique sur le bouton login

    Examples:
      | username | password |
      | Admin    | admin123 |
      | Marwa    | marwa123 |
      | Roua     | roua123  |
      | Ikram    | ikram123 |