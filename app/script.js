class User {
    name;
    constructor(_name) {
        this.name = _name;
    }
}
const tom = new User("Tom");
const header = this.document.getElementById("header");
if (header) {
    header.innerHTML = "Hello " + tom.name;
}
console.log(tom.name);
//# sourceMappingURL=script.js.map