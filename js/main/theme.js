Tetris.ls_theme = "ls_theme_v1"
Tetris.colorlib = ColorLib()

Tetris.show_theme = function()
{
    Tetris.msg_theme.show()
}

Tetris.setup_theme = function()
{
    Tetris.get_theme()
    Tetris.fill_theme_inputs()
    Tetris.prepare_theme_inputs()
    Tetris.apply_theme()
}

Tetris.save_theme = function()
{
    Tetris.save_local_storage(Tetris.ls_theme, Tetris.theme)
}

Tetris.get_theme = function()
{
    Tetris.theme = Tetris.get_local_storage(Tetris.ls_theme)

    let changed = false

    if(Tetris.theme === null)
    {
        Tetris.theme = {}
    }

    if(Tetris.theme.stick === undefined)
    {
        Tetris.theme.stick = "#35f3f3"
        changed = true
    }

    if(Tetris.theme.periscope_right === undefined)
    {
        Tetris.theme.periscope_right = "#ffbd42"
        changed = true
    }

    if(Tetris.theme.periscope_left === undefined)
    {
        Tetris.theme.periscope_left = "#4545ff"
        changed = true
    }

    if(Tetris.theme.dog_right === undefined)
    {
        Tetris.theme.dog_right = "#00ff00"
        changed = true
    }

    if(Tetris.theme.dog_left === undefined)
    {
        Tetris.theme.dog_left = "#ff3e3e"
        changed = true
    }

    if(Tetris.theme.square === undefined)
    {
        Tetris.theme.square = "#ffff65"
        changed = true
    }

    if(Tetris.theme.tee === undefined)
    {
        Tetris.theme.tee = "#8b188b"
        changed = true
    }

    if(Tetris.theme.independent === undefined)
    {
        Tetris.theme.independent = "#f1f1f1"
        changed = true
    }

    if(changed)
    {
        Tetris.save_theme()
    }
}

Tetris.fill_theme_inputs = function()
{
    $("#theme_container").find(".theme_color").each(function()
    {
        let id = $(this).attr("id")
        let theme = id.replace("theme_color_", "")
        $(this).val(Tetris.theme[theme])
    })
}

Tetris.prepare_theme_inputs = function()
{
    $("#theme_container").on("change", ".theme_color", function()
    {
        let id = $(this).attr("id")
        let theme = id.replace("theme_color_", "")
        Tetris.theme[theme] = $(this).val()
        Tetris.apply_theme()
        Tetris.save_theme()
    })
}

Tetris.reset_theme = function()
{
    if(confirm("Are you sure you want to reset the theme to default?"))
    {
        Tetris.remove_local_storage(Tetris.ls_theme)
        Tetris.get_theme()
        Tetris.fill_theme_inputs()
        Tetris.apply_theme()
    }
}

Tetris.apply_theme = function()
{
    let styles = ""

    for(let key in Tetris.theme)
    {
        let color = Tetris.theme[key]
        let color_2 = Tetris.colorlib.get_lighter_or_darker(color, 0.2)

        styles += 
        `.piece_type_${key}, .piece_type_${key}_2
        {
            background: var(--texture), linear-gradient(${color}, ${color_2});
            background-size: var(--piece-background-size)
        }`
    }

    let css = `
    <style class='appended_theme_style'>
        ${styles}
    </style>`

    $(".appended_theme_style").each(function()
    {
        $(this).remove()
    })

    $("head").append(css)
}