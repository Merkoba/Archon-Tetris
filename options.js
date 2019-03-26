Tetris.ls_options = "ls_options_version_1"

Tetris.reset_options = function()
{
    Tetris.remove_local_storage(Tetris.ls_options)
    Tetris.get_options()
    Tetris.prepare_options_widgets()
    Tetris.call_options_actions()
}

Tetris.save_options = function()
{
    Tetris.save_local_storage(Tetris.ls_options, Tetris.options)
}

Tetris.get_options = function()
{
    Tetris.options = Tetris.get_local_storage(Tetris.ls_options)

    let changed = false

    if(Tetris.options === null)
    {
        Tetris.options = {}
    }

    if(Tetris.options.enable_ghost === undefined)
    {
        Tetris.options.enable_ghost = true
        changed = true
    }

    if(Tetris.options.enable_music === undefined)
    {
        Tetris.options.enable_music = true
        changed = true
    }

    if(Tetris.options.enable_sound_effects === undefined)
    {
        Tetris.options.enable_sound_effects = true
        changed = true
    }

    if(Tetris.options.number_of_rows === undefined)
    {
        Tetris.options.number_of_rows = 20
        changed = true
    }

    if(Tetris.options.number_of_columns === undefined)
    {
        Tetris.options.number_of_columns = 10
        changed = true
    }

    if(Tetris.options.number_of_previews === undefined)
    {
        Tetris.options.number_of_previews = 3
        changed = true
    }

    if(Tetris.options.block_size === undefined)
    {
        Tetris.options.block_size = 36
        changed = true
    }

    if(Tetris.options.seed === undefined)
    {
        Tetris.options.seed = ""
        changed = true
    }

    if(changed)
    {
        Tetris.save_options()
    }
}

Tetris.setup_options = function()
{
    Tetris.get_options()   
    Tetris.prepare_options_widgets()
    Tetris.start_options_widget_listeners()
}

Tetris.prepare_options_widgets = function()
{
    $("#options_container").find(".options_widget").each(function()
    {
        let type = $(this).data("options-widget-type")
        let id = $(this).attr("id").replace("option_", "")
        let option = Tetris.options[id]

        if(type === "checkbox")
        {
            $(this).prop("checked", option)
        }

        else if(type === "number" || type === "text")
        {
            $(this).val(option)
        }
    })
}

Tetris.start_options_widget_listeners = function()
{
    $("#options_container").find(".options_widget").each(function()
    {
        let type = $(this).data("options-widget-type")
        let id = $(this).attr("id").replace("option_", "")
        
        if(type === "checkbox")
        {
            $(this).change(function()
            {
                let option = Tetris.options[id]
                let val = $(`#option_${id}`).prop("checked")
                
                if(val !== option)
                {
                    Tetris[`option_${id}_action`]()
                    Tetris.save_options()
                }
            })
        }
        
        else if(type === "number" || type === "text")
        {
            $(this).blur(function()
            {
                let option = Tetris.options[id]
                let val = $(`#option_${id}`).val()

                if(val !== option)
                {
                    Tetris[`option_${id}_action`]()
                    Tetris.save_options()
                }
            })
        }
    })
}

Tetris.show_options = function()
{
    Tetris.msg_options.show()
}

Tetris.on_options_close = function()
{
    let restart_required = false

    if
    (
        Tetris.original_number_of_rows !== Tetris.options.number_of_rows ||
        Tetris.original_number_of_columns !== Tetris.options.number_of_columns ||
        Tetris.original_block_size !== Tetris.options.block_size ||
        Tetris.original_seed !== Tetris.options.seed
    )
    {
        restart_required = true
    }

    if(restart_required)
    {
        if(confirm("To apply these settings the game must be restarted. Restart now?"))
        {
            Tetris.start_game()
        }
    }
}

Tetris.call_options_actions = function()
{
    for(let key in Tetris.options)
    {
        Tetris[`option_${key}_action`]()
    }
}

Tetris.option_enable_ghost_action = function()
{
    Tetris.options.enable_ghost = $("#option_enable_ghost").prop("checked")

    if(Tetris.options.enable_ghost)
    {
        Tetris.show_ghost()
    }

    else
    {
        Tetris.hide_ghost()
    }
}

Tetris.option_enable_music_action = function()
{
    Tetris.options.enable_music = $("#option_enable_music").prop("checked")
}

Tetris.option_enable_sound_effects_action = function()
{
    Tetris.options.enable_sound_effects = $("#option_enable_sound_effects").prop("checked")
}

Tetris.option_number_of_rows_action = function()
{
    Tetris.options.number_of_rows = parseInt($("#option_number_of_rows").val())
}

Tetris.option_number_of_columns_action = function()
{
    Tetris.options.number_of_columns = parseInt($("#option_number_of_columns").val())
}

Tetris.option_number_of_previews_action = function()
{
    Tetris.options.number_of_previews = parseInt($("#option_number_of_previews").val())
    Tetris.setup_previews()
}

Tetris.option_block_size_action = function()
{
    Tetris.options.block_size = parseInt($("#option_block_size").val())
}

Tetris.option_seed_action = function()
{
    Tetris.options.seed = $("#option_seed").val().trim()
}