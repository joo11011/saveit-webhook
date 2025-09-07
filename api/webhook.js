module.exports = (req, res) => {
try {
// Health check
if (req.method !== 'POST') {
return res.status(200).json({ message: '✅ Webhook is alive!' });
}
const intent = req.body?.queryResult?.intent?.displayName || '';
let reply = 'آسف، مش قادر أفهمك. ممكن تعيد سؤالك؟';

switch (intent) {
  case 'Default Welcome Intent':
    reply = '👋 أهلا! أنا SaveIt، مساعدك المالي. إزاي أقدر أساعدك النهاردة؟';
    break;
  case 'ExpenseTracking':
    reply = '📊 تقدر تسجل مصاريفك هنا، وتابعها دوريًا علشان تعرف بتصرف إزاي.';
    break;
  case 'Saving Tips':
    reply = '💡 خصص 20% من دخلك للادخار وابدأ بمبالغ صغيرة منتظمة.';
    break;
  case 'BudgetPlanning':
    reply = '📝 استخدم قاعدة 50/30/20: 50% احتياجات، 30% رغبات، 20% ادخار.';
    break;
  case 'DebtManagement':
    reply = '💳 سدد الديون ذات الفائدة العالية أولًا، واعمل خطة سداد تدريجي.';
    break;
  case 'EmergencyFund':
    reply = '🚑 كوّن صندوق طوارئ يغطي 3–6 شهور من المصاريف الأساسية.';
    break;
  case 'InvestingBasics':
    reply = '📈 ابدأ باستثمارات طويلة الأجل منخفضة المخاطر مثل صناديق المؤشرات.';
    break;
  default:
    reply = 'آسف، مش قادر أفهمك. ممكن تعيد سؤالك؟';
}

return res.status(200).json({ fulfillmentText: reply });
} catch (e) {
console.error(e);
return res.status(500).json({ error: e.message || 'Internal error' });
}
};