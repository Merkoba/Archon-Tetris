Tetris.create_grid = function()
{
    Tetris.game.html("")
    
    let x = 0
    let y = 0

    for(let i=0; i<Tetris.num_vertical_blocks; i++)
    {
        for(let i=0; i<Tetris.num_horizontal_blocks; i++)
        {
            let block = $("<div class='block'></div>")
            block.css("width", `${Tetris.block_size}px`)
            block.css("height", `${Tetris.block_size}px`)
            block.css("left", x)
            block.css("bottom", y)
    
            Tetris.game.append(block)
            x += Tetris.block_size
        }

        x = 0
        y += Tetris.block_size
    }

    Tetris.grid = []
    
    for(let i=0; i<Tetris.num_vertical_blocks; i++)
    {
        Tetris.grid.push(Tetris.create_empty_grid_row())
    }
}

Tetris.create_empty_grid_row = function()
{
    let row = []

    for(let i=0; i<Tetris.num_horizontal_blocks; i++)
    {
        row.push(Tetris.create_empty_grid_node())
    }

    return row
}

Tetris.create_empty_grid_node = function()
{
    let node = {}
    Tetris.set_grid_node_to_defaults(node)
    return node
}

Tetris.set_grid_node_to_defaults = function(node)
{
    node.used = false
}