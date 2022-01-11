@authentication
Feature: Tester la connexion
	ETQ utlisateur je souhaite tester la page connexion

	Background:
		Given Je me connecte sur l'application Orange HRM

	@cnx
	Scenario: Tester la connexion - ORANGE HRM
		When Je saisie le Username "Admin"
		And Je saisie le mot de passe "admin123"
		And Je clique sur le bouton login
		Then Je me redirige vers la pahe Home "Welcome"