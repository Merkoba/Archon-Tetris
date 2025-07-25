Tetris.element_preview_block_size = 15
Tetris.element_preview_block_size_2 = 10
Tetris.element_wheel_preview_block_size = 40
Tetris.element_wheel_preview_block_size_2 = 35
Tetris.initial_descent_delay = 800
// Tetris.debug_queue = ["stick_2", "periscope_right_2", "periscope_left_2", "dog_right_2", "dog_left_2", "square_2", "tee_2"]
Tetris.debug_queue = []

Tetris.create_pieces = function() {
  Tetris.pieces =
    {
      stick:
        {
          name: `stick`,
          modes:
            [
              {
                width: 1,
                height: 4,
              },
              {
                width: 4,
                height: 1,
              },
            ],
          map: [[0, 0], [0, 1], [0, 2], [0, 3]],
          space:
            {
              left: 1,
              right: 2,
              top: 0,
              bottom: 0,
            },
        },
      stick_2:
        {
          name: `stick_2`,
          modes:
            [
              {
                width: 1,
                height: 8,
              },
              {
                width: 8,
                height: 1,
              },
            ],
          map: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
          space:
            {
              left: 3,
              right: 4,
              top: 0,
              bottom: 0,
            },
        },
      periscope_right:
        {
          name: `periscope_right`,
          modes:
            [
              {
                width: 2,
                height: 3,
              },
              {
                width: 3,
                height: 2,
              },
              {
                width: 2,
                height: 3,
              },
              {
                width: 3,
                height: 2,
              },
            ],
          map: [[0, 0], [1, 0], [0, 1], [0, 2]],
          space:
            {
              left: 1,
              right: 0,
              top: 0,
              bottom: 0,
            },
        },
      periscope_right_2:
        {
          name: `periscope_right_2`,
          modes:
            [
              {
                width: 4,
                height: 5,
              },
              {
                width: 5,
                height: 4,
              },
              {
                width: 4,
                height: 5,
              },
              {
                width: 5,
                height: 4,
              },
            ],
          map: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
          space:
            {
              left: 1,
              right: 0,
              top: 0,
              bottom: 0,
            },
        },
      periscope_left:
        {
          name: `periscope_left`,
          modes:
            [
              {
                width: 2,
                height: 3,
              },
              {
                width: 3,
                height: 2,
              },
              {
                width: 2,
                height: 3,
              },
              {
                width: 3,
                height: 2,
              },
            ],
          map: [[0, 0], [1, 0], [1, 1], [1, 2]],
          space:
            {
              left: 0,
              right: 1,
              top: 0,
              bottom: 0,
            },
        },
      periscope_left_2:
        {
          name: `periscope_left_2`,
          modes:
            [
              {
                width: 4,
                height: 5,
              },
              {
                width: 5,
                height: 4,
              },
              {
                width: 4,
                height: 5,
              },
              {
                width: 5,
                height: 4,
              },
            ],
          map: [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4]],
          space:
            {
              left: 0,
              right: 1,
              top: 0,
              bottom: 0,
            },
        },
      dog_right:
        {
          name: `dog_right`,
          modes:
            [
              {
                width: 3,
                height: 2,
              },
              {
                width: 2,
                height: 3,
              },
            ],
          map: [[0, 0], [1, 0], [1, 1], [2, 1]],
          space:
            {
              left: 0,
              right: 0,
              top: 0,
              bottom: 1,
            },
        },
      dog_right_2:
        {
          name: `dog_right_2`,
          modes:
            [
              {
                width: 5,
                height: 4,
              },
              {
                width: 4,
                height: 5,
              },
            ],
          map: [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [3, 3], [4, 3]],
          space:
            {
              left: 0,
              right: 0,
              top: 0,
              bottom: 1,
            },
        },
      dog_left:
        {
          name: `dog_left`,
          modes:
            [
              {
                width: 3,
                height: 2,
              },
              {
                width: 2,
                height: 3,
              },
            ],
          map: [[1, 0], [2, 0], [0, 1], [1, 1]],
          space:
            {
              left: 0,
              right: 0,
              top: 0,
              bottom: 1,
            },
        },
      dog_left_2:
        {
          name: `dog_left_2`,
          modes:
            [
              {
                width: 5,
                height: 4,
              },
              {
                width: 4,
                height: 5,
              },
            ],
          map: [[2, 0], [3, 0], [4, 0], [2, 1], [2, 2], [0, 3], [1, 3], [2, 3]],
          space:
            {
              left: 0,
              right: 0,
              top: 0,
              bottom: 1,
            },
        },
      square:
        {
          name: `square`,
          modes:
            [
              {
                width: 2,
                height: 2,
              },
            ],
          map: [[0, 0], [1, 0], [0, 1], [1, 1]],
          space:
            {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
        },
      square_2:
        {
          name: `square_2`,
          modes:
            [
              {
                width: 2,
                height: 4,
              },
              {
                width: 4,
                height: 2,
              },
            ],
          map: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2], [1, 2], [0, 3], [1, 3]],
          space:
            {
              left: 1,
              right: 1,
              top: 0,
              bottom: 0,
            },
        },
      tee:
        {
          name: `tee`,
          modes:
            [
              {
                width: 3,
                height: 2,
              },
              {
                width: 2,
                height: 3,
              },
              {
                width: 3,
                height: 2,
              },
              {
                width: 2,
                height: 3,
              },
            ],
          map: [[0, 0], [1, 0], [2, 0], [1, 1]],
          space:
            {
              left: 0,
              right: 0,
              top: 0,
              bottom: 1,
            },
        },
      tee_2:
        {
          name: `tee_2`,
          modes:
            [
              {
                width: 5,
                height: 4,
              },
              {
                width: 4,
                height: 5,
              },
              {
                width: 5,
                height: 4,
              },
              {
                width: 4,
                height: 5,
              },
            ],
          map: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, 1], [2, 2], [2, 3]],
          space:
            {
              left: 0,
              right: 0,
              top: 0,
              bottom: 1,
            },
        },
      independent:
        {
          name: `independent`,
          modes:
            [
              {
                width: 1,
                height: 1,
              },
            ],
          map: [[0, 0]],
          space:
            {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
        },
    }

  Tetris.pieces_list = []
  Tetris.big_pieces_list = []
  Tetris.full_pieces_list = []

  for (let key in Tetris.pieces) {
    Tetris.full_pieces_list.push(key)

    let preview_block_size, wheel_preview_block_size

    if (key.includes(`_2`)) {
      Tetris.big_pieces_list.push(key)
      preview_block_size = Tetris.element_preview_block_size_2
      wheel_preview_block_size = Tetris.element_wheel_preview_block_size_2
    }
    else {
      if (key !== `independent`) {
        Tetris.pieces_list.push(key)
      }

      preview_block_size = Tetris.element_preview_block_size
      wheel_preview_block_size = Tetris.element_wheel_preview_block_size
    }

    let piece = Tetris.pieces[key]
    let first_mode = piece.modes[0]
    let map = piece.map

    let padding_left = piece.space.left * Tetris.block_size
    let padding_right = piece.space.right * Tetris.block_size
    let padding_top = piece.space.top * Tetris.block_size
    let padding_bottom = piece.space.bottom * Tetris.block_size

    let width = first_mode.width * Tetris.block_size
    let height = first_mode.height * Tetris.block_size

    let piece_container_element = $(`<div class='piece_container'></div>`)
    piece_container_element.css(`width`, `${width}px`)
    piece_container_element.css(`height`, `${height}px`)
    piece_container_element.css(`padding-left`, `${padding_left}px`)
    piece_container_element.css(`padding-right`, `${padding_right}px`)
    piece_container_element.css(`padding-top`, `${padding_top}px`)
    piece_container_element.css(`padding-bottom`, `${padding_bottom}px`)

    let piece_element = $(`<div class='piece'></div>`)
    piece_element.css(`width`, `${width}px`)
    piece_element.css(`height`, `${height}px`)

    let width2 = first_mode.width * preview_block_size
    let height2 = first_mode.height * preview_block_size

    let piece_element_preview = $(`<div class='piece'></div>`)
    piece_element_preview.css(`width`, `${width2}px`)
    piece_element_preview.css(`height`, `${height2}px`)

    let width3 = first_mode.width * wheel_preview_block_size
    let height3 = first_mode.height * wheel_preview_block_size

    let piece_element_wheel_preview = $(`<div class='piece'></div>`)
    piece_element_wheel_preview.css(`width`, `${width3}px`)
    piece_element_wheel_preview.css(`height`, `${height3}px`)

    let x = 0
    let x2 = 0
    let x3 = 0
    let y = 0
    let y2 = 0
    let y3 = 0
    let map_n = 0
    let break_loops = false

    for (let py = 0; py < first_mode.height; py++) {
      if (break_loops) {
        break
      }

      for (let px = 0; px < first_mode.width; px++) {
        let map_x = map[map_n][0]
        let map_y = map[map_n][1]

        if ((map_x === px) && (map_y === py)) {
          let piece_block_element = $(`<div class='piece_block piece_type_${key}'></div>`)
          piece_block_element.css(`width`, `${Tetris.block_size}px`)
          piece_block_element.css(`height`, `${Tetris.block_size}px`)
          piece_block_element.css(`left`, x)
          piece_block_element.css(`bottom`, y)

          piece_element.append(piece_block_element)

          let piece_block_element_preview = $(`<div class='piece_block piece_type_${key}'></div>`)
          piece_block_element_preview.css(`width`, `${preview_block_size}px`)
          piece_block_element_preview.css(`height`, `${preview_block_size}px`)
          piece_block_element_preview.css(`left`, x2)
          piece_block_element_preview.css(`bottom`, y2)

          piece_element_preview.append(piece_block_element_preview)

          let piece_block_element_wheel_preview = $(`<div class='piece_block piece_type_${key}'></div>`)
          piece_block_element_wheel_preview.css(`width`, `${wheel_preview_block_size}px`)
          piece_block_element_wheel_preview.css(`height`, `${wheel_preview_block_size}px`)
          piece_block_element_wheel_preview.css(`left`, x3)
          piece_block_element_wheel_preview.css(`bottom`, y3)

          piece_element_wheel_preview.append(piece_block_element_wheel_preview)

          if (map_n === map.length - 1) {
            break_loops = true
            break
          }

          map_n += 1
        }

        x += Tetris.block_size
        x2 += preview_block_size
        x3 += wheel_preview_block_size
      }

      x = 0
      x2 = 0
      x3 = 0
      y += Tetris.block_size
      y2 += preview_block_size
      y3 += wheel_preview_block_size
    }

    piece_container_element.append(piece_element)
    piece.element = piece_container_element
    piece.element_preview = piece_element_preview
    piece.element_wheel_preview = piece_element_wheel_preview
  }
}

