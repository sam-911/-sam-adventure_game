#! /usr/bin/env node

import inquirer from "inquirer";

let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"]
let maxEnemyHealth = 75
let enemyAttackDamageToHero = 25


let heroHealth = 100
let attackDamagetoEnemy = 50
let numberHealthPotion = 3
let healthPotionHealAmount = 30
let healthPotionDropChance = 50

let gameRunning = true

console.log("Welcome to DeathGame!");

Game:

while (gameRunning){
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1 )
    let enemyIndex = Math.floor(Math.random() * enemies.length)
    let enemy = enemies[enemyIndex]
    console.log(`# ${enemy} has appeared # \n`);

    while (enemyHealth > 0){
        console.log(`Your Health: ${heroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);

        let optio = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Health" , "Run"]
        })

        if(optio.ans === "Attack"){
            let damagetoEnemy =Math.floor(Math.random() * attackDamagetoEnemy + 1)
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1)

            enemyHealth -= damagetoEnemy
            heroHealth -= damageToHero

            console.log(`you strike the ${enemy} for ${damagetoEnemy}`);
            console.log(` ${enemy} strike you for ${damageToHero} damage.`);
     
            if (heroHealth < 1){
                console.log("you have taken too much damage. you are too weak to continue");
                break;
            }
        }
    
        else if (optio.ans === "Health"){
            if(numberHealthPotion > 0){
                heroHealth += healthPotionHealAmount
                numberHealthPotion --
                console.log(`You use Health Potion for ${healthPotionHealAmount}`);
                console.log(`You now have ${heroHealth} Health`);
                console.log(`You have ${numberHealthPotion}Health Potion Left.`);
            }else{
                console.log(`You have no Health Potion left. Defeat Enemy for a chance to get Health Potion`);
            }
        }
        else if (optio.ans === "Run"){
            console.log(`You Run away from ${enemy}`);
            continue Game;
        }
    }
        if (heroHealth < 1){
            console.log("You are OUT from Battle. You are too Weak.");
            break
        }
        console.log(`${enemy} was Defeated!`);
        console.log(`You have ${heroHealth} Health.`);

        let randomNumber = Math.floor(Math.random() * 100 + 1)
        if(randomNumber < healthPotionDropChance){
        numberHealthPotion++
        
        console.log("Enemy give you Health Potion");
        console.log(`Your Health is ${heroHealth}`);
        console.log(`Your Health Potion is ${numberHealthPotion}`);
        }

        let useroption = await inquirer.prompt({
            name: "ans",
            type: "list",
            message:"What would like to do Now",
            choices: ["Continue","Exit"]
        })

        if (useroption.ans === "Continue"){
            console.log("Your are Continue on your Adventure");
        }else{
            console.log("You successful Exit from DethGame!.");
            break;
        }
        console.log("Thank You for Playing.\n");
    }
