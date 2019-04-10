function SwitchButton (status, lamp) {
    this.status = status; // boolean On || Off
    this.lamp = lamp; // ElectricLamp
    this.connectToLamp = function(ElectricLamp) {
        this.lamp = ElectricLamp;
    }
    this.switchOff = function () {
        this.status = "off";
    }
    this.switchOn = function () {
        this.status = "on";
    }
    this.getInfo = function () {
        console.log ("the switch is " + this.status + " and connecting to " + this.lamp.name);
    }
}