# 支付网页功能验收清单

本文档用于测试和验收支付网页的功能、设计和用户体验，确保其符合最初设定的需求。

## 测试环境
*   **浏览器**: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge (最新版本)
*   **设备**: 桌面电脑 (Windows/Mac), 移动设备 (iOS/Android)

---

## 验收项目

### 1. 视觉与设计 (UI)

| # | 测试项 | 预期结果 | 测试结果 (通过/失败) |
|---|---|---|---|
| 1.1 | **整体布局** | 页面布局与设计稿一致，居中显示，在不同分辨率的桌面浏览器上看起来都很协调。 | |
| 1.2 | **移动端适配** | 在手机浏览器上，页面元素能自动调整大小和布局，没有横向滚动条，所有文字和按钮清晰可读、易于点击。 | |
| 1.3 | **字体与颜色** | 字体为 'Noto Sans SC'，颜色、背景色、按钮颜色均符合设计要求，整体风格高端、简洁。 | |
| 1.4 | **图标加载** | 所有支付方式的图标（微信、支付宝、Stripe）都正常显示。 | |
| 1.5 | **动画效果** | 页面加载时有淡入动画效果，鼠标悬停在支付方式或按钮上有相应的交互效果。 | |

### 2. 功能与交互 (Functionality & UX)

| # | 测试项 | 操作步骤 | 预期结果 | 测试结果 (通过/失败) |
|---|---|---|---|---|
| 2.1 | **默认状态** | 1. 打开页面。 | 1. 默认支付金额为 "100.00"。 <br> 2. 没有默认选中的支付方式。 <br> 3. "支付" 按钮显示 "请选择支付方式" 并且为禁用状态。 | |
| 2.2 | **金额输入** | 1. 点击金额输入框。 <br> 2. 输入数字 "250"。 <br> 3. 清空输入框。 | 1. 输入框获得焦点时有高亮边框。 <br> 2. 支付按钮文本更新为 "确认支付 ¥250.00"。 <br> 3. 清空后，按钮文本变为 "请输入有效金额" 并被禁用。| |
| 2.3 | **支付方式选择** | 1. 点击 "微信支付"。 <br> 2. 点击 "支付宝"。 | 1. "微信支付" 卡片出现选中样式（边框变色）。 <br> 2. "支付宝" 卡片被选中，同时 "微信支付" 的选中样式消失。 | |
| 2.4 | **支付按钮可用性**| 1. 输入有效金额。 <br> 2. 选择一种支付方式。 | 1. 按钮变为可用状态。 | |
| 2.5 | **模拟支付流程** | 1. 输入金额并选择支付方式。<br> 2. 点击 "确认支付" 按钮。 | 1. 出现半透明的遮罩层和弹窗。 <br> 2. 弹窗中首先显示加载动画和 "正在创建安全支付链接..."。<br> 3. 约2秒后，弹窗内容变为成功或失败的图标和提示信息。<br> 4. 再过3秒后，弹窗自动消失。 | |
| 2.6 | **支付失败流程** | (重复测试2.5，直到出现失败情况) | 弹窗显示错误图标和 "支付失败，请稍后重试。" 的提示。| |
| 2.7 | **支付成功流程** | (重复测试2.5，直到出现成功情况) | 弹窗显示成功图标和 "支付成功！感谢您的惠顾。" 的提示。| |

---

## 验收结论

所有测试项均通过后，可认为该支付网页前端部分已完成开发，并符合验收标准。

**最终验收状态**: ________________ (通过 / 不通过)

**验收人**: ________________

**日期**: ________________ 