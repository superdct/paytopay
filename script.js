document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const payButton = document.getElementById('pay-button');
    const methodCards = document.querySelectorAll('.method-card');
    const statusOverlay = document.getElementById('status-overlay');
    const statusModal = document.querySelector('.status-modal');
    const loader = document.getElementById('loader');
    const successIcon = document.getElementById('success-icon');
    const errorIcon = document.getElementById('error-icon');
    const statusMessage = document.getElementById('status-message');

    let selectedMethod = null;

    // 更新支付按钮的文本
    function updatePayButtonText() {
        const amount = parseFloat(amountInput.value).toFixed(2);
        if (isNaN(amount) || amount <= 0) {
            payButton.textContent = '请输入有效金额';
            payButton.disabled = true;
        } else if (!selectedMethod) {
            payButton.textContent = '请选择支付方式';
            payButton.disabled = true;
        } else {
            payButton.textContent = `确认支付 ¥${amount}`;
            payButton.disabled = false;
        }
    }

    // 处理支付方式选择
    methodCards.forEach(card => {
        card.addEventListener('click', () => {
            methodCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedMethod = card.dataset.method;
            updatePayButtonText();
        });
    });

    // 监听金额输入
    amountInput.addEventListener('input', updatePayButtonText);

    // 显示状态弹窗
    function showStatusModal(state, message) {
        statusOverlay.classList.remove('hidden');
        
        // Hide all icons first
        loader.classList.add('hidden');
        successIcon.classList.add('hidden');
        errorIcon.classList.add('hidden');

        if (state === 'loading') {
            loader.classList.remove('hidden');
        } else if (state === 'success') {
            successIcon.classList.remove('hidden');
        } else if (state === 'error') {
            errorIcon.classList.remove('hidden');
        }
        
        statusMessage.textContent = message;
    }

    // 隐藏状态弹窗
    function hideStatusModal() {
        statusOverlay.classList.add('hidden');
    }

    // 模拟支付流程
    function processPayment() {
        const amount = parseFloat(amountInput.value);
        
        console.log(`正在请求支付...`);
        console.log(`金额: ${amount}`);
        console.log(`方式: ${selectedMethod}`);

        showStatusModal('loading', '正在创建安全支付链接...');

        // --- 模拟后端API调用 ---
        // 在真实场景中，这里会使用 fetch() 向你的后端发送请求
        // fetch('/api/create-payment', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ amount, method: selectedMethod })
        // })
        // .then(response => response.json())
        // .then(data => { ... })
        // .catch(error => { ... });
        
        setTimeout(() => {
            // 模拟一个随机成功或失败的结果
            const isSuccess = Math.random() > 0.2; // 80% 成功率

            if (isSuccess) {
                console.log('支付成功');
                showStatusModal('success', '支付成功！感谢您的惠顾。');
                // 真实场景：后端会返回支付二维码URL或重定向到支付网关
                // window.location.href = data.paymentUrl;
            } else {
                console.error('支付失败');
                showStatusModal('error', '支付失败，请稍后重试。');
            }

            // 3秒后自动关闭弹窗
            setTimeout(hideStatusModal, 3000);

        }, 2000); // 模拟2秒的网络延迟
    }

    // 点击支付按钮
    payButton.addEventListener('click', () => {
        if (!payButton.disabled) {
            processPayment();
        }
    });

    // 初始化按钮状态
    updatePayButtonText();
}); 