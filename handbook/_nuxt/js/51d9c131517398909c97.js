(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{375:function(n,t,e){"use strict";e.r(t),t.default='# 双向柱状图\n\n双向柱状图多用于展示包含相反含义的数据的对比。其中图表的一个轴显示正在比较的类别，而另一轴代表对应的刻度值。\n\n双向柱状图一般用于正负两份相反数据的对比。例如一周内个人收入和支出的统计，其中收入为正数，支出为负数。使用双向柱状图可以很明确的对收入和支出做出对比，并能从单个系列中分析收入和支出的数值及波动。\n\n<iframe max-width="830" width="100%" height="400"\nsrc="https://gallery.echartsjs.com/view-lite.html?cid=xS18jqmX4f">\n</iframe>\n\n双向柱状图可分为垂直方向的双向柱状图（如上图）和水平方向的双向柱状图（又叫正负条形图，如下图），例如一个客户满意度的调查数据分析中，有正面评价和负面评价，这很适合用正负条形图，所有数据在中间对齐，正面的评价数据分布在右侧，负面的评价数据分布在左侧。\n\n<iframe max-width="830" width="100%" height="400"\n src="https://gallery.echartsjs.com/view-lite.html?cid=xHJ1un374z">\n</iframe>\n\n## 双向柱状 \b 图的使用建议\n\n1、双向柱状图正向和负向的数据具有对比性，因此一般选用差值较大的具有对比性的颜色。\n\n2、永远不要在 0 基线的右边画负值的水平条行图或在 0 基线的上边画负值的柱子，以免和常识违背造成误解。\n\n<img max-width="830" width="100%" height="100%"\nsrc="images/design/bar/bi-directional-bar01.jpg">\n</img>\n\n3、双向柱状图多用于展示含相反含义的数据，因此要避免不具有正负含义的数据使用而造成的误解。 如下图人口统计图表中使用双向柱状图，一侧绘制男性的数据，另一侧绘制女性的数据，只是单纯的两类不同数据的对比，并不存在负数。那么，此时将两个数据序列绘制成一个分组柱状图是更合适的。\n\n<img max-width="830" width="100%" height="100%"\nsrc="images/design/bar/bi-directional-bar02.jpg">\n</img>\n'}}]);