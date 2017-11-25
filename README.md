# UIKit_Framer
和小伙伴做一些自用的好用的Framer动效函数，主要用于游戏用户体验设计。

# 目录

## 1 点击效果
    1 变暗按钮 darkButton(Array button_List)
    2 变淡按钮 alphaButton(Array button_List)

## 2 点击功能绑定
    1 显示按钮，点击后显示某物 openButton(Array button_List, object tar_layer)
    2 关闭按钮，关闭自己所在页面 closeButton(Array button_List)
    3 批量防点穿 cantTouchPass(Array layer_list)
    4 跳转按钮，仅Flow设计模式下可以使用 gotoButton(Array button_List, object tar_layer)
    5 返回按钮，仅Flow设计模式下可以使用 backButton(Array button_List)

## 3 动画效果
    1 快来点我效果 touchMe(object me)
    2 旋转效果 slowRotation(object me, int speed)
    3 箭头效果 touchThis(object arrow, string direction)

## 4 行为
