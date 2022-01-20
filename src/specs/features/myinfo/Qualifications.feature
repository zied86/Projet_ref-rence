@qualification
Feature: Tester les details de contact
  ETQ utilisateur je souhaite tester les details de contact d'un utilisateur

  Background:
    Given Je me connecte sur l'application Orange HRM
    When Je saisie le Username "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login
    And Je clique sur sur le menu MyInfo
    And Je clique sur le bouton qualification

  @work_experience
  Scenario: Tester les details de contact
    And Je clique sue le boutton edition experience
    And  je vérifier l'ajout d'un nouveau bloc "Add Work Experience"
    And  Je saisi le company "Zied"
    And Je saisi le job tilte "TEST"
    And Je selectionner la date from "2021-01-01"
    And Je selectionner la date to "2022-01-01"
    And Je salis un comment " Test QA Automation"
    Then Je clique sur le bouton saveexperience
    And Je selectionner l'experience ajouter "Zied"
    And Je suprimer l'experience ajouter

  @edication
  Scenario: Tester les details de contact
    When Je clique sur le bouton editeducation
    And Je selectionner un level "1"
    And Je saisi l'instutite "Fathi&Zied"
    And Je saisi Major Specialization "Fathi&Zied"
    And Je saisi  year "2021"
    And Je saisi gpa/Score "20"
    And Je saisi start date "2022-01-15"
    And Je saisi end date "2025-01-30"
    And Je clique sur le bouton saveeducation

  @skills
  Scenario: Tester les details de contact
    When Je clique sur le bouton editskill
    And Je selectionner un skill "7"
    And Je saisi years of experience"10"
    And Je saisi Commentsskill"Fathi&Zied"
    And Je clique sur saveskill

  @languages
  Scenario:Tester langues
    When je clique sur le bouton edit language
    And je select language"3"
    And je select Fluency"2"
    And je select competency"3"
    And je saisie comments "Fathi&Zied"
    Then je clique sur le bouton save_language

  @license
  Scenario:Tester license
    When je clique sur le bouton add_license
    And je select Type de certif"2"
    And je saisie license Number"Fathi&Zied"
    And je saisie issued date "2010-10-30"
    And le saisie Expired Date "2021-01-20"
    Then je clique sur le bouton save_license

  @attachments
  Scenario:Tester Attachement
    When je clique sur le bouton Add_Attachement
    And je choisie un fichier "C:\Users\zss\Desktop\stage-photo-animalière-jeune-pic-epeiche.jpg"
    And je saisie un comment "Fathi&Zied"
    Then je clique sur le bouton Upload