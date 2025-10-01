const hero = {
  name: 'Герой',
  health: 100,
  maxHealth: 100,
  strength: 12,
  defense: 6,
  level: 1,
  experience: 0,
  inventory: ['Меч', 'Лук'],

attack(enemy) {
  const damage = Math.max(this.strength - enemy.defense, 1);
  enemy.health -= damage;
  logEvent(`${this.name} атакует ${enemy.name} и наносит ${damage} урона`);
  updateEnemyUI(enemy);
  checkEnemyDefeated(enemy);
},

gainExperience(exp) {
  this.experience += exp;
  logEvent(`${this.name} получает ${exp} опыта`);
  if (this.experience >= 100) {
    this.levelUp();
  }
  updateStatsUI();
  },

levelUp() {
  this.level++;
  this.maxHealth += 20;
  this.health = this.maxHealth;
  this.strength += 3;
  this.defense += 1;
  this.experience = 0;
  this.inventory = ['Меч','Лук']
  logEvent(`!${this.name} поднял уровень! Теперь ${this.level}`);
  updateStatsUI();
  },
};

const enemies = [
  {
    name: 'Гоблин',
    health: 50,
    maxHealth: 50,
    strength: 5,
    defense: 2,
    exp: 20,
    image: 'images/goblin.png',
  },

  {
    name: 'Орк',
    health: 80,
    maxHealth: 80,
    strength: 8,
    defense: 4,
    exp: 40,
    image: 'images/ork.png',
  },

  {
    name: 'Дракон',
    health: 200,
    maxHealth: 200,
    strength: 20,
    defense: 10,
    exp: 100,
    image: 'images/dragon.png',
  }
];

let currentEnemy = null;

const locations = ['Лес', 'Замок', 'Гора', 'Пустыня'];
let currentLocation = locations[0];

function init() {
  updateStatsUI();
  updateLocation();
  hideEnemySection();
  logEvent('Игра началась! Добро пожаловать!');
}

function updateStatsUI() {
  document.getElementById('playerLevel').innerText = hero.level;
  document.getElementById('playerXP').innerText = hero.experience;
  document.getElementById('playerStrength').innerText = hero.strength;
  document.getElementById('playerDefense').innerText = hero.defense;
  document.getElementById('playerInventory').innerText = hero.inventory.join(', ');
  const healthPercent = (hero.health / hero.maxHealth) * 100;
  document.getElementById('playerHealth').style.width = healthPercent + '%';
}

function updateLocation() {
  document.getElementById('location').innerText = currentLocation;
}

function showEnemySection(enemy) {
  document.getElementById('enemy-area').style.display = 'block';
  document.getElementById('enemy-name').innerText = enemy.name;
  document.getElementById('enemy-image').src = enemy.image;
  updateEnemyUI(enemy);
}

function hideEnemySection() {
  document.getElementById('enemy-area').style.display = 'none';
}

function updateEnemyUI(enemy) {
  const healthPercent = (enemy.health / enemy.maxHealth) * 100;
  document.getElementById('enemyHealth').style.width = healthPercent + '%';
}

function checkEnemyDefeated(enemy) {
  if (enemy.health <= 0) {
    logEvent(`${enemy.name} повержен!`);
    hero.gainExperience(enemy.exp);
    hideEnemySection();
    currentEnemy = null;
  } else {
    enemyAttack(enemy);
  }
}

function enemyAttack(enemy) {
  const damage = Math.max(enemy.strength - hero.defense, 1);
  hero.health -= damage;
  logEvent(`${enemy.name} атакует вас и наносит ${damage} урона`);
  if (hero.health <= 0) {
    alert('Вы проиграли! Игра окончена.');
    resetGame();
  }
  updateStatsUI();
}

function move() {
  currentLocation = locations[Math.floor(Math.random() * locations.length)];
  updateLocation();
  if (Math.random() < 0.6) {
    currentEnemy = {...enemies[Math.floor(Math.random() * enemies.length)]};
    showEnemySection(currentEnemy);
    logEvent(`Вы переместились в ${currentLocation}. Враг: ${currentEnemy.name}`);
  } else {
    hideEnemySection();
    currentEnemy = null;
    logEvent(`Вы переместились в ${currentLocation}. Врагов нет.`);
  }
  updateStatsUI();
}

function attack() {
  if (currentEnemy) {
    hero.attack(currentEnemy);
  } else {
    logEvent('Нет врага для атаки.');
  }
}

function resetGame() {
  hero.health = hero.maxHealth = 100;
  hero.level = 1;
  hero.experience = 0;
  hero.strength = 12;
  hero.defense = 6;
  hero.inventory = ['Меч', 'Лук'];
  currentLocation = locations[0];
  hideEnemySection();
  currentEnemy = null;
  document.getElementById('journal').innerHTML = '';
  updateStatsUI();
  updateLocation();
  logEvent('Игра сброшена. Начинайте заново!');
}

document.getElementById('attackBtn').onclick = attack;
document.getElementById('moveBtn').onclick = move;
document.getElementById('useItemBtn').onclick = () => {
  if (hero.inventory.length > 0) {
    const item = hero.inventory.pop();
    logEvent(`${hero.name} использует ${item}`);
    updateStatsUI();
  } else {
    alert('Инвентарь пуст!');
  }
};

document.getElementById('escapeBtn').onclick = () => {
  logEvent('Вы убегаете с боя...');
  hideEnemySection();
  currentEnemy = null;
  updateLocation();
};

document.getElementById('resetBtn').onclick = resetGame;


function logEvent(text) {
  const journal = document.getElementById('journal');
  journal.innerHTML = `<div>${text}</div>` + journal.innerHTML;
}

init();