Tetris.get_random_piece = function(bag = false) {
  if (bag) {
    let nums = []
    let names = []

    for (let i = 0; i < 7; i++) {
      let n = Tetris.get_random_int(
        {
          min: 1,
          max: Tetris.pieces_list.length,
          exclude: nums,
        },
      )

      names.push(Tetris.get_piece_name(n))
      nums.push(n)
    }

    return names
  }

  let n = Tetris.get_random_int(
    {
      min: 1,
      max: Tetris.pieces_list.length,
    },
  )

  return Tetris.get_piece_name(n)
}

Tetris.get_piece_name = function(n) {
  let name

  if (n === 1) {
    name = `stick`
  }
  else if (n === 2) {
    name = `periscope_right`
  }
  else if (n === 3) {
    name = `periscope_left`
  }
  else if (n === 4) {
    name = `dog_right`
  }
  else if (n === 5) {
    name = `dog_left`
  }
  else if (n === 6) {
    name = `square`
  }
  else if (n === 7) {
    name = `tee`
  }

  return name
}

Tetris.get_random_big_piece = function() {
  let n = Tetris.get_random_int(
    {
      min: 1,
      max: Tetris.big_pieces_list.length,
      seed: Tetris.random_2,
    },
  )

  let name

  if (n === 1) {
    name = `stick_2`
  }
  else if (n === 2) {
    name = `periscope_right_2`
  }
  else if (n === 3) {
    name = `periscope_left_2`
  }
  else if (n === 4) {
    name = `dog_right_2`
  }
  else if (n === 5) {
    name = `dog_left_2`
  }
  else if (n === 6) {
    name = `square_2`
  }
  else if (n === 7) {
    name = `tee_2`
  }

  return name
}

