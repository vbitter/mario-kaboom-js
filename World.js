export class World {
    loadMapAssets() {

    }
}

export class World1 extends World {
    loadMapAssets() {
        loadSprite('forest-background', 'assets/Forest_Background_0.png')
        loadSprite('grass-tileset', 'assets/Grass_Tileset.png', {
           sliceX: 3,
           sliceY: 4,
           anims: {
            'tl': 0,
            'tm': 1,
            'tr': 2,
            'ml': 3,
            'mm': 4,
            'mr': 5,
            'ml-2': 6,
            'mm-2': 7,
            'mr-2': 8
           }
        })
        loadSprite('grass-oneway-tileset', 'assets/Grass_Oneway.png', {
            sliceX: 3,
            sliceY: 4,
            anims: {
                'tl': 0,
                'tm': 1,
                'tr': 2,
                'ml': 3,
                'mm': 4,
                'mr': 5,
                'ml-2': 6,
                'mm-2': 7,
                'mr-2': 8
            }
        })
        loadSprite('water', 'assets/Water.png', {
            sliceX: 8,
            sliceY: 1,
            anims: {
                'wave-reversed': {
                    from:  7,
                    to: 0,
                    speed: 16,
                    loop: true
                }
            }
        })
        loadSprite('bridge', 'assets/Bridge.png')
    }

    drawMap(levelLayout, mappings) {
        this.background = add([sprite('forest-background'), fixed(), scale(4)])
        
        const layerSettings = {
            tileWidth: 16,
            tileHeight: 12,
            tiles: mappings   
        }

        this.map = []
        for (const layerLayout of levelLayout) {
            this.map.push(addLevel(layerLayout, layerSettings))
        }

        for (const layer of this.map) {
            layer.use(scale(4))
        }
    }
}