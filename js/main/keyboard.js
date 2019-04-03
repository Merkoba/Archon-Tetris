Tetris.move_left_pressed = false
Tetris.move_right_pressed = false
Tetris.move_down_pressed = false

Tetris.start_key_detection = function()
{
    document.addEventListener('keydown', (e) =>
    {
        if(Tetris.piece_picker_active)
        {
            if(e.key === Tetris.controls.piece_picker_next)
            {
                Tetris.show_next_piece_picker_wheel_item()
                e.preventDefault()
                return false
            }
            
            else if(e.key === Tetris.controls.piece_picker_previous)
            {
                Tetris.show_previous_piece_picker_wheel_item()
                e.preventDefault()
                return false
            }

            else if(e.key === Tetris.controls.piece_picker_select)
            {
                Tetris.submit_piece_picker()
                e.preventDefault()
                return false
            }

            return false
        }

        if(Tetris.game_started && !Tetris.modal_open)
        {
            if(e.key === Tetris.controls.rotate_right)
            {
                Tetris.rotate_piece("right")
                e.preventDefault()
                return false
            }
     
            else if(e.key === Tetris.controls.rotate_left)
            {
                Tetris.rotate_piece("left")
                e.preventDefault()
                return false
            }

            else if(e.key === Tetris.controls.activate_pow)
            {
                Tetris.activate_pow()
                e.preventDefault()
                return false
            }

            if(!e.repeat)
            {
                if(e.key === Tetris.controls.soft_drop)
                {
                    Tetris.soft_drop()
                    e.preventDefault()
                    return false
                }

                else if(e.key === Tetris.controls.hard_drop)
                {
                    Tetris.hard_drop()
                    e.preventDefault()
                    return false
                }

                else if(e.key === Tetris.controls.move_left)
                {
                    Tetris.move_left_pressed = true
                    Tetris.move_sideways("left")
                    Tetris.restart_move_interval()
                    e.preventDefault()
                    return false
                }

                else if(e.key === Tetris.controls.move_right)
                {
                    Tetris.move_right_pressed = true
                    Tetris.move_sideways("right")
                    Tetris.restart_move_interval()
                    e.preventDefault()
                    return false
                }

                else if(e.key === Tetris.controls.move_down)
                {
                    Tetris.move_down_pressed = true
                    Tetris.move_down("keyboard")
                    Tetris.restart_move_interval()
                    e.preventDefault()
                    return false
                }
            }
        }

        if(!Tetris.on_intro && !Tetris.first_game_started)
        {
            if(e.key === "Enter")
            {
                Tetris.conditional_start_game()
            }
        }

        if(!Tetris.modal_open)
        {
            if(e.key === Tetris.controls.restart_game)
            {
                Tetris.conditional_start_game()
                e.preventDefault()
                return false
            }
        }

        if((Tetris.game_started || Tetris.on_countdown) && !Tetris.modal_open)
        {
            if(e.key === "Escape")
            {
                Tetris.show_menu()
                e.preventDefault()
                return false
            }
            
            else if(e.key === "F1")
            {
                Tetris.toggle_pause_game()
                e.preventDefault()
                return false
            }
        }

        else if(Tetris.on_intro)
        {
            Tetris.hide_intro()
        }

        if(e.key === "F1")
        {
            e.preventDefault()
            return false
        }
    })

    document.addEventListener('keyup', (e) =>
    {
        if(e.key === Tetris.controls.move_left)
        {
            Tetris.move_left_pressed = false
        }

        else if(e.key === Tetris.controls.move_right)
        {
            Tetris.move_right_pressed = false
        }

        else if(e.key === Tetris.controls.move_down)
        {
            Tetris.move_down_pressed = false
        }

        if(!Tetris.move_left_pressed && !Tetris.move_right_pressed && !Tetris.move_down_pressed)
        {
            Tetris.stop_move_interval()
        }
    })

    Tetris.start_move_interval = function()
    {
        Tetris.move_interval_timeout = setTimeout(function()
        {
            Tetris.move_interval = setInterval(function()
            {
                if(Tetris.game_started && !Tetris.modal_open)
                {
                    if(Tetris.move_left_pressed)
                    {
                        Tetris.move_sideways("left")
                    }
        
                    if(Tetris.move_right_pressed)
                    {
                        Tetris.move_sideways("right")
                    }
        
                    if(Tetris.move_down_pressed)
                    {
                        Tetris.move_down("keyboard")
                    }
                }
            }, 80)
        }, 100)
    } 
    
    Tetris.stop_move_interval = function()
    {
        clearTimeout(Tetris.move_interval_timeout)
        clearInterval(Tetris.move_interval)
    }

    Tetris.restart_move_interval = function()
    {
        Tetris.stop_move_interval()
        Tetris.start_move_interval()
    }

    Tetris.stop_and_clear_move_interval = function()
    {
        Tetris.stop_move_interval()
        Tetris.move_left_pressed = false
        Tetris.move_right_pressed = false
        Tetris.move_down_pressed = false
    }
}