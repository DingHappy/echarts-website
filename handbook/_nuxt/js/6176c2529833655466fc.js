(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{402:function(n,t,c){"use strict";c.r(t),t.default="# 堆叠柱状图\n\n有时候，我们不仅希望知道不同系列各自的数值，还希望知道它们之和的变化，这时候通常使用堆积柱状图图来表现。顾名思义，堆积柱状图就是一个系列的数值“堆积”在另一个系列上，因而从他们的高度总和就能表达总量的变化。\n\n使用 EChart 实现堆积折线图的方法非常简单，只需要给一个系列的 `stack` 值设置一个字符串类型的值，这一个值表示该系列堆积的类别。也就是说，拥有同样 `stack` 值的系列将堆积在一组。\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 43, 49],\n      type: 'bar',\n      stack: 'x'\n    },\n    {\n      data: [5, 4, 3, 5, 10],\n      type: 'bar',\n      stack: 'x'\n    }\n  ]\n};\n```\n\n在这个例子中，第二个系列所在的位置是在第一个系列的位置的基础上，上升了第二个系列数值对应的高度。因此，从第二个系列的位置，就能看出这两者总和的变化趋势。\n\n> `stack` 的取值用来表明哪些系列将被堆积在一起，理论上只要取值相同即可，具体的取值并没有什么区别。但在实际的应用中，我们建议使用一些有意义的字符串方便阅读。\n>\n> 比如，在一个统计男女人数的图中，有四个系列，“成年男性”和“男孩”系列需要进行堆积，“成年女性”和“女孩”系列需要堆积。这时，这两组的的 `stack` 值就建议分别设为 `'男'` 和 `'女'`。虽然使用 `'a'` 和 `'b'` 这样没有意义的字符串也能实现同样的效果，但是代码的可阅读性就差了。\n"}}]);