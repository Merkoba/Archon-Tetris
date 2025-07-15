Tetris.ls_theme = `ls_theme_v1`
Tetris.colorlib = ColorLib()

Tetris.show_theme = function() {
  Tetris.msg_theme.show()
}

Tetris.setup_theme = function() {
  Tetris.get_theme()
  Tetris.fill_theme_elements()
  Tetris.fill_theme_inputs()
  Tetris.prepare_theme_inputs()
  Tetris.apply_theme()
}

Tetris.save_theme = function() {
  Tetris.save_local_storage(Tetris.ls_theme, Tetris.theme)
}

Tetris.get_theme = function() {
  Tetris.theme = Tetris.get_local_storage(Tetris.ls_theme)

  let changed = false

  if (Tetris.theme === null) {
    Tetris.theme = {}
  }

  if (Tetris.theme.stick === undefined) {
    Tetris.theme.stick = `#35f3f3`
    changed = true
  }

  if (Tetris.theme.periscope_right === undefined) {
    Tetris.theme.periscope_right = `#ffc46c`
    changed = true
  }

  if (Tetris.theme.periscope_left === undefined) {
    Tetris.theme.periscope_left = `#5d8fff`
    changed = true
  }

  if (Tetris.theme.dog_right === undefined) {
    Tetris.theme.dog_right = `#6bff6b`
    changed = true
  }

  if (Tetris.theme.dog_left === undefined) {
    Tetris.theme.dog_left = `#f86767`
    changed = true
  }

  if (Tetris.theme.square === undefined) {
    Tetris.theme.square = `#ffff65`
    changed = true
  }

  if (Tetris.theme.tee === undefined) {
    Tetris.theme.tee = `#b66cd5`
    changed = true
  }

  if (Tetris.theme.independent === undefined) {
    Tetris.theme.independent = `#f1f1f1`
    changed = true
  }

  if (Tetris.theme.grid === undefined) {
    Tetris.theme.grid = `#2f3237`
    changed = true
  }

  if (Tetris.theme.gradient === undefined) {
    Tetris.theme.gradient = 100
    changed = true
  }

  if (Tetris.theme.grid_transparency === undefined) {
    Tetris.theme.grid_transparency = 40
    changed = true
  }

  if (Tetris.theme.body === undefined) {
    Tetris.theme.body = `#1e1e1e`
    changed = true
  }

  if (Tetris.theme.grid_lines_contrast === undefined) {
    Tetris.theme.grid_lines_contrast = 20
    changed = true
  }

  if (Tetris.theme.ghost_transparency === undefined) {
    Tetris.theme.ghost_transparency = 70
    changed = true
  }

  if (Tetris.theme.background_transparency === undefined) {
    Tetris.theme.background_transparency = `big`
    changed = true
  }

  if (changed) {
    Tetris.save_theme()
  }
}

Tetris.fill_theme_elements = function() {
  $(`#theme_container`).find(`.theme_element`).each(function() {
    let id = $(this).attr(`id`)
    let theme = id.replace(`theme_element_`, ``)
    $(this).html(Tetris.pieces[theme].element_wheel_preview.clone())
  })
}

Tetris.fill_theme_inputs = function() {
  $(`#theme_container`).find(`.theme_color`).each(function() {
    let id = $(this).attr(`id`)
    let theme = id.replace(`theme_color_`, ``)
    $(this).val(Tetris.theme[theme])
  })

  $(`#theme_gradient`).val(Tetris.theme.gradient)
  $(`#theme_grid_transparency`).val(Tetris.theme.grid_transparency)
  $(`#theme_grid_lines_contrast`).val(Tetris.theme.grid_lines_contrast)
  $(`#theme_ghost_transparency`).val(Tetris.theme.ghost_transparency)
  $(`#theme_background_transparency`).val(Tetris.theme.background_transparency)
}

Tetris.prepare_theme_inputs = function() {
  $(`#theme_container`).on(`change`, `.theme_color`, function() {
    let id = $(this).attr(`id`)
    let theme = id.replace(`theme_color_`, ``)
    Tetris.theme[theme] = $(this).val()
    Tetris.apply_theme()
    Tetris.save_theme()
  })

  $(`#theme_gradient`).on(`change`, function() {
    Tetris.theme.gradient = parseInt($(this).find(`option:selected`).val())
    Tetris.apply_theme()
    Tetris.save_theme()
  })

  $(`#theme_grid_transparency`).on(`change`, function() {
    Tetris.theme.grid_transparency = parseInt($(this).find(`option:selected`).val())
    Tetris.apply_theme()
    Tetris.save_theme()
  })

  $(`#theme_grid_lines_contrast`).on(`change`, function() {
    Tetris.theme.grid_lines_contrast = parseInt($(this).find(`option:selected`).val())
    Tetris.apply_theme()
    Tetris.save_theme()
  })

  $(`#theme_ghost_transparency`).on(`change`, function() {
    Tetris.theme.ghost_transparency = parseInt($(this).find(`option:selected`).val())
    Tetris.apply_theme()
    Tetris.save_theme()
  })

  $(`#theme_background_transparency`).on(`change`, function() {
    Tetris.theme.background_transparency = $(this).find(`option:selected`).val()
    Tetris.apply_theme()
    Tetris.save_theme()
  })
}

