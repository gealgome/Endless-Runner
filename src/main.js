// George Gomez
// Lion Run
// 11/8/2023
// Technically interesting. 
// Game creates an illusion of player creating and raising 
// a animal and playing as the new animal once it reaches maturity.
// Some mechanics are themed around lions, including
// enemy male lions who will try to kill the male lion
// and steal you.
// Used timers and collision checks liberally.
// Created lifebars that update and tick-down in real-time.
let config = { 
    type:   Phaser.AUTO,
    width:  1600,
    height: 900,
    scene:  [Menu, Play, GameOver],
    physics:{
        default:'arcade',
        arcade:{debug:false}
    }
}

let game = new Phaser.Game(config);
let highScore = 0;
// define game settings
game.settings = {
    //spaceshipSpeed: 3,
    //gameTimer: 60000    
}

// reserve keyboard vars
let keyUp, keyDown, keyLeft, keyRight, keySpace;

// reserver timer var
let raiseKid;