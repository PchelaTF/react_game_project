import { Howl, Howler } from "howler"
const swing = require("../../assets/audio/battle/swing.wav")
const button = require("../../assets/audio/ui/click5.ogg")

export function playSound():void {
    var sound = new Howl({
        src: swing
    });

    sound.play()
};

export function playBackgroundMusic(): void {
    var sound = new Howl({
        src: swing
    });

    sound.play()
}

export function buttonClick(): void {
    var sound = new Howl({
        src: button
    });

    sound.play()
}