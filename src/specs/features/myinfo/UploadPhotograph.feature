@upload
Feature: Tester la modification de photo de profil
  ETQ utilisateur je souhaite tester tester la suppression d'un utilisateur

  Background:
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le Username "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login

  @upload_photo
  Scenario: Tester la modification de photo de profil
    When Je clique sur sur le menu MyInfo
    And Je clique sur changer photo
    And Je clique sur le bouton choisir un fichier "C:\Users\zss\Desktop\stage-photo-animalière-jeune-pic-epeiche.jpg"

    Then Je clique sur Upload


