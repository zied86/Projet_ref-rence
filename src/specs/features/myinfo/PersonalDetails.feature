@personal_details
Feature: Tester la modification detail personnel
  ETQ utilisateur je souhaite tester tester la suppression d'un utilisateur

  Background:
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le Username "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login
    And Je clique sur sur le menu MyInfo

  @personal_details
  Scenario:Tester la modification detail personnel
    When Je clique sur le sous menu detail presonnel
    And Je clique sur le bouton edit dans le boc detai personnel
    And Je saisi le First Name "ZSS"
    And Je saisi le Middle Name "ZSS"
    And Je saisi le Last Name "ZSSRR"
    And Je saisi le Employee Id "e1020122"
    And Je saisi le Other Id "id854"
    And Je saisi le Driver's License Number "1245"
    And Je saisi le License Expiry Date "2022-01-04"
    And Je saisi le SSN Number "12345bxjBZX"
    And Je saisi le SIN Number "25521"

    And Je selectionner Marital Status "Single"
    And Je selectionner Nationality  "181"
    And Je saisi Date of Birth "1975-10-15"
    And Je Saisi Nick Nam "Test"

    And Je saisi  Military Service "test"
    And Je clique sur SaveDetais
    And Je clique sur editCustom Fields
    And Je selectionner Custom Fields "O+"
    And Je clique sur saveCustom Fields
    And Je clique sur Add Attachment
    And Je choisi un fichier Select File "C:\Users\zss\Desktop\stage-photo-animalière-jeune-pic-epeiche.jpg"
    Then Je clique sur upload







