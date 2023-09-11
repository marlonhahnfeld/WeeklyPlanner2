class Note {
    constructor (title, desc) {
        this.title = title;
        this.desc = desc;
    }

    getNote() {
        return "Titel: ${this.title}\n Beschreibung: ${this.desc}";
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.desc;
    }
}