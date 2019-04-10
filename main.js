var switch1 = new SwitchButton("off", "");
var lamp1 = new ElectricLamp("bed room lamp","off");
switch1.connectToLamp(lamp1);
for (let i = 1; i <= 10; i++) {
    switch1.switchOn();
    switch1.getInfo();
    switch1.switchOff();
}