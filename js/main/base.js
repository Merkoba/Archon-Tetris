const Tetris = {}

Tetris.debug = false
Tetris.ls_first_time = "ls_first_time"

Tetris.init = function()
{
    Tetris.game_started = false

    Tetris.create_pieces()
    Tetris.compile_templates()
    Tetris.start_windows()
    Tetris.setup_options()
    Tetris.start_key_detection()
    Tetris.setup_audio()
    Tetris.setup_separators()
    Tetris.setup_click_events()
    Tetris.setup_controls()
    Tetris.setup_theme()
    Tetris.start_hide_intro_timeout()
    Tetris.start_visibility_listeners()
    Tetris.start_unload_events()
    Tetris.on_intro = true
    Tetris.first_game_started = false
    Tetris.current_texture_preview = 0

    $("#sound_intro")[0].oncanplay = function()
    {
        if(Tetris.options.sound_effects)
        {
            $("#sound_intro")[0].play()
        }
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
    Tetris.random_2 = new Math.seedrandom(Tetris.seed)
    console.info(`Using seed: ${Tetris.seed}`)

    Tetris.original_number_of_rows = Tetris.options.number_of_rows
    Tetris.original_number_of_columns = Tetris.options.number_of_columns
    Tetris.original_block_size = Tetris.options.block_size
    Tetris.original_seed = Tetris.options.seed
}

Tetris.start_game = function(initial=false)
{
    Tetris.game_started = false
    Tetris.piece_active = false
    Tetris.current_piece = undefined
    Tetris.game_paused = false
    
    Tetris.stop_descent_timeout()
    Tetris.stop_soft_drop_timeout()
    Tetris.stop_time_check_interval()
    Tetris.stop_countdown()
    Tetris.init_variables()
    Tetris.create_grid()
    Tetris.create_pieces()
    
    Tetris.score = 0
    Tetris.level = 0
    Tetris.combo = 0
    Tetris.combo_charged = false
    Tetris.pieces_delivered = 0
    Tetris.level_charge = 0
    Tetris.previews = []
    Tetris.max_combo = 0
    Tetris.lines_cleared = 0
    Tetris.pow = 0
    Tetris.pow_charge = 0
    Tetris.pows_earned = 0
    Tetris.pows_used = 0
    Tetris.pow_active = false
    Tetris.piece_picker_active = false
    Tetris.start_descent_after_unpause = false
    Tetris.queued_left = 0
    Tetris.show_piece_picker_next = false
    Tetris.big_piece_next = false
    Tetris.time_paused = 0
    Tetris.pieces_placed = 0
    Tetris.big_piece_charge = 0
    Tetris.current_piece_picker_wheel_item = 0
    Tetris.placed_id = 1
    Tetris.placed_block_id = 1
    Tetris.placed_element_data = {}
    
    $("#paused").css("display", "none")
    $("#queued_left").text("")
    $("#menu_game_over").css("display", "none")
    
    Tetris.setup_previews()
    Tetris.set_score_text()
    Tetris.set_level_text()
    Tetris.set_speed_text()
    Tetris.set_seed_text()
    Tetris.set_pow_text()
    Tetris.close_all_windows()
    
    if(!initial)
    {
        Tetris.make_game_start()
    }
}

Tetris.make_game_start = function()
{
    Tetris.first_game_started = true
    Tetris.close_all_windows()
    Tetris.start_countdown()
    Tetris.start_music(true)
}

Tetris.do_start_game = function()
{
    Tetris.on_countdown = false
    Tetris.game_paused = false
    Tetris.game_started = true
    Tetris.game_started_date = Date.now()
    Tetris.start_time_check_interval()

    Tetris.stop_countdown()

    if(!Tetris.debug)
    {
        Tetris.place_next_piece()
    }
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

Tetris.on_game_over = function(title="Game Over")
{
    console.info("Game Over")
    Tetris.game_over_date = Date.now()
    Tetris.game_started = false
    Tetris.piece_active = false
    Tetris.on_countdown = false
    Tetris.stop_descent_timeout()
    Tetris.stop_soft_drop_timeout()
    Tetris.stop_time_check_interval()
    Tetris.stop_music()

    let time = Tetris.game_over_date - Tetris.time_paused
    let nice_time = Tetris.nice_time(time, Tetris.game_started_date)
    
    $("#game_over_level").text(`Level: ${Tetris.format_number(Tetris.level)}`)
    $("#game_over_score").text(`Score: ${Tetris.format_number(Tetris.score)}`)
    $("#game_over_time").text(`Time: ${nice_time}`)
    $("#game_over_pieces_placed").text(`Pieces Placed: ${Tetris.pieces_placed}`)
    $("#game_over_lines_cleared").text(`Lines Cleared: ${Tetris.lines_cleared}`)
    $("#game_over_max_combo").text(`Max Combo: ${Tetris.max_combo}`)
    $("#game_over_pows_earned").text(`POW Earned: ${Tetris.pows_earned}`)
    $("#game_over_pows_used").text(`POW Used: ${Tetris.pows_used}`)

    Tetris.msg_game_over.set_title(title)
    Tetris.msg_game_over.show()

    Tetris.play_sound("game_over")
    $("#menu_game_over").css("display", "block")
}

Tetris.pause_game = function()
{
    if((!Tetris.game_started && !Tetris.on_countdown) || Tetris.game_paused)
    {
        return false
    }

    Tetris.game_paused = true
    Tetris.piece_active = false

    Tetris.stop_music()

    if(Tetris.game_started)
    {
        Tetris.start_descent_after_unpause = Tetris.descent_timeout_active

        if(Tetris.descent_timeout_active)
        {
            Tetris.stop_descent_timeout()
        }
    }

    $("#paused").css("display", "block")

    Tetris.pause_date = Date.now()
}

Tetris.unpause_game = function()
{
    if((!Tetris.game_started && !Tetris.on_countdown) || !Tetris.game_paused)
    {
        return false
    }
    
    Tetris.game_paused = false
    Tetris.piece_active = true
    
    Tetris.start_music()
    
    if(Tetris.game_started)
    {
        if(Tetris.start_descent_after_unpause)
        {
            Tetris.start_descent_timeout()
        }
    }

    $("#paused").css("display", "none")

    Tetris.time_paused += Date.now() - Tetris.pause_date
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

    if(Tetris.options.goal_type === "score")
    {
        if(Tetris.score >= Tetris.options.goal)
        {
            Tetris.on_game_over("Score Goal Met")
        }
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

        if(Tetris.combo > Tetris.max_combo)
        {
            Tetris.max_combo = Tetris.combo
        }
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
}

Tetris.hide_intro = function()
{
    Tetris.stop_hide_intro_timeout()

    if(Tetris.check_first_time())
    {
        return false
    }

    Tetris.on_intro = false

    Tetris.start_game(true)
    Tetris.msg_menu.show()

    $("#intro").css("opacity", 0)
    
    setTimeout(function()
    {
        $("#intro").css("display", "none")
    }, 1000)
}

Tetris.start_music = function(reset=false)
{
    if(!Tetris.options.music)
    {
        return false
    }

    if(!Tetris.game_started && !Tetris.on_countdown)
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
        Object.assign
        (
            {}, 
            common,
            {
                id: "menu",
                before_close: function()
                {
                    if(!Tetris.first_game_started)
                    {
                        return false
                    }
                }
            }
        )
    )
        
    Tetris.msg_options = Msg.factory
    (
        Object.assign
        (
            {},
            common,
            titlebar,
            {
                id: "options",
                window_height: "30rem",
                window_min_height: "30rem",
                window_max_height: "30rem",
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
                id: "help",
                after_close: function()
                {   
                    if(Tetris.on_first_time_help)
                    {
                        Tetris.on_first_time_help = false
                        Tetris.hide_intro()
                    }

                    common.after_close()
                }
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
                id: "game_over"
            }
        )
    )

    Tetris.msg_controls = Msg.factory
    (
        Object.assign
        (
            {

            },
            titlebar,
            common,
            {
                id: "controls"
            }
        )
    )

    Tetris.msg_texture_preview = Msg.factory
    (
        Object.assign
        (
            {

            },
            titlebar,
            common,
            {
                id: "texture_preview"
            }
        )
    )

    Tetris.msg_theme = Msg.factory
    (
        Object.assign
        (
            {

            },
            titlebar,
            common,
            {
                id: "theme"
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
    Tetris.msg_controls.set(Tetris.template_controls())
    Tetris.msg_controls.set_title("Controls")
    Tetris.msg_texture_preview.set(Tetris.template_texture_preview())
    Tetris.msg_theme.set(Tetris.template_theme())
    Tetris.msg_theme.set_title("Theme")
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
    $("#intro").click(function()
    {
        if(Tetris.on_intro)
        {
            Tetris.hide_intro()
        }
    })

    $("#menu").click(function()
    {
        Tetris.show_menu()
    })

    $("#menu_restart").click(function()
    {
        Tetris.conditional_start_game()
    })

    $("#menu_options").click(function()
    {
        Tetris.show_options()
    })

    $("#menu_help").click(function()
    {
        Tetris.show_help()
    })
    
    $("#menu_theme").click(function()
    {
        Tetris.show_theme()
    })

    $("#menu_game_over").click(function()
    {
        Tetris.msg_game_over.show()
    })

    $("#menu_reset").click(function()
    {
        Tetris.reset_all()
    })

    $("#game_over_play_again").click(function()
    {
        Tetris.start_game()
    })

    $("#options_reset_button").click(function()
    {
        Tetris.reset_options()
    })

    $("#menu_controls").click(function()
    {
        Tetris.show_controls()
    })

    $("#controls_reset").click(function()
    {
        Tetris.reset_controls()
    })

    $("#help_options").click(function()
    {
        Tetris.show_options()
    })

    $("#help_controls").click(function()
    {
        Tetris.show_controls()
    })

    $("#help_theme").click(function()
    {
        Tetris.show_theme()
    })

    $("#texture_preview_random").click(function()
    {
        Tetris.set_random_block_texture()
    })

    $("#texture_preview_previous").click(function()
    {
        Tetris.set_previous_block_texture()
    })

    $("#texture_preview_element").on("click", ".piece", function()
    {
        Tetris.show_texture_preview(true)
    })

    $("#theme_reset").click(function()
    {
        Tetris.reset_theme()
    })

    $("#paused").click(function()
    {
        Tetris.unpause_game()
    })
}

Tetris.setup_separators = function()
{
    Tetris.horizontal_separator = Separator.factory({type:"horizontal"})
    Tetris.horizontal_separator.separate("info")
    Tetris.horizontal_separator.separate("info2")
    Tetris.horizontal_separator.separate("help_buttons")
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
    if(Tetris.options.sound_effects)
    {
        $(`#sound_${name}`)[0].pause()
        $(`#sound_${name}`)[0].currentTime = 0
        $(`#sound_${name}`)[0].play()
    }
}

Tetris.charge_level = function(num_cleared)
{
    Tetris.level_charge += num_cleared

    let num_levels = Tetris.level_charge / Tetris.options.level_goal
    let num_levels_split = num_levels.toString().split(".")
    let whole, decimals

    if(num_levels_split.length > 1)
    {
        whole = parseInt(num_levels_split[0])
        decimals = Tetris.get_full_decimal(parseInt(num_levels_split[1]))
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
            Tetris.level_charge = (decimals / 100) * Tetris.options.level_goal
        }
        
        else
        {
            Tetris.level_charge = 0
        }

        Tetris.set_speed_text()

        if(Tetris.options.goal_type === "level")
        {
            if(Tetris.level >= Tetris.options.goal)
            {
                Tetris.on_game_over("Level Goal Met")
            }
        }
    }
}

Tetris.charge_pow = function(num_cleared)
{
    if(!Tetris.options.pow)
    {
        return false
    }

    Tetris.pow_charge += num_cleared

    let num_pows = Tetris.pow_charge / Tetris.options.pow_goal
    let num_pows_split = num_pows.toString().split(".")
    let whole, decimals

    if(num_pows_split.length > 1)
    {
        whole = parseInt(num_pows_split[0])
        decimals = Tetris.get_full_decimal(parseInt(num_pows_split[1]))
    }

    else
    {
        whole = num_pows
    }

    if(whole >= 1)
    {
        Tetris.pow += whole
        Tetris.pows_earned += whole
        Tetris.set_pow_text()
        Tetris.play_sound("pow_loaded")
        console.info("POW earned")
        
        if(decimals)
        {
            Tetris.pow_charge = (decimals / 100) * Tetris.options.pow_goal
        }
        
        else
        {
            Tetris.pow_charge = 0
        }
    }
}

Tetris.set_pow_text = function()
{
    let s = `POW: ${Tetris.pow}`
    $("#pow_text").text(s)
}

Tetris.activate_pow = function()
{
    if(Tetris.pow === 0 || Tetris.clearing_lines)
    {
        Tetris.play_sound("tone_1")
        return false
    }

    Tetris.play_sound("pow")
    Tetris.pow -= 1
    Tetris.set_pow_text()
    Tetris.pow_active = true
    Tetris.pows_used += 1

    Tetris.current_element.find(".piece_block").each(function()
    {
        $(this).addClass("pow_active")
    })

    Tetris.update_ghost_piece()
}

Tetris.check_first_time = function()
{
    let first_time = Tetris.get_local_storage(Tetris.ls_first_time)

    if(!first_time)
    {
        Tetris.save_local_storage(Tetris.ls_first_time, {visited:true})
        Tetris.on_first_time_help = true
        Tetris.show_help()
        return true
    }

    else
    {
        Tetris.on_first_time_help = false
        return false
    }
}

Tetris.start_time_check_interval = function()
{
    Tetris.time_check_interval = setInterval(function()
    {
        if(Tetris.options.goal_type === "minutes")
        {
            let time = Date.now() - Tetris.game_started_date - Tetris.time_paused
            let minutes = Tetris.round(time / 60 / 1000, 3)
            
            if(minutes >= Tetris.options.goal)
            {
                Tetris.on_game_over("Minutes Goal Met")
            }
        }
    }, 1000)
}

Tetris.stop_time_check_interval = function()
{
    clearInterval(Tetris.time_check_interval)
}

Tetris.start_hide_intro_timeout = function()
{
    Tetris.hide_intro_timeout = setTimeout(function()
    {
        Tetris.hide_intro()
    }, 5000)
}

Tetris.stop_hide_intro_timeout = function()
{
    clearTimeout(Tetris.hide_intro_timeout)
}

Tetris.conditional_start_game = function()
{
    if(Tetris.first_game_started)
    {
        Tetris.start_game()
    }

    else
    {
        Tetris.make_game_start()
        $("#menu_restart").text("Restart")
    }
}

Tetris.start_visibility_listeners = function()
{
    window.addEventListener("blur", function(event) 
    {
        Tetris.stop_and_clear_move_interval()
    }, false)
}

Tetris.set_speed_text = function()
{
    let delay = Tetris.get_descent_delay()
    let percentage = (Tetris.initial_descent_delay - delay) / ((Tetris.initial_descent_delay - Tetris.options.min_descent_delay) / 100)
    let s = `Speed: ${Tetris.round(percentage, 0)}%`
    $("#speed_text").text(s)
}

Tetris.start_unload_events = function()
{
    window.onbeforeunload = function(e)
    {
        if(Tetris.options.warn_before_closing && Tetris.game_started)
        {
            return "Are you sure?"
        }
    }
}

Tetris.reset_all = function()
{
    if(confirm("Reset Options, Controls, and Theme?"))
    {
        Tetris.reset_options(true)
        Tetris.reset_controls(true)
        Tetris.reset_theme(true)
    }
}