Tetris.reset_theme = function(force = false) {
  if (force || confirm(`Are you sure you want to reset the theme to default?`)) {
    Tetris.remove_local_storage(Tetris.ls_theme)
    Tetris.get_theme()
    Tetris.fill_theme_inputs()
    Tetris.apply_theme()
  }
}

Tetris.apply_theme = function() {
  let styles = ``
  let opacity = (100 - Tetris.theme.grid_transparency) / 100
  let grid = Tetris.colorlib.array_to_rgb(Tetris.colorlib.hex_to_rgb(Tetris.theme.grid))
  let grid_2 = Tetris.colorlib.rgb_to_rgba(grid, opacity)
  let block = Tetris.colorlib.get_lighter_or_darker(grid, Tetris.theme.grid_lines_contrast / 100)
  let block_2 = Tetris.colorlib.rgb_to_rgba(block, opacity)
  let flash = Tetris.colorlib.get_lighter_or_darker(grid, 0.8)
  let flash_2 = Tetris.colorlib.rgb_to_rgba(flash, 0.4)
  let body = Tetris.colorlib.array_to_rgb(Tetris.colorlib.hex_to_rgb(Tetris.theme.body))
  let text = Tetris.colorlib.get_lighter_or_darker(body, 0.9)
  let ghost_transparency = (100 - Tetris.theme.ghost_transparency) / 100

  let background_transparency

  if (Tetris.theme.background_transparency === `none`) {
    background_transparency = 1
  }
  else if (Tetris.theme.background_transparency === `small`) {
    background_transparency = 0.5
  }
  else if (Tetris.theme.background_transparency === `big`) {
    background_transparency = 0.025
  }
  else if (Tetris.theme.background_transparency === `full`) {
    background_transparency = 0
  }

  for (let key in Tetris.theme) {
    if (!Tetris.pieces_list.includes(key) && (key !== `independent`)) {
      continue
    }

    let color = Tetris.colorlib.array_to_rgb(Tetris.colorlib.hex_to_rgb(Tetris.theme[key]))
    let color_2 = Tetris.colorlib.get_lighter_or_darker(color, 0.2)
    let color_3 = Tetris.colorlib.get_lighter_or_darker(color, 0.5)
    let background

    if (Tetris.theme.gradient === 0) {
      background = `var(--texture), ${color}`
    }
    else {
      background = `var(--texture), linear-gradient(${color} ${100 - Tetris.theme.gradient}%, ${color_2} 100%)`
    }

    styles +=
        `.piece_type_${key}, .piece_type_${key}_2
        {
            background: ${background};
            background-size: var(--piece-background-size);
            box-shadow: inset 0 0 2px ${color_3};
        }`
  }

  let css = `
    <style class='appended_theme_style'>
        ${styles}

        body, html
        {
            color: ${text};
            background-color: ${body};
        }

        #game
        {
            background-color: ${grid_2};
        }

        .game_box
        {
            background-color: ${body}
        }

        .block
        {
            box-shadow: inset 0 0 1px ${block_2};
        }

        .game_flash
        {
            background-color: ${flash_2} !important;
        }

        .game_flash .block
        {
            box-shadow: inset 0 0 1px ${flash_2} !important;
        }

        .piece_flash .placed_block
        {
            box-shadow: 0 0 12px ${flash};
        }

        .pow_active
        {
            box-shadow: 0 0 8px ${flash} !important;
        }

        .preview, #hold_piece, #friend_element
        {
            box-shadow: inset 0 0 2px ${text};
        }

        #active_piece
        {
            box-shadow: inset 0 0 30px ${text};
        }

        .ghost .piece_block
        {
            opacity: ${ghost_transparency};
        }

        #background
        {
            opacity: ${background_transparency};
        }
    </style>`

  $(`.appended_theme_style`).each(function() {
    $(this).remove()
  })

  $(`head`).append(css)
}