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
    Tetris.stop_descent_timeout()
    clearTimeout(Tetris.drop_piece_timeout)
    alert("Game Over")
}

Tetris.start_descent_timeout = function()
{
    clearTimeout(Tetris.descent_timeout)

    Tetris.piece_descent_delay = 800 - ((Tetris.level - 1) * 10)

    Tetris.descent_timeout = setTimeout(function()
    {
        Tetris.move_down("descent_timeout")
    }, Tetris.piece_descent_delay)
}

Tetris.stop_descent_timeout = function()
{
    clearTimeout(Tetris.descent_timeout)
}

Tetris.pause_game = function()
{
    if(Tetris.game_paused)
    {
        return false
    }

    Tetris.game_paused = true
    Tetris.piece_active = false
    Tetris.stop_descent_timeout()
}

Tetris.unpause_game = function()
{
    if(!Tetris.game_paused)
    {
        return false
    }

    Tetris.game_paused = false
    Tetris.piece_active = true
    Tetris.start_descent_timeout()
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
    let s = `${Tetris.score}`
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