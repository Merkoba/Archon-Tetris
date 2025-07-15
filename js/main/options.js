Tetris.ls_options = `ls_options_version_1`
Tetris.previous_block_textures = []

Tetris.reset_options = function(force = false) {
  if (force || confirm(`Are you sure you want to reset options to default?`)) {
    let original_options = Tetris.options
    Tetris.remove_local_storage(Tetris.ls_options)
    Tetris.get_options()
    Tetris.prepare_options_widgets()
    Tetris.call_options_actions(original_options)
  }
}

Tetris.save_options = function() {
  Tetris.save_local_storage(Tetris.ls_options, Tetris.options)
}

Tetris.get_options = function() {
  Tetris.options = Tetris.get_local_storage(Tetris.ls_options)

  let changed = false

  if (Tetris.options === null) {
    Tetris.options = {}
  }

  if (Tetris.options.ghost === undefined) {
    Tetris.options.ghost = true
    changed = true
  }

  if (Tetris.options.music === undefined) {
    Tetris.options.music = true
    changed = true
  }

  if (Tetris.options.sound_effects === undefined) {
    Tetris.options.sound_effects = true
    changed = true
  }

  if (Tetris.options.background === undefined) {
    Tetris.options.background = `1`
    changed = true
  }

  if (Tetris.options.background_url === undefined) {
    Tetris.options.background_url = ``
    changed = true
  }

  if (Tetris.options.number_of_rows === undefined) {
    Tetris.options.number_of_rows = 20
    changed = true
  }

  if (Tetris.options.number_of_columns === undefined) {
    Tetris.options.number_of_columns = 10
    changed = true
  }

  if (Tetris.options.number_of_previews === undefined) {
    Tetris.options.number_of_previews = 3
    changed = true
  }

  if (Tetris.options.block_size === undefined) {
    Tetris.options.block_size = 33
    changed = true
  }

  if (Tetris.options.seed === undefined) {
    Tetris.options.seed = ``
    changed = true
  }

  if (Tetris.options.goal === undefined) {
    Tetris.options.goal = 1
    changed = true
  }

  if (Tetris.options.goal_type === undefined) {
    Tetris.options.goal_type = `none`
    changed = true
  }

  if (Tetris.options.descent_multiplier === undefined) {
    Tetris.options.descent_multiplier = 20
    changed = true
  }

  if (Tetris.options.min_descent_delay === undefined) {
    Tetris.options.min_descent_delay = 80
    changed = true
  }

  if (Tetris.options.soft_drop_delay === undefined) {
    Tetris.options.soft_drop_delay = 10
    changed = true
  }

  if (Tetris.options.block_texture === undefined) {
    Tetris.options.block_texture = `none.png`
    changed = true
  }

  if (Tetris.options.block_texture_url === undefined) {
    Tetris.options.block_texture_url = ``
    changed = true
  }

  if (Tetris.options.block_shape === undefined) {
    Tetris.options.block_shape = `rounded`
    changed = true
  }

  if (Tetris.options.independence === undefined) {
    Tetris.options.independence = true
    changed = true
  }

  if (Tetris.options.big_pieces === undefined) {
    Tetris.options.big_pieces = true
    changed = true
  }

  if (Tetris.options.piece_picker === undefined) {
    Tetris.options.piece_picker = true
    changed = true
  }

  if (Tetris.options.level_goal === undefined) {
    Tetris.options.level_goal = 5
    changed = true
  }

  if (Tetris.options.pow_goal === undefined) {
    Tetris.options.pow_goal = 50
    changed = true
  }

  if (Tetris.options.big_piece_goal === undefined) {
    Tetris.options.big_piece_goal = 50
    changed = true
  }

  if (Tetris.options.warn_before_closing === undefined) {
    Tetris.options.warn_before_closing = false
    changed = true
  }

  if (Tetris.options.piece_picker_list === undefined) {
    Tetris.options.piece_picker_list = `normal_and_big`
    changed = true
  }

  if (Tetris.options.pow === undefined) {
    Tetris.options.pow = true
    changed = true
  }

  if (Tetris.options.piece_picker_goal === undefined) {
    Tetris.options.piece_picker_goal = 5
    changed = true
  }

  if (Tetris.options.piece_picker_queue === undefined) {
    Tetris.options.piece_picker_queue = 4
    changed = true
  }

  if (Tetris.options.hold === undefined) {
    Tetris.options.hold = true
    changed = true
  }

  if (Tetris.options.friends === undefined) {
    Tetris.options.friends = true
    changed = true
  }

  if (Tetris.options.friend_goal === undefined) {
    Tetris.options.friend_goal = 25
    changed = true
  }

  if (Tetris.options.friend_piece_goal === undefined) {
    Tetris.options.friend_piece_goal = 10
    changed = true
  }

  if (Tetris.options.piece_lock_delay === undefined) {
    Tetris.options.piece_lock_delay = 500
    changed = true
  }

  if (Tetris.options.hard_piece_lock_delay === undefined) {
    Tetris.options.hard_piece_lock_delay = 0
    changed = true
  }

  if (Tetris.options.active_piece === undefined) {
    Tetris.options.active_piece = true
    changed = true
  }

  if (changed) {
    Tetris.save_options()
  }
}

