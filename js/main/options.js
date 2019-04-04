Tetris.ls_options = "ls_options_version_1"
Tetris.previous_block_textures = []

Tetris.reset_options = function()
{
    if(confirm("Are you sure you want to reset options to default?"))
    {
        Tetris.remove_local_storage(Tetris.ls_options)
        Tetris.get_options()
        Tetris.prepare_options_widgets()
        Tetris.call_options_actions()
    }
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

    if(Tetris.options.background === undefined)
    {
        Tetris.options.background = "1"
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
        Tetris.options.block_size = 33
        changed = true
    }

    if(Tetris.options.seed === undefined)
    {
        Tetris.options.seed = ""
        changed = true
    }

    if(Tetris.options.goal === undefined)
    {
        Tetris.options.goal = 1
        changed = true
    }

    if(Tetris.options.goal_type === undefined)
    {
        Tetris.options.goal_type = "none"
        changed = true
    }

    if(Tetris.options.descent_multiplier === undefined)
    {
        Tetris.options.descent_multiplier = 20
    }

    if(Tetris.options.min_descent_delay === undefined)
    {
        Tetris.options.min_descent_delay = 80
    }

    if(Tetris.options.soft_drop_delay === undefined)
    {
        Tetris.options.soft_drop_delay = 10
    }

    if(Tetris.options.block_texture === undefined)
    {
        Tetris.options.block_texture = "none.png"
    }

    if(Tetris.options.block_shape === undefined)
    {
        Tetris.options.block_shape = "rounded"
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
    Tetris.call_initial_option_actions()
    Tetris.setup_options_window()
}

Tetris.call_initial_option_actions = function()
{
    Tetris.option_background_action(Tetris.options.background)
    Tetris.option_goal_type_action(Tetris.options.goal_type)
    Tetris.option_block_texture_action(Tetris.options.block_texture)
    Tetris.option_block_shape_action(Tetris.options.block_shape)
}

Tetris.prepare_options_widgets = function()
{
    let h = $(`<option value='none.png'>None</option>`)
    $("#option_block_texture").append(h)

    for(let texture of Tetris.textures)
    {
        let h = $(`<option value='${texture.file_name}'>${texture.name}</option>`)
        $("#option_block_texture").append(h)
    }

    $("#options_container").find(".options_widget").each(function()
    {
        let type = $(this).data("options-widget-type")
        let id = $(this).attr("id").replace("option_", "")
        let option = Tetris.options[id]

        if(type === "checkbox")
        {
            $(this).prop("checked", option)
        }

        else if(type === "number" || type === "text" || type === "select")
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
                    if(Tetris[`option_${id}_action`](val))
                    {
                        Tetris.save_options()
                    }

                    else
                    {
                        $(`#option_${id}`).prop("checked", option)
                    }
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
                    if(Tetris[`option_${id}_action`](val))
                    {
                        Tetris.save_options()
                    }

                    else
                    {
                        $(`#option_${id}`).val(option)
                    }
                }
            })
        }

        else if(type === "select")
        {
            $(this).change(function()
            {  
                let option = Tetris.options[id]
                let val = $(this).find('option:selected').val()

                if(val !== option)
                {
                    if(Tetris[`option_${id}_action`](val))
                    {
                        Tetris.save_options()

                        if(id === "block_texture")
                        {
                            Tetris.show_texture_preview()
                        }
                    }

                    else
                    {
                        $(`#option_${id}`).val(option)
                    }
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

Tetris.apply_block_shape = function()
{
    let radius

    if(Tetris.options.block_shape === "square")
    {
        radius = "0%"
    }

    else if(Tetris.options.block_shape === "rounded")
    {
        radius = "25%"        
    }

    else if(Tetris.options.block_shape === "circle")
    {
        radius = "50%"
    }

    document.documentElement.style.setProperty('--block-shape', radius)
}

Tetris.apply_background = function()
{
    if(Tetris.options.background === "none")
    {
        $("#background").css("display", "none")
    }

    else
    {
        document.documentElement.style.setProperty('--background', `url("../img/bg${Tetris.options.background}.gif")`)
        $("#background").css("display", "block")
    }
}

Tetris.setup_options_window = function()
{
    $("#options_sidebar").on("click", ".options_category_item", function()
    {
        let category = $(this).attr("id").replace("options_category_item_", "")

        $("#options_content").find(".options_category").each(function()
        {
            let category2 = $(this).attr("id").replace("options_category_", "")
            
            if(category === category2)
            {
                $(this).css("display", "block")
                $(`#options_category_item_${category2}`).addClass("options_category_item_selected")
            }

            else
            {
                $(this).css("display", "none")
                $(`#options_category_item_${category2}`).removeClass("options_category_item_selected")
            }
        })
    })
}

Tetris.call_options_actions = function()
{
    for(let key in Tetris.options)
    {
        Tetris[`option_${key}_action`](Tetris.options[key])
    }
}

Tetris.show_texture_preview = function(change_piece=false)
{
    let name = $("#option_block_texture").find('option:selected').text()

    if(change_piece)
    {
        Tetris.current_texture_preview += 1
    }

    if(Tetris.current_texture_preview >= Tetris.pieces_list.length)
    {
        Tetris.current_texture_preview = 0
    }

    let piece = Tetris.pieces[Tetris.pieces_list[Tetris.current_texture_preview]]
    $("#texture_preview_element").html(piece.element_wheel_preview.clone())

    Tetris.msg_texture_preview.set_title(name)
    Tetris.msg_texture_preview.show()
}

Tetris.hide_texture_preview = function()
{
    Tetris.msg_texture_preview.close()
}

Tetris.set_random_block_texture = function(save=true)
{
    let options = $('#option_block_texture').find("option")
    let val = $(options[Math.floor(Math.random() * options.length)]).val()
    Tetris.previous_block_textures.push(Tetris.options.block_texture)

    $("#option_block_texture").val(val)
    $("#option_block_texture").change()
}

Tetris.set_previous_block_texture = function()
{
    if(Tetris.previous_block_textures.length === 0)
    {
        return false
    }

    let val = Tetris.previous_block_textures.pop()
    $("#option_block_texture").val(val)
    $("#option_block_texture").change()
}

Tetris.option_enable_ghost_action = function(val)
{
    Tetris.options.enable_ghost = val

    if(Tetris.options.enable_ghost)
    {
        Tetris.show_ghost()
    }

    else
    {
        Tetris.hide_ghost()
    }

    return true
}

Tetris.option_enable_music_action = function(val)
{
    Tetris.options.enable_music = val
    return true
}

Tetris.option_enable_sound_effects_action = function(val)
{
    Tetris.options.enable_sound_effects = val
    return true
}

Tetris.option_background_action = function(val)
{
    Tetris.options.background = val
    Tetris.apply_background()
    return true
}

Tetris.option_number_of_rows_action = function(val)
{
    let value = parseInt(val)

    if(value < 10)
    {
        return false
    }

    Tetris.options.number_of_rows = value
    return true
}

Tetris.option_number_of_columns_action = function(val)
{
    let value = parseInt(val)

    if(value < 10)
    {
        return false
    }

    Tetris.options.number_of_columns = value
    return true
}

Tetris.option_number_of_previews_action = function(val)
{
    let value = parseInt(val)

    if(value < 0)
    {
        return false
    }

    Tetris.options.number_of_previews = value
    Tetris.setup_previews()
    return true
}

Tetris.option_block_size_action = function(val)
{
    let value = parseInt(val)

    if(value < 4)
    {
        return false
    }

    Tetris.options.block_size = value
    return true
}

Tetris.option_seed_action = function(val)
{
    Tetris.options.seed = $("#option_seed").val().trim()
    return true
}

Tetris.option_goal_action = function(val)
{
    let value = parseInt(val)
    
    if(value < 1)
    {
        return false
    }
    
    Tetris.options.goal = value
    return true
}

Tetris.option_goal_type_action = function(val)
{
    Tetris.options.goal_type = val

    if(Tetris.options.goal_type === "none")
    {
        $("#options_item_goal").css("display", "none")
    }
    
    else
    {
        $("#options_item_goal").css("display", "block")
    }

    return true
}

Tetris.option_descent_multiplier_action = function(val)
{
    let value = parseInt(val)

    if(value < 1)
    {
        return false
    }

    Tetris.options.descent_multiplier = value
    return true
}

Tetris.option_min_descent_delay_action = function(val)
{
    let value = parseInt(val)

    if(value < 10)
    {
        return false
    }

    Tetris.options.min_descent_delay = value
    return true
}

Tetris.option_soft_drop_delay_action = function(val)
{
    let value = parseInt(val)

    if(value < 0)
    {
        return false
    }

    Tetris.options.soft_drop_delay = value
    return true
}

Tetris.option_block_texture_action = function(val)
{
    Tetris.options.block_texture = val
    Tetris.update_block_texture()
    return true
}

Tetris.option_block_shape_action = function(val)
{
    Tetris.options.block_shape = val
    Tetris.apply_block_shape()
    return true
}