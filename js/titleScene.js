/* global Phaser */

// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This is the Phaser3 game configuration file

/**
 * This class is the Splash Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "titleScene" })
  }

  /**
   * Can be defind on your own Scenes. 
   * This method is called by the Scene Manager when the scene starts, 
   *    before preload() and create().
   *  @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /**
   * Can be defind on your own Scene.
   * Use it to load assets.
   */
  preload() {
    console.log("Title Scene")
  }

  /**
   * Can be defind on your own Scene. 
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    // pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called onces per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default TitleScene