Tetris.place_next_piece = function(piece_name = false, held = false) {
  if (!Tetris.game_started) {
    return false
  }

  if (Tetris.show_piece_picker_next) {
    Tetris.show_piece_picker_next = false
    Tetris.show_piece_picker()
    return false
  }

  let piece

  if (piece_name) {
    piece = Tetris.pieces[piece_name]
  }
  else if (Tetris.debug_queue.length > 0) {
    piece = Tetris.pieces[Tetris.debug_queue.shift()]
  }
  else if (Tetris.queued_left > 0) {
    piece = Tetris.pieces[Tetris.queued_piece]
    Tetris.queued_left -= 1

    if (Tetris.queued_left > 0) {
      $(`#queued_left`).text(Tetris.queued_left)
    }
    else {
      $(`#queued_left`).text(``)
    }
  }
  else if (Tetris.big_piece_next) {
    Tetris.big_piece_next = false
    piece = Tetris.pieces[Tetris.get_random_big_piece()]
  }
  else
    if (Tetris.previews.length > 0) {
      piece = Tetris.pieces[Tetris.previews.shift()]
    }
    else {
      piece = Tetris.pieces[Tetris.get_random_piece()]
    }

  // piece = Tetris.pieces["stick"]
  // piece = Tetris.pieces["stick_2"]
  // piece = Tetris.pieces["periscope_right"]
  // piece = Tetris.pieces["periscope_right_2"]
  // piece = Tetris.pieces["periscope_left"]
  // piece = Tetris.pieces["periscope_left_2"]
  // piece = Tetris.pieces["dog_right"]
  // piece = Tetris.pieces["dog_right_2"]
  // piece = Tetris.pieces["dog_left"]
  // piece = Tetris.pieces["dog_left_2"]
  // piece = Tetris.pieces["square"]
  // piece = Tetris.pieces["square_2"]
  // piece = Tetris.pieces["tee"]
  // piece = Tetris.pieces["tee_2"]

  let element = piece.element.clone(true, true)
  let top = 0 - (piece.modes[0].height * Tetris.block_size)
  let left = Tetris.block_size * parseInt((Tetris.num_horizontal_blocks / 2) - (piece.modes[0].width / 2) - piece.space.left)

  element.css(`top`, `${top}px`)
  element.css(`left`, `${left}px`)
  Tetris.game.append(element)
  Tetris.current_element = element
  Tetris.current_degrees = 0
  Tetris.current_mode = 0
  Tetris.current_piece = piece
  Tetris.piece_active = true
  Tetris.piece_getting_locked = false
  Tetris.doing_soft_drop = false
  Tetris.piece_held = held

  Tetris.update_piece_nodes()
  Tetris.check_piece_bag()
  Tetris.update_ghost_piece()
  Tetris.start_descent_timeout()
  Tetris.update_previews()
}

Tetris.rotate_piece = function(direction = `right`) {
  if (!Tetris.piece_active && !Tetris.piece_getting_locked) {
    return false
  }

  let original_mode = Tetris.current_mode
  let original_degrees = Tetris.current_degrees

  if (direction === `right`) {
    Tetris.current_mode += 1

    if (Tetris.current_mode >= Tetris.current_piece.modes.length) {
      Tetris.current_mode = 0
    }
  }
  else if (direction === `left`) {
    Tetris.current_mode -= 1

    if (Tetris.current_mode < 0) {
      Tetris.current_mode = Tetris.current_piece.modes.length - 1
    }
  }

  Tetris.current_degrees = Tetris.current_mode * 90

  if (Tetris.current_degrees >= (90 * Tetris.current_piece.modes.length)) {
    Tetris.current_degrees = 0
    Tetris.current_mode = 0
  }

  let reversed_degrees = 0 - Tetris.current_degrees

  Tetris.current_element.css(`transform`, `rotate(${Tetris.current_degrees}deg)`)

  Tetris.update_piece_nodes()

  let rollback = false
  let edge

  // Check for collisions
  for (let node of Tetris.current_nodes) {
    let x = node[0]
    let y = node[1]

    if (x < 0) {
      rollback = true
      edge = `left`
    }

    if (x >= Tetris.num_horizontal_blocks) {
      rollback = true
      edge = `right`
    }

    if (y < 0) {
      rollback = true
      break
    }

    if (Tetris.grid[y] && Tetris.grid[y][x]) {
      let node2 = Tetris.grid[y][x]

      if (node2.used) {
        rollback = true
        edge = `none`
        break
      }
    }
  }

  if (rollback) {
    Tetris.current_degrees = original_degrees
    Tetris.current_mode = original_mode
    Tetris.current_element.css(`transform`, `rotate(${Tetris.current_degrees}deg)`)
    Tetris.update_piece_nodes()

    if (edge === `left`) {
      if (Tetris.move_sideways(`right`, false)) {
        Tetris.rotate_piece(direction)
        return false
      }
    }
    else if (edge === `right`) {
      if (Tetris.move_sideways(`left`, false)) {
        Tetris.rotate_piece(direction)
        return false
      }
    }

    return false
  }

  Tetris.current_element.find(`.piece_block`).each(function() {
    $(this).css(`transform`, `rotate(${reversed_degrees}deg)`)
  })

  Tetris.update_piece_nodes()
  Tetris.update_ghost_piece()

  Tetris.play_sound(`rotate`)

  if (Tetris.piece_getting_locked) {
    Tetris.move_down(`rotate`)
  }
}

