// Centralized function to get localStorage objects
Tetris.get_local_storage = function(ls_name) {
  let obj

  if (localStorage[ls_name]) {
    try {
      obj = JSON.parse(localStorage.getItem(ls_name))
    }

    catch (err) {
      localStorage.removeItem(ls_name)
      obj = null
    }
  }

  else {
    obj = null
  }

  return obj
}

// Centralized function to save localStorage objects
Tetris.save_local_storage = function(ls_name, obj) {
  if (typeof obj !== `string`) {
    obj = JSON.stringify(obj)
  }

  localStorage.setItem(ls_name, obj)
}

// Remove a localStorage object
Tetris.remove_local_storage = function(ls_name) {
  localStorage.removeItem(ls_name)
}