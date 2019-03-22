const Tetris = {}

Tetris.init = function()
{
    Tetris.init_variables()
    Tetris.create_pieces()
    Tetris.create_grid()
    Tetris.start_key_detection()
    Tetris.start_game()
}

Tetris.init_variables = function()
{
    Tetris.game = $("#game")
    Tetris.game_started = false
    Tetris.num_horizontal_blocks = 12
    Tetris.num_vertical_blocks = 24
    Tetris.block_size = parseInt(Tetris.game.css("width")) / Tetris.num_horizontal_blocks
    Tetris.game_width = Tetris.num_horizontal_blocks * Tetris.block_size
    Tetris.game_height = Tetris.num_vertical_blocks * Tetris.block_size
    Tetris.game_aspect_ratio = Tetris.game_width / Tetris.game_height
    Tetris.random = new Math.seedrandom(Date.now())
    Tetris.next_pieces = []
}

Tetris.start_game = function()
{
    Tetris.piece_active = false
    Tetris.descent_loop_active = false
    Tetris.game_paused = false
    Tetris.game_started = true
    Tetris.level = 1
    Tetris.score = 0
    Tetris.pieces_delivered = 0
    Tetris.level_charge = 0
    Tetris.set_score_text()
    Tetris.set_level_text()
    Tetris.generate_initial_pieces()
    Tetris.place_next_piece()
}

Tetris.on_game_over = function()
{
    Tetris.game_started = false
    Tetris.piece_active = false
    Tetris.stop_descent_loop()
    alert("Game Over")
}

Tetris.start_descent_loop = function()
{
    clearTimeout(Tetris.descent_loop_timeout)
    clearTimeout(Tetris.initial_descent_loop_timeout)

    Tetris.piece_descent_delay = 800 - ((Tetris.level - 1) * 10)
    Tetris.descent_loop_active = true

    Tetris.initial_descent_loop_timeout = setTimeout(function()
    {
        Tetris.do_descent()
    }, Tetris.piece_descent_delay)
}

Tetris.stop_descent_loop = function()
{
    clearTimeout(Tetris.descent_loop_timeout)
    clearTimeout(Tetris.initial_descent_loop_timeout)
    Tetris.descent_loop_active = false
}

Tetris.do_descent = function()
{
    if(!Tetris.descent_loop_active)
    {
        return false
    }

    Tetris.move_down()
    
    Tetris.descent_loop_timeout = setTimeout(function()
    {
        Tetris.do_descent()
    }, Tetris.piece_descent_delay)
}

Tetris.pause_game = function()
{
    if(Tetris.game_paused)
    {
        return false
    }

    Tetris.game_paused = true
    Tetris.piece_active = false
    Tetris.stop_descent_loop()
}

Tetris.unpause_game = function()
{
    if(!Tetris.game_paused)
    {
        return false
    }

    Tetris.game_paused = false
    Tetris.piece_active = true
    Tetris.start_descent_loop()
}

Tetris.toggle_pause_game = function()
{
    if(Tetris.game_paused)
    {
        Tetris.unpause_game()
    }

    else
    {
        Tetris.pause_game()
    }
}

Tetris.set_score_text = function()
{
    let s = `Score: ${Tetris.score}`
    $("#score_text").text(s)   
}

Tetris.add_score = function(n)
{
    Tetris.score += n
    Tetris.set_score_text()
}

Tetris.increase_level = function()
{
    Tetris.level += 1
    Tetris.level_charge = 0
    Tetris.set_level_text()
}

Tetris.set_level_text = function()
{
    let s = `Level: ${Tetris.level}`
    $("#level_text").text(s)
}