Tetris.on_piece_placed = function(from) {
  Tetris.piece_active = false
  Tetris.piece_getting_locked = true

  if (from === `hard_drop`) {
    Tetris.play_sound(`woosh`)
  }
  else {
    Tetris.play_sound(`placed`)
  }

  if (from === `hard_drop`) {
    Tetris.lock_timeout = setTimeout(function() {
      Tetris.do_on_piece_placed(from)
    }, Tetris.options.hard_piece_lock_delay)
  }
  else {
    Tetris.lock_timeout = setTimeout(function() {
      Tetris.do_on_piece_placed(from)
    }, Tetris.options.piece_lock_delay)
  }
}

Tetris.do_on_piece_placed = function(from) {
  Tetris.stop_descent_timeout()
  Tetris.piece_getting_locked = false

  if (Tetris.ghost_piece) {
    Tetris.ghost_piece.remove()
  }

  for (let node of Tetris.current_nodes) {
    if (node[1] >= Tetris.grid.length) {
      Tetris.on_game_over()
      return false
    }
  }

  Tetris.prepare_placed_piece(Tetris.current_element)

  if (Tetris.pow_active) {
    Tetris.separate_all_blocks()
    Tetris.make_pieces_fall()
    Tetris.pow_active = false
  }

  let num_cleared = Tetris.check_lines_cleared()

  if ((num_cleared === 0) && (from !== `hard_drop`)) {
    Tetris.play_sound(`locked`)
  }

  if (Tetris.combo > 0) {
    let score = 50 * Tetris.combo * Tetris.level
    Tetris.add_score(score)
  }

  Tetris.pieces_placed += 1

  if (Tetris.options.big_pieces) {
    Tetris.big_piece_charge += 1

    if (Tetris.big_piece_charge >= Tetris.options.big_piece_goal) {
      Tetris.big_piece_next = true
      Tetris.big_piece_charge = 0
    }
  }

  if (Tetris.friend_active) {
    Tetris.friend_piece_charge += 1

    if (Tetris.friend_piece_charge > Tetris.options.friend_piece_goal) {
      Tetris.friend_piece_charge = 0
      Tetris.remove_friend()
    }
  }

  if (!Tetris.debug) {
    Tetris.place_next_piece()
  }
}

Tetris.cancel_piece_placed = function() {
  clearTimeout(Tetris.lock_timeout)
  Tetris.piece_active = true
  Tetris.piece_getting_locked = false
}

Tetris.move_down = function(from = `generic`) {
  if ((!Tetris.piece_active && !Tetris.piece_getting_locked) || Tetris.game_paused) {
    return false
  }

  Tetris.stop_descent_timeout()

  let exposed_nodes = Tetris.get_exposed_nodes(Tetris.current_nodes)
  let finish_after_move = false
  let move = true

  for (let node of exposed_nodes) {
    let x = node[0]
    let y = node[1]
    let y2 = y - 1
    let y3 = y - 2

    if (y2 < 0) {
      move = false
    }
    else if (y2 === 0) {
      let node = Tetris.grid[y2][x]

      if (node.used) {
        move = false
      }

      if (move) {
        finish_after_move = true
      }
    }
    else if ((y2 > 0) && (y2 < Tetris.grid.length)) {
      let node = Tetris.grid[y2][x]

      if (node.used) {
        move = false
      }
    }

    if ((y3 >= 0) && (y3 < Tetris.grid.length)) {
      let node = Tetris.grid[y3][x]

      if (node.used) {
        finish_after_move = true
      }
    }
  }

  if (move) {
    if (from === `hard_drop`) {
      Tetris.add_score(2)
    }
    else if (from !== `hold`) {
      Tetris.add_score(1)
    }

    Tetris.start_descent_timeout()

    if (Tetris.piece_getting_locked) {
      Tetris.cancel_piece_placed()
    }
    else {
      let top = Tetris.current_element.position().top
      let new_top = top + Tetris.block_size
      Tetris.current_element.css(`top`, new_top)
      Tetris.update_piece_nodes()

      if (finish_after_move) {
        Tetris.on_piece_placed(from)
        return true
      }

      if (from === `keyboard`) {
        Tetris.play_sound(`move`)
      }
    }
  }
  else if (!Tetris.piece_getting_locked) {
    Tetris.on_piece_placed()
  }

  return false
}

Tetris.move_sideways = function(direction, play_sound = true) {
  if (!Tetris.piece_active && !Tetris.piece_getting_locked) {
    return false
  }

  let position = Tetris.current_element.position()
  let top = position.top
  let left = position.left
  let padding = Tetris.rotate_piece_object(Tetris.get_padding(Tetris.current_element[0]), Tetris.current_mode)
  let width = Tetris.current_piece.modes[Tetris.current_mode].width * Tetris.block_size
  let move = true
  let new_left

  if (!Tetris.piece_active && !Tetris.piece_getting_locked) {
    return false
  }

  if (direction === `left`) {
    new_left = Math.round(left - Tetris.block_size)

    if (new_left + padding.left < 0) {
      move = false
    }
  }
  else if (direction === `right`) {
    new_left = Math.round(left + Tetris.block_size)

    if (new_left + padding.left + width > Tetris.game_width) {
      move = false
    }
  }

  if (move) {
    Tetris.current_element.css(`left`, `${new_left}px`)
  }
  else {
    return false
  }

  Tetris.update_piece_nodes()

  let rollback = false

  // Check for collisions
  for (let node of Tetris.current_nodes) {
    let x = node[0]
    let y = node[1]

    if (y >= Tetris.num_vertical_blocks) {
      continue
    }

    let node2 = Tetris.grid[y][x]

    if (node2.used) {
      rollback = true
      break
    }
  }

  if (rollback) {
    Tetris.current_element.css(`top`, `${top}px`)
    Tetris.current_element.css(`left`, `${left}px`)
    Tetris.update_piece_nodes()
    return false
  }

  Tetris.update_ghost_piece()

  if (play_sound) {
    Tetris.play_sound(`move`)
  }

  if (Tetris.piece_getting_locked) {
    Tetris.move_down(`move_sideways`)
  }

  return true
}

Tetris.hard_drop = function() {
  if (!Tetris.piece_active) {
    return false
  }

  Tetris.do_hard_drop()
}

Tetris.do_hard_drop = function() {
  if (Tetris.move_down(`hard_drop`)) {
    return
  }

  Tetris.do_hard_drop()
}

