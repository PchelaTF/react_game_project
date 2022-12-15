import { Howl, Howler } from "howler"
const swing = require("../../assets/audio/battle/swing.wav")
const button = require("../../assets/audio/ui/click5.ogg")
const mainBg = require("../../assets/audio/music/Treacherous_Slopes.mp3")
const fightBg = require("../../assets/audio/music/Heresy.mp3")

const mainBgMusic = new Howl({
    src: mainBg,
    loop: true
})

const fightBgMusic = new Howl({
    src: fightBg,
    loop: true
})

export function playSound():void {
    var sound = new Howl({
        src: swing
    });

    sound.play()
};

export function mainMusic(off: boolean = false): void {
    if(off) {
        mainBgMusic.stop()
    } else mainBgMusic.play()

}

export function locationMusic(off: boolean = false): void {
    if(off)
        fightBgMusic.stop()
    else
        fightBgMusic.play()
}

export function setMainBackgroundMusicOff(): void {
    var sound = new Howl({
        src: fightBg,
        loop: true
    })

    sound.off()
}


export function playChestOpen(): void {

}

export function buttonClick(): void {
    var sound = new Howl({
        src: button
    });

    sound.play()
}