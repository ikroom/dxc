scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`级别3`)
    Character.setPosition(24, 232)
    controller.moveSprite(Character, 100, 0)
    Character.ay = 300
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(2, 2), sprites.dungeon.greenOuterNorth2)) {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Character.setImage(assets.image`right1`)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(2, 2), sprites.dungeon.greenOuterNorth2)) {
        if (Character.isHittingTile(CollisionDirection.Left)) {
            Character.vy = -86
        }
        if (Character.isHittingTile(CollisionDirection.Right)) {
            Character.vy = -86
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(2, 2), sprites.dungeon.greenOuterNorth2)) {
        if (Character.isHittingTile(CollisionDirection.Bottom)) {
            Character.vy = -172
        }
        if (Character.isHittingTile(CollisionDirection.Left)) {
            Character.vy = -86
        }
        if (Character.isHittingTile(CollisionDirection.Right)) {
            Character.vy = -86
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Character.setImage(assets.image`left1`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    let bullet: Sprite = null
    enemy_outer = sprites.create(sprites.dungeon.collectibleRedCrystal, SpriteKind.Enemy)
    bullet.destroy()
    enemy_outer.destroy()
})
let enemy_outer: Sprite = null
let Character: Sprite = null
Character = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Character, 100, 100)
Character.setPosition(24, 24)
scene.cameraFollowSprite(Character)
tiles.setTilemap(tilemap`级别1`)
game.onUpdateInterval(500, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(2, 2), sprites.dungeon.greenOuterNorth2)) {
    	
    }
})
