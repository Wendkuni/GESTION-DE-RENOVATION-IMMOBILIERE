export const environment = {
  production: false,
  FRONTEND_ROUTES:{
    LOGIN: "login",
    DASHBOARD: '',
    PROFILE_USER: 'profile',
    ERROR: 'error',
    ERROR404: 'error404',
    ERROR500: 'error500',
    RENOVATION: 'renovation',
    VALIDER_FILE_RENOVATION: 'valider-renovation',
    ROLES: 'systeme/roles',
    PROFILES : 'systeme/profiles',
    USER_MENU: 'systeme/user-menu',
    MENU: 'systeme/menu',
    CLIENT: 'user/client',
    GERANT: 'user/gerant',
    RESPONSABLE_TRAVAUX: 'user/responsable-travaux',
    BUREAU_ETUDE: 'user/bureau-etude',
    AUTRE_USER: 'user/autre-user',
    TYPE_SOCIETE: 'types-societe',
    SOCIETE: 'societe',
    PROJET_RENAUVATION: 'projet-renovation',
    DEMARRER_PROJET: 'demarrer-projet',
    CLOTURER_PROJET: 'cloturer-projet',
    PROJET_REALISER: 'projet-realiser',
    STATISTIQUE: 'statistique'



  },
  BACK_END :{
    SOCIETE:{
      SOCIETE:'http://54.36.181.1:9090/investithorBack/societe/',
      TYPE_SOCIETE:'http://54.36.181.1:9090/investithorBack/type-societe/'
    },
    LOGIN:{
      CONNEXION:'http://54.36.181.1:9090/investithorBack/login/',
      CHECK_I_AM_LOGIN:'http://54.36.181.1:9090/investithorBack/me/',
      PROFILE_UPDATE_USER:'http://54.36.181.1:9090/investithorBack/me/profile-update/',
      PROFILE_UPDATE_CLIENT:'http://54.36.181.1:9090/investithorBack/me/profile-update-client/',
      UPDATE_PASSWORD:'http://54.36.181.1:9090/investithorBack/me/update-password/',
      INSCRIPTION: 'http://54.36.181.1:9090/investithorBack/login/inscription'
    },
    MENU:{
      MENU_USER:'http://54.36.181.1:9090/investithorBack/menu-front/',
      MENU_ACTION:'http://54.36.181.1:9090/investithorBack/menu/',
      MENU_FROM_USER:'http://54.36.181.1:9090/investithorBack/menu-user/'
    },
    UTILISATEUR: {
      CLIENT: "http://54.36.181.1:9090/investithorBack/client/",
      AUTRE_USER: "http://54.36.181.1:9090/investithorBack/autre-user/",
      BUREAU_ETUDE: "http://54.36.181.1:9090/investithorBack/bureau-etude/",
      RESPONSABLE_TRAVAUX: "http://54.36.181.1:9090/investithorBack/responsable-travaux/",
      GERANT:"http://54.36.181.1:9090/investithorBack/gerant/"
    },
    RENOVATION : {
      CLIENT_RENOVATION: "http://54.36.181.1:9090/investithorBack/renovation/",
      VALIDATIOn_RENOVATION: "http://54.36.181.1:9090/investithorBack/valider-renovation/",
    },
    SECURITE:{
      ROLE:"http://54.36.181.1:9090/investithorBack/roles/",
      PROFILES : "http://54.36.181.1:9090/investithorBack/profiles/",
      PROFILES_USER: "http://54.36.181.1:9090/investithorBack/profileUser/"
    },
    FILEUPLOAD: "http://54.36.181.1:9090/investithorBack/files/",
    DEMARRAGERENAUVATION:{
      PROJET_RENAUVATION_GERANT: 'http://54.36.181.1:9090/investithorBack/projet-renovation-gerant/',
      USER_AFFECTER: 'http://54.36.181.1:9090/investithorBack/user-affecter-projet-renovation/',
      GESTION_TACHE: 'http://54.36.181.1:9090/investithorBack/taches/',
      TACHES_USER: 'http://54.36.181.1:9090/investithorBack/taches-effectuer/',
      AGENDA_SYSTEM: 'http://54.36.181.1:9090/investithorBack/agenda-gestion/',
      AGENDA_USER: 'http://54.36.181.1:9090/investithorBack/agenda-utilisateur/',
      DOSSIER_PROJET: 'http://54.36.181.1:9090/investithorBack/dossiers/',
      FICHIER_PROJET:'http://54.36.181.1:9090/investithorBack/fichiers/',
      GESTION_DOSSIER: 'http://54.36.181.1:9090/investithorBack/gestion-dossiers/',
      CANAL_MESSAGERIE: 'http://54.36.181.1:9090/investithorBack/canal-messagerie/',
      MESSAGERIE_GESTION: 'http://54.36.181.1:9090/investithorBack/ws',
    },
    CLOTURER: 'http://54.36.181.1:9090/investithorBack/cloturer-projet-renovation/',
    BILAN_CLOTURE : 'http://54.36.181.1:9090/investithorBack/projet-realiser/'
  }
};

