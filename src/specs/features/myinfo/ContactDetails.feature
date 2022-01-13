@contact
Feature: Tester les details de contact
  ETQ utilisateur je souhaite tester les details de contact d'un utilisateur

  Background:
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le Username "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login
    And Je clique sur sur le menu MyInfo

  @contact_Details
  Scenario: Tester les details de contact
    When Je clique sur contact details
    And je clique sur le bouton Edit
    And je saisie Adresse street1 "rue mohamed 5"
    And je saisie Address Street2 "gabes"
    And je saisie city "gabes"
    And Je saisie stat/province "mareth"
    And Je saisie Postal code "6000"
    And  Je selectionne country "TN"
    And je saisie le teliphone "71254845"
    And Je saisie Mobile "95658632"
    And Je saisie Work teliphone "25485652"
    And je saisie work email "test@gmail.com"
    And Je saisie other email "test1@gmail.com"
    And je clique sur save
    And je clique sur Edit_attachement
    And Je clique un fichier "C:\Users\zss\Desktop\stage-photo-animalière-jeune-pic-epeiche.jpg"
    And Je saisi dans le champ comment "test contact details"
    Then je clique sur upload