Tetris.setup_options = function() {
  Tetris.get_options()
  Tetris.prepare_options_widgets()
  Tetris.start_options_widget_listeners()
  Tetris.call_initial_option_actions()
  Tetris.setup_options_window()
}

Tetris.call_initial_option_actions = function() {
  Tetris.option_background_action(Tetris.options.background)
  Tetris.option_goal_type_action(Tetris.options.goal_type)
  Tetris.option_block_texture_action(Tetris.options.block_texture)
  Tetris.option_block_shape_action(Tetris.options.block_shape)
  Tetris.option_big_pieces_action(Tetris.options.big_pieces)
  Tetris.option_piece_picker_action(Tetris.options.piece_picker)
  Tetris.option_pow_action(Tetris.options.pow)
  Tetris.option_hold_action(Tetris.options.hold)
  Tetris.option_active_piece_action(Tetris.options.active_piece)
}

Tetris.prepare_options_widgets = function() {
  let h = $(`<option value='none.png'>None</option>`)
  $(`#option_block_texture`).append(h)

  h = $(`<option value='url'>URL</option>`)
  $(`#option_block_texture`).append(h)

  for (let texture of Tetris.textures) {
    let h = $(`<option value='${texture.file_name}'>${texture.name}</option>`)
    $(`#option_block_texture`).append(h)
  }

  $(`#options_container`).find(`.options_widget`).each(function() {
    let type = $(this).data(`options-widget-type`)
    let id = $(this).attr(`id`).replace(`option_`, ``)
    let option = Tetris.options[id]

    if (type === `checkbox`) {
      $(this).prop(`checked`, option)
    }
    else if ((type === `number`) || (type === `text`) || (type === `select`)) {
      $(this).val(option)
    }
  })
}

Tetris.start_options_widget_listeners = function() {
  $(`#options_container`).find(`.options_widget`).each(function() {
    let type = $(this).data(`options-widget-type`)
    let id = $(this).attr(`id`).replace(`option_`, ``)

    if (type === `checkbox`) {
      $(this).change(function() {
        let option = Tetris.options[id]
        let val = $(`#option_${id}`).prop(`checked`)

        if (val !== option) {
          if (Tetris[`option_${id}_action`](val)) {
            Tetris.save_options()
          }
          else {
            $(`#option_${id}`).prop(`checked`, option)
          }
        }
      })
    }
    else if ((type === `number`) || (type === `text`)) {
      $(this).change(function() {
        let option = Tetris.options[id]
        let val = $(`#option_${id}`).val()

        if (val !== option) {
          if (Tetris[`option_${id}_action`](val)) {
            Tetris.save_options()

            if (id === `block_texture_url`) {
              Tetris.show_texture_preview()
            }
          }
          else {
            $(`#option_${id}`).val(option)
          }
        }
      })
    }
    else if (type === `select`) {
      $(this).change(function() {
        let option = Tetris.options[id]
        let val = $(this).find(`option:selected`).val()

        if (val !== option) {
          if (Tetris[`option_${id}_action`](val)) {
            Tetris.save_options()

            if (id === `block_texture`) {
              Tetris.show_texture_preview()
            }
          }
          else {
            $(`#option_${id}`).val(option)
          }
        }
      })
    }
  })
}

