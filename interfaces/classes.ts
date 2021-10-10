type CharacteristicType = 'strength' | 'agility' | 'physique' | 'intelligence' | 'wisdom' | 'charisma';
type ArmorType = 'all' | 'none' | 'light' | 'medium' | 'heavy' | 'shield';
type WeaponType = 'simpleMelee' | 'simpleRange' | 'militaryMelee' | 'militaryRange';
type SkillsType = 'athletics' | 'acrobatics' | 'sleightOfHand' | 'stealth' | 'analysis' | 'history' | 'magic' | 'nature' |
'religion' | 'attentiveness' | 'survival' | 'medicine' | 'insight' | 'animalCare' | 'performance' | 'intimidation' | 'deception' | 'belief';

export enum CharacteristicEnum {
  strength = 'Сила',
  agility = 'Ловкость',
  physique = 'Телосложение',
  intelligence = 'Интелект',
  wisdom = 'Мудрость',
  charisma = 'Харизма',
}

export enum ArmorEnum {
  all = 'Все',
  none = 'Нет',
  light = 'Лёгкий доспех',
  medium = 'Средний доспех',
  heavy = 'Тяжёлый доспех',
  shield = 'Щиты',
}

export enum WeaponEnum {
  simpleMelee = 'Простое рукопашное оружие',
  simpleRange = 'Простое дальнобойное оружие',
  militaryMelee = 'Воинское рукопашное оружие',
  militaryRange = 'Воинское дальнобойное оружие',
}

export enum SkillsEnum {
  athletics = 'Атлетика',
  acrobatics = 'Акробатика',
  sleightOfHand = 'Ловкость рук',
  stealth = 'Скрытность',
  analysis = 'Анализ',
  history = 'История',
  magic = 'Магия',
  nature = 'Природа',
  religion = 'Религия',
  attentiveness = 'Внимательность',
  survival = 'Выживание',
  medicine = 'Медицина',
  insight = 'Проницательность',
  animalCare = 'Уход за животными',
  performance = 'Выступление',
  intimidation = 'Запугивание',
  deception = 'Обман',
  belief = 'Убеждение',
}

export interface CharacterClass {
  name: string
  mainCharacteristic: CharacteristicType[]
  hits: number
  hitsOnFirstLvl: number
  hitsOnNextLvl: number
  hitsModifier: CharacteristicType
  save: CharacteristicType[]
  armor: ArmorType[]
  weapon: WeaponType[]
  skills: SkillsType[]
  instruments: any[]
  equipment: any[]
  description: string
}
