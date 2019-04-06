Tetris.round = function(value, decimals)
{
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
}

Tetris.get_random_int = function(args={})
{
    let def_args =
    {
        min: 0,
        max: 1,
        exclude: false,
        seed: 1
    }

    args = Object.assign(def_args, args)

    let num

    if(args.seed === 1)
    {
        num = Math.floor(Tetris.random() * (args.max - args.min + 1) + args.min)
    }
    
    else if(args.seed === 2)
    {
        num = Math.floor(Tetris.random_2() * (args.max - args.min + 1) + args.min)
    }

    else
    {
        return false
    }

    if(args.exclude)
    {
        let diff = args.max - args.min
        let n = num

        for(let i=0; i<diff*2; i++)
        {
            if(args.exclude.includes(n))
            {
                if(n + 1 <= args.max)
                {
                    n += 1
                }

                else
                {
                    n = args.min
                }
            }

            else
            {
                num = n
                break
            }
        }
    }

    return num
}

Tetris.get_padding = function(element)
{
    const padding = {}

    padding.left = parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-left'))
    padding.right = parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-right'))
    padding.top = parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-top'))
    padding.bottom = parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-bottom'))

    return padding
}

Tetris.rotate_piece_object = function(obj, mode)
{
    if(mode === 0)
    {
        return obj
    }

    let new_obj = {}
    let values = [obj.left, obj.right, obj.top, obj.bottom]

    for(let i=0; i<mode; i++)
    {
        new_obj.top = values[0]
        new_obj.bottom = values[1]
        new_obj.right = values[2]
        new_obj.left = values[3]

        values = [new_obj.left, new_obj.right, new_obj.top, new_obj.bottom]
    }

    return new_obj
}

Tetris.async_timeout = (cb, timeout = 0) => new Promise(resolve => 
{
    setTimeout(() => 
    {
        cb()
        resolve()
    }, timeout)
})

Tetris.get_position_data = function(element)
{
    let data = Tetris.placed_element_data[$(element).attr("id")]
    return {top: data.top, left: data.left}
}

Tetris.nice_time = function(date1, date2)
{
    let d

    if(date1 > date2)
    {
        d = (date1 - date2)
    }

    else
    {
        d = (date2 - date1)
    }

    let nt

    if(d >= 1000 * 60)
    {
        let dm = Tetris.round(d / 1000 / 60, 3)

        if(dm === 1)
        {
            nt = `${dm} minute`
        }

        else
        {
            nt = `${dm} minutes`
        }
    }

    else if(d >= 1000)
    {
        let dm = Tetris.round(d / 1000, 3)

        if(dm === 1)
        {
            nt = `${dm} second`
        }

        else
        {
            nt = `${dm} seconds`
        }
    }

    else
    {
        if(d === 1)
        {
            nt = `${d} millisecond`
        }

        else
        {
            nt = `${d} milliseconds`
        }
    }

    return nt
}

Tetris.get_full_decimal = function(s)
{
    if(s.startsWith("0") || s.length > 1)
    {
        return parseInt(s.substring(0, 2))
    }

    return parseInt(`${s}0`)
}