Tetris.show_options = function() {
  Tetris.msg_options.show()
}

Tetris.on_options_close = function() {
  if (Tetris.on_intro) {
    return false
  }

  Tetris.check_initial_options()
}

Tetris.check_initial_options = function() {
  if (
    (Tetris.original_number_of_rows !== Tetris.options.number_of_rows) ||
    (Tetris.original_number_of_columns !== Tetris.options.number_of_columns) ||
    (Tetris.original_block_size !== Tetris.options.block_size) ||
    (Tetris.original_seed !== Tetris.options.seed)
  ) {
    if (confirm(`To apply these options the game must be restarted. Restart now?`)) {
      Tetris.start_game()
    }
  }
}

Tetris.apply_block_shape = function() {
  let radius

  if (Tetris.options.block_shape === `square`) {
    radius = `0%`
  }
  else if (Tetris.options.block_shape === `rounded`) {
    radius = `25%`
  }
  else if (Tetris.options.block_shape === `circle`) {
    radius = `50%`
  }

  document.documentElement.style.setProperty(`--block-shape`, radius)
}

Tetris.apply_background = function() {
  if (Tetris.options.background === `none`) {
    $(`#background`).css(`display`, `none`)
  }
  else if (Tetris.options.background === `url`) {
    let url = Tetris.options.background_url

    if (url) {
      document.documentElement.style.setProperty(`--background`, `url("${url}")`)
      $(`#background`).css(`display`, `block`)
    }
  }
  else {
    document.documentElement.style.setProperty(`--background`, `url(../img/bg${Tetris.options.background}.gif)`)
    $(`#background`).css(`display`, `block`)
  }
}

Tetris.update_block_texture = function() {
  let texture

  if (Tetris.options.block_texture === `url`) {
    texture = Tetris.options.block_texture_url
  }
  else {
    texture = `img/textures/${Tetris.options.block_texture}`
  }

  document.documentElement.style.setProperty(`--texture`, `url(${texture})`)
}

Tetris.setup_options_window = function() {
  $(`#options_sidebar`).on(`click`, `.options_category_item`, function() {
    let category = $(this).attr(`id`).replace(`options_category_item_`, ``)

    $(`#options_content`).find(`.options_category`).each(function() {
      let category2 = $(this).attr(`id`).replace(`options_category_`, ``)

      if (category === category2) {
        $(this).css(`display`, `block`)
        $(`#options_category_item_${category2}`).addClass(`options_category_item_selected`)
      }
      else {
        $(this).css(`display`, `none`)
        $(`#options_category_item_${category2}`).removeClass(`options_category_item_selected`)
      }
    })
  })
}

Tetris.call_options_actions = function(original_options) {
  for (let key in Tetris.options) {
    if (Tetris.options[key] !== original_options[key]) {
      Tetris[`option_${key}_action`](Tetris.options[key])
    }
  }
}

Tetris.show_texture_preview = function(change_piece = false) {
  let name = $(`#option_block_texture`).find(`option:selected`).text()

  if (change_piece) {
    Tetris.current_texture_preview += 1
  }

  if (Tetris.current_texture_preview >= Tetris.pieces_list.length) {
    Tetris.current_texture_preview = 0
  }

  let piece = Tetris.pieces[Tetris.pieces_list[Tetris.current_texture_preview]]
  $(`#texture_preview_element`).html(piece.element_wheel_preview.clone())

  Tetris.msg_texture_preview.set_title(name)
  Tetris.msg_texture_preview.show()
}

