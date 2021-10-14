controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.vy = -100
    mySprite2.ay = 100
    mySprite.vy = -100
    mySprite.ay = 100
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.vx = 200
    mySprite2.vy = -250
    mySprite2.ay = 200
    mySprite.vx = 200
    mySprite.vy = -250
    mySprite.ay = 200
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Table main character`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`Table main character0`, SpriteKind.Player)
controller.moveSprite(mySprite)
controller.moveSprite(mySprite2)
tiles.setTilemap(tilemap`Tilemaplol`)
scene.cameraFollowSprite(mySprite2)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 210))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 210))
mySprite2.ay = 300
mySprite.ay = 300
