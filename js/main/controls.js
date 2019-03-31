Tetris.ls_controls = "ls_controls_v1"

Tetris.show_controls = function()
{
    Tetris.msg_controls.show()
}

Tetris.setup_controls = function()
{
    Tetris.get_controls()
    Tetris.fill_control_inputs()
    Tetris.prepare_control_inputs()
}

Tetris.save_controls = function()
{
    Tetris.save_local_storage(Tetris.ls_controls, Tetris.controls)
}

Tetris.get_controls = function()
{
    Tetris.controls = Tetris.get_local_storage(Tetris.ls_controls)

    let changed = false

    if(Tetris.controls === null)
    {
        Tetris.controls = {}
    }

    if(Tetris.controls.move_left === undefined)
    {
        Tetris.controls.move_left = "ArrowLeft"
        changed = true
    }

    if(Tetris.controls.move_right === undefined)
    {
        Tetris.controls.move_right = "ArrowRight"
        changed = true
    }

    if(Tetris.controls.soft_drop === undefined)
    {
        Tetris.controls.soft_drop = "ArrowDown"
        changed = true
    }

    if(Tetris.controls.hard_drop === undefined)
    {
        Tetris.controls.hard_drop = " "
        changed = true
    }

    if(Tetris.controls.rotate_left === undefined)
    {
        Tetris.controls.rotate_left = "Control"
        changed = true
    }

    if(Tetris.controls.rotate_right === undefined)
    {
        Tetris.controls.rotate_right = "ArrowUp"
        changed = true
    }

    if(Tetris.controls.activate_pow === undefined)
    {
        Tetris.controls.activate_pow = "Enter"
        changed = true
    }

    if(Tetris.controls.restart_game === undefined)
    {
        Tetris.controls.restart_game = "Backspace"
        changed = true
    }

    if(Tetris.controls.piece_picker_next === undefined)
    {
        Tetris.controls.piece_picker_next = "ArrowRight"
        changed = true
    }

    if(Tetris.controls.piece_picker_previous === undefined)
    {
        Tetris.controls.piece_picker_previous = "ArrowLeft"
        changed = true
    }

    if(changed)
    {
        Tetris.save_controls()
    }
}

Tetris.fill_control_inputs = function()
{
    $("#controls_container").find(".controls_input").each(function()
    {
        let id = $(this).attr("id")
        let control = id.replace("control_", "")
        let s = Tetris.controls[control]

        if(s === "")
        {
            s = "Not Set"
        }

        else if(s === " ")
        {
            s = "Spacebar"
        }

        $(this).val(s)
    })
}

Tetris.prepare_control_inputs = function()
{
    $("#controls_container").on("keyup", ".controls_input", function(event)
    {
        let e = event.originalEvent
        let id = $(this).attr("id")
        let control = id.replace("control_", "")
        let category = $(this).data("category")

        for(let key in Tetris.controls)
        {
            if(Tetris.controls[key] === e.key)
            {
                let category2 = $(`#control_${key}`).data("category")

                if(category === category2)
                {
                    Tetris.controls[key] = ""
                    $(`#control_${key}`).val("Not Set")
                    break
                }
            }
        }

        Tetris.controls[control] = e.key

        let s = e.key

        if(s === "")
        {
            s = "Not Set"
        }

        else if(s === " ")
        {
            s = "Spacebar"
        }

        $(this).val(s)

        Tetris.save_controls()
    })
}

Tetris.reset_controls = function()
{
    if(confirm("Are you sure you want to reset controls to default?"))
    {
        Tetris.remove_local_storage(Tetris.ls_controls)
        Tetris.get_controls()
        Tetris.fill_control_inputs()
    }
}