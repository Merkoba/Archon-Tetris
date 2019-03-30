Tetris.element_preview_block_size = 15
Tetris.element_preview_block_size_2 = 10
Tetris.element_wheel_preview_block_size = 40
Tetris.placed_element_data = {}
Tetris.piece_picker_time = 3000
Tetris.min_descent_delay = 100
Tetris.placed_id = 1
// Tetris.debug_queue = ["stick_2", "periscope_right_2", "periscope_left_2", "dog_right_2", "dog_left_2", "square_2", "tee_2"]
Tetris.debug_queue = []

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
        stick_2:
        {
            name: "stick_2",
            modes:
            [
                {
                    width: 1,
                    height: 8
                },
                {
                    width: 8,
                    height: 1
                }
            ],
            map: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
            space:
            {
                left: 3,
                right: 4,
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
        periscope_right_2:
        {
            name: "periscope_right_2",
            modes:
            [
                {
                    width: 4,
                    height: 5
                },
                {
                    width: 5,
                    height: 4
                },
                {
                    width: 4,
                    height: 5,
                },
                {
                    width: 5,
                    height: 4
                }
            ],
            map: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
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
        periscope_left_2:
        {
            name: "periscope_left_2",
            modes:
            [
                {
                    width: 4,
                    height: 5
                },
                {
                    width: 5,
                    height: 4
                },
                {
                    width: 4,
                    height: 5,
                },
                {
                    width: 5,
                    height: 4
                }
            ],
            map: [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4]],
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
        dog_right_2:
        {
            name: "dog_right_2",
            modes:
            [
                {
                    width: 5,
                    height: 4
                },
                {
                    width: 4,
                    height: 5
                }
            ],
            map: [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [3, 3], [4, 3]],
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
        dog_left_2:
        {
            name: "dog_left_2",
            modes:
            [
                {
                    width: 5,
                    height: 4
                },
                {
                    width: 4,
                    height: 5
                }
            ],
            map: [[2, 0], [3, 0], [4, 0], [2, 1], [2, 2], [0, 3], [1, 3], [2, 3]],
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
        square_2:
        {
            name: "square_2",
            modes:
            [
                {
                    width: 2,
                    height: 4
                },
                {
                    width: 4,
                    height: 2
                }
            ],
            map: [[0, 0], [1,0], [0, 1], [1, 1], [0, 2], [1, 2], [0, 3], [1, 3]],
            space:
            {
                left: 1,
                right: 1,
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
        },
        tee_2:
        {
            name: "tee_2",
            modes:
            [
                {
                    width: 5,
                    height: 4
                },
                {
                    width: 4,
                    height: 5
                },
                {
                    width: 5,
                    height: 4
                },
                {
                    width: 4,
                    height: 5
                }
            ],
            map: [[2, 0], [2, 1], [2, 2], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3]],
            space:
            {
                left: 0,
                right: 0,
                top: 0,
                bottom: 1
            }
        }
    }

    Tetris.pieces_list = []
    Tetris.big_pieces_list = []
    Tetris.full_pieces_list = []

    for(let key in Tetris.pieces)
    {
        Tetris.full_pieces_list.push(key)

        if(key.includes("_2"))
        {
            Tetris.big_pieces_list.push(key)
            preview_block_size = Tetris.element_preview_block_size_2
        }
        
        else
        {
            Tetris.pieces_list.push(key)
            preview_block_size = Tetris.element_preview_block_size
        }

        let piece = Tetris.pieces[key]
        let first_mode = piece.modes[0]
        let map = piece.map

        let padding_left = piece.space.left * Tetris.block_size
        let padding_right = piece.space.right * Tetris.block_size
        let padding_top = piece.space.top * Tetris.block_size
        let padding_bottom = piece.space.bottom * Tetris.block_size

        let width = first_mode.width * Tetris.block_size
        let height = first_mode.height * Tetris.block_size

        let piece_container_element = $("<div class='piece_container'></div>")
        piece_container_element.css("width", `${width}px`)
        piece_container_element.css("height", `${height}px`)
        piece_container_element.css("padding-left", `${padding_left}px`)
        piece_container_element.css("padding-right", `${padding_right}px`)
        piece_container_element.css("padding-top", `${padding_top}px`)
        piece_container_element.css("padding-bottom", `${padding_bottom}px`)

        let piece_element = $("<div class='piece'></div>")
        piece_element.css("width", `${width}px`)
        piece_element.css("height", `${height}px`)

        let width2 = first_mode.width * preview_block_size
        let height2 = first_mode.height * preview_block_size

        let piece_element_preview = $("<div class='piece'></div>")
        piece_element_preview.css("width", `${width2}px`)
        piece_element_preview.css("height", `${height2}px`)

        let width3 = first_mode.width * Tetris.element_wheel_preview_block_size
        let height3 = first_mode.height * Tetris.element_wheel_preview_block_size

        let piece_element_wheel_preview = $("<div class='piece'></div>")
        piece_element_wheel_preview.css("width", `${width3}px`)
        piece_element_wheel_preview.css("height", `${height3}px`)

        let x = 0
        let x2 = 0
        let x3 = 0
        let y = 0
        let y2 = 0
        let y3 = 0
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
                    piece_block_element_preview.css("width", `${preview_block_size}px`)
                    piece_block_element_preview.css("height", `${preview_block_size}px`)
                    piece_block_element_preview.css("left", x2)
                    piece_block_element_preview.css("bottom", y2)
                    
                    piece_element_preview.append(piece_block_element_preview)

                    let piece_block_element_wheel_preview = $(`<div class='piece_block piece_type_${key}'></div>`)
                    piece_block_element_wheel_preview.css("width", `${Tetris.element_wheel_preview_block_size}px`)
                    piece_block_element_wheel_preview.css("height", `${Tetris.element_wheel_preview_block_size}px`)
                    piece_block_element_wheel_preview.css("left", x3)
                    piece_block_element_wheel_preview.css("bottom", y3)
                    
                    piece_element_wheel_preview.append(piece_block_element_wheel_preview)
                    
                    if(map_n === map.length - 1)
                    {
                        break_loops = true 
                        break
                    }
                    
                    map_n += 1
                }

                x += Tetris.block_size
                x2 += preview_block_size
                x3 += Tetris.element_wheel_preview_block_size
            }

            x = 0
            x2 = 0
            x3 = 0
            y += Tetris.block_size
            y2 += preview_block_size
            y3 += Tetris.element_wheel_preview_block_size
        }

        piece_container_element.append(piece_element)
        piece.element = piece_container_element
        piece.element_preview = piece_element_preview
        piece.element_wheel_preview = piece_element_wheel_preview
    }
}