Tetris.soft_drop = function() {
  if (!Tetris.piece_active) {
    return false
  }

  if (Tetris.doing_soft_drop) {
    Tetris.stop_soft_drop_timeout()
    Tetris.doing_soft_drop = false
    return false
  }

  Tetris.do_soft_drop()
}

Tetris.do_soft_drop = function() {
  if (Tetris.move_down(`soft_drop`)) {
    Tetris.doing_soft_drop = false
    return
  }

  Tetris.doing_soft_drop = true

  Tetris.soft_drop_timeout = setTimeout(function() {
    Tetris.do_soft_drop()
  }, Tetris.options.soft_drop_delay)
}

Tetris.stop_soft_drop_timeout = function() {
  clearTimeout(Tetris.soft_drop_timeout)
}

Tetris.update_piece_nodes = function() {
  Tetris.current_nodes = Tetris.do_update_nodes(Tetris.current_element, Tetris.current_mode)
}

Tetris.update_ghost_nodes = function() {
  Tetris.ghost_nodes = Tetris.do_update_nodes(Tetris.ghost_piece, Tetris.current_mode)
}

Tetris.do_update_nodes = function(element, mode) {
  let nodes = []
  let container_position = element.position()
  let container_top = Math.round(container_position.top)
  let piece_element_position = element.find(`.piece`).eq(0).position()
  let piece_element_top = Math.round(piece_element_position.top)
  let padding = Tetris.rotate_piece_object(Tetris.get_padding(element[0]), mode)

  element.find(`.piece_block`).each(function() {
    let position = $(this).position()
    let block_top = Math.round(position.top)
    let y

    if (container_top < 0) {
      y = Tetris.num_vertical_blocks - 1 + Math.round((Math.abs(container_top) - piece_element_top - block_top) / Tetris.block_size)
    }
    else {
      y = Tetris.num_vertical_blocks - 1 - Math.round(Math.abs((container_top + piece_element_top + block_top) / Tetris.block_size))
    }

    let left = container_position.left + position.left + padding.left
    let x = Math.round(left) / Tetris.block_size

    nodes.push([x, y])
  })

  return nodes
}

Tetris.update_ghost_piece = function() {
  if (!Tetris.options.ghost) {
    return false
  }

  if (Tetris.ghost_piece) {
    Tetris.ghost_piece.remove()
  }

  Tetris.ghost_piece = Tetris.current_element.clone()
  Tetris.ghost_piece.addClass(`ghost`)
  Tetris.game.append(Tetris.ghost_piece)
  Tetris.update_ghost_nodes()

  let keep_going = true

  for (let i = 0; i < Tetris.num_vertical_blocks * 2; i++) {
    let exposed_nodes = Tetris.get_exposed_nodes(Tetris.ghost_nodes)

    for (let node of exposed_nodes) {
      let x = node[0]
      let y = node[1]
      let y2 = y - 1

      if (y2 < 0) {
        keep_going = false
        break
      }

      if (y2 > Tetris.grid.length - 1) {
        break
      }

      let node2 = Tetris.grid[y2][x]

      if (node2.used) {
        keep_going = false
        break
      }
    }

    if (!keep_going) {
      break
    }

    Tetris.ghost_piece.css(`top`, Tetris.ghost_piece.position().top + Tetris.block_size)
    Tetris.update_ghost_nodes()
  }
}

Tetris.check_lines_cleared = function() {
  let num_cleared = Tetris.do_check_lines_cleared()

  if (num_cleared > 0) {
    Tetris.calculate_clear_score(num_cleared)
    Tetris.charge_level(num_cleared)
    Tetris.charge_pow(num_cleared)
    Tetris.charge_friend(num_cleared)
    Tetris.charge_combo()
    Tetris.lines_cleared += num_cleared

    if (num_cleared === 1) {
      Tetris.info(`1 line cleared`)
    }
    else {
      Tetris.info(`${num_cleared} lines cleared`)
    }

    if (num_cleared >= Tetris.options.piece_picker_goal) {
      if (Tetris.options.piece_picker) {
        Tetris.show_piece_picker_next = true
      }
    }

    let delay = 0

    for (let i = 0; i < num_cleared; i++) {
      setTimeout(function() {
        Tetris.play_sound(`clear`)
      }, delay)

      delay += 200
    }

    clearTimeout(Tetris.game_flash_timeout)

    Tetris.game.addClass(`game_flash`)

    Tetris.game_flash_timeout = setTimeout(function() {
      Tetris.game.removeClass(`game_flash`)
    }, 200)
  }
  else {
    Tetris.reset_combo()
  }

  return num_cleared
}

Tetris.do_check_lines_cleared = function(num_cleared = 0) {
  let num_lines_cleared = 0

  for (let y = 0; y < Tetris.grid.length; y++) {
    let row = Tetris.grid[y]

    let cleared = true

    for (let node of row) {
      if (!node.used) {
        cleared = false
        break
      }
    }

    if (cleared) {
      num_lines_cleared += 1
      Tetris.clear_line(y)
    }
  }

  if (num_lines_cleared > 0) {
    if (Tetris.make_pieces_fall()) {
      return Tetris.do_check_lines_cleared(num_cleared + num_lines_cleared)
    }
  }

  return num_cleared + num_lines_cleared
}

Tetris.clear_line = function(y) {
  let pieces_to_process = {}

  for (let x = 0; x < Tetris.grid[y].length; x++) {
    let block = Tetris.grid[y][x].element

    if (!block) {
      continue
    }

    let container = $(block).closest(`.piece_container`)

    if (container.length > 0) {
      if (Tetris.options.independence) {
        Tetris.separate_blocks(container)
        block = Tetris.grid[y][x].element
      }
      else {
        let id = container.attr(`id`)

        if (!pieces_to_process[id]) {
          pieces_to_process[id] = []
        }

        pieces_to_process[id].push([x, y])
      }
    }
    else {
      Tetris.placed_element_data[$(block).attr(`id`)] = undefined
    }

    $(block).addClass(`cleared_piece`)

    setTimeout(function() {
      $(block).remove()
    }, 250)

    Tetris.set_grid_node_to_defaults(Tetris.grid[y][x])
  }

  for (let id in pieces_to_process) {
    Tetris.remove_blocks_from_piece(id, pieces_to_process[id])
  }
}

