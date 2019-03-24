Tetris.ls_options = "ls_options_version_1"

Tetris.save_options = function()
{
    Tetris.save_local_storage(Tetris.ls_options, Tetris.options)
}

Tetris.setup_options = function()
{
    Tetris.options = Tetris.get_local_storage(Tetris.ls_options)

    if(Tetris.options === null)
    {
        Tetris.options = 
        {
            enable_ghost: true,
            enable_music: true,
            enable_sound_effects: true,
            number_of_rows: 20,
            number_of_columns: 10
        }

        Tetris.save_options()
    }

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

        else if(type === "number")
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
        
        else if(type === "number")
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

    if(Tetris.options.enable_music)
    {
        Tetris.start_music()
    }

    else
    {
        Tetris.stop_music()
    }
}

Tetris.option_enable_sound_effects_action = function()
{
    Tetris.options.enable_music = $("#option_enable_music").prop("checked")
}

Tetris.option_number_of_rows_action = function()
{
    Tetris.options.number_of_rows = $("#option_number_of_rows").val()
    Tetris.restart_required = true
}

Tetris.option_number_of_columns_action = function()
{
    Tetris.options.number_of_columns = $("#option_number_of_columns").val()
    Tetris.restart_required = true
}