Tetris.hide_texture_preview = function() {
  Tetris.msg_texture_preview.close()
}

Tetris.set_random_block_texture = function(save = true) {
  let options = $(`#option_block_texture`).find(`option`)
  let val = $(options[Math.floor(Math.random() * options.length)]).val()
  Tetris.previous_block_textures.push(Tetris.options.block_texture)

  $(`#option_block_texture`).val(val)
  $(`#option_block_texture`).change()
}

Tetris.set_previous_block_texture = function() {
  if (Tetris.previous_block_textures.length === 0) {
    return false
  }

  let val = Tetris.previous_block_textures.pop()
  $(`#option_block_texture`).val(val)
  $(`#option_block_texture`).change()
}

Tetris.option_ghost_action = function(val) {
  Tetris.options.ghost = val

  if (Tetris.options.ghost) {
    Tetris.show_ghost()
  }
  else {
    Tetris.hide_ghost()
  }

  return true
}

Tetris.option_music_action = function(val) {
  Tetris.options.music = val
  return true
}

Tetris.option_sound_effects_action = function(val) {
  Tetris.options.sound_effects = val
  return true
}

Tetris.option_background_action = function(val) {
  Tetris.options.background = val

  if (Tetris.options.background === `url`) {
    $(`#options_item_background_url`).css(`display`, `block`)
  }
  else {
    $(`#options_item_background_url`).css(`display`, `none`)
  }

  Tetris.apply_background()
  return true
}

Tetris.option_background_url_action = function(val) {
  Tetris.options.background_url = val.trim()
  Tetris.apply_background()
  return true
}

Tetris.option_number_of_rows_action = function(val) {
  let value = parseInt(val)

  if (value < 10) {
    return false
  }

  Tetris.options.number_of_rows = value
  return true
}

Tetris.option_number_of_columns_action = function(val) {
  let value = parseInt(val)

  if (value < 10) {
    return false
  }

  Tetris.options.number_of_columns = value
  return true
}

Tetris.option_number_of_previews_action = function(val) {
  let value = parseInt(val)

  if (value < 0) {
    return false
  }

  Tetris.options.number_of_previews = value
  Tetris.setup_previews()
  return true
}

Tetris.option_block_size_action = function(val) {
  let value = parseInt(val)

  if (value < 4) {
    return false
  }

  Tetris.options.block_size = value
  return true
}

Tetris.option_seed_action = function(val) {
  Tetris.options.seed = $(`#option_seed`).val().trim()
  return true
}

Tetris.option_goal_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.goal = value
  return true
}

Tetris.option_goal_type_action = function(val) {
  Tetris.options.goal_type = val

  if (Tetris.options.goal_type === `none`) {
    $(`#options_item_goal`).css(`display`, `none`)
  }
  else {
    $(`#options_item_goal`).css(`display`, `block`)
  }

  return true
}

Tetris.option_descent_multiplier_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.descent_multiplier = value
  return true
}

Tetris.option_min_descent_delay_action = function(val) {
  let value = parseInt(val)

  if (value < 10) {
    return false
  }

  Tetris.options.min_descent_delay = value
  return true
}

Tetris.option_soft_drop_delay_action = function(val) {
  let value = parseInt(val)

  if (value < 0) {
    return false
  }

  Tetris.options.soft_drop_delay = value
  return true
}

Tetris.option_block_texture_action = function(val) {
  Tetris.options.block_texture = val

  if (Tetris.options.block_texture === `url`) {
    $(`#options_item_block_texture_url`).css(`display`, `block`)
  }
  else {
    $(`#options_item_block_texture_url`).css(`display`, `none`)
  }

  Tetris.update_block_texture()
  return true
}

Tetris.option_block_texture_url_action = function(val) {
  Tetris.options.block_texture_url = val.trim()
  Tetris.update_block_texture()
  return true
}

Tetris.option_block_shape_action = function(val) {
  Tetris.options.block_shape = val
  Tetris.apply_block_shape()
  return true
}

Tetris.option_independence_action = function(val) {
  Tetris.options.independence = val
  return true
}