Tetris.make_pieces_fall = function(iterations = 0) {
  let any_moved = false

  for (let y = 0; y < Tetris.grid.length; y++) {
    for (let x = 0; x < Tetris.grid[y].length; x++) {
      if (!Tetris.grid[y][x].used) {
        continue
      }

      let block = Tetris.grid[y][x].element

      if (!block) {
        continue
      }

      let element
      let container = $(block).closest(`.piece_container`)

      if (container.length > 0) {
        element = container
      }
      else {
        element = block
      }

      let id = $(element).attr(`id`)
      let data = Tetris.placed_element_data[id]
      let original_nodes = false
      let moved = false

      for (let i = 0; i < Tetris.grid.length; i++) {
        if (!original_nodes) {
          original_nodes = data.nodes
        }

        let move = true
        let exposed_nodes = Tetris.get_exposed_nodes(data.nodes)

        for (let node of exposed_nodes) {
          let x = node[0]
          let y = node[1]
          let y2 = y - 1

          if (y === 0) {
            move = false
          }
          else {
            let node2 = Tetris.grid[y2][x]

            if (node2.used) {
              move = false
            }
          }
        }

        if (move) {
          let new_top = Tetris.get_position_data(element).top + Tetris.block_size
          data.nodes = Tetris.descend_nodes(data.nodes)
          data.top = new_top
          moved = true
        }
        else {
          if (moved) {
            $(element).css(`top`)
            $(element).css(`top`, `${data.top}px`)

            let elements = []

            for (let node of original_nodes) {
              let x = node[0]
              let y = node[1]
              let original_node = Tetris.grid[y][x]

              elements.push(original_node.element)
              Tetris.set_grid_node_to_defaults(original_node)
            }

            for (let i = 0; i < data.nodes.length; i++) {
              let node = data.nodes[i]
              let x = node[0]
              let y = node[1]
              let new_node = Tetris.grid[y][x]

              new_node.used = true
              new_node.element = elements[i]
            }

            any_moved = true
          }

          break
        }
      }
    }
  }

  if (any_moved) {
    return Tetris.make_pieces_fall(iterations + 1)
  }

  return iterations > 0
}

Tetris.prepare_placed_piece = function(element) {
  let id = `placed_${Tetris.placed_id}`
  Tetris.placed_id += 1

  element.attr(`id`, id)
  element.addClass(`placed_piece`)
  element.addClass(`placed_main`)

  Tetris.placed_element_data[id] = {}
  let data = Tetris.placed_element_data[id]
  data.top = element.position().top
  data.left = element.position().left

  let nodes = []

  element.find(`.piece_block`).each(function() {
    let id = `placed_block_${Tetris.placed_block_id}`
    Tetris.placed_block_id += 1

    $(this).attr(`id`, id)
    $(this).removeClass(`pow_active`)
    $(this).addClass(`placed_block`)

    let position = Tetris.get_placed_block_position(this)
    let node = Tetris.get_node_by_position(position)
    let x = node[0]
    let y = node[1]

    nodes.push(node)

    Tetris.grid[y][x].used = true
    Tetris.grid[y][x].element = this
  })

  data.nodes = nodes

  element.addClass(`piece_flash`)

  setTimeout(function() {
    element.removeClass(`piece_flash`)
  }, 100)
}

Tetris.separate_blocks = function(element) {
  let container_id = $(element).attr(`id`)
  let container_data = Tetris.placed_element_data[container_id]

  $(element).find(`.piece_block`).each(function() {
    Tetris.separate_block(this, container_data)
  })

  Tetris.placed_element_data[container_id] = undefined
  $(element).remove()
}

Tetris.separate_block = function(element, container_data) {
  let id = `placed_${Tetris.placed_id}`
  Tetris.placed_id += 1

  let position = $(element).position()
  let piece_element_position = $(element).closest(`.piece`).position()
  let top = container_data.top + piece_element_position.top + position.top
  let left = container_data.left + piece_element_position.left + position.left

  let block = $(element).clone()
  block.attr(`id`, id)
  block.addClass(`placed_main`)
  block.addClass(`piece_type_independent`)
  block.css(`transform`, `rotate(${0}deg)`)
  block.css(`top`, `${top}px`)
  block.css(`left`, `${left}px`)

  let position2 = {top:Math.round(top), left:Math.round(left)}
  let node = Tetris.get_node_by_position(position2)
  let x = node[0]
  let y = node[1]

  Tetris.placed_element_data[id] = {}
  let data = Tetris.placed_element_data[id]
  data.nodes = [node]
  data.top = top
  data.left = left

  Tetris.grid[y][x].used = true
  Tetris.grid[y][x].element = block[0]

  Tetris.game.append(block)
}

Tetris.separate_all_blocks = function() {
  if ($(`.placed_piece`).length > 0) {
    $(`.placed_piece`).each(function() {
      Tetris.separate_blocks(this)
    })
  }
}

Tetris.remove_blocks_from_piece = function(id, list) {
  let element = $(`#${id}`)
  let data = Tetris.placed_element_data[id]

  for (let node of list) {
    let x = node[0]
    let y = node[1]

    for (let i = 0; i < data.nodes.length; i++) {
      let node = data.nodes[i]

      if ((node[0] === x) && (node[1] === y)) {
        data.nodes.splice(i, 1)
        break
      }
    }
  }

  let clusters = Tetris.get_node_clusters(data.nodes)

  if (clusters.length > 1) {
    for (let cluster of clusters) {
      let clone = element.clone()

      clone.find(`.piece_block`).each(function() {
        let remove = true

        for (let node of cluster) {
          let x = node[0]
          let y = node[1]

          if (Tetris.grid[y][x].element.id === this.id) {
            Tetris.grid[y][x].element = this
            remove = false
            break
          }
        }

        if (remove) {
          $(this).remove()
        }
      })

      let id2 = `placed_${Tetris.placed_id}`
      Tetris.placed_id += 1
      Tetris.placed_element_data[id2] = {}
      let data2 = Tetris.placed_element_data[id2]
      data2.nodes = cluster
      data2.top = data.top
      data2.left = data.left
      clone.attr(`id`, id2)
      clone.removeClass(`piece_flash`)
      Tetris.game.append(clone)
    }

    Tetris.placed_element_data[id] = undefined
    element.remove()
  }
}

