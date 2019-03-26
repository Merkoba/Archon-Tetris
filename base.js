const Tetris = {}

Tetris.init = function()
{
    Tetris.game_started = false

    Tetris.compile_templates()
    Tetris.start_windows()
    Tetris.setup_options()
    Tetris.start_key_detection()
    Tetris.setup_audio()
    Tetris.setup_separators()
    Tetris.setup_click_events()
    Tetris.on_intro = true

    $("#sound_intro")[0].oncanplay = function()
    {
        $("#sound_intro")[0].play()
    }
}

Tetris.init_variables = function()
{
    Tetris.game = $("#game")
    
    Tetris.block_size = Tetris.options.block_size
    Tetris.num_horizontal_blocks = Tetris.options.number_of_columns
    Tetris.num_vertical_blocks = Tetris.options.number_of_rows
    
    Tetris.game_width = Tetris.num_horizontal_blocks * Tetris.block_size
    Tetris.game_height = Tetris.num_vertical_blocks * Tetris.block_size
    
    Tetris.game.css("width", `${Tetris.game_width}px`)
    Tetris.game.css("height", `${Tetris.game_height}px`)
    
    Tetris.seed = Tetris.options.seed || Date.now().toString().slice(-3)
    Tetris.random = new Math.seedrandom(Tetris.seed)
    console.info(`Using seed: ${Tetris.seed}`)

    Tetris.original_number_of_rows = Tetris.options.number_of_rows
    Tetris.original_number_of_columns = Tetris.options.number_of_columns
    Tetris.original_block_size = Tetris.options.block_size
    Tetris.original_seed = Tetris.options.seed
}

Tetris.start_game = function()
{
    Tetris.game_started = false
    Tetris.piece_active = false

    Tetris.stop_music()
    Tetris.stop_descent_timeout()
    Tetris.stop_drop_piece_timeout()
    Tetris.stop_countdown()
    Tetris.init_variables()
    Tetris.create_grid()
    Tetris.create_pieces()
    
    Tetris.score = 0
    Tetris.level = 1
    Tetris.combo = 0
    Tetris.combo_charged = false
    Tetris.pieces_delivered = 0
    Tetris.level_charge = 0
    Tetris.previews = []
    
    Tetris.setup_previews()
    Tetris.set_score_text()
    Tetris.set_level_text()
    Tetris.set_combo_text()
    Tetris.set_seed_text()
    Tetris.close_all_windows()

    Tetris.start_countdown()
}

Tetris.do_start_game = function()
{
    Tetris.on_countdown = false
    Tetris.game_paused = false
    Tetris.game_started = true

    Tetris.stop_countdown()
    Tetris.start_music(true)
    Tetris.place_next_piece()
}

Tetris.stop_countdown = function()
{
    clearInterval(Tetris.countdown_interval)
    $("#countdown").css("display", "none")
}

Tetris.start_countdown = function()
{
    let n = 3
    
    $("#countdown").text(n)
    $("#countdown").css("display", "block")

    Tetris.play_sound("countdown")
    
    Tetris.countdown_interval = setInterval(function()
    {
        if(Tetris.game_paused)
        {
            return false
        }
        
        n -= 1
        
        if(n === 0)
        {
            Tetris.do_start_game()
            Tetris.play_sound("game_started")
        }

        else
        {
            $("#countdown").text(n)
            Tetris.play_sound("countdown")
        }
    }, 1000)

    Tetris.on_countdown = true
}

Tetris.on_game_over = function()
{
    Tetris.game_started = false
    Tetris.piece_active = false
    Tetris.on_countdown = false
    Tetris.stop_descent_timeout()
    Tetris.stop_drop_piece_timeout()
    Tetris.stop_music()
    
    $("#game_over_score").text(`Score: ${Tetris.format_number(Tetris.score)}`)
    Tetris.msg_game_over.show()

    Tetris.play_sound("game_over")
}