Tetris.option_big_pieces_action = function(val) {
  Tetris.options.big_pieces = val

  if (Tetris.options.big_pieces) {
    $(`#options_item_big_piece_goal`).css(`display`, `block`)
  }
  else {
    $(`#options_item_big_piece_goal`).css(`display`, `none`)
  }

  return true
}

Tetris.option_piece_picker_action = function(val) {
  Tetris.options.piece_picker = val

  if (Tetris.options.piece_picker) {
    $(`#options_item_piece_picker_list`).css(`display`, `block`)
    $(`#options_item_piece_picker_goal`).css(`display`, `block`)
    $(`#options_item_piece_picker_queue`).css(`display`, `block`)
  }
  else {
    $(`#options_item_piece_picker_list`).css(`display`, `none`)
    $(`#options_item_piece_picker_goal`).css(`display`, `none`)
    $(`#options_item_piece_picker_queue`).css(`display`, `none`)
  }

  return true
}

Tetris.option_level_goal_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.level_goal = value
  return true
}

Tetris.option_pow_goal_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.pow_goal = value
  return true
}

Tetris.option_big_piece_goal_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.big_piece_goal = value
  return true
}

Tetris.option_warn_before_closing_action = function(val) {
  Tetris.options.warn_before_closing = val
  return true
}

Tetris.option_piece_picker_list_action = function(val) {
  Tetris.options.piece_picker_list = val
  return true
}

Tetris.option_pow_action = function(val) {
  Tetris.options.pow = val

  if (Tetris.options.pow) {
    $(`#options_item_pow_goal`).css(`display`, `block`)
  }
  else {
    $(`#options_item_pow_goal`).css(`display`, `none`)
  }

  return true
}

Tetris.option_piece_picker_goal_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.piece_picker_goal = value
  return true
}

Tetris.option_piece_picker_queue_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.piece_picker_queue = value
  return true
}

Tetris.option_hold_action = function(val) {
  Tetris.options.hold = val

  if (Tetris.options.hold) {
    $(`#hold_piece`).css(`display`, `flex`)
  }
  else {
    $(`#hold_piece`).css(`display`, `none`)
  }

  if (!Tetris.options.hold && !Tetris.options.friends) {
    $(`#sidebar_left`).css(`display`, `none`)
  }
  else {
    $(`#sidebar_left`).css(`display`, `flex`)
  }

  return true
}

Tetris.option_friends_action = function(val) {
  Tetris.options.friends = val

  if (Tetris.options.friends) {
    $(`#options_item_friend_goal`).css(`display`, `block`)
    $(`#options_item_friend_piece_goal`).css(`display`, `block`)
  }
  else {
    $(`#options_item_friend_goal`).css(`display`, `none`)
    $(`#options_item_friend_piece_goal`).css(`display`, `none`)
  }

  if (!Tetris.options.hold && !Tetris.options.friends) {
    $(`#sidebar_left`).css(`display`, `none`)
  }
  else {
    $(`#sidebar_left`).css(`display`, `flex`)
  }

  return true
}

Tetris.option_friend_goal_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.friend_goal = value
  return true
}

Tetris.option_friend_piece_goal_action = function(val) {
  let value = parseInt(val)

  if (value < 1) {
    return false
  }

  Tetris.options.friend_piece_goal = value
  return true
}

Tetris.option_piece_lock_delay_action = function(val) {
  let value = parseInt(val)

  if (value < 0) {
    return false
  }

  Tetris.options.piece_lock_delay = value
  return true
}

Tetris.option_hard_piece_lock_delay_action = function(val) {
  let value = parseInt(val)

  if (value < 0) {
    return false
  }

  Tetris.options.hard_piece_lock_delay = value
  return true
}

Tetris.option_active_piece_action = function(val) {
  Tetris.options.active_piece = val

  if (Tetris.options.active_piece) {
    $(`#active_piece`).css(`display`, `flex`)
  }
  else {
    $(`#active_piece`).css(`display`, `none`)
  }

  return true
}