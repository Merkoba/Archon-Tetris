Tetris.element_preview_block_size = 15

Tetris.create_pieces = function()
{
    Tetris.pieces = 
    {
        stick:
        {
            name: "stick",
            modes:
            [
                {
                    width: 1,
                    height: 4
                },
                {
                    width: 4,
                    height: 1
                }
            ],
            map: [[0, 0], [0, 1], [0, 2], [0, 3]],
            space:
            {
                left: 1,
                right: 2,
                top: 0,
                bottom: 0
            }
        },
        periscope_right:
        {
            name: "periscope_right",
            modes:
            [
                {
                    width: 2,
                    height: 3
                },
                {
                    width: 3,
                    height: 2
                },
                {
                    width: 2,
                    height: 3,
                },
                {
                    width: 3,
                    height: 2
                }
            ],
            map: [[0, 0], [1, 0], [0, 1], [0, 2]],
            space:
            {
                left: 1,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        periscope_left:
        {
            name: "periscope_left",
            modes:
            [
                {
                    width: 2,
                    height: 3
                },
                {
                    width: 3,
                    height: 2
                },
                {
                    width: 2,
                    height: 3,
                },
                {
                    width: 3,
                    height: 2
                }
            ],
            map: [[0, 0], [1, 0], [1, 1], [1, 2]],
            space:
            {
                left: 0,
                right: 1,
                top: 0,
                bottom: 0
            }
        },
        dog_right:
        {
            name: "dog_right",
            modes:
            [
                {
                    width: 3,
                    height: 2
                },
                {
                    width: 2,
                    height: 3
                }
            ],
            map: [[0, 0], [1, 0], [1, 1], [2, 1]],
            space:
            {
                left: 0,
                right: 0,
                top: 0,
                bottom: 1
            }
        },
        dog_left:
        {
            name: "dog_left",
            modes:
            [
                {
                    width: 3,
                    height: 2
                },
                {
                    width: 2,
                    height: 3
                }
            ],
            map: [[1, 0], [2, 0], [0, 1], [1, 1]],
            space:
            {
                left: 0,
                right: 0,
                top: 0,
                bottom: 1
            }
        },
        square:
        {
            name: "square",
            modes:
            [
                {
                    width: 2,
                    height: 2
                }
            ],
            map: [[0, 0], [1, 0], [0, 1], [1, 1]],
            space:
            {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        tee:
        {
            name: "tee",
            modes:
            [
                {
                    width: 3,
                    height: 2
                },
                {
                    width: 2,
                    height: 3
                },
                {
                    width: 3,
                    height: 2
                },
                {
                    width: 2,
                    height: 3
                }
            ],
            map: [[0, 0], [1, 0], [2, 0], [1, 1]],
            space:
            {
                left: 0,
                right: 0,
                top: 0,
                bottom: 1
            }
        }
    }

    for(let key in Tetris.pieces)
    {
        let piece = Tetris.pieces[key]
        let first_mode = piece.modes[0]
        let map = piece.map

        let padding_left = 0
        let padding_right = 0
        let padding_top = 0
        let padding_bottom = 0

        if(key === "stick")
        {
            padding_left = Tetris.block_size * piece.space.left
            padding_right = Tetris.block_size * piece.space.right
        }

        else if(key === "periscope_right")
        {
            padding_left = Tetris.block_size * piece.space.left
        }

        else if(key === "periscope_left")
        {
            padding_right = Tetris.block_size * piece.space.right
        }

        else if(key === "dog_right")
        {
            padding_bottom = Tetris.block_size * piece.space.bottom
        }

        else if(key === "dog_left")
        {
            padding_bottom = Tetris.block_size * piece.space.bottom
        }

        else if(key === "square")
        {
            // Do nothing here
        }

        else if(key === "tee")
        {
            padding_bottom = Tetris.block_size * piece.space.bottom
        }

        let width = first_mode.width * Tetris.block_size
        let height = first_mode.height * Tetris.block_size

        let piece_container_element = $("<div class='piece_container'></div>")
        piece_container_element.css("width", `${width}px`)
        piece_container_element.css("height", `${height}px`)
        piece_container_element.css("padding-left", `${padding_left}px`)
        piece_container_element.css("padding-right", `${padding_right}px`)
        piece_container_element.css("padding-top", `${padding_top}px`)
        piece_container_element.css("padding-bottom", `${padding_bottom}px`)
        piece_container_element.data("piece_type", key)

        let piece_element = $("<div class='piece'></div>")
        piece_element.css("width", `${width}px`)
        piece_element.css("height", `${height}px`)

        let width2 = first_mode.width * Tetris.element_preview_block_size
        let height2 = first_mode.height * Tetris.element_preview_block_size

        let piece_element_preview = $("<div class='piece'></div>")
        piece_element_preview.css("width", `${width2}px`)
        piece_element_preview.css("height", `${height2}px`)

        let x = 0
        let x2 = 0
        let y = 0
        let y2 = 0
        let map_n = 0
        let break_loops = false

        for(let py=0; py<first_mode.height; py++)
        {
            if(break_loops)
            {
                break
            }

            for(let px=0; px<first_mode.width; px++)
            {
                let map_x = map[map_n][0]
                let map_y = map[map_n][1]
    
                if(map_x === px && map_y === py)
                {
                    let piece_block_element = $(`<div class='piece_block piece_type_${key}'></div>`)
                    piece_block_element.css("width", `${Tetris.block_size}px`)
                    piece_block_element.css("height", `${Tetris.block_size}px`)
                    piece_block_element.css("left", x)
                    piece_block_element.css("bottom", y)

                    piece_element.append(piece_block_element)
                    
                    let piece_block_element_preview = $(`<div class='piece_block piece_type_${key}'></div>`)
                    piece_block_element_preview.css("width", `${Tetris.element_preview_block_size}px`)
                    piece_block_element_preview.css("height", `${Tetris.element_preview_block_size}px`)
                    piece_block_element_preview.css("left", x2)
                    piece_block_element_preview.css("bottom", y2)
                    
                    piece_element_preview.append(piece_block_element_preview)
                    
                    if(map_n === map.length - 1)
                    {
                        break_loops = true 
                        break
                    }
                    
                    map_n += 1
                }

                x += Tetris.block_size
                x2 += Tetris.element_preview_block_size
            }

            x = 0
            x2 = 0
            y += Tetris.block_size
            y2 += Tetris.element_preview_block_size
        }

        piece_container_element.append(piece_element)
        piece.element = piece_container_element
        piece.element_preview = piece_element_preview
    }
}

Tetris.generate_initial_pieces = function()
{
    for(let i=0; i<6; i++)
    {
        Tetris.add_next_piece()
    }
}

Tetris.add_next_piece = function()
{
    Tetris.next_pieces.push(Tetris.get_random_piece())
}

Tetris.get_random_piece = function()
{
    const n = Tetris.get_random_int(1, 7)

    let name

    if(n === 1)
    {
        name = "stick"
    }

    else if(n === 2)
    {
        name = "periscope_right"
    }

    else if(n === 3)
    {
        name = "periscope_left"
    }

    else if(n === 4)
    {
        name = "dog_right"
    }

    else if(n === 5)
    {
        name = "dog_left"
    }

    else if(n === 6)
    {
        name = "square"
    }

    else if(n === 7)
    {
        name = "tee"
    }

    return Tetris.pieces[name]
}

Tetris.place_next_piece = function()
{
    // let piece = Tetris.next_pieces.shift()
    // let piece = Tetris.pieces["square"]
    // let piece = Tetris.pieces["tee"]
    // let piece = Tetris.pieces["dog_right"]
    let piece = Tetris.pieces["stick"]
    let element = piece.element.clone(true, true)
    
    let top = (0 - (piece.modes[0].height * Tetris.block_size))
    let left = Tetris.block_size * (parseInt((Tetris.num_horizontal_blocks / 2) - (piece.modes[0].width / 2) - (piece.space.left)))
    
    element.css("top", `${top}px`)
    element.css("left", `${left}px`)
    Tetris.game.append(element)
    Tetris.current_element = element
    Tetris.current_degrees = 0
    Tetris.current_mode = 0
    Tetris.current_piece = piece
    Tetris.piece_active = true
    Tetris.pieces_delivered += 1
    Tetris.level_charge += 1
    Tetris.piece_getting_locked = false
    Tetris.doing_drop = false

    Tetris.update_piece_nodes()
    Tetris.add_next_piece()
    Tetris.update_ghost_piece()
    Tetris.start_descent_timeout()
    Tetris.update_next_pieces()

    if(Tetris.level_charge >= 10)
    {
        Tetris.increase_level()
    }
}

Tetris.rotate_piece = function(direction="right")
{
    if(!Tetris.piece_active)
    {
        return false
    }

    let original_mode = Tetris.current_mode
    let original_degrees = Tetris.current_degrees

    if(direction === "right")
    {
        Tetris.current_degrees += 90
    }
    
    else if(direction === "left")
    {
        Tetris.current_degrees -= 90
    }

    if(Math.abs(Tetris.current_degrees) >= (90 * Tetris.current_piece.modes.length))
    {
        Tetris.current_degrees = 0
    }

    let reversed_degrees = 0 - Tetris.current_degrees
    
    Tetris.current_element.css('transform', `rotate(${Tetris.current_degrees}deg)`)

    Tetris.current_mode += 1

    if(Tetris.current_mode > Tetris.current_piece.modes.length - 1)
    {
        Tetris.current_mode = 0
    }

    // Check for collisions
    let padding = Tetris.rotate_piece_object(Tetris.get_padding(Tetris.current_element[0]), Tetris.current_mode)
    let left = Math.round(Tetris.current_element.position().left) + padding.left
    let width = Tetris.current_piece.modes[Tetris.current_mode].width * Tetris.block_size
    
    // There's a collision, go back to previous state
    if(left < 0 || ((left + width) > Tetris.game_width))
    {
        Tetris.current_mode = original_mode
        Tetris.current_degrees = original_degrees
        Tetris.current_element.css('transform', `rotate(${Tetris.current_degrees}deg)`)
        return false
    }

    Tetris.current_element.find(".piece_block").each(function()
    {
        $(this).css('transform', `rotate(${reversed_degrees}deg)`)
    })

    Tetris.current_element.data("degrees", Tetris.current_degrees)

    Tetris.update_piece_nodes()
    Tetris.update_ghost_piece()
}

Tetris.on_piece_placed = async function()
{
    Tetris.piece_active = false
    Tetris.piece_getting_locked = true
    
    Tetris.lock_timeout = setTimeout(async function()
    {
        if(Tetris.ghost_piece)
        {
            Tetris.ghost_piece.remove()
        }

        for(let node of Tetris.current_nodes)
        {
            if(node[1] > Tetris.grid.length - 1)
            {
                Tetris.on_game_over()
                return false
            }
        }
        
        Tetris.stop_descent_timeout()
        Tetris.separate_blocks(Tetris.current_element)

        for(let node of Tetris.current_nodes)
        {
            let x = node[0]
            let y = node[1]

            let node2 = Tetris.grid[y][x]
            node2.used = true
            node2.element = Tetris.get_block_at_position(x, y)
        }

        await Tetris.check_lines_cleared()

        Tetris.place_next_piece()
    }, 500)
}

Tetris.cancel_piece_placed = function()
{
    clearTimeout(Tetris.lock_timeout)
    Tetris.piece_active = true
    Tetris.piece_getting_locked = false
}

Tetris.move_down = function(from="generic")
{
    Tetris.stop_descent_timeout()

    let exposed_nodes = Tetris.get_exposed_nodes(Tetris.current_element, Tetris.current_nodes)
    let finish_after_move = false
    let move = true
    let all_above = true

    for(let node of exposed_nodes)
    {
        let x = node[0]
        let y = node[1]

        if(y < Tetris.grid.length)
        {
            all_above = false
        }

        let y2 = y - 1
        let y3 = y - 2

        if(y2 < 0)
        {
            move = false
        }

        else if(y2 === 0)
        {
            let node = Tetris.grid[y2][x]
            
            if(node.used)
            {
                move = false
            }

            if(move)
            {
                finish_after_move = true
            }
        }

        else if(y2 > 0 && y2 < Tetris.grid.length)
        {
            let node = Tetris.grid[y2][x]
            
            if(node.used)
            {
                move = false
            }
        }

        if(y3 >= 0 && y3 < Tetris.grid.length)
        {
            let node = Tetris.grid[y3][x]
            
            if(node.used)
            {
                finish_after_move = true
            }
        }
    }

    if(!move && all_above)
    {
        Tetris.on_game_over()
        return false
    }

    if(move)
    {
        Tetris.start_descent_timeout()

        if(Tetris.piece_getting_locked)
        {
            Tetris.cancel_piece_placed()
        }

        else
        {
            let top = Tetris.current_element.position().top
            let new_top = top + Tetris.block_size
            Tetris.current_element.css("top", new_top)
            Tetris.update_piece_nodes()
    
            if(finish_after_move)
            {
                Tetris.on_piece_placed()
                return true
            }
        }
    }

    return false
}

Tetris.move_sideways = function(direction)
{
    let position = Tetris.current_element.position()
    let top = position.top
    let left = position.left
    let padding = Tetris.rotate_piece_object(Tetris.get_padding(Tetris.current_element[0]), Tetris.current_mode)
    let width = Tetris.current_piece.modes[Tetris.current_mode].width * Tetris.block_size

    if(direction === "left")
    {
        if(!Tetris.piece_active && !Tetris.piece_getting_locked)
        {
            return false
        }

        let new_left = Math.round(left - Tetris.block_size)

        if(new_left + padding.left < 0)
        {
            return false
        }

        Tetris.current_element.css("left", `${new_left}px`)
    }

    else if(direction === "right")
    {
        if(!Tetris.piece_active && !Tetris.piece_getting_locked)
        {
            return false
        }

        let new_left = Math.round(left + Tetris.block_size)

        if(new_left + padding.left + width > Tetris.game_width)
        {
            return false
        }

        Tetris.current_element.css("left", `${new_left}px`)
    }

    Tetris.update_piece_nodes()

    // Check for collisions
    for(let node of Tetris.current_nodes)
    {
        let x = node[0]
        let y = node[1]

        if(y > (Tetris.grid.length - 1))
        {
            continue
        }

        let node2 = Tetris.grid[y][x]

        if(node2.used)
        {
            Tetris.current_element.css("top", `${top}px`)
            Tetris.current_element.css("left", `${left}px`)
            Tetris.update_piece_nodes()
        }
    }

    Tetris.update_ghost_piece()

    if(Tetris.piece_getting_locked)
    {
        Tetris.move_down("move_sideways")
    }
}

Tetris.drop_piece = function()
{
    if(!Tetris.piece_active || Tetris.doing_drop)
    {
        return false
    }

    Tetris.do_drop_piece()
}

Tetris.do_drop_piece = function()
{
    if(Tetris.move_down("drop"))
    {
        Tetris.doing_drop = false
        return
    }

    Tetris.doing_drop = true

    Tetris.drop_piece_timeout = setTimeout(function()
    {
        Tetris.do_drop_piece()
    }, 10)
}

Tetris.update_piece_nodes = function()
{
    Tetris.current_nodes = Tetris.do_update_nodes(Tetris.current_piece, Tetris.current_element, Tetris.current_mode)
}

Tetris.update_ghost_nodes = function()
{
    Tetris.ghost_nodes = Tetris.do_update_nodes(Tetris.current_piece, Tetris.ghost_piece, Tetris.current_mode)
}

Tetris.do_update_nodes = function(piece, element, mode)
{
    let nodes = []
    let container_position = element.position()
    let container_top = Math.round(container_position.top)
    let piece_element_position = element.find(".piece").eq(0).position()
    let piece_element_top = Math.round(piece_element_position.top)
    let padding = Tetris.rotate_piece_object(Tetris.get_padding(element[0]), mode)

    element.find(".piece_block").each(function()
    {
        let position = $(this).position()
        let block_top = Math.round(position.top)
        let y

        if(container_top < 0)
        {
            y = Tetris.num_vertical_blocks - 1 + Math.round(((Math.abs(container_top) - piece_element_top - block_top) / Tetris.block_size))
        }

        else
        {
            y = Tetris.num_vertical_blocks - 1 - Math.round(Math.abs((container_top + piece_element_top + block_top) / Tetris.block_size))
        }

        let left = container_position.left + position.left + padding.left
        let x = Math.round(left) / Tetris.block_size

        nodes.push([x, y])
    })

    return nodes
}

Tetris.update_ghost_piece = function()
{
    if(Tetris.ghost_piece)
    {
        Tetris.ghost_piece.remove()
    }

    Tetris.ghost_piece = Tetris.current_element.clone()
    Tetris.ghost_piece.addClass("ghost")
    Tetris.game.append(Tetris.ghost_piece)
    Tetris.update_ghost_nodes()

    let keep_going = true
    
    for(let i=0; i<Tetris.num_vertical_blocks * 2; i++)
    {
        let exposed_nodes = Tetris.get_exposed_nodes(Tetris.ghost_piece, Tetris.ghost_nodes)

        for(let node of exposed_nodes)
        {
            let x = node[0]
            let y = node[1]
            let y2 = y - 1

            if(y2 < 0)
            {
                keep_going = false
                break
            }
    
            if(y2 > Tetris.grid.length - 1)
            {
                break
            }
    
            let node2 = Tetris.grid[y2][x]
                
            if(node2.used)
            {
                keep_going = false
                break
            }
        }

        if(!keep_going)
        {
            break
        }
    
        Tetris.ghost_piece.css("top", Tetris.ghost_piece.position().top + Tetris.block_size)
        Tetris.update_ghost_nodes()
    }
}

Tetris.check_lines_cleared = async function()
{
    let num_lines_cleared = 0

    for(let row of Tetris.grid)
    {
        let cleared = true

        for(let node of row)
        {
            if(!node.used)
            {
                cleared = false
                break
            }
        }

        if(cleared)
        {
            num_lines_cleared += 1
            await Tetris.clear_line(row)
            console.info("Line cleared")
        }
    }

    if(num_lines_cleared > 0)
    {
        Tetris.check_empty_lines()

        let multiplier

        if(num_lines_cleared === 1)
        {
            multiplier = 100
        }

        if(num_lines_cleared === 2)
        {
            multiplier = 300
        }

        if(num_lines_cleared === 3)
        {
            multiplier = 300
        }

        if(num_lines_cleared >= 4)
        {
            multiplier = 800
        }

        let score = multiplier * Tetris.level

        Tetris.add_score(score)
    }

    return new Promise(async (resolve, reject) =>
    {
        resolve()
    })
}

Tetris.clear_line = async function(row)
{
    return new Promise(async (resolve, reject) =>
    {
        for(let node of row)
        {
            $(node.element).addClass("cleared_block")
            
            await async_timeout(function()
            {
                $(node.element).remove()
            }, 25)
            
            node.used = false
            node.element = undefined
        }

        resolve()
    })
}

Tetris.separate_blocks = function(element)
{
    element.find(".piece_block").each(function()
    {
        let position = $(this).position()
        let container = $(this).closest(".piece_container")
        let piece_container_position = container.position()
        let piece_element_position = $(this).closest(".piece").position()
        let top2 = piece_container_position.top + piece_element_position.top + position.top
        let left2 = piece_container_position.left + piece_element_position.left + position.left

        let block = $(this).clone()
        block.css('transform', `rotate(${0}deg)`)
        block.css("top", `${top2}px`)
        block.css("left", `${left2}px`)
        block.addClass("placed_block")

        Tetris.game.append(block)
    })

    element.remove()
}

Tetris.get_block_at_position = function(x, y)
{
    let half_block = Tetris.block_size / 2
    let top = Tetris.game_height - ((1 + y) * Tetris.block_size) + half_block
    let left = 0 + ((1 + x) * Tetris.block_size) - half_block
    let found = false

    $(".piece_block.placed_block").each(function()
    {
        if($(this).hasClass("cleared_block"))
        {
            return true
        }

        let position = $(this).position()
        let top2 = Math.round(position.top)
        let left2 = Math.round(position.left)

        if(top2 < top && ((top2 + Tetris.block_size) > top))
        {
            if(left2 < left && ((left2 + Tetris.block_size) > left))
            {
                found = this
                return false
            }
        }
    })

    return found
}

Tetris.check_empty_lines = function(row)
{
    let blocks_above = false

    for(let i=Tetris.grid.length-1; i>=0; i--)
    {
        let row = Tetris.grid[i]
        let empty = true

        for(let i2=0; i2<row.length; i2++)
        {
            let node = row[i2]

            if(node.used)
            {
                empty = false
                break
            }
        }

        if(!empty)
        {
            blocks_above = true
        }
    }

    if(blocks_above)
    {
        Tetris.make_blocks_fall()
    }

    return true
}

Tetris.make_blocks_fall = function()
{
    console.info("Making blocks fall")
    for(let row of Tetris.grid)
    {
        for(let node of row)
        {
            if(node.element)
            {
                Tetris.drop_placed_block($(node.element))
            }
        }
    }

    Tetris.refresh_grid_nodes()
}

Tetris.refresh_grid_nodes = function()
{
    for(let y=0; y<Tetris.grid.length; y++)
    {
        let row = Tetris.grid[y]

        for(let x=0; x<row.length; x++)
        {
            let node = row[x]
            Tetris.set_grid_node_to_defaults(node)
            let element = Tetris.get_block_at_position(x, y)

            if(element)
            {
                node.used = true
                node.element = element
            }
        }
    }
}

Tetris.get_placed_block_node = function(element)
{
    let position = element.position()
    let top = Math.round(position.top)
    let left = Math.round(position.left)
    let x = Math.round(left / Tetris.block_size)
    let y = Tetris.num_vertical_blocks - Math.round(top / Tetris.block_size) - 1

    return [x, y]
}

Tetris.drop_placed_block = function(element)
{
    for(let i=0; i<Tetris.grid.length; i++)
    {
        let position = element.position()
        let top = position.top
        let left = position.left
        let x = Math.round(Math.round(left) / Tetris.block_size)
        let y = Tetris.num_vertical_blocks - Math.round(Math.round(top) / Tetris.block_size) - 1
        let y2 = y - 1

        if(y === 0)
        {
            break
        }

        let block = Tetris.get_block_at_position(x, y2)

        if(block)
        {
            break
        }
        
        let new_top = top + Tetris.block_size
        element.css("top", new_top)
    }
}

Tetris.update_next_pieces = function()
{
    let i = 0
    
    $("#next_pieces .next_piece_element").each(function()
    {
        let piece = Tetris.next_pieces[i]
        let element = piece.element_preview.clone()
        $(this).html(element)
        i += 1
    })
}