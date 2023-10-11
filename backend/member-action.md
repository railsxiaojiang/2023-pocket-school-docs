# Member Action 关联表的设计与使用


## 关联解释

Member Action关联 两种数据类型表。 一种是多态无状态表，一种是 多态有状态的。

例如 Survey, SurveyFill.

当用户发起一个问卷，我们会使用Member Action 关联Survey 表。由于Survey，自己不具备状态。所以用户的Member action 状态属于独立出来的。
当用户点击已屏蔽，不需要改Survey的任何状态，只需要改变Member Action的状态

当用户收到一个问卷填写SurveyFill的时候，Member Action的状态由SurveyFill 来管理，例如SurveyFill 未填写，Member Action的状态应该是 进行中。
当用户填写完了Survey Fill的时候，Member action 的状态会一起同步。
备注，如果Survey 关闭的时候。母标的状态也会影响子表的状态。但是母表的状态不影响 目标的Member Action。


## 状态管理
1. 未开始
2. 进行中
3. 已完成
4. 已关闭
5. 已撤销
6. 已屏蔽

### 通知类关联规则

母表：Anouncement
子表: Anouncement Record


1. Anouncement Record 被点击已阅时。更新子表Member Action
2. 当母表：Anouncement被取消时，更新所有Anouncement Record子表Member Action