Tetris.get_descent_delay = function()
{
    let delay = 800 - ((Tetris.level - 1) * 10)

    if(delay < 10)
    {
        delay = 10
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
}

Tetris.stop_descent_timeout = function()
{
    clearTimeout(Tetris.descent_timeout)
}

Tetris.pause_game = function()
{
    if((!Tetris.game_started && !Tetris.on_countdown) || Tetris.game_paused)
    {
        return false
    }

    Tetris.game_paused = true
    Tetris.piece_active = false

    if(Tetris.game_started)
    {
        Tetris.stop_descent_timeout()
        Tetris.stop_music()
    }
}

Tetris.unpause_game = function()
{
    if((!Tetris.game_started && !Tetris.on_countdown) || !Tetris.game_paused)
    {
        return false
    }
    
    Tetris.game_paused = false
    Tetris.piece_active = true

    if(Tetris.game_started)
    {
        Tetris.start_descent_timeout()
        Tetris.start_music()
    }
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
    $("#music")[0].volume = 0.25
}

Tetris.start_windows = function()
{
    let common = 
    {
        before_show: function()
        {
            Tetris.pause_game()
        },
        after_show: function()
        {
            Tetris.modal_open = true
        },
        after_close: function()
        {
            if(!Tetris.msg_menu.any_open())
            {
                Tetris.modal_open = false
                Tetris.unpause_game()
            }
        }
    }

    let titlebar =
    {
        enable_titlebar: true,
        center_titlebar: true,
        window_inner_x_class: "!titlebar_inner_x"
    }

    Tetris.msg_menu = Msg.factory
    (
        Object.assign({}, common)
    )
        
    Tetris.msg_options = Msg.factory
    (
        Object.assign
        (
            {},
            common,
            titlebar,
            {
                after_close: function()
                {
                    Tetris.on_options_close()
                    common.after_close()
                }
            }
        )
    )

    Tetris.msg_help = Msg.factory
    (
        Object.assign
        (
            {

            }, 
            titlebar,
            common,
            {

            }
        )
    )

    Tetris.msg_game_over = Msg.factory
    (
        Object.assign
        (
            {

            },
            titlebar,
            common,
            {

            }
        )
    )

    Tetris.msg_menu.set(Tetris.template_menu())
    Tetris.msg_options.set(Tetris.template_options())
    Tetris.msg_options.set_title("Options")
    Tetris.msg_help.set(Tetris.template_help())
    Tetris.msg_help.set_title("Help")
    Tetris.msg_game_over.set(Tetris.template_game_over())
    Tetris.msg_game_over.set_title("Game Over")
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

    $("#seed_text").click(function()
    {
        Tetris.show_options()
    })

    $("body").click(function()
    {
        if(Tetris.on_intro)
        {
            Tetris.hide_intro()
        }
    })

    $("#game_over_play_again").click(function()
    {
        Tetris.start_game()
    })

    $("#options_reset_button").click(function()
    {
        Tetris.reset_options()
    })
}

Tetris.setup_separators = function()
{
    Tetris.horizontal_separator = Separator.factory({type:"horizontal"})
    Tetris.horizontal_separator.separate("info")
}

Tetris.show_menu = function()
{
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

Tetris.format_number = function(n)
{
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

Tetris.show_help = function()
{
    Tetris.msg_help.show()
}

Tetris.set_seed_text = function()
{
    let s = `Seed: ${Tetris.seed}`
    $("#seed_text").text(s)
}

Tetris.play_sound = function(name)
{
    if(Tetris.options.enable_sound_effects)
    {
        $(`#sound_${name}`)[0].pause()
        $(`#sound_${name}`)[0].currentTime = 0
        $(`#sound_${name}`)[0].play()
    }
}

Tetris.charge_level = function(num_cleared)
{
    Tetris.level_charge += num_cleared

    let num_levels = Tetris.level_charge / 4
    let num_levels_split = num_levels.toString().split(".")
    let whole, decimals

    if(num_levels_split.length > 1)
    {
        whole = parseInt(num_levels_split[0])
        decimals = parseInt(num_levels_split[1])
    }

    else
    {
        whole = num_levels
    }

    if(whole >= 1)
    {
        Tetris.level += whole

        Tetris.set_level_text()
        console.info(`Level up: ${Tetris.level}`)

        if(decimals)
        {
            Tetris.level_charge = (decimals / 10) * 4
        }

        else
        {
            Tetris.level_charge = 0
        }
    }
}