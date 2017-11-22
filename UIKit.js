#import UIkit

# 1 点击效果

# 1.1 变暗按钮 # (Array button_List)
darkButton = (button_List = []) ->
    for bt in button_List
        bt.onTouchStart ->  this.brightness = 50
        bt.onTouchEnd -> this.brightness = 100

# 1.2 变淡按钮 # (Array button_List)
alphaButton = (button_List = []) ->
    for bt in button_List
        bt.onTouchStart ->  this.opacity = 0.4
        bt.onTouchEnd -> this.opacity = 1


# 2 点击功能绑定

# 2.1 点击显示 # (Array button_List, object tar_layer)
goToButton = (button_List = [],tar_layer) ->
    for bt in button_List
        bt.onClick ->
            tar_layer.visible = true

# 2.2 关闭自己所在页面的按钮 # (Array button_List)
closeButton = (button_List) ->
    for bt in button_List
        bt.onClick ->
            this.parent.visible = false

# 2.3 批量防点穿 # (Array layer_list)
cantTouchPass = (layer_list) ->
    for ly in layer_list
        ly.onClick ->
 

# 3 动画效果
# 3.1 快来点我效果 # (object me)
touchMe = (me) ->
    animationA = new Animation({
        layer: me,
        properties: {scale: 1.1,brightness:200},
        curve: Bezier.ease,
        time: 1.5
    })

    animationB = new Animation({
        layer: me,
        properties: {scale: 1,brightness:100},
        curve: Bezier.ease,
        time: 1.5
    })
    animationA.start()
    animationA.on Events.AnimationEnd, ->
        animationB.start()

    animationB.on Events.AnimationEnd, ->
        animationA.start()

#3.2 旋转效果 #(object me, int speed)
slowRotation = (me, speed) ->
    animationA = new Animation({
        layer: me,
        properties: {rotation: 360},
        curve: Bezier.linear
        time: speed
    })
    animationA.start()
    animationA.on Events.AnimationEnd, ->
        me.rotation = 0
        animationA.start()

# 3.3 箭头效果 # (object arrow, string direction)
touchThis =(arrow,direction)->
    dis = 15
    start_x = arrow.x
    start_y = arrow.y
    end_x = start_x
    end_y = start_y
    switch direction
        when "up"
            end_y = start_y + dis
        when "down"
            end_y = start_y - dis
        when "right"
            end_x = start_x + dis
        when "left"
            end_x = start_x - dis
        else
            print ( "touch_me direction missing")
    Utils.interval 0.9, ->
        arrow.animate
            x : end_x
            y : end_y
            options:
                time: 0.5

        Utils.delay 0.6, ->
            arrow.animate
                x : start_x
                y: start_y
                options:
                    time: 0.2
                    curve: Bezier(0.2, 0.1, 0.25, 1)
