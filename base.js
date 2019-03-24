const Tetris = {}

Tetris.init = function()
{
    Tetris.compile_templates()
    Tetris.start_windows()
    Tetris.setup_options()
    Tetris.start_key_detection()
    Tetris.setup_audio()
    Tetris.setup_separators()
    Tetris.setup_click_events()
    Tetris.on_intro = true
}

Tetris.init_variables = function()
{
    Tetris.game = $("#game")
    Tetris.game_started = false

    Tetris.block_size = 36
    Tetris.num_horizontal_blocks = Tetris.options.number_of_columns
    Tetris.num_vertical_blocks = Tetris.options.number_of_rows

    Tetris.game_width = Tetris.num_horizontal_blocks * Tetris.block_size
    Tetris.game_height = Tetris.num_vertical_blocks * Tetris.block_size

    Tetris.game.css("width", `${Tetris.game_width}px`)
    Tetris.game.css("height", `${Tetris.game_height}px`)

    Tetris.game_aspect_ratio = Tetris.game_width / Tetris.game_height

    Tetris.seed = Date.now()
    Tetris.random = new Math.seedrandom(Tetris.seed)
    console.info(`Using seed: ${Tetris.seed}`)
}

Tetris.start_game = function()
{
    Tetris.init_variables()
    Tetris.create_grid()
    Tetris.create_pieces()
    Tetris.setup_next_pieces()

    Tetris.piece_active = false
    Tetris.game_paused = false
    Tetris.game_started = true
    Tetris.score = 0
    Tetris.level = 1
    Tetris.combo = 0
    Tetris.combo_charged = false
    Tetris.pieces_delivered = 0
    Tetris.level_charge = 0
    Tetris.next_pieces = []

    if(Tetris.options.enable_music)
    {
        Tetris.start_music(true)
    }

    $("")

    Tetris.set_score_text()
    Tetris.set_level_text()
    Tetris.set_combo_text()
    Tetris.generate_initial_pieces()
    Tetris.place_next_piece()
    Tetris.close_all_windows()
}

Tetris.on_game_over = function()
{
    Tetris.game_started = false
    Tetris.piece_active = false
    Tetris.stop_descent_timeout()
    Tetris.stop_music()
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
    if(!Tetris.game_started || Tetris.game_paused)
    {
        return false
    }

    Tetris.game_paused = true
    Tetris.piece_active = false
    Tetris.stop_descent_timeout()
    Tetris.stop_music()
}

Tetris.unpause_game = function()
{
    if(!Tetris.game_started || !Tetris.game_paused)
    {
        return false
    }
    
    Tetris.game_paused = false
    Tetris.piece_active = true
    Tetris.start_descent_timeout()
    Tetris.start_music()
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
    $("#score_text").text(Tetris.format_number(s))   
}

Tetris.add_score = function(n)
{
    Tetris.score += n
    Tetris.set_score_text()
    
    if(n > 10)
    {
        console.info(`Scored increased by: ${n}`)
    }
}

Tetris.increase_level = function()
{
    Tetris.level += 1
    Tetris.level_charge = 0
    Tetris.set_level_text()
    console.info(`Level up: ${Tetris.level}`)
}

Tetris.set_level_text = function()
{
    let s = `Level: ${Tetris.level}`
    $("#level_text").text(s)
}

Tetris.charge_combo = function()
{
    if(Tetris.combo_charged)
    {
        Tetris.combo += 1
        Tetris.set_combo_text()
    }

    else
    {
        Tetris.combo_charged = true
    }
}

Tetris.reset_combo = function()
{
    Tetris.combo_charged = false
    Tetris.combo = 0
    Tetris.set_combo_text()
}

Tetris.set_combo_text = function()
{
    let s = `Combo: ${Tetris.combo}`
    $("#combo_text").text(s)
}

Tetris.hide_intro = function()
{
    $("#intro").css("display", "none")
    $("#main").css("display", "flex")
    Tetris.on_intro = false
    Tetris.start_game(true)
}

Tetris.start_music = function(reset=false)
{
    if(!Tetris.game_started || !Tetris.options.enable_music)
    {
        return false
    }

    if(reset)
    {
        $('#music')[0].pause()
        $('#music')[0].currentTime = 0
    }

    $("#music")[0].loop = true
    $("#music")[0].play()
}

Tetris.stop_music = function()
{
    $("#music")[0].pause()
}

Tetris.setup_audio = function()
{
    $("#music")[0].volume = 0.5
}

Tetris.start_windows = function()
{
    Tetris.msg_menu = Msg.factory
    (
        {
            after_close: function()
            {
                Tetris.unpause_game()
            }
        }
    )

    Tetris.msg_options = Msg.factory
    (
        {
            after_close: function()
            {
                if(Tetris.restart_required)
                {
                    if(confirm("To apply these settings the game must be restarted. Restart now?"))
                    {
                        Tetris.start_game()
                    }
                }

                Tetris.restart_required = false
            }
        }
    )

    Tetris.msg_help = Msg.factory()

    Tetris.msg_menu.set(Tetris.template_menu())
    Tetris.msg_options.set(Tetris.template_options())
    Tetris.msg_help.set(Tetris.template_help())
}

Tetris.show_options = function()
{
    Tetris.msg_options.show()
}

Tetris.compile_templates = function()
{
    $(".template").each(function()
    {
        let id = $(this).attr("id")
        Tetris[id] = Handlebars.compile($(`#${id}`).html())
    })
}

Tetris.setup_click_events = function()
{
    $("#menu").click(function()
    {
        Tetris.show_menu()
    })

    $("#menu_restart").click(function()
    {
        Tetris.start_game()
    })

    $("#menu_options").click(function()
    {
        Tetris.show_options()
    })

    $("#menu_help").click(function()
    {
        Tetris.show_help()
    })
}

Tetris.setup_separators = function()
{
    Tetris.horizontal_separator = Separator.factory({type:"horizontal"})
    Tetris.horizontal_separator.separate("info")
}

Tetris.show_menu = function()
{
    Tetris.pause_game()
    Tetris.msg_menu.show()
}

Tetris.show_ghost = function()
{
    if(!Tetris.game_started)
    {
        return false
    }

    Tetris.update_ghost_piece()
}

Tetris.hide_ghost = function()
{
    if(!Tetris.game_started)
    {
        return false
    }

    $(".piece_container.ghost").remove()
}

Tetris.close_all_windows = function()
{
    Tetris.msg_menu.close_all()
}

Tetris.setup_next_pieces = function()
{
    let s = "<div class='next_piece'><div class='next_piece_element'></div></div>"

    for(let i=0; i<Tetris.num_next_pieces; i++)
    {
        let html = $(s)
        $("#next_pieces").append(html)
    }
}

Tetris.format_number = function(n)
{
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

Tetris.show_help = function()
{
    Tetris.msg_help.show()
}