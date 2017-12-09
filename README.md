# UIKit_Framer
和小伙伴做一些自用的好用的Framer动效函数，主要用于游戏用户体验设计。

# 目录

## 1 点击效果
    1 变暗按钮 darkButton(Array button_List)
    ```
    #使用范例,为若干个按钮（或者任意图层）赋予点击变暗的效果
    darkButton([图层1，图层2，图层3])
    ```

    2 变淡按钮 alphaButton(Array button_List)
    ```
    #使用范例,为若干个按钮（或者任意图层）赋予点击变透明的效果
    alphaButton([图层1，图层2，图层3])
    ```

## 2 点击功能绑定
    1 显示按钮，点击后显示某物 openButton(Array button_List, object tar_layer)
    ```
    #使用范例,为若干个按钮（或者任意图层）添加点击之后打开目标图层的效果
    openButton([按钮1，按钮2，按钮3],目标图层)
    ```

    2 关闭按钮，关闭自己父图层 closeButton(Array button_List)
    ```
    #使用范例,为若干个按钮（或者任意图层）添加点击之后关闭自己所在页面的效果
    closeButton([按钮1，按钮2，按钮3])
    ```

    3 批量防点穿 cantTouchPass(Array layer_list)        
    ``` 
    #使用范例,让一些图层不会被点穿
    cantTouchPass([按钮1，按钮2，按钮3])
    ```

    4 跳转按钮，仅Flow设计模式下可以使用 gotoButton(Array button_List, object tar_layer)
    ```
    #使用范例,让若干个按钮（或者任意图层），点击之后跳转到目标图层
    gotoButton([按钮1，按钮2，按钮3]，目标图层)
    ```

    5 返回按钮，仅Flow设计模式下可以使用 backButton(Array button_List)
    ```
    #使用范例,为若干个按钮（或者任意图层）添加点击之后，返回上一个所在页面的效果
    backButton([按钮1，按钮2，按钮3])
    ```

## 3 动画效果
    1 快来点我效果 touchMe(object me)
    ```
    #使用范例,让一个图层做弹性抖动
    touchMe([图层1，图层2，图层3])
    ```

    2 旋转效果 slowRotation(object me, int speed)
    ```
    #使用范例,让一个图层做旋转动画
    slowRotation(图层，旋转速度)
    ```

    3 箭头效果 touchThis(object arrow, string direction)
    ```
    #使用范例,让一个图层但方向晃动动画，晃动方向可以从“left”，“right”，“up”，“down”中选择一个
    touchThis(图层，晃动方向)
    ```

## 4 行为
    1. 批量隐藏 hiddenThem([Array layer_list)
    ```
    #使用范例,让一些图层隐藏
    hiddenThem([图层1，图层2，图层3])
    ```