Tetris.get_placed_block_position = function(block) {
  let position = {}
  let container = $(block).closest(`.piece_container`)

  if (container.length > 0) {
    let container_position = Tetris.get_position_data(container)
    let piece = container.find(`.piece`).eq(0)
    let piece_position = piece.position()
    let block_position = $(block).position()
    position.top = Math.round(container_position.top + piece_position.top + block_position.top)
    position.left = Math.round(container_position.left + piece_position.left + block_position.left)
  }
  else {
    let pos = Tetris.get_position_data(block)
    position.top = Math.round(pos.top)
    position.left = Math.round(pos.left)
  }

  return position
}

Tetris.get_node_by_position = function(position) {
  let y = Tetris.num_vertical_blocks - (position.top / Tetris.block_size) - 1
  let x = position.left / Tetris.block_size
  return [x, y]
}

Tetris.calculate_clear_score = function(num_cleared) {
  let multiplier

  if (num_cleared === 1) {
    multiplier = 100
  }
  else if (num_cleared === 2) {
    multiplier = 300
  }
  else if (num_cleared === 3) {
    multiplier = 300
  }
  else if (num_cleared === 4) {
    multiplier = 800
  }
  else if (num_cleared > 4) {
    multiplier = 1000
  }

  let score = multiplier * Tetris.level

  Tetris.add_score(score)
}

Tetris.check_piece_bag = function() {
  if (Tetris.previews.length < Tetris.options.number_of_previews) {
    Tetris.fill_piece_bag()
  }
}

Tetris.fill_piece_bag = function() {
  if (Tetris.options.number_of_previews > 0) {
    Tetris.previews.push(...Tetris.get_random_piece(true))
  }
}

Tetris.setup_previews = function() {
  Tetris.previews = []

  let n = Math.ceil(Tetris.options.number_of_previews / Tetris.pieces_list.length)

  for (let i = 0; i < n; i++) {
    Tetris.fill_piece_bag()
  }

  $(`#previews`).html(``)

  let s = `<div class='preview'><div class='preview_element'></div></div>`

  for (let i = 0; i < Tetris.options.number_of_previews; i++) {
    let html = $(s)
    $(`#previews`).append(html)
  }

  Tetris.update_previews()
}

Tetris.update_previews = function() {
  let i = 0

  $(`#previews .preview_element`).each(function() {
    let piece = Tetris.pieces[Tetris.previews[i]]
    let element = piece.element_preview.clone()
    $(this).html(element)
    i += 1
  })

  if (Tetris.current_piece) {
    let element = Tetris.current_piece.element_preview.clone()
    $(`#active_piece_element`).html(element)
  }
  else {
    $(`#active_piece_element`).html(``)
  }
}

Tetris.descend_nodes = function(nodes, amount = 1) {
  let new_nodes = []

  for (let node of nodes) {
    new_nodes.push([node[0], node[1] - amount])
  }

  return new_nodes
}

Tetris.fill = async function() {
  let delay = 1000

  for (let i = 0; i < 8; i++) {
    Tetris.place_next_piece(`stick`)
    Tetris.rotate_piece(`right`)
    Tetris.move_sideways(`left`)
    Tetris.move_sideways(`left`)
    Tetris.move_sideways(`left`)
    Tetris.drop_piece()

    await Tetris.async_timeout(function() {

    }, delay)
  }

  for (let i = 0; i < 8; i++) {
    Tetris.place_next_piece(`stick`)
    Tetris.rotate_piece(`right`)
    Tetris.move_sideways(`right`)
    Tetris.drop_piece()

    await Tetris.async_timeout(function() {

    }, delay)
  }

  for (let i = 0; i < 2; i++) {
    Tetris.place_next_piece(`stick`)
    Tetris.move_sideways(`right`)
    Tetris.move_sideways(`right`)
    Tetris.move_sideways(`right`)
    Tetris.move_sideways(`right`)
    Tetris.drop_piece()

    await Tetris.async_timeout(function() {

    }, delay)
  }

  for (let i = 0; i < 2; i++) {
    Tetris.place_next_piece(`stick`)
    Tetris.move_sideways(`right`)
    Tetris.move_sideways(`right`)
    Tetris.move_sideways(`right`)
    Tetris.move_sideways(`right`)
    Tetris.move_sideways(`right`)
    Tetris.drop_piece()

    await Tetris.async_timeout(function() {

    }, delay * 2)
  }
}

Tetris.get_descent_delay = function() {
  let delay = Tetris.initial_descent_delay - (Tetris.level * Tetris.options.descent_multiplier)

  if (delay < Tetris.options.min_descent_delay) {
    delay = Tetris.options.min_descent_delay
  }

  return delay * Tetris.speed_multiplier
}

Tetris.start_descent_timeout = function() {
  clearTimeout(Tetris.descent_timeout)

  Tetris.piece_descent_delay = Tetris.get_descent_delay()

  Tetris.descent_timeout = setTimeout(function() {
    Tetris.move_down(`descent_timeout`)
  }, Tetris.piece_descent_delay)

  Tetris.descent_timeout_active = true
}

Tetris.stop_descent_timeout = function() {
  clearTimeout(Tetris.descent_timeout)
  Tetris.descent_timeout_active = false
}

Tetris.show_piece_picker = function() {
  if (Tetris.options.piece_picker_list === `normal_and_big`) {
    Tetris.piece_picker_list = Tetris.full_pieces_list
  }
  else if (Tetris.options.piece_picker_list === `only_normal`) {
    Tetris.piece_picker_list = Tetris.pieces_list
  }
  else if (Tetris.options.piece_picker_list === `only_big`) {
    Tetris.piece_picker_list = Tetris.big_pieces_list
  }

  Tetris.show_piece_picker_wheel_item()
  $(`#piece_picker_title`).text(`Choose The Next ${Tetris.options.piece_picker_queue}`)
  $(`#piece_picker`).css(`display`, `block`)
  Tetris.piece_picker_active = true
}

