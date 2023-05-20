import { Howl } from 'howler';
const swing = require('../../assets/audio/battle/swing.wav');
const button = require('../../assets/audio/ui/click5.ogg');
const mainBg = require('../../assets/audio/music/bgScene.mp3');
const fightBg = require('../../assets/audio/music/Heresy.mp3');
const openChest = require('../../assets/audio/battle/door.wav');
const potion = require('../../assets/audio/battle/bottle.wav');
const armor = require('../../assets/audio/battle/armor-light.wav');
const weapon = require('../../assets/audio/battle/sword-unsheathe.wav');
const coin = require('../../assets/audio/battle/coin.wav');
const death = require('../../assets/audio/battle/death.wav');
const boss = require('../../assets/audio/music/bossMusic.mp3');
const magic = require('../../assets/audio/battle/Magic.mp3');
const damageDeal = require('../../assets/audio/battle/damage_1_sean.wav');
const greeting = require('../../assets/audio/character/greeting_1_alex.wav');
const getDamage = require('../../assets/audio/battle/grunting_1_sean.wav');

const mainBgMusic = new Howl({
  src: mainBg,
  loop: true,
});

const fightBgMusic = new Howl({
  src: fightBg,
  loop: true,
});

const bossMusic = new Howl({
  src: boss,
  loop: true,
});

const openChestSound = new Howl({
  src: openChest,
});

const potionSound = new Howl({
  src: potion,
});

const armorSound = new Howl({
  src: armor,
});

const weaponSound = new Howl({
  src: weapon,
});

const coinSound = new Howl({
  src: coin,
});

const deathSound = new Howl({
  src: death,
});

const damageDealSound = new Howl({
  src: damageDeal,
});

const greetingSound = new Howl({
  src: greeting,
});

const magicSound = new Howl({
  src: magic,
  volume: 0.3,
});

const getDamageSound = new Howl({
  src: getDamage,
});

export function playSound(): void {
  const sound = new Howl({
    src: swing,
  });

  sound.play();
}

export function mainMusic(off = false): void {
  if (off) {
    mainBgMusic.stop();
  } else mainBgMusic.play();
}

export function playBossMusic(off = false): void {
  if (off) {
    bossMusic.stop();
  } else bossMusic.play();
}

export function locationMusic(off = false): void {
  if (off) fightBgMusic.stop();
  else fightBgMusic.play();
}

export function chestSound(): void {
  openChestSound.play();
}

export function getPotionSound(): void {
  potionSound.play();
}

export function getArmorSound(): void {
  armorSound.play();
}

export function getWeaponSound(): void {
  weaponSound.play();
}

export function getCoinSound(): void {
  coinSound.play();
}

export function playDeathSound(): void {
  deathSound.play();
}

export function playMagicSound(): void {
  magicSound.play();
}

export function playgreetingSound(): void {
  greetingSound.play();
}

export function playDamageDealSound(): void {
  damageDealSound.play();
  playSound();
}

export function playGetDamageSound(): void {
  getDamageSound.play();
}

export function buttonClick(): void {
  const sound = new Howl({
    src: button,
  });

  sound.play();
}