//https://accounts.google.com/b/2/DisplayUnlockCaptcha

        /*  [
          {
              "id": 4,
              "libelle": "Gerer le Menu Des Profile",
              "name": "ROLE_GESTION_USER_MENU",
              "type": "gestion profile user"
          },
          {
              "id": 5,
              "libelle": "Gerer Mes Renovation (Client)",
              "name": "ROLE_GESTION_RENOVATION",
              "type": "gestion des renovation"
          },
          {
              "id": 11,
              "libelle": "Gerer  User Bureau Etude",
              "name": "ROLE_GESTION_BUREAU_ETUDE",
              "type": "Gestion des user Bureau Etude"
          },
          {
              "id": 1,
              "libelle": "Utilisateur",
              "name": "ROLE_UTILISATEUR",
              "type": "User"
          },
          {
              "id": 6,
              "libelle": "Gerer les Profiles",
              "name": "ROLE_GESTIONS_PROFILES",
              "type": "Gestion des profiles"
          },
          {
              "id": 14,
              "libelle": "Gerer Autre User",
              "name": "ROLE_GESTION_AUTRE_USER",
              "type": "Gestion Autre User"
          },
          {
              "id": 3,
              "libelle": "Creer Modifier Supprimer Menu",
              "name": "ROLE_GESTION_MENU",
              "type": "Gestion Menu"
          },
          {
              "id": 2,
              "libelle": "Admin",
              "name": "ROLE_ADMIN",
              "type": "Root"
          },
          {
              "id": 7,
              "libelle": "Gerer les roles",
              "name": "ROLE_GESTION_ROLES",
              "type": "Gestion des roles"
          },
          {
              "id": 10,
              "libelle": "Gerer les client",
              "name": "ROLE_GESTION_CLIENT",
              "type": "Gestion des client"
          },
          {
              "id": 12,
              "libelle": "Gestion User Responsable Travaux",
              "name": "ROLE_GESTION_RESPONSABLE_TRAVAUX",
              "type": "Gestion des Responsable Travaux"
          },
          {
              "id": 8,
              "libelle": "Gerer Type Societe",
              "name": "ROLE_GESTION_TYPE_SOCIETE",
              "type": "Gestion des type de société"
          },
          {
              "id": 13,
              "libelle": "Gerer User Gerant",
              "name": "ROLE_GESTION_GERANT",
              "type": "Gestion des Gerants"
          },
          {
              "id": 16,
              "libelle": "usti",
              "name": "ROLE_USER1",
              "type": "user"
          },
          {
              "id": 9,
              "libelle": "Gerer les Société",
              "name": "ROLE_GESTION_SOCIETE",
              "type": "gestion des societe"
          },
          {
              "id": 15,
              "libelle": "Gerer validation des justificatif renovation",
              "name": "ROLE_GESTION_VALIDER_FILE_RENOVATION",
              "type": "Gestion des validation des justificatif renovation"
          }
      ] */

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