Tetris.hide_piece_picker = function() {
  $(`#piece_picker`).css(`display`, `none`)
  Tetris.piece_picker_active = false
  Tetris.place_next_piece()
}

Tetris.submit_piece_picker = function() {
  let name = Tetris.piece_picker_list[Tetris.current_piece_picker_wheel_item]
  Tetris.queued_piece = name
  Tetris.queued_left = Tetris.options.piece_picker_queue
  $(`#queued_left`).text(Tetris.queued_left)
  Tetris.hide_piece_picker()
}

Tetris.show_piece_picker_wheel_item = function() {
  if (Tetris.current_piece_picker_wheel_item >= Tetris.piece_picker_list.length) {
    Tetris.current_piece_picker_wheel_item = 0
  }

  let name = Tetris.piece_picker_list[Tetris.current_piece_picker_wheel_item]
  let piece = Tetris.pieces[name]
  let item = $(`<div class='piece_picker_wheel_item' id='piece_picker_wheel_${piece.name}'></div>`)
  item.html(piece.element_wheel_preview.clone())
  $(`#piece_picker_wheel_content`).html(item)
}

Tetris.show_next_piece_picker_wheel_item = function() {
  Tetris.current_piece_picker_wheel_item += 1

  if (Tetris.current_piece_picker_wheel_item > Tetris.piece_picker_list.length - 1) {
    Tetris.current_piece_picker_wheel_item = 0
  }

  Tetris.show_piece_picker_wheel_item()
}

Tetris.show_previous_piece_picker_wheel_item = function() {
  Tetris.current_piece_picker_wheel_item -= 1

  if (Tetris.current_piece_picker_wheel_item < 0) {
    Tetris.current_piece_picker_wheel_item = Tetris.piece_picker_list.length - 1
  }

  Tetris.show_piece_picker_wheel_item()
}

Tetris.get_exposed_nodes = function(nodes) {
  let exposed = []

  for (let i = 0; i < nodes.length; i++) {
    let x = nodes[i][0]
    let y = nodes[i][1]

    let add = true

    for (let i2 = 0; i2 < nodes.length; i2++) {
      if (i === i2) {
        continue
      }

      let x2 = nodes[i2][0]
      let y2 = nodes[i2][1]

      if (x === x2) {
        if (y > y2) {
          add = false
          break
        }
      }
    }

    if (add) {
      exposed.push(nodes[i])
    }
  }

  return exposed
}

Tetris.get_top_y = function(nodes) {
  let top = 0

  for (let node of nodes) {
    if (node[1] > top) {
      top = node[1]
    }
  }

  return top
}

Tetris.get_left_x = function(nodes) {
  let left = Tetris.num_horizontal_blocks

  for (let node of nodes) {
    if (node[0] < left) {
      left = node[0]
    }
  }

  return left
}

Tetris.get_adjacent_nodes = function(nodes) {
  let adjacents = {}

  for (let node of nodes) {
    let adj = []

    let x = node[0]
    let y = node[1]

    if (x > 0) {
      adj.push([x - 1, y])
    }

    if (x < Tetris.num_horizontal_blocks - 1) {
      adj.push([x + 1, y])
    }

    if (y > 0) {
      adj.push([x, y - 1])
    }

    if (y < Tetris.num_vertical_blocks - 1) {
      adj.push([x, y + 1])
    }

    adjacents[node] = adj
  }

  return adjacents
}

Tetris.get_node_clusters = function(nodes) {
  let clusters = []
  let cluster_firsts = []
  let adjacents = Tetris.get_adjacent_nodes(nodes)

  for (let node of nodes) {
    let q = []
    let seen = []

    q.push(node.toString())
    seen.push(node.toString())

    while (q.length > 0) {
      let n = q.shift()

      for (let node of adjacents[n]) {
        let ns = node.toString()

        if (adjacents[ns] && !seen.includes(ns)) {
          q.push(ns)
          seen.push(ns)
        }
      }
    }

    if (nodes.length === seen.length) {
      return [nodes]
    }

    let sorted = seen.sort()

    if (!cluster_firsts.includes(sorted[0])) {
      clusters.push(sorted)
      cluster_firsts.push(sorted[0])
    }
  }

  let cluster_arrays = []

  for (let cluster of clusters) {
    let arr = []

    for (let node of cluster) {
      arr.push(node.split(`,`).map(x => parseInt(x)))
    }

    cluster_arrays.push(arr)
  }

  return cluster_arrays
}

Tetris.do_hold_piece = function() {
  if (!Tetris.options.hold || !Tetris.piece_active || Tetris.piece_held) {
    return false
  }

  let element = Tetris.current_piece.element_preview.clone()
  let top_y = Tetris.get_top_y(Tetris.current_nodes)
  let left_x = Tetris.get_left_x(Tetris.current_nodes)

  Tetris.current_element.remove()
  $(`#hold_piece_element`).html(element)
  let name = Tetris.hold_piece.name
  Tetris.hold_piece = Tetris.current_piece

  if (Tetris.hold_piece) {
    Tetris.place_next_piece(name, true)
  }
  else {
    Tetris.place_next_piece(false, true)
  }

  for (let i = 0; i < Tetris.grid.length * 2; i++) {
    let top_y_2 = Tetris.get_top_y(Tetris.current_nodes)

    if (top_y_2 <= top_y) {
      break
    }

    if (Tetris.move_down(`hold`)) {
      break
    }
  }

  for (let i = 0; i < Tetris.num_horizontal_blocks; i++) {
    let left_x_2 = Tetris.get_left_x(Tetris.current_nodes)

    if (left_x_2 === left_x) {
      break
    }
    else if (left_x_2 > left_x) {
      Tetris.move_sideways(`left`, false)
    }
    else if (left_x_2 < left_x) {
      Tetris.move_sideways(`right`, false)
    }
  }

  Tetris.play_sound(`hold`)
}