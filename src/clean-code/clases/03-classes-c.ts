(() => {

    // Aplicando el principio de responsabilidad única
    // Principio de responsabilidad única: Una clase debe tener una, y solo una, razón para cambiar.
    // Priorizar la composición sobre la herencia.
    // Principio de segregación de interfaces: Los clientes no deben verse obligados a depender de interfaces que no usan.

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.birthdate = birthdate;
            this.gender    = gender;
            this.name      = name;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }

    class User{
        
        public email: string;
        public lastAccess: Date;
        public role : string;

        constructor({
            email,
            role,
        }: UserProps ) {
            this.email = email;
            this.lastAccess = new Date();
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {

        public lastOpenFolder  : string;
        public workingDirectory: string;

        constructor({
            lastOpenFolder,
            workingDirectory,
        }: SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }
    // Composición
    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings {
        public person   : Person;
        public settings : Settings;
        public user     : User;
        
        constructor({ birthdate, gender, name, email, role, lastOpenFolder, workingDirectory }: UserSettingsProps ) {
            this.person   = new Person({ birthdate, gender, name })
            this.user     = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
            
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();