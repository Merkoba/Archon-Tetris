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

            else if(e.key === Tetris.controls.move_left)
            {
                Tetris.move_sideways("left")
                e.preventDefault()
                return false
            }

            else if(e.key === Tetris.controls.move_right)
            {
                Tetris.move_sideways("right")
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
    })
}