Tetris.start_key_detection = function()
{
    document.addEventListener('keydown', (e) =>
    {
        if(e.key === "ArrowUp" || e.key === "x")
        {
            Tetris.rotate_piece("right")
            e.preventDefault()
            return false
        }
     
        if(e.key === "Control" || e.key === "z")
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

        else if(e.key === "Escape" || e.key === "F1")
        {
            Tetris.toggle_pause_game()
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
    })
}