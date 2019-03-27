Tetris.start_key_detection = function()
{
    document.addEventListener('keydown', (e) =>
    {
        if(Tetris.piece_picker_active)
        {
            if(e.key === "ArrowRight")
            {
                Tetris.show_next_piece_picker_wheel_item()
                e.preventDefault()
                return false
            }
            
            else if(e.key === "ArrowLeft")
            {
                Tetris.show_previous_piece_picker_wheel_item()
                e.preventDefault()
                return false
            }

            return false
        }

        if(Tetris.game_started && !Tetris.modal_open)
        {
            if(e.key === "ArrowUp" || e.key === "x")
            {
                Tetris.rotate_piece("right")
                e.preventDefault()
                return false
            }
     
            else if(e.key === "Control" || e.key === "z")
            {
                Tetris.rotate_piece("left")
                e.preventDefault()
                return false
            }

            else if(e.key === "ArrowDown")
            {
                Tetris.move_down("keyboard")
                e.preventDefault()
                return false
            }

            else if(e.key === "ArrowLeft")
            {
                Tetris.move_sideways("left")
                e.preventDefault()
                return false
            }

            else if(e.key === "ArrowRight")
            {
                Tetris.move_sideways("right")
                e.preventDefault()
                return false
            }

            else if(e.key === "Enter")
            {
                Tetris.activate_pow()
                e.preventDefault()
                return false
            }

            if(!e.repeat)
            {
                if(e.key === " ")
                {
                    Tetris.drop_piece()
                    e.preventDefault()
                    return false
                }
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