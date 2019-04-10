function ElectricLamp (name, status) {
    this.name = name; // string
    this.status = status; // boolean on || off
    this.turnOff = function () {
        this.status = "off";
    }
    this.turnOn = function () {
        this.status = "on";
    }
    this.getInfo = function () {
        console.log("the lamp is " + this.status);
    }
}