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

	@logout
	Scenario: Tester la déconnexion - ORANGE HRM
		When Je clique sur le bonhomme
		When Je clique sur logout
		Then Application déconnectée