Tetris.get_random_piece = function()
{
    let n = Tetris.get_random_int(1, Tetris.pieces_list.length)

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

Tetris.get_random_big_piece = function()
{
    let n = Tetris.get_random_int(1, Tetris.big_pieces_list.length)

    let name

    if(n === 1)
    {
        name = "stick_2"
    }

    else if(n === 2)
    {
        name = "periscope_right_2"
    }

    else if(n === 3)
    {
        name = "periscope_left_2"
    }

    else if(n === 4)
    {
        name = "dog_right_2"
    }

    else if(n === 5)
    {
        name = "dog_left_2"
    }

    else if(n === 6)
    {
        name = "square_2"
    }

    else if(n === 7)
    {
        name = "tee_2"
    }

    return Tetris.pieces[name]
}

Tetris.place_next_piece = function(piece_name=false)
{
    if(!Tetris.game_started)
    {
        return false
    }

    if(Tetris.show_piece_picker_next)
    {
        Tetris.show_piece_picker_next = false
        Tetris.show_piece_picker()
        return false
    }

    let piece

    if(Tetris.debug_queue.length > 0)
    {
        piece = Tetris.pieces[Tetris.debug_queue.shift()]
    }

    else if(Tetris.queued_left > 0)
    {
        piece = Tetris.pieces[Tetris.queued_piece]
        Tetris.queued_left -= 1

        if(Tetris.queued_left > 0)
        {
            $("#queued_left").text(Tetris.queued_left)
        }
        
        else
        {
            $("#queued_left").text("")
        }
    }

    else if(Tetris.big_piece_next)
    {
        Tetris.big_piece_next = false
        piece = Tetris.get_random_big_piece()
    }

    else if(!piece_name)
    {
        if(Tetris.previews.length > 0)
        {
            piece = Tetris.previews.shift()
        }
    
        else
        {
            piece = Tetris.get_random_piece()
        }
    }

    else
    {
        piece = Tetris.pieces[piece_name]
    }

    // piece = Tetris.pieces["stick"]
    // piece = Tetris.pieces["stick_2"]
    // piece = Tetris.pieces["periscope_right"]
    // piece = Tetris.pieces["periscope_right_2"]
    // piece = Tetris.pieces["periscope_left"]
    // piece = Tetris.pieces["periscope_left_2"]
    // piece = Tetris.pieces["dog_right"]
    // piece = Tetris.pieces["dog_right_2"]
    // piece = Tetris.pieces["dog_left"]
    // piece = Tetris.pieces["dog_left_2"]
    // piece = Tetris.pieces["square"]
    // piece = Tetris.pieces["square_2"]
    // piece = Tetris.pieces["tee"]
    // piece = Tetris.pieces["tee_2"]

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
    Tetris.piece_getting_locked = false
    Tetris.doing_drop = false

    Tetris.update_piece_nodes()
    Tetris.add_preview()
    Tetris.update_ghost_piece()
    Tetris.start_descent_timeout()
    Tetris.update_previews()
}

Tetris.rotate_piece = function(direction="right")
{
    if(!Tetris.piece_active && !Tetris.piece_getting_locked)
    {
        return false
    }

    let original_mode = Tetris.current_mode
    let original_degrees = Tetris.current_degrees

    if(direction === "right")
    {
        Tetris.current_mode += 1

        if(Tetris.current_mode >= Tetris.current_piece.modes.length)
        {
            Tetris.current_mode = 0
        }
    }
    
    else if(direction === "left")
    {
        Tetris.current_mode -= 1

        if(Tetris.current_mode < 0)
        {
            Tetris.current_mode = Tetris.current_piece.modes.length - 1
        }
    }
    
    Tetris.current_degrees = Tetris.current_mode * 90

    if(Tetris.current_degrees >= (90 * Tetris.current_piece.modes.length))
    {
        Tetris.current_degrees = 0
        Tetris.current_mode = 0
    }

    let reversed_degrees = 0 - Tetris.current_degrees
    
    Tetris.current_element.css('transform', `rotate(${Tetris.current_degrees}deg)`)

    Tetris.update_piece_nodes()

    let rollback = false
    let edge

    // Check for collisions
    for(let node of Tetris.current_nodes)
    {
        let x = node[0]
        let y = node[1]

        if(x < 0 || y < 0)
        {
            rollback = true
            edge = "left"
        }

        if(x >= Tetris.num_horizontal_blocks)
        {
            rollback = true
            edge = "right"
        }

        if(Tetris.grid[y] && Tetris.grid[y][x])
        {
            let node2 = Tetris.grid[y][x]
    
            if(node2.used)
            {
                rollback = true
                edge = "none"
                break
            }
        }
    }

    if(rollback)
    {
        Tetris.current_degrees = original_degrees
        Tetris.current_mode = original_mode
        Tetris.current_element.css('transform', `rotate(${Tetris.current_degrees}deg)`)
        Tetris.update_piece_nodes()
        
        if(edge === "left")
        {
            if(Tetris.move_sideways("right", false))
            {
                Tetris.rotate_piece(direction)
                return false
            }
        }
        
        else if(edge === "right")
        {
            if(Tetris.move_sideways("left", false))
            {
                Tetris.rotate_piece(direction)
                return false
            }
        }
        
        Tetris.play_sound("tone_1")
        return false
    }

    Tetris.current_element.find(".piece_block").each(function()
    {
        $(this).css('transform', `rotate(${reversed_degrees}deg)`)
    })

    Tetris.update_piece_nodes()
    Tetris.update_ghost_piece()

    Tetris.play_sound("rotate")

    if(Tetris.piece_getting_locked)
    {
        Tetris.move_down("rotate")
    }
}

Tetris.on_piece_placed = function()
{
    Tetris.piece_active = false
    Tetris.piece_getting_locked = true
    
    Tetris.lock_timeout = setTimeout(function()
    {
        Tetris.stop_descent_timeout()
        Tetris.piece_getting_locked = false

        if(Tetris.ghost_piece)
        {
            Tetris.ghost_piece.remove()
        }
        
        for(let node of Tetris.current_nodes)
        {
            if(node[1] >= Tetris.grid.length)
            {
                Tetris.on_game_over()
                return false
            }
        }

        Tetris.prepare_placed_piece(Tetris.current_element, Tetris.current_mode)

        if(Tetris.pow_active)
        {
            Tetris.separate_all_blocks()
            Tetris.make_pieces_fall()
            Tetris.pow_active = false
        }

        let num_cleared = Tetris.check_lines_cleared()

        if(num_cleared === 0)
        {
            Tetris.play_sound("locked")
        }

        if(Tetris.combo > 0)
        {
            let score = 50 * Tetris.combo * Tetris.level
            Tetris.add_score(score)
        }

        if(!Tetris.debug)
        {
            Tetris.place_next_piece()
        }
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
    if((!Tetris.piece_active && !Tetris.piece_getting_locked) || Tetris.game_paused)
    {
        return false
    }

    Tetris.stop_descent_timeout()

    let exposed_nodes = Tetris.get_exposed_nodes(Tetris.current_nodes)
    let finish_after_move = false
    let move = true

    for(let node of exposed_nodes)
    {
        let x = node[0]
        let y = node[1]
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

    if(move)
    {
        if(from === "drop")
        {
            Tetris.add_score(2)
        }
        
        else
        {
            Tetris.add_score(1)
        }

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
                Tetris.play_sound("placed")
                Tetris.on_piece_placed()
                return true
            }

            else
            {
                if(from === "keyboard")
                {
                    Tetris.play_sound("move")
                }
            }
        }
    }

    else
    {
        if(!Tetris.piece_getting_locked)
        {
            Tetris.on_piece_placed()
        }
    }

    return false
}

Tetris.move_sideways = function(direction, play_sound=true)
{
    if(!Tetris.piece_active && !Tetris.piece_getting_locked)
    {
        return false
    }

    let position = Tetris.current_element.position()
    let top = position.top
    let left = position.left
    let padding = Tetris.rotate_piece_object(Tetris.get_padding(Tetris.current_element[0]), Tetris.current_mode)
    let width = Tetris.current_piece.modes[Tetris.current_mode].width * Tetris.block_size
    let move = true
    let new_left

    if(!Tetris.piece_active && !Tetris.piece_getting_locked)
    {
        return false
    }

    if(direction === "left")
    {
        new_left = Math.round(left - Tetris.block_size)

        if(new_left + padding.left < 0)
        {
            move = false
        }
    }

    else if(direction === "right")
    {
        new_left = Math.round(left + Tetris.block_size)

        if(new_left + padding.left + width > Tetris.game_width)
        {
            move = false
        }
    }

    if(move)
    {
        Tetris.current_element.css("left", `${new_left}px`)
    }

    else
    {
        if(play_sound)
        {
            Tetris.play_sound("tone_1")
        }

        return false
    }
    
    Tetris.update_piece_nodes()

    let rollback = false

    // Check for collisions
    for(let node of Tetris.current_nodes)
    {
        let x = node[0]
        let y = node[1]

        if(y >= Tetris.num_vertical_blocks)
        {
            continue
        }

        let node2 = Tetris.grid[y][x]

        if(node2.used)
        {
            rollback = true
            break
        }
    }

    if(rollback)
    {
        Tetris.current_element.css("top", `${top}px`)
        Tetris.current_element.css("left", `${left}px`)
        Tetris.update_piece_nodes()
        Tetris.play_sound("tone_1")
        return false
    }

    Tetris.update_ghost_piece()

    if(play_sound)
    {
        Tetris.play_sound("move")
    }

    if(Tetris.piece_getting_locked)
    {
        Tetris.move_down("move_sideways")
    }

    return true
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

Tetris.stop_drop_piece_timeout = function()
{
    clearTimeout(Tetris.drop_piece_timeout)
}

Tetris.update_piece_nodes = function()
{
    Tetris.current_nodes = Tetris.do_update_nodes(Tetris.current_element, Tetris.current_mode)
}

Tetris.update_ghost_nodes = function()
{
    Tetris.ghost_nodes = Tetris.do_update_nodes(Tetris.ghost_piece, Tetris.current_mode)
}

Tetris.do_update_nodes = function(element, mode)
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
    if(!Tetris.options.enable_ghost)
    {
        return false
    }

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
        let exposed_nodes = Tetris.get_exposed_nodes(Tetris.ghost_nodes)

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

Tetris.check_lines_cleared = function()
{
    let num_cleared = Tetris.do_check_lines_cleared()
    let empty_lines = Tetris.count_empty_lines()

    if(num_cleared > 0)
    {
        Tetris.calculate_clear_score(num_cleared)
        Tetris.charge_level(num_cleared)
        Tetris.charge_pow(num_cleared)
        Tetris.charge_combo()
        Tetris.lines_cleared += num_cleared

        if(num_cleared === 1)
        {
            console.info("1 line cleared")
        }
    
        else
        {
            console.info(`${num_cleared} lines cleared`)
        }

        if(num_cleared > 4)
        {
            Tetris.show_piece_picker_next = true
        }
        
        let delay = 0

        for(let i=0; i<num_cleared; i++)
        {
            setTimeout(function()
            {
                Tetris.play_sound("clear")
            }, delay)
            
            delay += 200
        }
    }

    else
    {
        Tetris.reset_combo()
    }

    if(num_cleared > 0 && empty_lines === Tetris.grid.length)
    {
        Tetris.big_piece_next = true
    }

    return num_cleared
}

Tetris.do_check_lines_cleared = function(num_cleared=0)
{
    let num_lines_cleared = 0

    for(let y=0; y<Tetris.grid.length; y++)
    {
        let row = Tetris.grid[y]

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
            Tetris.clear_line(y)
        }
    }

    if(num_lines_cleared > 0)
    {
        if(Tetris.make_pieces_fall())
        {
            return Tetris.do_check_lines_cleared(num_cleared + num_lines_cleared)
        }
    }
    
    return num_cleared + num_lines_cleared
}

Tetris.clear_line = function(y)
{
    for(let x=0; x<Tetris.grid[y].length; x++)
    {
        let block = Tetris.grid[y][x].element

        if(!block)
        {
            continue
        }
        
        let container = $(block).closest(".piece_container")

        if(container.length > 0)
        {
            Tetris.separate_blocks(container)
            block = Tetris.grid[y][x].element
        }
        
        $(block).addClass("cleared_piece")

        setTimeout(function()
        {
            $(block).remove()
        }, 250)
        
        Tetris.placed_element_data[$(block).attr("id")] = undefined
        Tetris.set_grid_node_to_defaults(Tetris.grid[y][x])
    }
}

Tetris.make_pieces_fall = function(iterations=0)
{
    let any_moved = false

    for(let y=0; y<Tetris.grid.length; y++)
    {
        for(let x=0; x<Tetris.grid[y].length; x++)
        {
            if(!Tetris.grid[y][x].used)
            {
                continue
            }

            let block = Tetris.grid[y][x].element

            if(!block)
            {
                continue
            }

            let element
            let container = $(block).closest(".piece_container")

            if(container.length > 0)
            {
                element = container
            }

            else
            {
                element = block
            }

            let id = $(element).attr("id")
            let data = Tetris.placed_element_data[id]
            let original_nodes = false
            let moved = false

            for(let i=0; i<Tetris.grid.length; i++)
            {
                if(!original_nodes)
                {
                    original_nodes = data.nodes
                }

                let move = true
                let exposed_nodes = Tetris.get_exposed_nodes(data.nodes)

                for(let node of exposed_nodes)
                {
                    let x = node[0]
                    let y = node[1]
                    let y2 = y - 1
                
                    if(y === 0)
                    {
                        move = false
                    }
    
                    else
                    {
                        let node2 = Tetris.grid[y2][x]
        
                        if(node2.used)
                        {
                            move = false
                        }
                    }
                }

                if(move)
                {
                    let new_top = Tetris.get_position_data(element).top + Tetris.block_size
                    data.nodes = Tetris.descend_nodes(data.nodes)
                    data.top = new_top
                    moved = true
                }
                
                else
                {
                    if(moved)
                    {
                        $(element).css("top")
                        $(element).css("top", `${data.top}px`)
                        
                        let elements = []
                        
                        for(let node of original_nodes)
                        {
                            let x = node[0]
                            let y = node[1]
                            let original_node = Tetris.grid[y][x]
                            
                            elements.push(original_node.element)
                            Tetris.set_grid_node_to_defaults(original_node)
                        }
                        
                        for(let i=0; i<data.nodes.length; i++)
                        {
                            let node = data.nodes[i]
                            let x = node[0]
                            let y = node[1]
                            let new_node = Tetris.grid[y][x]
                            
                            new_node.used = true
                            new_node.element = elements[i]
                        }
                        
                        any_moved = true
                    }
                    
                    break
                }
            }
        }
    }
    
    if(any_moved)
    {
        return Tetris.make_pieces_fall(iterations + 1)
    }

    return iterations > 0
}

Tetris.count_empty_lines = function()
{
    let num_empty = 0

    for(let row of Tetris.grid)
    {
        let is_empty = true

        for(let item of row)
        {
            if(item.used)
            {
                is_empty = false
                break
            }
        }

        if(is_empty)
        {
            num_empty += 1
        }
    }

    return num_empty
}

Tetris.prepare_placed_piece = function(element, mode)
{
    let id = `placed_${Tetris.placed_id}`
    Tetris.placed_id += 1

    element.attr("id", id)
    element.addClass("placed_piece")
    element.addClass("placed_main")
    
    Tetris.placed_element_data[id] = {}
    let data = Tetris.placed_element_data[id]
    data.mode = mode
    data.top = element.position().top
    data.left = element.position().left
    
    let nodes = []
    
    element.find(".piece_block").each(function()
    {
        $(this).removeClass("pow_active")
        $(this).addClass("placed_block")
        
        let position = Tetris.get_placed_block_position(this)
        let node = Tetris.get_node_by_position(position)
        let x = node[0]
        let y = node[1]
        
        nodes.push(node)
        
        Tetris.grid[y][x].used = true
        Tetris.grid[y][x].element = this
    })
    
    data.nodes = nodes
}

Tetris.separate_blocks = function(element)
{
    let container_id = $(element).attr("id")
    let container_data = Tetris.placed_element_data[container_id]

    $(element).find(".piece_block").each(function()
    {
        let id = `placed_${Tetris.placed_id}`
        Tetris.placed_id += 1

        let position = $(this).position()
        let piece_element_position = $(this).closest(".piece").position()
        let top = container_data.top + piece_element_position.top + position.top
        let left = container_data.left + piece_element_position.left + position.left

        let block = $(this).clone()
        block.attr("id", id)
        block.addClass("placed_main")
        block.css('transform', `rotate(${0}deg)`)
        block.css("top", `${top}px`)
        block.css("left", `${left}px`)
        
        let position2 = {top:Math.round(top), left:Math.round(left)}
        let node = Tetris.get_node_by_position(position2)
        let x = node[0]
        let y = node[1]

        Tetris.placed_element_data[id] = {}
        let data = Tetris.placed_element_data[id]
        data.nodes = [node]
        data.top = top
        data.left = left

        Tetris.grid[y][x].used = true
        Tetris.grid[y][x].element = block[0]

        Tetris.game.append(block)
    })

    Tetris.placed_element_data[container_id] = undefined
    $(element).remove()
}

Tetris.separate_all_blocks = function()
{
    if($(".placed_piece").length > 0)
    {
        $(".placed_piece").each(function()
        {
            Tetris.separate_blocks(this)
        })
    }
}

Tetris.get_placed_block_position = function(block)
{
    let position = {}
    let container = $(block).closest(".piece_container")
        
    if(container.length > 0)
    {
        let container_position = Tetris.get_position_data(container)
        let piece = container.find(".piece").eq(0)
        let piece_position = piece.position()
        let block_position = $(block).position()
        position.top = Math.round(container_position.top + piece_position.top + block_position.top)
        position.left = Math.round(container_position.left + piece_position.left + block_position.left)
    }
        
    else
    {
        let pos = Tetris.get_position_data(block)
        position.top = Math.round(pos.top)
        position.left = Math.round(pos.left)
    }

    return position
}

Tetris.get_node_by_position = function(position)
{
    let y = Tetris.num_vertical_blocks - (position.top / Tetris.block_size) - 1
    let x = position.left / Tetris.block_size
    return [x, y]
}

Tetris.calculate_clear_score = function(num_cleared)
{
    let multiplier

    if(num_cleared === 1)
    {
        multiplier = 100
    }

    if(num_cleared === 2)
    {
        multiplier = 300
    }

    if(num_cleared === 3)
    {
        multiplier = 300
    }

    if(num_cleared >= 4)
    {
        multiplier = 800
    }

    let score = multiplier * Tetris.level

    Tetris.add_score(score)
}

Tetris.add_preview = function()
{
    if(Tetris.options.number_of_previews > 0)
    {
        Tetris.previews.push(Tetris.get_random_piece())
    }
}

Tetris.setup_previews = function()
{
    let length = Tetris.previews.length

    if(length < Tetris.options.number_of_previews)
    {
        let n = Tetris.options.number_of_previews - length
    
        for(let i=0; i<n; i++)
        {
            Tetris.add_preview()
        }
    }

    else if(length > Tetris.options.number_of_previews)
    {
        Tetris.previews = Tetris.previews.slice(0, Tetris.options.number_of_previews)
    }

    $("#previews").html("")

    let s = "<div class='preview'><div class='preview_element'></div></div>"

    for(let i=0; i<Tetris.options.number_of_previews; i++)
    {
        let html = $(s)
        $("#previews").append(html)
    }

    Tetris.update_previews()
}

Tetris.update_previews = function()
{
    let i = 0
    
    $("#previews .preview_element").each(function()
    {
        let piece = Tetris.previews[i]
        let element = piece.element_preview.clone()
        $(this).html(element)
        i += 1
    })

    if(Tetris.current_piece)
    {
        let element = Tetris.current_piece.element_preview.clone()
        $("#active_piece_element").html(element)
    }
}

Tetris.descend_nodes = function(nodes, amount=1)
{
    let new_nodes = []

    for(let node of nodes)
    {
        new_nodes.push([node[0], node[1] - amount])
    }

    return new_nodes
}

Tetris.fill = async function()
{
    let delay = 1000

    for(let i=0; i<8; i++)
    {
        Tetris.place_next_piece("stick")
        Tetris.rotate_piece("right")
        Tetris.move_sideways("left")
        Tetris.move_sideways("left")
        Tetris.move_sideways("left")
        Tetris.drop_piece()
    
        await Tetris.async_timeout(function()
        {
    
        }, delay)
    }

    for(let i=0; i<8; i++)
    {
        Tetris.place_next_piece("stick")
        Tetris.rotate_piece("right")
        Tetris.move_sideways("right")
        Tetris.drop_piece()
    
        await Tetris.async_timeout(function()
        {
    
        }, delay)
    }

    for(let i=0; i<2; i++)
    {
        Tetris.place_next_piece("stick")
        Tetris.move_sideways("right")
        Tetris.move_sideways("right")
        Tetris.move_sideways("right")
        Tetris.move_sideways("right")
        Tetris.drop_piece()
    
        await Tetris.async_timeout(function()
        {
    
        }, delay)
    }

    for(let i=0; i<2; i++)
    {
        Tetris.place_next_piece("stick")
        Tetris.move_sideways("right")
        Tetris.move_sideways("right")
        Tetris.move_sideways("right")
        Tetris.move_sideways("right")
        Tetris.move_sideways("right")
        Tetris.drop_piece()
    
        await Tetris.async_timeout(function()
        {
    
        }, delay * 2)
    }
}

Tetris.get_descent_delay = function()
{
    let delay = 1000 - ((Tetris.level - 1) * 10)

    if(delay < Tetris.min_descent_delay)
    {
        delay = Tetris.min_descent_delay
    }

    return delay
}

Tetris.start_descent_timeout = function()
{
    clearTimeout(Tetris.descent_timeout)

    Tetris.piece_descent_delay = Tetris.get_descent_delay()

    Tetris.descent_timeout = setTimeout(function()
    {
        Tetris.move_down("descent_timeout")
    }, Tetris.piece_descent_delay)

    Tetris.descent_timeout_active = true
}

Tetris.stop_descent_timeout = function()
{
    clearTimeout(Tetris.descent_timeout)
    Tetris.descent_timeout_active = false
}

Tetris.show_piece_picker = function()
{
    Tetris.current_piece_picker_wheel_item = 0
    Tetris.show_piece_picker_wheel_item()
    $("#piece_picker").css("display", "block")
    Tetris.piece_picker_active = true

    Tetris.piece_picker_timeout = setTimeout(function()
    {
        Tetris.submit_piece_picker()
    }, Tetris.piece_picker_time)
}

Tetris.hide_piece_picker = function()
{
    $("#piece_picker").css("display", "none")
    Tetris.piece_picker_active = false
    Tetris.place_next_piece()
}

Tetris.submit_piece_picker = function()
{
    clearTimeout(Tetris.piece_picker_timeout)
    let name = Tetris.pieces_list[Tetris.current_piece_picker_wheel_item]
    Tetris.queued_piece = name
    Tetris.queued_left = 4
    $("#queued_left").text(Tetris.queued_left)
    Tetris.hide_piece_picker()
}

Tetris.show_piece_picker_wheel_item = function()
{
    let name = Tetris.pieces_list[Tetris.current_piece_picker_wheel_item]
    let piece = Tetris.pieces[name]
    let item = $(`<div class='piece_picker_wheel_item' id='piece_picker_wheel_${piece.name}'></div>`)
    item.html(piece.element_wheel_preview.clone())
    $("#piece_picker_wheel_content").html(item)
}

Tetris.show_next_piece_picker_wheel_item = function()
{
    Tetris.current_piece_picker_wheel_item -= 1

    if(Tetris.current_piece_picker_wheel_item < 0)
    {
        Tetris.current_piece_picker_wheel_item = Tetris.pieces_list.length - 1
    }

    Tetris.show_piece_picker_wheel_item()
}

Tetris.show_previous_piece_picker_wheel_item = function()
{
    Tetris.current_piece_picker_wheel_item += 1

    if(Tetris.current_piece_picker_wheel_item > Tetris.pieces_list.length - 1)
    {
        Tetris.current_piece_picker_wheel_item = 0
    }

    Tetris.show_piece_picker_wheel_item()
}